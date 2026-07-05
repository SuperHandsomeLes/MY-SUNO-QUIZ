import React, { useState, useEffect, useRef } from 'react';
import { initializeApp } from 'firebase/app';
import { 
  getFirestore, doc, setDoc, getDoc, collection, 
  onSnapshot, updateDoc, deleteDoc, writeBatch 
} from 'firebase/firestore';
import { 
  getAuth, 
  signInAnonymously, 
  signInWithCustomToken, 
  onAuthStateChanged 
} from 'firebase/auth';

// ----------------------------------------------------------------------
// CONFIGURATION & INITIALIZATION
// ----------------------------------------------------------------------
// Kod penyelamat: Jika Vercel tak jumpa __firebase_config, ia guna mockup dan takkan crash!
const firebaseConfig = typeof __firebase_config !== 'undefined' 
  ? JSON.parse(__firebase_config) 
  : {
      apiKey: "MOCK_API_KEY",
      authDomain: "mock-suno.firebaseapp.com",
      projectId: "mock-suno",
      storageBucket: "mock-suno.appspot.com",
      messagingSenderId: "123456789",
      appId: "1:1234:web:1234"
    };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const appId = typeof __app_id !== 'undefined' ? __app_id : 'suno-beats-arena';

// 15 Soalan Kuiz Pengetahuan Suno AI dengan Emoji Khas
const KUIZ_SOALAN = [
  {
    id: 1,
    q: "Apakah fungsi utama Suno AI? 🤖🎤",
    options: [
      "A. Menjana muzik dan lagu menggunakan kecerdasan buatan",
      "B. Mengedit rakaman audio secara manual",
      "C. Mengajar teori muzik secara interaktif"
    ],
    ans: 0
  },
  {
    id: 2,
    q: "Apakah input paling asas yang diperlukan untuk menjana lagu dalam Suno AI? 📝🎹",
    options: [
      "A. Lirik atau arahan teks (prompt)",
      "B. Rakaman suara pengguna",
      "C. Fail nota muzik MIDI"
    ],
    ans: 0
  },
  {
    id: 3,
    q: "Dalam Suno AI, mod 'Custom Mode' membolehkan pengguna melakukan apa? 🛠️🎼",
    options: [
      "A. Memasukkan lirik sendiri dan memilih genre secara spesifik",
      "B. Mengubah kod atur cara sistem AI",
      "C. Menjual lagu terus ke Spotify"
    ],
    ans: 0
  },
  {
    id: 4,
    q: "Apakah gaya atau genre muzik yang BOLEH dijana oleh Suno AI? 🎸🎙️",
    options: [
      "A. Hanya muzik klasikal barat",
      "B. Pelbagai genre seperti Rock, Pop, Hip-Hop, dan nasyid moden",
      "C. Hanya bunyi instrumen tanpa vokal"
    ],
    ans: 1
  },
  {
    id: 5,
    q: "Suno AI boleh menjana lagu dalam bahasa apa? 🌐🗣️",
    options: [
      "A. Bahasa Inggeris sahaja",
      "B. Bahasa Melayu dan pelbagai bahasa dunia lain",
      "C. Bahasa pengaturcaraan komputer sahaja"
    ],
    ans: 1
  },
  {
    id: 6,
    q: "Apakah pilihan 'Instrumental' buat apabila diaktifkan dalam Suno AI? 🎻❌",
    options: [
      "A. Menjana lagu tanpa sebarang vokal atau lirik (bunyi sahaja)",
      "B. Menambah vokal opera berkualiti tinggi",
      "C. Memadamkan bunyi dram sahaja"
    ],
    ans: 0
  },
  {
    id: 7,
    q: "Fungsi 'Extend' dalam Suno AI digunakan untuk apa? ⏳➕",
    options: [
      "A. Memanjangkan durasi masa lagu yang sedia ada",
      "B. Memadamkan bahagian korus lagu",
      "C. Mengongsikan lagu ke media sosial"
    ],
    ans: 0
  },
  {
    id: 8,
    q: "Bagaimanakah struktur prom (prompt) yang baik untuk genre dalam Suno AI? 🎛️⚡",
    options: [
      "A. Meletakkan nama penyanyi artis terkenal secara langsung",
      "B. Menggunakan kata kunci emosi, instrumen, dan tempo (cth: 'fast melodic synthpop')",
      "C. Menulis karangan panjang menceritakan sejarah muzik"
    ],
    ans: 1
  },
  {
    id: 9,
    q: "Di manakah pengguna boleh mengakses dan mencuba Suno AI secara rasmi? 💻🔍",
    options: [
      "A. Membeli perisian CD-ROM di kedai",
      "B. Melalui laman web rasmi suno.com atau aplikasi Discord",
      "C. Muat turun dari sistem operasi Windows 95"
    ],
    ans: 1
  },
  {
    id: 10,
    q: "Apakah perbezaan akaun percuma (Free) dan akaun berbayar (Pro/Premier) di Suno? 🪙💎",
    options: [
      "A. Akaun percuma tidak boleh mendengar lagu langsung",
      "B. Akaun berbayar mendapat kredit harian lebih banyak dan hak komersial untuk lagu",
      "C. Akaun berbayar menukar suara AI menjadi manusia betul"
    ],
    ans: 1
  },
  {
    id: 11,
    q: "Apakah maksud 'V3' atau 'V4' dalam pilihan model Suno AI? 🚀⚙️",
    options: [
      "A. Versi enjin AI yang menentukan kualiti audio dan kreativiti lagu",
      "B. Jumlah minit maksimum lagu boleh dijana",
      "C. Gred kelajuan muat turun lagu"
    ],
    ans: 0
  },
  {
    id: 12,
    q: "Bolehkah kita memuat naik (upload) fail audio sendiri untuk dijadikan asas lagu di Suno AI? 📂🔄",
    options: [
      "A. Boleh, menggunakan ciri 'Upload Audio' untuk sambung atau variasikan lagu",
      "B. Tidak boleh langsung, sistem hanya terima teks",
      "C. Hanya boleh muat naik fail video MP4 berdurasi 1 jam"
    ],
    ans: 0
  },
  {
    id: 13,
    q: "Ciri 'Reuse Prompt' berfungsi untuk memudahkan pengguna apa? ♻️✨",
    options: [
      "A. Menyalin semula arahan lirik dan genre daripada lagu kegemaran sebelumnya",
      "B. Memadamkan lagu lama yang tidak menjadi",
      "C. Menghantar e-mel aduan kepada pembangun Suno"
    ],
    ans: 0
  },
  {
    id: 14,
    q: "Apakah elemen utama yang dihasilkan oleh Suno AI selain daripada muzik latar? 🎤⭐",
    options: [
      "A. Video muzik animasi 3D",
      "B. Vokal suara kecerdasan buatan yang menyanyi mengikut lirik",
      "C. Slaid pembentangan PowerPoint"
    ],
    ans: 1
  },
  {
    id: 15,
    q: "Apakah amalan terbaik sekiranya hasil jana lagu pertama kurang memuaskan? 🔄🤔",
    options: [
      "A. Menyerah kalah dan memadam akaun",
      "B. Menapis prompt genre, mengubah lirik, atau menekan 'Remix' untuk variasi baru",
      "C. Membiarkan komputer hidup selama 3 hari tanpa henti"
    ],
    ans: 1
  }
];

export default function App() {
  const [user, setUser] = useState(null);
  const [gameState, setGameState] = useState('menu'); // 'menu', 'lobby', 'quiz', 'leaderboard'
  const [role, setRole] = useState(null); // 'host' atau 'player'
  const [roomId, setRoomId] = useState('');
  const [playerName, setNameInput] = useState('');
  const [playersList, setPlayersList] = useState([]);
  const [sessionData, setSessionData] = useState(null);
  const [selectedAns, setSelectedAns] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const audioCtxRef = useRef(null);

  // LOGIK AUDIO RETRO SYNTH
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
        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, ctx.currentTime);
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
        osc.start(); osc.stop(ctx.currentTime + 0.1);
      } else if (type === 'correct') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, ctx.currentTime);
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
        osc.start(); osc.stop(ctx.currentTime + 0.3);
      } else if (type === 'wrong') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(80, ctx.currentTime + 0.3);
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
        osc.start(); osc.stop(ctx.currentTime + 0.3);
      }
    } catch (e) {
      console.log('Audio Context tidak disokong oleh browser.');
    }
  };

  // SIGN IN FIREBASE SECARA ANONIM
  useEffect(() => {
    onAuthStateChanged(auth, (usr) => {
      if (usr) {
        setUser(usr);
      } else {
        signInAnonymously(auth).catch(err => console.error("Ralat log masuk anonim:", err));
      }
    });
  }, []);

  // DAFTAR DAN KAWALAN REAL-TIME STREAM BILIK
  useEffect(() => {
    if (!roomId) return;
    const roomRef = doc(db, 'apps', appId, 'sessions', roomId);
    const unsub = onSnapshot(roomRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.data();
        setSessionData(data);
        setGameState(data.status);
      } else {
        if (role === 'player') {
          alert('Bilik permainan telah dipadam oleh Host!');
          resetToMenu();
        }
      }
    });
    return () => unsub();
  }, [roomId, role]);

  // STREAM SENARAI PEMAIN REAL-TIME
  useEffect(() => {
    if (!roomId) return;
    const playersRef = doc(db, 'apps', appId, 'sessions', roomId, 'players', 'list');
    const unsub = onSnapshot(playersRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.data();
        const list = Object.keys(data).map(uid => ({ uid, ...data[uid] }));
        setPlayersList(list.sort((a,b) => b.score - a.score));
      }
    });
    return () => unsub();
  }, [roomId]);

  // RESET PERMAINAN KE MENU UTAMA
  const resetToMenu = () => {
    setGameState('menu');
    setRole(null);
    setRoomId('');
    setPlayersList([]);
    setSessionData(null);
    setSelectedAns(null);
    setHasAnswered(false);
  };

  // HOST: CIPTA BILIK KUIZ BARU
  const createRoom = async () => {
    playSynthSound('click');
    const newRoomId = Math.floor(100000 + Math.random() * 900000).toString();
    setRoomId(newRoomId);
    setRole('host');

    const roomRef = doc(db, 'apps', appId, 'sessions', newRoomId);
    await setDoc(roomRef, {
      status: 'lobby',
      currentQuestion: 0,
      totalQuestions: KUIZ_SOALAN.length,
      createdAt: new Date().toISOString()
    });

    const playersRef = doc(db, 'apps', appId, 'sessions', newRoomId, 'players', 'list');
    await setDoc(playersRef, {});
  };

  // PLAYER: MASUK KE BILIK KUIZ
  const joinRoom = async (e) => {
    e.preventDefault();
    playSynthSound('click');
    if (!roomId.trim() || !playerName.trim()) return alert('Sila isi Kod Bilik dan Nama Anda!');

    const roomRef = doc(db, 'apps', appId, 'sessions', roomId.trim());
    const roomSnap = await getDoc(roomRef);

    if (!roomSnap.exists()) return alert('Kod bilik tidak wujud! Sila periksa semula.');
    setRole('player');

    const playersRef = doc(db, 'apps', appId, 'sessions', roomId.trim(), 'players', 'list');
    await setDoc(playersRef, {
      [user.uid]: { name: playerName, score: 0 }
    }, { merge: true });
  };

  // HOST: MULAKAN KUIZ SEKARANG
  const startQuiz = async () => {
    playSynthSound('click');
    const roomRef = doc(db, 'apps', appId, 'sessions', roomId);
    await updateDoc(roomRef, { status: 'quiz', currentQuestion: 0 });
  };

  // PLAYER: HANTAR JAWAPAN
  const submitAnswer = async (index) => {
    if (hasAnswered) return;
    setSelectedAns(index);
    setHasAnswered(true);

    const isCorrect = index === KUIZ_SOALAN[sessionData.currentQuestion].ans;
    if (isCorrect) {
      playSynthSound('correct');
      const playersRef = doc(db, 'apps', appId, 'sessions', roomId, 'players', 'list');
      const currentScore = playersList.find(p => p.uid === user.uid)?.score || 0;
      await updateDoc(playersRef, {
        [`${user.uid}.score`]: currentScore + 100
      });
    } else {
      playSynthSound('wrong');
    }
  };

  // HOST: LANJUTKAN KE SOALAN SETERUSNYA / LEADERBOARD
  const nextQuestion = async () => {
    playSynthSound('click');
    const nextIdx = sessionData.currentQuestion + 1;
    const roomRef = doc(db, 'apps', appId, 'sessions', roomId);

    if (nextIdx < KUIZ_SOALAN.length) {
      setHasAnswered(false);
      setSelectedAns(null);
      await updateDoc(roomRef, { currentQuestion: nextIdx });
    } else {
      await updateDoc(roomRef, { status: 'leaderboard' });
    }
  };

  // HOST: MAIN SEMULA KUIZ (RESET SEMUA DATA)
  const restartQuiz = async () => {
    playSynthSound('click');
    const roomRef = doc(db, 'apps', appId, 'sessions', roomId);
    await updateDoc(roomRef, { status: 'lobby', currentQuestion: 0 });

    const batch = writeBatch(db);
    const playersRef = doc(db, 'apps', appId, 'sessions', roomId, 'players', 'list');
    playersList.forEach(p => {
      batch.update(playersRef, { [`${p.uid}.score`]: 0 });
    });
    await batch.commit();
    setHasAnswered(false);
    setSelectedAns(null);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-between p-4 md:p-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-950 via-slate-950 to-black text-slate-100 overflow-x-hidden select-none">
      
      {/* HEADER UTAMA */}
      <header className="w-full max-w-4xl text-center py-6">
        <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-400 tracking-wider font-mono animate-pulse uppercase">
          SUNO BEATS ARENA 🎮
        </h1>
        <p className="text-xs md:text-sm font-mono text-slate-400 tracking-widest mt-2 uppercase">Sesi Gamifikasi Pendidikan Abad Ke-21</p>
      </header>

      {/* CORE ARENA DISPLAY */}
      <main className="w-full max-w-4xl bg-slate-900/40 backdrop-blur-xl border border-purple-500/10 rounded-3xl p-6 md:p-8 shadow-2xl shadow-purple-950/20 my-auto">
        
        {/* GAMING MENU UTAMA */}
        {gameState === 'menu' && (
          <div className="space-y-8 py-4">
            <p className="text-sm md:text-base text-slate-300 max-w-xl mx-auto font-medium">
              Selamat datang ke Arena Kuiz Interaktif Suno AI! Sila pilih peranan anda di bawah untuk memulakan sesi pembelajaran digital secara real-time.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto pt-4">
              {/* BUTTON HOST SEAT */}
              <button
                onClick={createRoom}
                className="p-6 bg-gradient-to-br from-purple-900/30 to-indigo-950/40 border border-purple-500/20 rounded-2xl hover:border-purple-400/50 hover:shadow-xl hover:shadow-purple-950/40 transition-all text-left group"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">👑</div>
                <h3 className="font-mono font-black text-lg text-purple-300 tracking-wide uppercase">MASUK SEBAGAI HOST</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">Sesuai untuk Guru / Penganjur. Bina bilik baharu, paparkan soalan di skrin besar, kawal tempo permainan dan papar pemenang.</p>
              </button>

              {/* FORM PLAYER ENTRY */}
              <div className="p-6 bg-gradient-to-br from-pink-900/20 to-rose-950/30 border border-pink-500/20 rounded-2xl text-left">
                <div className="text-3xl mb-3">🕹️</div>
                <h3 className="font-mono font-black text-lg text-pink-300 tracking-wide uppercase">MASUK SEBAGAI PEMAIN</h3>
                <form onSubmit={joinRoom} className="space-y-3 mt-4">
                  <input
                    type="text"
                    maxLength={20}
                    placeholder="Masukkan Nama Anda..."
                    value={playerName}
                    onChange={(e) => setNameInput(e.target.value)}
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2 text-sm text-pink-200 placeholder-slate-600 focus:outline-none focus:border-pink-500 transition-colors font-mono"
                  />
                  <input
                    type="text"
                    maxLength={6}
                    placeholder="Kod Bilik (6 Digit)..."
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2 text-sm text-pink-200 placeholder-slate-600 focus:outline-none focus:border-pink-500 transition-colors font-mono tracking-widest text-center font-bold"
                  />
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white font-mono font-bold text-xs uppercase py-3 rounded-xl shadow-lg shadow-pink-950/30 transition-all tracking-wider"
                  >
                    Sertai Arena Game ⚡
                  </button>
                </form>
              </div>
            </div>

            {/* PREVIEW KANDUNGAN SOALAN */}
            <div className="max-w-xl mx-auto bg-slate-950/50 border border-slate-900 rounded-2xl p-4 mt-6">
              <div className="text-xs font-mono text-amber-500 tracking-widest uppercase mb-2 flex items-center justify-between">
                <span>📋 Senarai Modul Soalan Terbina</span>
                <span className="bg-amber-950 text-amber-400 px-2 py-0.5 rounded text-[10px] font-bold">15 SOALAN</span>
              </div>
              <div className="text-left text-xs text-slate-500 max-h-32 overflow-y-auto space-y-1.5 pr-2 font-mono divide-y divide-slate-900">
                {KUIZ_SOALAN.map(s => (
                  <div key={s.id} className="pt-1.5 first:pt-0">
                    <span className="text-purple-400 font-bold">#{s.id}</span> {s.q}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* LOBBY RUANG MENUNGGU */}
        {gameState === 'lobby' && (
          <div className="text-center py-6 space-y-6">
            <div className="inline-block bg-purple-950/40 border border-purple-500/30 rounded-2xl px-6 py-4">
              <span className="text-xs font-mono text-purple-400 tracking-widest block uppercase mb-1">KOD BILIK PERMAINAN</span>
              <span className="text-4xl md:text-5xl font-mono font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 tracking-widest">{roomId}</span>
            </div>

            <p className="text-sm font-mono text-slate-400 animate-pulse">Menunggu pemain lain menyertai arena...</p>

            {/* PLAYERS LIST GRID */}
            <div className="max-w-xl mx-auto bg-slate-950/60 rounded-2xl p-6 border border-slate-900">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest text-left mb-3 flex justify-between items-center">
                <span>SENARAI PEMAIN READY:</span>
                <span className="bg-slate-900 px-2 py-0.5 rounded text-purple-400 font-bold">{playersList.length} Orang</span>
              </h4>
              {playersList.length === 0 ? (
                <div className="text-xs font-mono text-slate-600 py-8 text-center">Tiada pemain dikesan lagi...</div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {playersList.map((p, idx) => (
                    <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-sm font-mono text-left text-slate-300 truncate flex items-center gap-2">
                      <span className="text-pink-500 text-xs">⚡</span> {p.name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* KAWALAN HOST UNTUK START */}
            <div className="pt-4 flex justify-center gap-4">
              <button
                onClick={resetToMenu}
                className="bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-400 font-mono text-xs uppercase px-5 py-3 rounded-xl transition-all"
              >
                Batal Sesi Laman
              </button>
              {role === 'host' && (
                <button
                  onClick={startQuiz}
                  disabled={playersList.length === 0}
                  className={`font-mono font-black text-xs uppercase px-8 py-3 rounded-xl shadow-lg transition-all tracking-wider ${
                    playersList.length === 0 
                      ? 'bg-slate-800 text-slate-500 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-purple-950/40'
                  }`}
                >
                  🚀 Mulakan Kuiz Sekarang 🔥
                </button>
              )}
            </div>
          </div>
        )}

        {/* ARENA SOALAN KUIZ BERJALAN */}
        {gameState === 'quiz' && sessionData && (
          <div className="space-y-6 md:space-y-8 py-2">
            
            {/* STATUS PANEL */}
            <div className="flex justify-between items-center border-b border-slate-800 pb-4 font-mono text-xs text-slate-400">
              <span className="bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-900 text-purple-400 uppercase font-bold tracking-wider">
                Soalan: {sessionData.currentQuestion + 1} / {sessionData.totalQuestions}
              </span>
              <span className="bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-900 uppercase font-bold text-amber-500">
                KOD BILIK: {roomId}
              </span>
            </div>

            {/* PAPARAN PAPAR SOALAN UTAMA */}
            <div className="py-6 md:py-8 text-center px-2">
              <h2 className="text-xl md:text-3xl font-extrabold text-slate-100 leading-relaxed font-mono">
                {KUIZ_SOALAN[sessionData.currentQuestion].q}
              </h2>
            </div>

            {/* MOD HOST: LIAR LIVE SCOREBOARD & ACTIONS */}
            {role === 'host' ? (
              <div className="space-y-6">
                <div className="bg-slate-950/80 rounded-2xl p-4 border border-slate-900 max-w-xl mx-auto text-left">
                  <h4 className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-3">🔑 Jawapan Betul Sesi Ini:</h4>
                  <p className="text-sm font-mono text-emerald-400 font-bold bg-emerald-950/30 border border-emerald-900/50 rounded-xl p-3">
                    {KUIZ_SOALAN[sessionData.currentQuestion].options[KUIZ_SOALAN[sessionData.currentQuestion].ans]}
                  </p>
                </div>

                <div className="flex justify-center">
                  <button
                    onClick={nextQuestion}
                    className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-mono font-black text-sm uppercase px-10 py-4 rounded-xl shadow-xl shadow-purple-950/40 transition-all tracking-widest"
                  >
                    {sessionData.currentQuestion + 1 === sessionData.totalQuestions ? '🏁 TAMATKAN KUIZ ARENA' : 'SOALAN SETERUSNYA ➡️'}
                  </button>
                </div>
              </div>
            ) : (
              /* MOD PLAYER: BUTTON PILIHAN JAWAPAN JAWAB */
              <div className="grid grid-cols-1 gap-3 max-w-2xl mx-auto pt-2">
                {KUIZ_SOALAN[sessionData.currentQuestion].options.map((option, idx) => {
                  let btnStyle = "bg-slate-950 hover:bg-slate-900 border-slate-800 text-slate-300";
                  if (hasAnswered) {
                    if (idx === selectedAns) {
                      const isCorrect = idx === KUIZ_SOALAN[sessionData.currentQuestion].ans;
                      btnStyle = isCorrect 
                        ? "bg-emerald-950/80 border-emerald-500 text-emerald-300 font-bold" 
                        : "bg-rose-950/80 border-rose-500 text-rose-300 font-bold";
                    } else {
                      btnStyle = "bg-slate-950/20 border-slate-950 text-slate-600 cursor-not-allowed";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      disabled={hasAnswered}
                      onClick={() => submitAnswer(idx)}
                      className={`w-full text-left p-4 md:p-5 border rounded-2xl text-sm md:text-base font-mono transition-all duration-200 flex items-center justify-between group ${btnStyle}`}
                    >
                      <span>{option}</span>
                      {!hasAnswered && (
                        <span className="opacity-0 group-hover:opacity-100 text-pink-500 text-xs transition-opacity uppercase font-bold tracking-widest font-sans">PILIH ⚡</span>
                      )}
                    </button>
                  );
                })}

                {hasAnswered && (
                  <div className="text-center pt-4 animate-bounce">
                    <p className="text-xs font-mono text-purple-400 uppercase tracking-widest">Jawapan Dikunci! Sila lihat skrin besar Host utama...</p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* PAPARAN LEADERBOARD KEPUTUSAN AKHIR */}
        {gameState === 'leaderboard' && (
          <div className="space-y-6 md:space-y-8 text-center py-4">
            <div>
              <div className="text-4xl md:text-5xl mb-2 animate-bounce">🏆</div>
              <h2 className="text-2xl md:text-4xl font-mono font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-500 tracking-wider uppercase">
                ARENA LEADERBOARD
              </h2>
              <p className="text-xs font-mono text-slate-400 tracking-widest mt-1 uppercase">Keputusan Rasmi Kejuaraan Permainan</p>
            </div>

            {/* SCOREBOARD TABLE PODIUM */}
            <div className="max-w-xl mx-auto bg-slate-950/80 rounded-2xl border border-slate-900 p-4 md:p-6 text-left">
              <div className="space-y-2">
                {playersList.length === 0 ? (
                  <div className="text-xs text-center font-mono text-slate-600 py-6">Tiada rekod skor pemain ditemui.</div>
                ) : (
                  playersList.map((player, idx) => {
                    let podiumBadge = `text-slate-500 font-bold`;
                    let bgRow = `bg-slate-900/40 border-slate-900/60`;
                    if (idx === 0) { podiumBadge = 'text-yellow-400 font-black'; bgRow = 'bg-yellow-950/10 border-yellow-500/20'; }
                    else if (idx === 1) { podiumBadge = 'text-slate-300 font-black'; bgRow = 'bg-slate-800/20 border-slate-700/20'; }
                    else if (idx === 2) { podiumBadge = 'text-amber-600 font-black'; bgRow = 'bg-amber-950/10 border-amber-900/20'; }

                    return (
                      <div key={idx} className={`flex justify-between items-center p-3 md:p-4 border rounded-xl font-mono text-sm transition-transform hover:translate-x-1 ${bgRow}`}>
                        <div className="flex items-center gap-3 truncate">
                          <span className={`w-6 text-center ${podiumBadge}`}>
                            {idx === 0 ? '👑' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : `#${idx + 1}`}
                          </span>
                          <span className="text-slate-200 font-bold truncate">{player.name}</span>
                        </div>
                        <span className="text-pink-400 font-black bg-pink-950/20 px-3 py-1 rounded-lg border border-pink-950 text-xs md:text-sm">
                          {player.score} PTS
                        </span>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* RETRO CONTROL ACTIONS */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
              <button
                onClick={resetToMenu}
                className="bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-300 font-bold py-3 px-6 rounded-xl transition-all font-mono text-xs uppercase"
              >
                🏠 Kembali ke Menu Utama
              </button>
              {role === 'host' && (
                <button
                  onClick={restartQuiz}
                  className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-500 hover:to-indigo-500 text-white font-black py-3 px-6 rounded-xl shadow-lg transition-all font-mono text-xs uppercase tracking-wider"
                >
                  🔄 Main Semula Kuiz 🎮
                </button>
              )}
            </div>

          </div>
        )}

      </main>

      {/* FOOTER */}
      <footer className="w-full max-w-6xl text-center py-6 mt-10 border-t border-purple-950/50 text-slate-500 font-mono text-xs">
        <p>© 2026 Suno Beats Arena - Sesi Gamifikasi Pendidikan Abad Ke-21. 🎨🎮</p>
      </footer>

    </div>
  );
}
