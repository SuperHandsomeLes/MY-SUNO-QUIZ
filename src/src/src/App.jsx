import React, { useState, useEffect, useRef } from 'react';
import { initializeApp } from 'firebase/app';
import { 
  getFirestore, doc, setDoc, getDoc, collection, 
  onSnapshot, updateDoc, deleteDoc, writeBatch 
} from 'firebase/firestore';
import { 
  getAuth, 
  signInAnonymously, 
  onAuthStateChanged 
} from 'firebase/auth';

// ----------------------------------------------------------------------
// CONFIGURATION & INITIALIZATION (DENGAN PERTAHANAN RALAT)
// ----------------------------------------------------------------------
let firebaseConfig = {
  apiKey: "MOCK_API_KEY",
  authDomain: "mock-suno.firebaseapp.com",
  projectId: "mock-suno",
  storageBucket: "mock-suno.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:1234:web:1234"
};

// Cuba baca config jika ada, kalau takda guna mock di atas supaya web tak crash
try {
  if (typeof __firebase_config !== 'undefined') {
    firebaseConfig = JSON.parse(__firebase_config);
  }
} catch (e) {
  console.log("Menggunakan mod mockup/simulasi kerana konfigurasi Firebase belum sedia.");
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const appId = typeof __app_id !== 'undefined' ? __app_id : 'suno-beats-arena';

// 15 Soalan Kuiz Pengetahuan Suno AI dengan Emoji Khas
const KUIZ_SOALAN = [
  { id: 1, q: "Apakah fungsi utama Suno AI? 🤖🎤", options: ["A. Menjana muzik dan lagu menggunakan kecerdasan buatan", "B. Mengedit rakaman audio secara manual", "C. Mengajar teori muzik secara interaktif"], ans: 0 },
  { id: 2, q: "Apakah input paling asas yang diperlukan untuk menjana lagu dalam Suno AI? 📝🎹", options: ["A. Lirik atau arahan teks (prompt)", "B. Rakaman suara pengguna", "C. Fail nota muzik MIDI"], ans: 0 },
  { id: 3, q: "Dalam Suno AI, mod 'Custom Mode' membolehkan pengguna melakukan apa? 🛠️🎼", options: ["A. Memasukkan lirik sendiri dan memilih genre secara spesifik", "B. Mengubah kod atur cara sistem AI", "C. Menjual lagu terus ke Spotify"], ans: 0 },
  { id: 4, q: "Apakah gaya atau genre muzik yang BOLEH dijana oleh Suno AI? 🎸🎙️", options: ["A. Hanya muzik klasikal barat", "B. Pelbagai genre seperti Rock, Pop, Hip-Hop, dan nasyid moden", "C. Hanya bunyi instrumen tanpa vokal"], ans: 1 },
  { id: 5, q: "Suno AI boleh menjana lagu dalam bahasa apa? 🌐🗣️", options: ["A. Bahasa Inggeris sahaja", "B. Bahasa Melayu dan pelbagai bahasa dunia lain", "C. Bahasa pengaturcaraan komputer sahaja"], ans: 1 },
  { id: 6, q: "Apakah pilihan 'Instrumental' buat apabila diaktifkan dalam Suno AI? 🎻❌", options: ["A. Menjana lagu tanpa sebarang vokal atau lirik (bunyi sahaja)", "B. Menambah vokal opera berkualiti tinggi", "C. Memadamkan bunyi dram sahaja"], ans: 0 },
  { id: 7, q: "Fungsi 'Extend' dalam Suno AI digunakan untuk apa? ⏳➕", options: ["A. Memanjangkan durasi masa lagu yang sedia ada", "B. Memadamkan bahagian korus lagu", "C. Mengongsikan lagu ke media sosial"], ans: 0 },
  { id: 8, q: "Bagaimanakah struktur prom (prompt) yang baik untuk genre dalam Suno AI? 🎛️⚡", options: ["A. Meletakkan nama penyanyi artis terkenal secara langsung", "B. Menggunakan kata kunci emosi, instrumen, dan tempo (cth: 'fast melodic synthpop')", "C. Menusik karangan panjang menceritakan sejarah muzik"], ans: 1 },
  { id: 9, q: "Di manakah pengguna boleh mengakses dan mencuba Suno AI secara rasmi? 💻🔍", options: ["A. Membeli perisian CD-ROM di kedai", "B. Melalui laman web rasmi suno.com atau aplikasi Discord", "C. Muat turun dari sistem operasi Windows 95"], ans: 1 },
  { id: 10, q: "Apakah perbezaan akaun percuma (Free) dan akaun berbayar (Pro/Premier) di Suno? 🪙💎", options: ["A. Akaun percuma tidak boleh mendengar lagu langsung", "B. Akaun berbayar mendapat kredit harian lebih banyak dan hak komersial untuk lagu", "C. Akaun berbayar menukar suara AI menjadi manusia betul"], ans: 1 },
  { id: 11, q: "Apakah maksud 'V3' atau 'V4' dalam pilihan model Suno AI? 🚀⚙️", options: ["A. Versi enjin AI yang menentukan kualiti audio dan kreativiti lagu", "B. Jumlah minit maksimum lagu boleh dijana", "C. Gred kelajuan muat turun lagu"], ans: 0 },
  { id: 12, q: "Bolehkah kita memuat naik (upload) fail audio sendiri untuk dijadikan asas lagu di Suno AI? 📂🔄", options: ["A. Boleh, menggunakan ciri 'Upload Audio' untuk sambung atau variasikan lagu", "B. Tidak boleh langsung, sistem hanya terima teks", "C. Hanya boleh muat naik fail video MP4 berdurasi 1 jam"], ans: 0 },
  { id: 13, q: "Ciri 'Reuse Prompt' berfungsi untuk memudahkan pengguna apa? ♻️✨", options: ["A. Menyalin semula arahan lirik dan genre daripada lagu kegemaran sebelumnya", "B. Memadamkan lagu lama yang tidak menjadi", "C. Menhantar e-mel aduan kepada pembangun Suno"], ans: 0 },
  { id: 14, q: "Apakah elemen utama yang dihasilkan oleh Suno AI selain daripada muzik latar? 🎤⭐", options: ["A. Video muzik animasi 3D", "B. Vokal suara kecerdasan buatan yang menyanyi mengikut lirik", "C. Slaid pembentangan PowerPoint"], ans: 1 },
  { id: 15, q: "Apakah amalan terbaik sekiranya hasil jana lagu pertama kurang memuaskan? 🔄🤔", options: ["A. Menyerah kalah dan memadam akaun", "B. Menapis prompt genre, mengubah lirik, atau menekan 'Remix' untuk variasi baru", "C. Membiarkan komputer hidup selama 3 hari tanpa henti"], ans: 1 }
];

export default function App() {
  const [gameState, setGameState] = useState('menu');
  const [role, setRole] = useState(null);
  const audioCtxRef = useRef(null);

  const playSynthSound = (type) => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      if (type === 'click') {
        osc.type = 'sine'; osc.frequency.setValueAtTime(400, ctx.currentTime);
        gain.gain.setValueAtTime(0.1, ctx.currentTime); gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
        osc.start(); osc.stop(ctx.currentTime + 0.1);
      }
    } catch (e) {}
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-6 bg-slate-950 text-slate-100">
      <div className="w-full max-w-4xl bg-slate-900 border border-purple-500/20 rounded-3xl p-8 shadow-2xl text-center my-auto">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-400 tracking-wider mb-2">
          SUNO BEATS ARENA 🎮
        </h1>
        <p className="text-slate-400 text-sm mb-8 uppercase tracking-widest">Sesi Gamifikasi Pendidikan Abad Ke-21</p>
        
        <div className="space-y-6 py-6">
          <p className="text-slate-300 max-w-md mx-auto text-sm">Selamat datang ke arena kuiz interaktif! Sila pilih peranan anda di bawah untuk memulakan sesi permainan.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto">
            <button onClick={() => { playSynthSound('click'); alert('Mod Host Diaktifkan! (Sistem Simulasi)') }} className="p-6 bg-gradient-to-br from-purple-900/40 to-indigo-950/50 border border-purple-500/30 rounded-2xl hover:border-purple-400 transition-all text-left">
              <div class="text-2xl mb-2">👑</div>
              <div className="font-bold text-purple-300">MASUK SEBAGAI HOST</div>
              <div className="text-xs text-slate-400 mt-1">Kawal bilik, paparkan soalan di skrin besar, dan lihat markah live.</div>
            </button>
            <button onClick={() => { playSynthSound('click'); alert('Mod Player Diaktifkan! Sila masukkan ID Bilik.') }} className="p-6 bg-gradient-to-br from-pink-900/40 to-rose-950/50 border border-pink-500/30 rounded-2xl hover:border-pink-400 transition-all text-left">
              <div class="text-2xl mb-2">🕹️</div>
              <div className="font-bold text-pink-300">MASUK SEBAGAI PEMAIN</div>
              <div className="text-xs text-slate-400 mt-1">Sertai bilik menggunakan kod, jawab soalan pantas di telefon anda.</div>
            </button>
          </div>
          <div className="mt-8 p-4 bg-slate-950 border border-slate-800 rounded-xl max-w-md mx-auto">
            <div className="text-xs text-amber-400 uppercase mb-2">📋 Pratinjau Soalan (Total: 15)</div>
            <div className="text-sm text-left text-slate-400 h-28 overflow-y-auto space-y-1 p-2 bg-black/40 rounded-lg">
              {KUIZ_SOALAN.map(s => <div key={s.id}>{s.id}. {s.q}</div>)}
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full text-center py-4 text-slate-600 text-xs mt-6">
        © 2026 Suno Beats Arena - Sesi Gamifikasi Pendidikan. 🎨
      </footer>
    </div>
  );
}
