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
const firebaseConfig = JSON.parse(__firebase_config);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const appId = typeof __app_id !== 'undefined' ? __app_id : 'suno-beats-arena';

// 15 Soalan Kuiz Pengetahuan Suno AI dengan Emoji Khhas
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
      "C. Notasi muzik penuh"
    ],
    ans: 0
  },
  {
    id: 3,
    q: "Suno AI sesuai digunakan oleh guru terutamanya untuk tujuan: 👩‍🏫✨",
    options: [
      "A. Pengayaan PdP dan kreativiti murid",
      "B. Penilaian peperiksaan bertulis",
      "C. Analisis markah automatik"
    ],
    ans: 0
  },
  {
    id: 4,
    q: "Apakah maksud “prompt” dalam konteks Suno AI? 💬💻",
    options: [
      "A. Arahan atau penerangan teks kepada AI",
      "B. Fail audio yang dimuat naik",
      "C. Skrip pengaturcaraan muzik"
    ],
    ans: 0
  },
  {
    id: 5,
    q: "Jika guru ingin lagu pendidikan yang ringkas, apakah ciri prompt yang paling sesuai? 🎯⚡",
    options: [
      "A. Arahan jelas, pendek dan spesifik",
      "B. Arahan panjang tanpa fokus",
      "C. Arahan umum tanpa tema"
    ],
    ans: 0
  },
  {
    id: 6,
    q: "Antara berikut, yang bukan kelebihan Suno AI ialah: 🛑🤔",
    options: [
      "A. Menjana lagu dengan cepat",
      "B. Membantu idea kreatif guru",
      "C. Menggantikan sepenuhnya peranan guru"
    ],
    ans: 2
  },
  {
    id: 7,
    q: "Apakah peranan genre dalam Suno AI? 🎸🕺",
    options: [
      "A. Menentukan gaya dan suasana lagu",
      "B. Menentukan panjang karangan",
      "C. Menentukan tahap kesukaran soalan"
    ],
    ans: 0
  },
  {
    id: 8,
    q: "Apakah contoh penggunaan praktikal Suno AI oleh guru di bilik darjah? 🏫🎶",
    options: [
      "A. Menghasilkan lagu topik pembelajaran untuk set induksi",
      "B. Menyediakan jadual waktu sekolah automatik",
      "C. Mengira markah peperiksaan akhir"
    ],
    ans: 0
  },
  {
    id: 9,
    q: "Jika lagu yang dijana tidak menepati kehendak, apakah tindakan terbaik? 🔄🛠️",
    options: [
      "A. Ubah prompt dan jana semula",
      "B. Padam akaun Suno AI",
      "C. Muat turun lagu tanpa perubahan"
    ],
    ans: 0
  },
  {
    id: 10,
    q: "Dari sudut etika pendidikan, guru perlu: ⚖️💡",
    options: [
      "A. Menggunakan Suno AI sebagai alat sokongan",
      "B. Menggantikan semua bahan PdP sedia ada",
      "C. Mengelakkan sepenuhnya penggunaan AI"
    ],
    ans: 0
  },
  {
    id: 11,
    q: "Apakah kesan penggunaan Suno AI dalam PdP? 📈🤩",
    options: [
      "A. Meningkatkan minat dan penglibatan murid",
      "B. Mengurangkan keperluan interaksi",
      "C. Menyukarkan pemahaman murid"
    ],
    ans: 0
  },
  {
    id: 12,
    q: "Apakah tujuan utama guru menggunakan lirik pendidikan dalam lagu Suno AI? 📚🎤",
    options: [
      "A. Memudahkan murid mengingat isi pembelajaran",
      "B. Menggantikan buku teks sepenuhnya",
      "C. Menguji kemahiran menyanyi murid"
    ],
    ans: 0
  },
  {
    id: 13,
    q: "Mengapa guru perlu menyemak lagu yang dijana oleh Suno AI? 🧐🛡️",
    options: [
      "A. Untuk memastikan kesesuaian bahasa dan nilai",
      "B. Untuk meningkatkan kelajuan AI",
      "C. Untuk mengurangkan penggunaan internet"
    ],
    ans: 0
  },
  {
    id: 14,
    q: "Suno AI berfungsi berdasarkan konsep: 🧠🧬",
    options: [
      "A. Kecerdasan buatan dan pembelajaran mesin",
      "B. Rakaman audio manual sepenuhnya",
      "C. Penulisan skrip manusia sahaja"
    ],
    ans: 0
  },
  {
    id: 15,
    q: "Dalam konteks PdP abad ke-21, penggunaan Suno AI membantu guru untuk: 🚀🌟",
    options: [
      "A. Menggalakkan kreativiti dan inovasi",
      "B. Mengurangkan perancangan pengajaran",
      "C. Menghapuskan aktiviti kolaboratif"
    ],
    ans: 0
  }
];

const EMOHI_BETUL = ["🎉", "🥳", "✨", "🔥", "🎸", "🤘", "🌟", "🏆", "👑", "🚀", "⚡", "🕺", "💃", "🎙️", "😍"];
const EMOJI_SALAH = ["🥺", "💡", "🧠", "💥", "🛑", "🎵", "🔮", "🤔", "🧐", "⚡", "🩹", "🧩"];

// ----------------------------------------------------------------------
// 8-BIT AUDIO SYNTHESIZER (Web Audio API)
// ----------------------------------------------------------------------
const playSynthSound = (type) => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const now = ctx.currentTime;

    if (type === 'correct') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      gain.gain.setValueAtTime(0.15, now);
      osc.frequency.setValueAtTime(523.25, now); 
      osc.frequency.setValueAtTime(659.25, now + 0.08); 
      osc.frequency.setValueAtTime(783.99, now + 0.16); 
      osc.frequency.setValueAtTime(1046.50, now + 0.24); 
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
      
      osc.start(now);
      osc.stop(now + 0.5);

      const bufferSize = ctx.sampleRate * 0.3;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      const noiseFilter = ctx.createBiquadFilter();
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.value = 1000;
      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.08, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
      
      noise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(ctx.destination);
      noise.start(now);
      noise.stop(now + 0.3);

    } else if (type === 'wrong') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.connect(gain);
      gain.connect(ctx.destination);

      gain.gain.setValueAtTime(0.2, now);
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.exponentialRampToValueAtTime(55, now + 0.55);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.55);

      osc.start(now);
      osc.stop(now + 0.55);

    } else if (type === 'click') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.connect(gain);
      gain.connect(ctx.destination);

      gain.gain.setValueAtTime(0.08, now);
      osc.frequency.setValueAtTime(600, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);

      osc.start(now);
      osc.stop(now + 0.08);

    } else if (type === 'victory') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.connect(gain);
      gain.connect(ctx.destination);

      gain.gain.setValueAtTime(0.12, now);
      const notes = [523.25, 523.25, 523.25, 659.25, 523.25, 783.99, 1046.50];
      const durations = [0.1, 0.1, 0.1, 0.2, 0.1, 0.2, 0.5];
      let cumulativeTime = 0;
      
      notes.forEach((freq, idx) => {
        osc.frequency.setValueAtTime(freq, now + cumulativeTime);
        cumulativeTime += durations[idx];
      });
      
      gain.gain.exponentialRampToValueAtTime(0.01, now + cumulativeTime);
      osc.start(now);
      osc.stop(now + cumulativeTime);
    }
  } catch (e) {
    console.warn("Audio Context blocked or unsupported:", e);
  }
};

// ----------------------------------------------------------------------
// SUPER CONTRA INSPIRED 8-BIT RUNTIME CHIPTUNE GENERATOR (Web Audio API)
// ----------------------------------------------------------------------
let bgmCtx = null;
let bgmInterval = null;

const startBgm = () => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    bgmCtx = new AudioContext();
    
    const bassNotes = [
      164.81, 164.81, 196.00, 164.81, 220.00, 164.81, 246.94, 220.00, 
      146.83, 146.83, 174.61, 146.83, 196.00, 146.83, 220.00, 196.00  
    ];

    const leadNotes = [
      329.63, 0, 392.00, 440.00, 493.88, 0, 587.33, 493.88, 
      293.66, 0, 349.23, 392.00, 440.00, 0, 523.25, 440.00  
    ];

    let step = 0;

    bgmInterval = setInterval(() => {
      if (!bgmCtx || bgmCtx.state === 'suspended') return;
      const now = bgmCtx.currentTime;

      const oscBass = bgmCtx.createOscillator();
      const gainBass = bgmCtx.createGain();
      const filterBass = bgmCtx.createBiquadFilter();
      
      oscBass.type = 'sawtooth';
      oscBass.frequency.setValueAtTime(bassNotes[step % bassNotes.length], now);
      
      filterBass.type = 'lowpass';
      filterBass.frequency.setValueAtTime(450, now);

      oscBass.connect(filterBass);
      filterBass.connect(gainBass);
      gainBass.connect(bgmCtx.destination);

      gainBass.gain.setValueAtTime(0.04, now);
      gainBass.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

      oscBass.start(now);
      oscBass.stop(now + 0.15);

      const leadFreq = leadNotes[step % leadNotes.length];
      if (leadFreq > 0 && step % 2 === 0) {
        const oscLead = bgmCtx.createOscillator();
        const gainLead = bgmCtx.createGain();
        
        oscLead.type = 'square';
        oscLead.frequency.setValueAtTime(leadFreq, now);

        const vibrato = bgmCtx.createOscillator();
        const vibratoGain = bgmCtx.createGain();
        vibrato.frequency.value = 6; 
        vibratoGain.gain.value = 4; 
        
        vibrato.connect(vibratoGain);
        vibratoGain.connect(oscLead.frequency);
        
        oscLead.connect(gainLead);
        gainLead.connect(bgmCtx.destination);

        gainLead.gain.setValueAtTime(0.02, now);
        gainLead.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

        vibrato.start(now);
        oscLead.start(now);
        
        vibrato.stop(now + 0.3);
        oscLead.stop(now + 0.3);
      }

      if (step % 2 === 1) {
        const bufferSize = bgmCtx.sampleRate * 0.04; 
        const buffer = bgmCtx.createBuffer(1, bufferSize, bgmCtx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = Math.random() * 2 - 1;
        }

        const noiseNode = bgmCtx.createBufferSource();
        noiseNode.buffer = buffer;

        const noiseFilter = bgmCtx.createBiquadFilter();
        noiseFilter.type = 'bandpass';
        noiseFilter.frequency.value = 9000;

        const noiseGain = bgmCtx.createGain();
        noiseGain.gain.setValueAtTime(0.01, now);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

        noiseNode.connect(noiseFilter);
        noiseFilter.connect(noiseGain);
        noiseGain.connect(bgmCtx.destination);

        noiseNode.start(now);
        noiseNode.stop(now + 0.04);
      }

      step++;
    }, 150); 
  } catch(e) {
    console.warn("Contra BGM can't play:", e);
  }
};

const stopBgm = () => {
  if (bgmInterval) {
    clearInterval(bgmInterval);
    bgmInterval = null;
  }
  if (bgmCtx) {
    try {
      bgmCtx.close();
    } catch(e) {}
    bgmCtx = null;
  }
};

export default function App() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null); // 'host', 'player', or 'dualscreen'
  const [roomId, setRoomId] = useState('');
  const [playerName, setPlayerName] = useState('');
  const [gameState, setGameState] = useState('menu'); // 'menu', 'lobby', 'playing', 'finished'
  const [sessionData, setSessionData] = useState(null);
  const [playersList, setPlayersList] = useState([]);
  
  // Dynamic notification/toast
  const [notification, setNotification] = useState(null);

  // Local Player state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [feedback, setFeedback] = useState(null); // 'correct' or 'wrong'
  const [questionStartTime, setQuestionStartTime] = useState(0);
  const [localScore, setLocalScore] = useState(0);
  const [localTotalTime, setLocalTotalTime] = useState(0); 
  const [feedbackMessage, setFeedbackMessage] = useState('');

  // Dual Screen specific testing states
  const [dualHostState, setDualHostState] = useState('lobby');
  const [dualPlayerJoined, setDualPlayerJoined] = useState(false);

  // Global BGM state
  const [isBgmOn, setIsBgmOn] = useState(false);

  // Firestore path configurations conforming strictly to RULE 1
  const getSessionDocRef = (id) => doc(db, 'artifacts', appId, 'public', 'data', 'sessions', id);
  const getPlayersCollectionRef = () => collection(db, 'artifacts', appId, 'public', 'data', 'players');

  // Notification helper
  const showNotification = (msg) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification(null);
    }, 3500);
  };

  // Safe clipboard utility
  const copyToClipboard = (text) => {
    try {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      showNotification("📋 Pautan telah berjaya disalin!");
    } catch (err) {
      showNotification("Gagal menyalin. Sila salin secara manual.");
    }
  };

  // URL Parameter Detection
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const roleParam = params.get('role');
      const roomParam = params.get('room');

      if (roleParam === 'host') {
        setRole('host');
      } else if (roleParam === 'player') {
        setRole('player');
        if (roomParam) {
          setRoomId(roomParam.toUpperCase());
        }
      }
    } catch (e) {
      console.warn("URL parameters parser blocked:", e);
    }
  }, []);

  // Initial Auth (RULE 3)
  useEffect(() => {
    const initAuth = async () => {
      try {
        if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
          await signInWithCustomToken(auth, __initial_auth_token);
        } else {
          await signInAnonymously(auth);
        }
      } catch (error) {
        console.error("Authentication failed:", error);
      }
    };
    initAuth();
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  // Real-time listener for Firestore (RULE 3 compliance)
  useEffect(() => {
    if (!user || !roomId || roomId === 'SOLO' || role === 'dualscreen') return;

    const sessionRef = getSessionDocRef(roomId);
    const unsubSession = onSnapshot(sessionRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.data();
        setSessionData(data);
        if (role === 'player') {
          if (data.status === 'playing' && gameState === 'lobby') {
            setGameState('playing');
            setQuestionStartTime(Date.now());
          }
          if (data.status === 'lobby' && gameState === 'playing') {
            setGameState('lobby');
            setCurrentQuestionIndex(0);
            setLocalScore(0);
            setLocalTotalTime(0);
            setIsAnswered(false);
            setSelectedOption(null);
            setFeedback(null);
          }
          if (data.status === 'finished') {
            setGameState('finished');
          }
        }
      }
    }, (err) => console.error("Session sync error:", err));

    const playersRef = getPlayersCollectionRef();
    const unsubPlayers = onSnapshot(playersRef, (snapshot) => {
      const allPlayers = [];
      snapshot.forEach((doc) => {
        const pData = doc.data();
        if (pData.roomId === roomId) {
          allPlayers.push({ id: doc.id, ...pData });
        }
      });
      allPlayers.sort((a, b) => b.score - a.score || a.totalTime - b.totalTime);
      setPlayersList(allPlayers);
    }, (err) => console.error("Players sync error:", err));

    return () => {
      unsubSession();
      unsubPlayers();
    };
  }, [user, roomId, role, gameState]);

  // Special listener for Dual Screen simulation mode to sync locally
  useEffect(() => {
    if (role !== 'dualscreen' || !roomId) return;

    const playersRef = getPlayersCollectionRef();
    const unsubPlayers = onSnapshot(playersRef, (snapshot) => {
      const allPlayers = [];
      snapshot.forEach((doc) => {
        const pData = doc.data();
        if (pData.roomId === roomId) {
          allPlayers.push({ id: doc.id, ...pData });
        }
      });
      allPlayers.sort((a, b) => b.score - a.score || a.totalTime - b.totalTime);
      setPlayersList(allPlayers);
    }, (err) => console.error("Dual-screen players sync error:", err));

    return () => unsubPlayers();
  }, [role, roomId]);

  // Handle music background toggles
  useEffect(() => {
    if (isBgmOn) {
      startBgm();
    } else {
      stopBgm();
    }
    return () => stopBgm();
  }, [isBgmOn]);

  const getBaseUrl = () => {
    try {
      if (window.location.href.startsWith('blob:')) {
        return window.location.origin || "https://suno-beats-arena.web.app";
      }
      return window.location.href.split('?')[0];
    } catch (e) {
      return "https://suno-beats-arena.web.app";
    }
  };

  const getHostUrl = () => `${getBaseUrl()}?role=host`;
  const getPlayerUrl = (roomCode = '') => `${getBaseUrl()}?role=player${roomCode ? `&room=${roomCode}` : ''}`;

  const triggerBgmWithInteraction = () => {
    if (!isBgmOn) {
      setIsBgmOn(true);
      playSynthSound('click');
    }
  };

  // ----------------------------------------------------------------------
  // HOST ACTIONS
  // ----------------------------------------------------------------------
  const createRoom = async () => {
    if (!user) return;
    triggerBgmWithInteraction();
    const generatedCode = Math.random().toString(36).substring(2, 6).toUpperCase();
    const sessionRef = getSessionDocRef(generatedCode);

    await setDoc(sessionRef, {
      id: generatedCode,
      status: 'lobby', 
      createdAt: Date.now(),
      totalQuestions: KUIZ_SOALAN.length
    });

    setRoomId(generatedCode);
    setRole('host');
    setGameState('lobby');
  };

  const startQuiz = async () => {
    if (!user || !roomId) return;
    triggerBgmWithInteraction();
    const sessionRef = getSessionDocRef(roomId);
    await updateDoc(sessionRef, { status: 'playing' });
  };

  const endQuiz = async () => {
    if (!user || !roomId) return;
    playSynthSound('victory');
    const sessionRef = getSessionDocRef(roomId);
    await updateDoc(sessionRef, { status: 'finished' });
  };

  const restartQuiz = async () => {
    if (!user || !roomId) return;
    triggerBgmWithInteraction();
    const sessionRef = getSessionDocRef(roomId);
    await updateDoc(sessionRef, { status: 'lobby' });

    const batch = writeBatch(db);
    playersList.forEach(player => {
      const pRef = doc(db, 'artifacts', appId, 'public', 'data', 'players', player.id);
      batch.update(pRef, {
        score: 0,
        totalTime: 0,
        completed: false,
        currentQuestion: 0
      });
    });
    await batch.commit();
  };

  // ----------------------------------------------------------------------
  // SOLO MODE & PLAYER ACTIONS
  // ----------------------------------------------------------------------
  const startSoloQuiz = () => {
    triggerBgmWithInteraction();
    setRoomId('SOLO');
    setPlayerName('Guru (Solo)');
    setRole('player');
    setGameState('playing');
    setCurrentQuestionIndex(0);
    setLocalScore(0);
    setLocalTotalTime(0);
    setIsAnswered(false);
    setSelectedOption(null);
    setFeedback(null);
    setQuestionStartTime(Date.now());
    
    setPlayersList([
      { id: 'solo_self', name: 'Guru (Solo) - Anda 🎸', score: 0, totalTime: 0, completed: false },
      { id: 'mock_1', name: 'Cikgu Aminah (Demo) 🎙️', score: 13, totalTime: 18000, completed: true },
      { id: 'mock_2', name: 'Cikgu Wong (Demo) 🎹', score: 10, totalTime: 22000, completed: true }
    ]);
  };

  const joinRoom = async (e) => {
    e.preventDefault();
    if (!user || !roomId || !playerName.trim()) return;
    playSynthSound('click');

    const cleanRoomId = roomId.trim().toUpperCase();
    const sessionRef = getSessionDocRef(cleanRoomId);
    const sessionSnap = await getDoc(sessionRef);

    if (!sessionSnap.exists()) {
      showNotification("❌ Kod Bilik Tidak Wujud! Sila semak dengan Host.");
      return;
    }

    const playerId = `${cleanRoomId}_${user.uid}`;
    const playerRef = doc(db, 'artifacts', appId, 'public', 'data', 'players', playerId);
    
    await setDoc(playerRef, {
      id: playerId,
      uid: user.uid,
      roomId: cleanRoomId,
      name: playerName.trim(),
      score: 0,
      totalTime: 0,
      currentQuestion: 0,
      completed: false,
      lastUpdated: Date.now()
    });

    setRoomId(cleanRoomId);
    setRole('player');
    setGameState('lobby');
  };

  // Launch Split-Screen Dual Mode (Absolutely prevents sandbox 404 blockages)
  const launchDualScreen = async () => {
    if (!user) return;
    triggerBgmWithInteraction();
    
    // Create special local testing session code
    const generatedCode = "DUAL_" + Math.random().toString(36).substring(2, 5).toUpperCase();
    const sessionRef = getSessionDocRef(generatedCode);

    await setDoc(sessionRef, {
      id: generatedCode,
      status: 'lobby', 
      createdAt: Date.now(),
      totalQuestions: KUIZ_SOALAN.length
    });

    setRoomId(generatedCode);
    setRole('dualscreen');
    setGameState('lobby');
    setDualHostState('lobby');
    setPlayerName('Ujian Guru 🎒');
    setDualPlayerJoined(false);
  };

  const handleAnswerSubmit = async (optionIdx) => {
    if (isAnswered) return;
    
    const timeTaken = Date.now() - questionStartTime;
    const currentQuestion = KUIZ_SOALAN[currentQuestionIndex];
    const correct = optionIdx === currentQuestion.ans;

    setSelectedOption(optionIdx);
    setIsAnswered(true);

    let newScore = localScore;
    let newTotalTime = localTotalTime + timeTaken;

    if (correct) {
      newScore += 1;
      setLocalScore(newScore);
      setFeedback('correct');
      setFeedbackMessage(getRandomAffirmation());
      playSynthSound('correct');
    } else {
      setFeedback('wrong');
      const randomWrongEmoji = EMOJI_SALAH[Math.floor(Math.random() * EMOJI_SALAH.length)];
      setFeedbackMessage(`Aduh! Jawapan kurang tepat ${randomWrongEmoji}. Cuba lagi soalan seterusnya! 🦾`);
      playSynthSound('wrong');
    }

    setLocalTotalTime(newTotalTime);

    if (roomId === 'SOLO') {
      setPlayersList(prev => {
        const updated = prev.map(p => {
          if (p.id === 'solo_self') {
            return { ...p, score: newScore, totalTime: newTotalTime };
          }
          return p;
        });
        return updated.sort((a, b) => b.score - a.score || a.totalTime - b.totalTime);
      });
    } else {
      const playerId = `${roomId}_${user.uid}`;
      const playerRef = doc(db, 'artifacts', appId, 'public', 'data', 'players', playerId);
      const isLastQuestion = currentQuestionIndex === KUIZ_SOALAN.length - 1;

      await updateDoc(playerRef, {
        score: newScore,
        totalTime: newTotalTime,
        currentQuestion: currentQuestionIndex + 1,
        completed: isLastQuestion,
        lastUpdated: Date.now()
      });
    }
  };

  const handleNextQuestion = () => {
    playSynthSound('click');
    if (currentQuestionIndex < KUIZ_SOALAN.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setFeedback(null);
      setQuestionStartTime(Date.now());
    } else {
      setGameState('finished');
    }
  };

  const getRandomAffirmation = () => {
    const randomCelebrationEmoji = EMOHI_BETUL[Math.floor(Math.random() * EMOHI_BETUL.length)];
    const randomCelebrationEmoji2 = EMOHI_BETUL[Math.floor(Math.random() * EMOHI_BETUL.length)];
    const affirmations = [
      `Hebat! Telinga muzik anda sangat tajam! 🎵 ${randomCelebrationEmoji}`,
      `Padu gila! Suno AI melodi terbaik! 🚀 ${randomCelebrationEmoji}`,
      `Betul tepat! Sedia untuk PdP Abad Ke-21! 🌟 ${randomCelebrationEmoji}`,
      `Mantap! Bijak mengaplikasikan kecerdasan buatan! ⚡ ${randomCelebrationEmoji}`,
      `Awesome! Guru mithali tech-savvy! 🔥 ${randomCelebrationEmoji} ${randomCelebrationEmoji2}`
    ];
    return affirmations[Math.floor(Math.random() * affirmations.length)];
  };

  // ----------------------------------------------------------------------
  // MOCK PARTICIPANTS GENERATOR (FOR TESTING WITH 65 PLAYERS)
  // ----------------------------------------------------------------------
  const injectMockPlayers = async () => {
    if (!roomId) return;
    playSynthSound('click');
    
    const funSuffixes = ["🎸", "🎤", "🎹", "🥁", "🎷", "🎺", "🕺", "💃", "🎙️", "🎧", "✨", "🔥", "🚀", "🌟"];

    const mockNames = [
      "Cikgu Aminah", "Cikgu Halim", "Cikgu Sarah", "Cikgu Wong", "Cikgu Raju",
      "Cikgu Farhan", "Cikgu Nadia", "Cikgu Kumar", "Cikgu Linda", "Cikgu Zack",
      "Cikgu Husna", "Cikgu Chong", "Cikgu Syakir", "Cikgu Mei", "Cikgu Daniel",
      "Cikgu Faiz", "Cikgu Hawa", "Cikgu Azman", "Cikgu Janice", "Cikgu Bala",
      "Cikgu Zulaikha", "Cikgu Imran", "Cikgu Wendy", "Cikgu Firdaus", "Cikgu Suzie",
      "Cikgu Khairul", "Cikgu Liyana", "Cikgu Gerald", "Cikgu Amira", "Cikgu Nathan",
      "Cikgu Zaim", "Cikgu Sofea", "Cikgu Shahril", "Cikgu Nancy", "Cikgu Thara",
      "Cikgu Yusof", "Cikgu Wardah", "Cikgu Kenneth", "Cikgu Aisyah", "Cikgu Gary",
      "Cikgu Taufiq", "Cikgu Rina", "Cikgu Eric", "Cikgu Nora", "Cikgu Suresh",
      "Cikgu Hanis", "Cikgu Calvin", "Cikgu Sabrina", "Cikgu Hakim", "Cikgu Fiona",
      "Cikgu Anas", "Cikgu Batrisyia", "Cikgu Jason", "Cikgu Izzah", "Cikgu Leon",
      "Cikgu Kamal", "Cikgu Jasmine", "Cikgu Vincent", "Cikgu Balqis", "Cikgu Nicholas",
      "Cikgu Adli", "Cikgu Maryam", "Cikgu Desmond", "Cikgu Fariha", "Cikgu Ivan"
    ];

    const batch = writeBatch(db);
    mockNames.forEach((name, index) => {
      const mId = `${roomId}_mock_${index}`;
      const mRef = doc(db, 'artifacts', appId, 'public', 'data', 'players', mId);
      
      const correctAnswers = Math.floor(Math.random() * 11) + 4; 
      const averageReactionTime = Math.floor(Math.random() * 2500) + 800; 
      const totalTime = correctAnswers * averageReactionTime;
      const emoji = funSuffixes[index % funSuffixes.length];

      batch.set(mRef, {
        id: mId,
        uid: `mock_${index}`,
        roomId: roomId,
        name: `${name} ${emoji}`,
        score: correctAnswers,
        totalTime: totalTime,
        currentQuestion: KUIZ_SOALAN.length,
        completed: true,
        lastUpdated: Date.now()
      });
    });

    await batch.commit();
  };

  const deleteMockPlayers = async () => {
    if (!roomId) return;
    playSynthSound('wrong');
    const batch = writeBatch(db);
    const mockPlayers = playersList.filter(p => p.id.includes('mock_'));
    mockPlayers.forEach(p => {
      const pRef = doc(db, 'artifacts', appId, 'public', 'data', 'players', p.id);
      batch.delete(pRef);
    });
    await batch.commit();
  };

  // Special join trigger specifically for the player side inside Split Screen
  const handleDualPlayerJoin = async (e) => {
    e.preventDefault();
    if (!playerName.trim()) return;
    playSynthSound('click');

    const playerId = `${roomId}_test_dual_user`;
    const playerRef = doc(db, 'artifacts', appId, 'public', 'data', 'players', playerId);
    
    await setDoc(playerRef, {
      id: playerId,
      uid: user.uid,
      roomId: roomId,
      name: playerName.trim() + " 🎮 (Anda)",
      score: 0,
      totalTime: 0,
      currentQuestion: 0,
      completed: false,
      lastUpdated: Date.now()
    });

    setDualPlayerJoined(true);
  };

  // ----------------------------------------------------------------------
  // SPLIT SCREEN VIEWS (PORTABLE TESTING WORKSPACE)
  // ----------------------------------------------------------------------
  if (role === 'dualscreen') {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col justify-between p-2">
        <header className="py-2 border-b border-purple-900 mb-2 bg-slate-900/60 rounded-xl px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-xl">🖥️+📱</span>
            <div>
              <h2 className="text-sm font-black text-pink-400 font-mono">MOD SKRIN BERKEMBAR (SPLIT-SCREEN TESTER)</h2>
              <p className="text-[10px] text-slate-400 font-mono">Bilik: {roomId}</p>
            </div>
          </div>
          <button
            onClick={() => {
              playSynthSound('click');
              setGameState('menu');
              setRole(null);
              setRoomId('');
              setPlayersList([]);
              setDualPlayerJoined(false);
            }}
            className="text-[10px] bg-red-950/60 border border-red-700 hover:bg-red-900 px-3 py-1 rounded text-red-300 font-mono font-bold"
          >
            ❌ Keluar Split-Screen
          </button>
        </header>

        {/* The Splits: Left Side is Host (Projector), Right is Player (Phone) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-grow">
          
          {/* LEFT: PROJECTOR/HOST VIEW */}
          <div className="bg-slate-900 border-2 border-purple-900/80 rounded-2xl p-4 flex flex-col justify-between overflow-y-auto max-h-[85vh]">
            <div>
              <div className="border-b border-purple-950 pb-2 mb-4 flex justify-between items-center bg-slate-950/40 p-2 rounded-lg">
                <span className="text-xs font-mono font-black text-pink-400">🖥️ SKRIN PROJEKTOR (VIEW UTAMA)</span>
                <span className="text-[9px] bg-slate-800 text-slate-300 font-mono px-2 py-0.5 rounded uppercase">Status: {dualHostState}</span>
              </div>

              {dualHostState === 'lobby' && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center gap-2 bg-slate-950 p-4 rounded-xl border border-purple-950">
                    <div>
                      <h4 className="text-base font-black text-slate-200">Kod Bilik Projektor:</h4>
                      <p className="text-sm text-slate-400 mt-1">Masukkan kod ini di skrin kanan untuk mencuba!</p>
                    </div>
                    <div className="text-2xl font-black text-pink-400 bg-slate-900 px-4 py-2 rounded-lg border border-pink-500 font-mono tracking-wider">{roomId}</div>
                  </div>

                  <div className="p-3 bg-purple-950/30 rounded-xl border border-purple-900/60">
                    <p className="text-xs text-purple-300 font-mono">⚡ KAWALAN PROJEKTOR:</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <button
                        onClick={injectMockPlayers}
                        className="bg-indigo-900 hover:bg-indigo-800 text-[10px] font-mono font-bold py-1.5 px-3 rounded-lg"
                      >
                        👥 Masukkan 65+ Guru Demo
                      </button>
                      <button
                        onClick={deleteMockPlayers}
                        className="bg-slate-950 border border-slate-700 text-[10px] font-mono text-slate-400 hover:text-white py-1.5 px-3 rounded-lg"
                      >
                        🗑️ Buang Guru Demo
                      </button>
                    </div>
                  </div>

                  {/* Joined Player count */}
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-900">
                    <h5 className="text-xs font-bold text-slate-400 mb-2">Guru Berdaftar ({playersList.length})</h5>
                    <div className="grid grid-cols-2 gap-1.5 max-h-32 overflow-y-auto">
                      {playersList.map(p => (
                        <div key={p.id} className="text-[10px] bg-slate-900 p-1.5 rounded border border-purple-950/60 truncate font-mono">
                          👩‍🏫 {p.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {dualHostState === 'playing' && (
                <div className="text-center py-6 space-y-4">
                  <div className="text-5xl animate-bounce">🎶🕺</div>
                  <h4 className="text-lg font-black text-pink-400">Pertandingan Sedang Berlangsung!</h4>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
                    Sila mula menjawab 15 soalan kuiz di **Skrin Peserta (Sebelah Kanan)**. Kedudukan markah di bawah akan dikemas kini secara langsung mengikut kelajuan anda menjawab!
                  </p>
                </div>
              )}

              {dualHostState === 'finished' && (
                <div className="space-y-4 text-center py-4">
                  <span className="text-xs bg-amber-400 text-slate-950 font-mono font-black px-3 py-1 rounded-full uppercase">PENTAS PODIUM JUARA 🏆</span>
                  
                  {/* Podium top 3 mini preview */}
                  <div className="flex justify-center items-end gap-3 py-2 max-w-sm mx-auto">
                    {playersList[1] && (
                      <div className="bg-slate-950 border border-slate-500/40 p-2.5 rounded-lg text-center w-24 h-24 flex flex-col justify-between">
                        <span className="text-[8px] font-bold text-slate-400 uppercase">🥈 NAIB</span>
                        <div className="text-xs font-bold font-mono truncate text-slate-200">{playersList[1].name}</div>
                        <span className="text-[10px] font-black text-pink-400 font-mono">{playersList[1].score} Pts</span>
                      </div>
                    )}
                    {playersList[0] && (
                      <div className="bg-slate-950 border-2 border-amber-500 p-3 rounded-lg flex flex-col items-center justify-between h-32 relative shadow-[0_0_15px_rgba(245,158,11,0.3)] w-28">
                        <span className="absolute -top-3 bg-amber-400 text-slate-950 text-[8px] font-black py-0.5 px-2 rounded-full uppercase">👑 JUARA</span>
                        <div className="text-2xl mt-1">🥇</div>
                        <h4 className="text-xs font-black text-amber-300 font-mono truncate w-full">{playersList[0].name}</h4>
                        <span className="text-xs font-bold text-slate-200 font-mono">{playersList[0].score}/15</span>
                      </div>
                    )}
                    {playersList[2] ? (
                      <div className="bg-slate-950 border border-amber-700/40 p-6 rounded-2xl flex flex-col items-center justify-between h-20 w-24 relative hidden md:flex">
                        <div className="text-2xl">🥉</div>
                      </div>
                    ) : null}
                  </div>
                </div>
              )}

              {/* LIVE LEADERBOARD CONTAINER (Always displayed on Host screen) */}
              <div className="mt-4 border-t border-purple-950/60 pt-3">
                <h5 className="text-xs font-black text-slate-400 font-mono tracking-wider mb-2">📊 LIVE LEADERBOARD (TOP 5)</h5>
                <div className="space-y-1.5 max-h-48 overflow-y-auto">
                  {playersList.slice(0, 5).map((p, idx) => (
                    <div key={p.id} className="flex justify-between items-center p-2 rounded-xl bg-slate-950 border border-slate-900 text-xs font-mono">
                      <span className="truncate max-w-[65%]">{idx + 1}. {p.name}</span>
                      <span className="font-bold text-pink-400">{p.score} Betul ({(p.totalTime/1000).toFixed(1)}s)</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Host Actions Footer */}
            <div className="mt-6 border-t border-slate-800/80 pt-4 flex gap-2 justify-end">
              {dualHostState === 'lobby' ? (
                <button
                  onClick={async () => {
                    playSynthSound('click');
                    setDualHostState('playing');
                    // Sync online status for the test session
                    const sessionRef = getSessionDocRef(roomId);
                    await updateDoc(sessionRef, { status: 'playing' });
                  }}
                  className="bg-pink-600 hover:bg-pink-500 text-xs text-white font-mono font-black px-4 py-2 rounded-xl"
                >
                  🚀 Mula Kuiz (Host)
                </button>
              ) : dualHostState === 'playing' ? (
                <button
                  onClick={async () => {
                    playSynthSound('victory');
                    setDualHostState('finished');
                    const sessionRef = getSessionDocRef(roomId);
                    await updateDoc(sessionRef, { status: 'finished' });
                  }}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-mono font-black px-4 py-2 rounded-xl"
                >
                  🏁 Tamat Kuiz & Lihat Podium
                </button>
              ) : (
                <button
                  onClick={async () => {
                    playSynthSound('click');
                    setDualHostState('lobby');
                    setDualPlayerJoined(false);
                    setIsAnswered(false);
                    setCurrentQuestionIndex(0);
                    setLocalScore(0);
                    setLocalTotalTime(0);
                    setSelectedOption(null);
                    setFeedback(null);
                    const sessionRef = getSessionDocRef(roomId);
                    await updateDoc(sessionRef, { status: 'lobby' });
                  }}
                  className="bg-indigo-600 hover:bg-indigo-500 text-xs text-white font-mono font-black px-4 py-2 rounded-xl"
                >
                  🔄 Ulang Semula Kuiz
                </button>
              )}
            </div>
          </div>

          {/* RIGHT: PLAYER/MOBILE VIEW */}
          <div className="bg-slate-900 border-2 border-cyan-950 rounded-2xl p-4 flex flex-col justify-between overflow-y-auto max-h-[85vh]">
            <div>
              <div className="border-b border-cyan-950 pb-2 mb-4 flex justify-between items-center bg-slate-950/40 p-2 rounded-lg">
                <span className="text-xs font-mono font-black text-cyan-400">📱 SKRIN PERANTI PESERTA (TELEFON)</span>
                <span className="text-[9px] bg-slate-800 text-slate-300 font-mono px-2 py-0.5 rounded">Nama: {playerName}</span>
              </div>

              {!dualPlayerJoined ? (
                <form onSubmit={handleDualPlayerJoin} className="space-y-4 max-w-sm mx-auto py-6">
                  <div className="text-center space-y-2">
                    <span className="text-4xl">👩‍🏫🎒</span>
                    <h4 className="text-sm font-bold text-slate-200">Sertai Sebagai Peserta Ujian</h4>
                    <p className="text-xs text-slate-400">Masukkan nama anda untuk mula menjawab.</p>
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Nama Anda (cth: Cikgu Ali)"
                    value={playerName === 'Ujian Guru 🎒' ? '' : playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    className="w-full bg-slate-950 text-xs border border-slate-700 focus:border-cyan-400 rounded-lg px-3 py-2.5 text-center text-slate-200 outline-none uppercase font-mono font-bold"
                  />
                  <button
                    type="submit"
                    className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-black py-2.5 px-4 rounded-xl text-xs uppercase font-mono shadow-md"
                  >
                    Daftar Masuk Bilik 📡
                  </button>
                </form>
              ) : (
                <>
                  {gameState === 'lobby' && (
                    <div className="text-center py-12">
                      <div className="text-5xl animate-bounce mb-4">🎵</div>
                      <h4 className="text-base font-bold text-cyan-400 font-mono animate-pulse">
                        Anda telah sedia, {playerName}!
                      </h4>
                      <p className="text-xs text-slate-400 mt-2 max-w-xs mx-auto">
                        Sila klik butang <strong>"🚀 MULA GAME CARNIVAL!"</strong> di skrin Admin sebelah kiri untuk melancarkan soalan kuiz!
                      </p>
                    </div>
                  )}

                  {gameState === 'playing' && (
                    <div className="space-y-4">
                      {/* The Question */}
                      <div className="bg-slate-950 p-4 rounded-xl border-l-4 border-cyan-500">
                        <span className="text-[10px] font-mono text-cyan-400 block mb-1">SOALAN {currentQuestionIndex + 1} DARI 15</span>
                        <h3 className="text-sm font-bold text-slate-100">{KUIZ_SOALAN[currentQuestionIndex].q}</h3>
                      </div>

                      {/* Options */}
                      <div className="space-y-2">
                        {KUIZ_SOALAN[currentQuestionIndex].options.map((opt, idx) => {
                          let baseTheme = "";
                          let icon = "";
                          if (idx === 0) {
                            baseTheme = "border-pink-500/40 bg-pink-950/10 text-pink-300 hover:bg-pink-900/20";
                            icon = "🔴";
                          } else if (idx === 1) {
                            baseTheme = "border-cyan-500/40 bg-cyan-950/10 text-cyan-300 hover:bg-cyan-900/20";
                            icon = "🔵";
                          } else {
                            baseTheme = "border-amber-500/40 bg-amber-950/10 text-amber-300 hover:bg-amber-900/20";
                            icon = "🟢";
                          }

                          let btnStyle = `${baseTheme}`;

                          if (isAnswered) {
                            if (idx === KUIZ_SOALAN[currentQuestionIndex].ans) {
                              btnStyle = "bg-emerald-950/90 border-emerald-500 text-emerald-300 scale-[1.01] ring-2 ring-emerald-500/50 shadow-md";
                            } else if (idx === selectedOption) {
                              btnStyle = "bg-rose-950/90 border-rose-500 text-rose-300 opacity-80";
                            } else {
                              btnStyle = "border-slate-900 bg-slate-950 opacity-20 text-slate-600";
                            }
                          }

                          return (
                            <button
                              key={idx}
                              disabled={isAnswered}
                              onClick={() => handleAnswerSubmit(idx)}
                              className={`w-full text-left p-3.5 rounded-xl border-2 transition-all duration-150 flex items-center justify-between font-mono text-xs font-bold ${btnStyle}`}
                            >
                              <span className="flex items-center gap-2">
                                <span>{icon}</span>
                                <span>{opt}</span>
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Feedback */}
                      {isAnswered && (
                        <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 animate-fade-in space-y-2">
                          <div className="flex justify-between items-center">
                            <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                              feedback === 'correct' ? 'bg-emerald-950 text-emerald-400' : 'bg-rose-950 text-rose-400'
                            }`}>
                              {feedback === 'correct' ? '✨ BETUL! ✨' : 'SALAH! 💔'}
                            </span>
                            <span className="text-[10px] text-slate-500 font-mono">{(localTotalTime/1000).toFixed(2)}s</span>
                          </div>
                          <p className="text-xs font-bold font-mono text-slate-300">{feedbackMessage}</p>
                          <button
                            onClick={handleNextQuestion}
                            className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold py-2 rounded-lg text-xs uppercase font-mono tracking-widest mt-1"
                          >
                            {currentQuestionIndex === 14 ? "Lihat Keputusan 🏁" : "Seterusnya ➡️"}
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  {gameState === 'finished' && (
                    <div className="text-center py-10 space-y-3">
                      <span className="text-3xl">🏆🥳✨</span>
                      <h4 className="text-base font-black text-amber-400">Tahniah! Anda Selesai Menjawab!</h4>
                      <p className="text-xs text-slate-300">
                        Skor Anda: <strong className="text-pink-400 text-sm">{localScore} / 15</strong> <br />
                        Sila lihat keputusan akhir dan podium di skrin projektor sebelah kiri!
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    );
  }

  // ----------------------------------------------------------------------
  // STANDARD VIEW (SINGLE SCREEN MODE)
  // ----------------------------------------------------------------------
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col justify-between p-4 overflow-x-hidden selection:bg-pink-500 selection:text-white">
      
      {/* TOAST NOTIFICATION CONTAINER */}
      {notification && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 border-2 border-white/30 text-white font-mono px-6 py-3 rounded-full shadow-[0_0_25px_rgba(236,72,153,0.5)] flex items-center gap-2 animate-bounce">
          <span className="text-lg">🔔</span>
          <span className="text-sm font-black tracking-wide">{notification}</span>
        </div>
      )}

      {/* HEADER BAR WITH GLOBAL CONTRA BGM FOR EVERYONE */}
      <header className="w-full max-w-6xl flex justify-between items-center py-4 border-b border-purple-900 mb-6 bg-slate-900/50 backdrop-blur-md px-6 rounded-2xl shadow-[0_0_15px_rgba(168,85,247,0.15)] border">
        <button 
          onClick={() => {
            playSynthSound('click');
            setGameState('menu');
            setRole(null);
            setRoomId('');
          }}
          className="flex items-center gap-3 group text-left"
        >
          <div className="bg-gradient-to-tr from-pink-600 to-purple-600 p-2.5 rounded-xl group-hover:scale-110 transition-transform text-2xl shadow-[0_0_10px_rgba(219,39,119,0.4)]">
            🎼
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400">
              SUNO BEATS ARENA 🎨✨
            </h1>
            <p className="text-xs text-purple-300 font-mono group-hover:text-pink-400 transition-colors uppercase tracking-widest">
              SUPER ENGAGING EDITION
            </p>
          </div>
        </button>

        <div className="flex items-center gap-2">
          {/* Universal BGM Toggle Button (Both Host & Player can control their own music session!) */}
          <button
            onClick={() => {
              playSynthSound('click');
              setIsBgmOn(!isBgmOn);
            }}
            className={`px-3 py-1.5 rounded-full text-xs font-mono font-bold uppercase transition-all duration-300 shadow-md flex items-center gap-1.5 ${
              isBgmOn 
                ? 'bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 hover:from-emerald-400 hover:to-teal-300 shadow-[0_0_15px_rgba(16,185,129,0.4)] animate-pulse' 
                : 'bg-slate-800 text-slate-400 border border-slate-700 hover:border-pink-500 hover:text-pink-400'
            }`}
          >
            <span>🎸</span> 
            <span>Contra BGM: {isBgmOn ? 'ON ⚡' : 'OFF 💤'}</span>
          </button>

          <button 
            onClick={() => {
              playSynthSound('click');
              setGameState('menu');
              setRole(null);
              setRoomId('');
            }}
            className="text-xs bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 hover:border-pink-500 hover:text-pink-400 px-4 py-2 rounded-full text-slate-300 font-mono transition-all font-bold shadow-md"
          >
            🏠 Utama
          </button>
        </div>
      </header>

      {/* MAIN CONTENT WORKSPACE */}
      <main className="w-full max-w-6xl flex-grow flex flex-col justify-center items-center">
        
        {/* GAME MENU STATE (Selector Halaman Utama) */}
        {gameState === 'menu' && (
          <div className="w-full max-w-3xl bg-slate-900/90 border border-purple-800 p-6 md:p-8 rounded-3xl shadow-2xl relative overflow-hidden text-center backdrop-blur-md">
            <div className="absolute -top-16 -left-16 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>

            {/* Glowing Tips for Sound */}
            <div className="mb-4 flex flex-col items-center gap-2">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white border border-pink-500/30 text-xs font-mono px-4 py-1.5 rounded-full uppercase tracking-widest font-black shadow-[0_0_15px_rgba(236,72,153,0.3)] animate-pulse">
                🎮 LIVE INTERACTIVE CARNIVAL 🌈
              </span>
              <p className="text-[10px] text-amber-400 font-mono mt-1">
                💡 Tip: Tekan butang 'Contra BGM' di atas untuk mengaktifkan muzik latar Super Contra yang rancak! 🔊
              </p>
            </div>

            {/* HIGHLY RECOMMENDED DUAL-SCREEN LAUNCHER */}
            <div className="mb-6 p-4 bg-gradient-to-r from-pink-950/40 via-slate-950/90 to-cyan-950/40 border border-purple-800/80 rounded-2xl shadow-xl">
              <span className="text-[9px] bg-pink-600 text-white font-mono px-2 py-0.5 rounded font-bold uppercase tracking-widest">DIREKOMENDASIKAN UNTUK PENGUJI</span>
              <h4 className="text-base font-black text-slate-100 mt-2">Uji Cuba Skrin Berkembar (Dual-Screen)</h4>
              <p className="text-xs text-slate-400 mt-1 max-w-xl mx-auto leading-relaxed">
                Platform menyekat pembukaan tab baharu (Ralat 404). Gunakan mod dual-screen ini untuk melancarkan skrin Projektor Host & Telefon Peserta serentak dalam satu paparan mudah!
              </p>
              <button
                onClick={launchDualScreen}
                className="mt-4 bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 hover:scale-102 transition-transform text-white font-black py-3 px-8 rounded-xl text-xs uppercase font-mono tracking-wider shadow-lg shadow-pink-900/20"
              >
                🖥️ + 📱 LANCARKAN MOD SKRIN BERKEMBAR (DENGAN FIRESTORE LIVE SCORE)
              </button>
            </div>

            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 tracking-tight leading-none text-slate-200">
              Atau Pilih Mod Skrin Tunggal:
            </h2>

            {/* SELECTION MODES / LINKS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              
              {/* ADMIN / HOST LINK CARD */}
              <div className="bg-gradient-to-b from-purple-950/70 to-slate-900 border-2 border-purple-500/50 p-6 rounded-2xl flex flex-col justify-between hover:border-pink-500/80 transition-all duration-300 text-left relative group">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-4xl">🖥️</div>
                    <span className="text-[10px] font-mono bg-pink-900/60 text-pink-300 px-2.5 py-1 rounded border border-pink-500/40 font-bold uppercase tracking-wider">
                      HOST PROJECTOR
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-pink-400 font-mono uppercase tracking-wide">1. Urus Bilik & Live Score 📊</h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Sesuai untuk skrin projektor bilik darjah. Paparkan kedudukan peserta dalam masa nyata dengan muzik 8-bit yang meriah serta podium gergasi!
                  </p>
                </div>
                
                <div className="mt-6 space-y-3">
                  <button
                    onClick={createRoom}
                    className="w-full bg-pink-600 hover:bg-pink-500 active:scale-95 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg transition-all font-mono text-xs uppercase tracking-widest border border-white/15"
                  >
                    Buka Bilik Kuiz Baru 🎉
                  </button>
                  
                  {/* Copy Link Section for Admin */}
                  <div className="pt-2">
                    <p className="text-[10px] text-pink-400 font-mono mb-1">Pautan Projektor:</p>
                    <div className="flex items-center gap-1.5 bg-slate-950 p-2 rounded-lg border border-purple-900/60">
                      <span className="text-[10px] text-slate-400 font-mono truncate select-all flex-1">
                        {getHostUrl()}
                      </span>
                      <button
                        onClick={() => copyToClipboard(getHostUrl())}
                        className="bg-purple-900/50 hover:bg-purple-800 text-[10px] font-mono px-2.5 py-1 rounded-md text-pink-400 font-bold shrink-0"
                      >
                        Salin 📋
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* PLAYER LINK CARD */}
              <div className="bg-gradient-to-b from-slate-950 to-cyan-950/70 border-2 border-cyan-500/50 p-6 rounded-3xl flex flex-col justify-between hover:border-cyan-400/80 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-300 text-left relative group">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-4xl filter drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">📱⚡</div>
                    <span className="text-[10px] font-mono bg-cyan-950 text-cyan-300 px-2.5 py-1 rounded border border-cyan-500/40 font-bold uppercase tracking-wider">
                      PLAY STATION
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-cyan-400 font-mono uppercase tracking-wide">2. Pentas Jawab Kuiz 🎶</h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Masuk ke bilik kuiz yang disediakan oleh host. Setiap soalan direka berwarna-warni mengikut stail pad kawalan permainan arked klasik!
                  </p>
                </div>
                
                <div className="mt-6 space-y-3">
                  <form onSubmit={joinRoom} className="space-y-2">
                    <input
                      type="text"
                      required
                      placeholder="Taip Nama Anda (cth: Cikgu Ali)"
                      value={playerName}
                      onChange={(e) => setPlayerName(e.target.value)}
                      className="w-full bg-slate-950 text-xs border border-slate-700 focus:border-cyan-400 rounded-lg px-3 py-2.5 text-center text-slate-200 outline-none uppercase font-mono font-bold"
                    />
                    <div className="flex gap-2">
                      <input
                        type="text"
                        required
                        placeholder="KOD BILIK"
                        value={roomId}
                        onChange={(e) => setRoomId(e.target.value)}
                        className="w-1/2 bg-slate-950 text-xs border border-slate-700 focus:border-cyan-400 rounded-lg px-2 py-2.5 text-center text-slate-200 outline-none uppercase font-mono tracking-widest font-black"
                      />
                      <button
                        type="submit"
                        className="w-1/2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 active:scale-95 text-white font-black py-2.5 px-3 rounded-lg shadow-md transition-all font-mono text-xs uppercase"
                      >
                        Sertai 📡
                      </button>
                    </div>
                  </form>

                  {/* Copy Link Section for Player */}
                  <div className="pt-2 border-t border-slate-800/80">
                    <p className="text-[10px] text-cyan-400 font-mono mb-1">Pautan Peserta:</p>
                    <div className="flex items-center gap-1.5 bg-slate-950 p-2 rounded-lg border border-cyan-950">
                      <span className="text-[10px] text-slate-400 font-mono truncate select-all flex-1">
                        {getPlayerUrl()}
                      </span>
                      <button
                        onClick={() => copyToClipboard(getPlayerUrl())}
                        className="bg-cyan-950 hover:bg-cyan-900 text-[10px] font-mono px-2.5 py-1 rounded-md text-cyan-400 font-bold shrink-0"
                      >
                        Salin 📋
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* SOLO QUICK TEST BUTTON */}
            <div className="border-t border-purple-950/60 pt-6">
              <button
                onClick={startSoloQuiz}
                className="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-black py-4 px-6 rounded-2xl shadow-lg active:scale-95 transition-all font-mono text-xs uppercase flex items-center justify-center gap-2"
              >
                🎮 CUBA JAWAB SOLO • UJI CUBA SANGAT MENARIK! 🌈✨
              </button>
            </div>

            <div className="text-[11px] text-slate-500 font-mono mt-4">
              Mengandungi 15 Soalan MCQ mengenai Suno AI dalam PdP Pendidikan Abad Ke-21.
            </div>
          </div>
        )}

        {/* LOBBY STATE */}
        {gameState === 'lobby' && (
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in">
            
            {/* Left/Middle Column (Lobby Details) */}
            <div className="lg:col-span-2 bg-slate-900/90 border border-purple-800/80 p-6 md:p-8 rounded-3xl shadow-2xl flex flex-col justify-between relative">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="bg-pink-600/20 text-pink-400 border border-pink-500/20 text-xs font-mono px-3 py-1 rounded-full uppercase font-black">
                      Lobby Bilik Kuiz 🎪
                    </span>
                    <h2 className="text-3xl font-black mt-2">Pentas Bermula! 🎙️🚀</h2>
                    <p className="text-slate-400 text-sm mt-1">
                      Minta para peserta layari kuiz ini dan masukkan kod bilik di bawah.
                    </p>
                  </div>
                  
                  {/* Neon Room Code Badge */}
                  <div className="bg-slate-950 border-2 border-pink-500 p-4 rounded-2xl text-center shadow-[0_0_20px_rgba(236,72,153,0.4)] animate-pulse">
                    <div className="text-xs text-slate-400 font-mono uppercase tracking-widest font-bold">KOD BILIK</div>
                    <div className="text-3xl md:text-4xl font-black text-pink-400 tracking-wider font-mono">{roomId}</div>
                  </div>
                </div>

                {role === 'host' && (
                  <div className="bg-slate-950/60 rounded-2xl p-4 border border-slate-800 mb-6 shadow-[inset_0_0_15px_rgba(168,85,247,0.1)]">
                    <h3 className="text-sm font-bold font-mono text-pink-400 mb-2 flex items-center gap-2">
                      <span>⚡</span> KAWALAN DEMO HOST (65 PESERTA):
                    </h3>
                    <p className="text-xs text-slate-400 mb-3">
                      Gunakan simulasi ini untuk melihat paparan sekumpulan besar guru (65+ orang) bersaing dalam masa nyata dengan emoji-emoji menarik di projektor!
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <button
                        onClick={injectMockPlayers}
                        className="bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-xs text-white font-mono py-2.5 px-4 rounded-xl font-bold transition-all shadow-md"
                      >
                        👥 Masukkan 65+ Pemain Mock 🎨
                      </button>
                      <button
                        onClick={deleteMockPlayers}
                        className="bg-red-950 hover:bg-red-900 border border-red-700 text-xs text-red-300 font-mono py-2.5 px-4 rounded-xl font-bold transition-all"
                      >
                        🗑️ Bersihkan Pemain Mock
                      </button>
                    </div>

                    {/* Copy Direct Joining Link for Admin to share */}
                    <div className="border-t border-slate-800 pt-3">
                      <p className="text-[10px] text-pink-400 font-mono mb-1">🔗 Kongsi Pautan Masuk Terus untuk bilik ini ({roomId}):</p>
                      <div className="flex items-center gap-1.5 bg-slate-900 p-2 rounded-lg">
                        <span className="text-[10px] text-slate-400 font-mono truncate select-all flex-1">
                          {getPlayerUrl(roomId)}
                        </span>
                        <button
                          onClick={() => copyToClipboard(getPlayerUrl(roomId))}
                          className="bg-pink-600 hover:bg-pink-500 text-[10px] font-mono px-3 py-1.5 rounded-md text-white font-bold shrink-0 transition-all"
                        >
                          Salin Pautan Serta-merta 📋
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Player Wait Animation */}
                {role === 'player' && (
                  <div className="flex flex-col items-center justify-center py-10">
                    <div className="relative w-44 h-24 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl border-4 border-slate-950 flex flex-col justify-between p-3 shadow-2xl transform rotate-2 animate-bounce">
                      <div className="flex justify-between">
                        <div className="w-5 h-5 rounded-full bg-slate-950 border border-slate-700"></div>
                        <div className="w-5 h-5 rounded-full bg-slate-950 border border-slate-700"></div>
                      </div>
                      <div className="text-center font-mono text-[10px] text-white tracking-widest uppercase font-black">
                        CASSETTE RETRO
                      </div>
                      <div className="flex justify-between items-center bg-slate-950 h-4 rounded-md px-1">
                        <div className="w-1.5 h-1.5 bg-pink-500 rounded-full animate-ping"></div>
                        <div className="text-[8px] font-mono text-cyan-400">WAITING FOR GURU...</div>
                      </div>
                    </div>
                    <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 font-mono mt-6 font-black text-center animate-pulse">
                      Hai, {playerName}! Anda telah sedia. 🎧✨ <br /> Sila tunggu Host memulakan kuiz...
                    </p>
                  </div>
                )}

                {/* Player Lobby Screen (If Host) */}
                {role === 'host' && (
                  <div className="mt-4">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-lg font-extrabold text-slate-300">
                        Peserta Berdaftar ({playersList.length} orang) 👩‍🏫🎸
                      </h3>
                      <span className="text-xs bg-slate-800 text-slate-400 px-3 py-1 rounded-full font-mono">
                        Sasaran: 65 Peserta
                      </span>
                    </div>

                    <div className="bg-slate-950/80 rounded-2xl p-4 border border-slate-800 max-h-60 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {playersList.length === 0 ? (
                        <div className="col-span-full py-10 text-center text-sm text-slate-500 font-mono">
                          Menunggu pemain pertama menyertai... 📡🎨
                        </div>
                      ) : (
                        playersList.map((player) => (
                          <div 
                            key={player.id} 
                            className="bg-gradient-to-r from-slate-900 to-purple-950/30 border border-purple-950/80 px-3 py-2.5 rounded-xl flex items-center gap-2 animate-fade-in hover:border-pink-500/50"
                          >
                            <span className="text-lg">🎼</span>
                            <span className="text-xs font-bold font-mono text-slate-200 truncate">{player.name}</span>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons with Admin Back Home */}
              <div className="mt-8 border-t border-slate-800/80 pt-6 flex justify-between items-center">
                {role === 'host' ? (
                  <>
                    <button
                      onClick={() => {
                        playSynthSound('wrong');
                        setGameState('menu');
                        setRole(null);
                        setRoomId('');
                      }}
                      className="bg-slate-950 border border-slate-800 hover:border-red-500 hover:text-red-400 text-slate-400 px-6 py-3.5 rounded-2xl text-sm font-mono transition-all uppercase font-bold"
                    >
                      ⬅️ Batal & Balik Home
                    </button>
                    <button
                      onClick={startQuiz}
                      disabled={playersList.length === 0}
                      className="bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 hover:from-pink-400 hover:to-cyan-400 text-slate-950 font-black px-8 py-4 rounded-2xl text-lg font-mono tracking-wider shadow-[0_0_20px_rgba(236,72,153,0.4)] disabled:opacity-50 disabled:cursor-not-allowed transition-all uppercase flex items-center gap-2 animate-pulse"
                    >
                      <span>🚀 MULA GAME CARNIVAL! 🎨</span>
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      playSynthSound('wrong');
                      setGameState('menu');
                      setRole(null);
                    }}
                    className="bg-slate-950 border border-slate-800 text-slate-400 hover:text-white px-5 py-2.5 rounded-xl text-sm font-mono"
                  >
                    Keluar Bilik
                  </button>
                )}
              </div>
            </div>

            {/* Right Column */}
            <div className="bg-gradient-to-b from-purple-950/40 to-slate-950 border border-purple-900/60 p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-pink-400 mb-4 font-mono flex items-center gap-2">
                  <span>📜</span> PERATURAN ARENA MUZIK
                </h3>
                
                <ul className="space-y-4 text-xs md:text-sm text-slate-300">
                  <li className="flex gap-2 items-start">
                    <span className="text-pink-500 font-bold text-lg">🔴</span>
                    <span><strong>15 Soalan MCQ:</strong> Fokus kepada fungsi Suno AI dan implikasi PdP digital masa kini.</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-cyan-400 font-bold text-lg">🔵</span>
                    <span><strong>Masa Menentukan Juara:</strong> Markah dikira berasaskan ketepatan jawapan dan kelajuan masa menekan jawapan. Elak persaingan seri!</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-purple-400 font-bold text-lg">🟢</span>
                    <span><strong>Live Score:</strong> Dipaparkan terus secara nyata di hadapan kelas.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 p-4 bg-slate-950/80 border border-purple-900/80 rounded-2xl text-center">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">Dikuasakan Oleh</span>
                <span className="text-sm font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 font-mono">
                  RETRO CARNIVAL ENGINE
                </span>
              </div>
            </div>

          </div>
        )}

        {/* ACTIVE PLAYING STATE */}
        {gameState === 'playing' && (
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left Column */}
            <div className="lg:col-span-2 bg-slate-900/90 border border-purple-800/80 p-6 md:p-8 rounded-3xl shadow-2xl flex flex-col justify-between relative min-h-[500px]">
              
              {/* Question Section Header */}
              <div className="flex justify-between items-center pb-4 border-b border-purple-950 mb-6">
                <div>
                  <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-[10px] font-mono px-3.5 py-1.5 rounded-full uppercase tracking-widest font-black shadow-[0_0_10px_rgba(236,72,153,0.3)]">
                    SOALAN {currentQuestionIndex + 1} DARI {KUIZ_SOALAN.length}
                    {roomId === 'SOLO' && " • (MOD SOLO 🎮)"}
                  </span>
                  <h3 className="text-sm font-mono text-slate-400 mt-3">Topik: Suno AI & Muzik Pendidikan</h3>
                </div>
                {role === 'player' && (
                  <div className="text-right">
                    <div className="text-[10px] font-mono text-slate-400 font-bold">SKOR ANDA</div>
                    <div className="text-lg font-black text-pink-400 font-mono bg-pink-950/30 px-3 py-1 rounded-lg border border-pink-500/20">{localScore} / {KUIZ_SOALAN.length}</div>
                  </div>
                )}
              </div>

              {/* Host view of Question vs Player interactive interface */}
              {role === 'host' ? (
                // HOST PLAYING INTERFACE
                <div className="flex flex-col justify-center items-center text-center flex-grow py-8">
                  <div className="text-6xl mb-4 animate-bounce">🎵🕺💃</div>
                  <h3 className="text-3xl font-black max-w-lg mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
                    Kuiz Suno AI Sedang Berlangsung!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mb-8">
                    Minta semua guru/peserta terus menjawab soalan di peranti masing-masing. Papan pendahulu di sebelah kanan akan dikemaskini secara langsung dengan kesan bercahaya!
                  </p>

                  <div className="flex flex-wrap gap-4 justify-center">
                    <button
                      onClick={() => {
                        playSynthSound('wrong');
                        setGameState('menu');
                        setRole(null);
                        setRoomId('');
                      }}
                      className="bg-slate-950 border border-slate-800 hover:border-red-500 hover:text-red-400 text-slate-400 font-bold py-3 px-6 rounded-xl transition-all font-mono text-sm uppercase"
                    >
                      🏠 Balik ke Menu Utama
                    </button>
                    <button
                      onClick={endQuiz}
                      className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-500 hover:to-indigo-500 active:scale-95 text-white font-black py-4 px-8 rounded-2xl shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all font-mono text-sm uppercase"
                    >
                      🏁 Tamatkan & Lihat Podium Kemenangan 🏆
                    </button>
                    <button
                      onClick={restartQuiz}
                      className="bg-slate-800 border border-slate-700 text-slate-300 hover:text-white font-bold py-3 px-6 rounded-xl transition-all font-mono text-sm uppercase"
                    >
                      🔄 Reset Semula
                    </button>
                  </div>
                </div>
              ) : (
                // PLAYER INTERACTIVE INTERFACE (KAHOOT STYLE - EXTRA ENHANCED MULTICOLOR)
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    {/* The Question */}
                    <h2 className="text-xl md:text-2xl font-black text-slate-100 leading-snug mb-8 bg-slate-950 p-4 rounded-2xl border-l-4 border-pink-500">
                      {KUIZ_SOALAN[currentQuestionIndex].q}
                    </h2>

                    {/* MCQ Choices - HIGHLY ENGAGING MULTICOLOR PALETTES */}
                    <div className="space-y-4 mb-6">
                      {KUIZ_SOALAN[currentQuestionIndex].options.map((opt, idx) => {
                        let baseTheme = "";
                        let icon = "";
                        if (idx === 0) {
                          baseTheme = "border-pink-500/40 bg-pink-950/20 text-pink-300 hover:bg-pink-900/30 hover:border-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]";
                          icon = "🔴";
                        } else if (idx === 1) {
                          baseTheme = "border-cyan-500/40 bg-cyan-950/20 text-cyan-300 hover:bg-cyan-900/30 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]";
                          icon = "🔵";
                        } else {
                          baseTheme = "border-amber-500/40 bg-amber-950/20 text-amber-300 hover:bg-amber-900/30 hover:border-amber-500 hover:shadow-[0_0_15px_rgba(245,158,11,0.3)]";
                          icon = "🟢";
                        }

                        let btnStyle = `${baseTheme}`;

                        if (isAnswered) {
                          if (idx === KUIZ_SOALAN[currentQuestionIndex].ans) {
                            btnStyle = "bg-emerald-950/90 border-emerald-500 text-emerald-300 scale-[1.02] ring-4 ring-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.5)]";
                          } else if (idx === selectedOption) {
                            btnStyle = "bg-rose-950/90 border-rose-500 text-rose-300 opacity-80 shadow-[0_0_20px_rgba(244,63,94,0.3)] ";
                          } else {
                            btnStyle = "border-slate-900 bg-slate-950 opacity-30 text-slate-600 cursor-not-allowed";
                          }
                        }

                        return (
                          <button
                            key={idx}
                            disabled={isAnswered}
                            onClick={() => handleAnswerSubmit(idx)}
                            className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 flex items-center justify-between font-mono text-base font-bold ${btnStyle}`}
                          >
                            <span className="flex items-center gap-3">
                              <span className="text-xl">{icon}</span>
                              <span>{opt}</span>
                            </span>
                            {isAnswered && idx === KUIZ_SOALAN[currentQuestionIndex].ans && (
                              <span className="text-emerald-400 text-2xl font-black animate-bounce">🎉 BETUL!</span>
                            )}
                            {isAnswered && idx === selectedOption && idx !== KUIZ_SOALAN[currentQuestionIndex].ans && (
                              <span className="text-rose-400 text-xl font-bold">❌ SALAH</span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Feedback Overlay Area with dynamic congratulatory emojis */}
                  {isAnswered && (
                    <div className="bg-slate-950 border-2 border-slate-800 p-5 rounded-3xl animate-fade-in flex flex-col md:flex-row justify-between items-center gap-4 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
                      <div className="text-center md:text-left">
                        <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-mono uppercase font-black tracking-widest ${
                          feedback === 'correct' ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/40 shadow-[0_0_10px_rgba(16,185,129,0.2)]' : 'bg-rose-950 text-rose-400 border border-rose-500/40'
                        }`}>
                          {feedback === 'correct' ? '✨ JAWAPAN TEPAT! ✨' : 'ADUH! KURANG TEPAT 💔'}
                        </span>
                        <p className="text-sm font-bold text-slate-200 mt-2 font-mono max-w-md">{feedbackMessage}</p>
                      </div>

                      <div className="flex gap-2 w-full md:w-auto">
                        {roomId === 'SOLO' && (
                          <button
                            onClick={() => {
                              playSynthSound('wrong');
                              setGameState('menu');
                              setRole(null);
                              setRoomId('');
                            }}
                            className="w-1/2 md:w-auto bg-slate-900 border border-slate-700 text-slate-300 hover:text-white px-5 py-3 rounded-xl text-xs font-mono uppercase font-bold"
                          >
                            🏠 Home
                          </button>
                        )}
                        <button
                          onClick={handleNextQuestion}
                          className="w-full md:w-auto bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-extrabold px-8 py-3.5 rounded-xl text-sm font-mono uppercase tracking-widest transition-all shadow-md active:scale-95"
                        >
                          {currentQuestionIndex === KUIZ_SOALAN.length - 1 ? "Lihat Markah Akhir 🏁" : "Seterusnya ➡️"}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Right Column (Live Score / Leaderboard) */}
            <div className="bg-gradient-to-b from-slate-900 via-purple-950/40 to-slate-950 border-2 border-purple-800 p-6 rounded-3xl flex flex-col justify-between shadow-[0_0_20px_rgba(168,85,247,0.1)]">
              <div>
                <div className="flex justify-between items-center mb-6 border-b border-purple-900/60 pb-3">
                  <h3 className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 font-mono uppercase tracking-widest">
                    🏆 LIVE LEADERBOARD
                  </h3>
                  <span className="text-xs text-pink-500 font-mono animate-pulse font-bold flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 bg-pink-500 rounded-full inline-block animate-ping"></span>
                    ONLINE
                  </span>
                </div>

                {/* Leaderboard Table with glowing ranks */}
                <div className="space-y-2.5 max-h-[450px] overflow-y-auto pr-1">
                  {playersList.length === 0 ? (
                    <div className="py-20 text-center text-xs text-slate-500 font-mono">
                      Belum ada pemain menyertai. Jom salin pautan dan jemput mereka! 📡
                    </div>
                  ) : (
                    playersList.slice(0, 10).map((player, idx) => {
                      let bgGrad = "bg-slate-950/80 hover:border-purple-900/80";
                      let badge = "👾";
                      let rankShadow = "";

                      if (idx === 0) {
                        bgGrad = "bg-amber-950/35 border-amber-500 text-amber-200";
                        badge = "🥇 Juara";
                        rankShadow = "shadow-[0_0_12px_rgba(245,158,11,0.4)]";
                      } else if (idx === 1) {
                        bgGrad = "bg-slate-800/40 border-slate-400 text-slate-200";
                        badge = "🥈 Naib Juara";
                        rankShadow = "shadow-[0_0_10px_rgba(148,163,184,0.3)]";
                      } else if (idx === 2) {
                        bgGrad = "bg-amber-950/20 border-amber-700/60 text-amber-600";
                        badge = "🥉 Ketiga";
                        rankShadow = "shadow-[0_0_8px_rgba(180,83,9,0.2)]";
                      }

                      return (
                        <div
                          key={player.id}
                          className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all duration-300 ${bgGrad} ${rankShadow} border-slate-800`}
                        >
                          <div className="flex items-center gap-2 max-w-[70%]">
                            <span className="text-xs font-black font-mono w-6 text-center text-slate-400">{idx + 1}</span>
                            <span className="text-sm font-bold font-mono text-slate-100 truncate">{player.name}</span>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-300 font-mono">
                              {player.score} <span className="text-[10px] text-slate-400 font-bold">BETUL</span>
                            </div>
                            <div className="text-[10px] text-slate-400 font-mono">
                              {(player.totalTime / 1000).toFixed(2)}s {badge}
                            </div>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>

              {role === 'player' && (
                <div className="mt-6 p-4 bg-slate-950/60 rounded-2xl border border-slate-800 text-center shadow-[inset_0_0_10px_rgba(0,0,0,0.8)]">
                  <div className="text-xs text-slate-400 font-mono uppercase tracking-widest">PROGRESS SOALAN</div>
                  <div className="text-2xl font-black text-cyan-400 mt-1 font-mono">
                    {currentQuestionIndex + 1} <span className="text-slate-600">/</span> {KUIZ_SOALAN.length}
                  </div>
                </div>
              )}
            </div>

          </div>
        )}

        {/* FINISHED / RESULTS / PODIUM STATE */}
        {gameState === 'finished' && (
          <div className="w-full max-w-4xl bg-slate-900/90 border-2 border-purple-800 p-8 rounded-3xl shadow-2xl relative overflow-hidden text-center backdrop-blur-md">
            
            {/* Visual Confetti Emojis background overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-20 text-3xl select-none font-mono flex flex-wrap gap-12 justify-center p-10">
              🎉 🥳 ✨ 🏆 🥇 🎸 🎹 🥁 🎤 💎 🌟 ⚡ 🎉 🥳 ✨ 🏆 🥇 🎸 🎹 🥁 🎤 💎 🌟 ⚡
            </div>

            <div className="mb-4">
              <span className="bg-gradient-to-r from-amber-400 to-pink-500 text-slate-950 text-xs font-mono font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-[0_0_15px_rgba(245,158,11,0.4)]">
                🏆 ARENA SELESAI • KEPUTUSAN JUARA 🏆
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black mb-1 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-pink-400 to-cyan-400 tracking-tight leading-none uppercase">
              PENTAS KEPUTUSAN GURU SUNO
            </h2>
            <p className="text-sm text-slate-300 mb-8 font-mono">
              Peserta terpantas dan paling jitu menguasai melodi kecerdasan buatan! 🎮🌟
            </p>

            {/* RETRO PODIUM DISPLAY WITH NEON GLOWS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end justify-center mb-10 max-w-2xl mx-auto relative z-10">
              
              {/* SECOND PLACE */}
              {playersList[1] ? (
                <div className="bg-slate-950 border-2 border-slate-400/80 p-6 rounded-2xl flex flex-col items-center justify-between order-2 md:order-1 h-56 relative shadow-[0_0_15px_rgba(148,163,184,0.25)]">
                  <span className="absolute -top-4 bg-slate-400 text-slate-950 text-xs font-mono font-black py-1.5 px-3 rounded-full uppercase">
                    🥈 NAIB JUARA
                  </span>
                  <div className="text-5xl mt-3 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">🥈</div>
                  <div className="text-center">
                    <h4 className="font-black text-slate-100 font-mono truncate max-w-[150px]">{playersList[1].name}</h4>
                    <p className="text-xs text-slate-400 mt-1 font-mono">
                      Skor: {playersList[1].score}/{KUIZ_SOALAN.length}
                    </p>
                    <p className="text-[10px] text-slate-500 font-mono">
                      Masa: {(playersList[1].totalTime / 1000).toFixed(2)}s
                    </p>
                  </div>
                  <div className="w-full bg-slate-800/50 h-3 rounded-full overflow-hidden mt-3">
                    <div className="bg-slate-400 h-full w-4/5"></div>
                  </div>
                </div>
              ) : (
                <div className="hidden md:block"></div>
              )}

              {/* FIRST PLACE (GOLD GLOW) */}
              {playersList[0] ? (
                <div className="bg-slate-950 border-4 border-amber-400 p-8 rounded-2xl flex flex-col items-center justify-between order-1 md:order-2 h-64 relative shadow-[0_0_25px_rgba(245,158,11,0.45)]">
                  <span className="absolute -top-4 bg-gradient-to-r from-amber-400 to-yellow-300 text-slate-950 text-xs font-mono font-black py-1.5 px-4 rounded-full uppercase animate-bounce shadow-[0_0_10px_rgba(245,158,11,0.4)]">
                    👑 MAHA JUARA 👑
                  </span>
                  <div className="text-6xl mt-3 filter drop-shadow-[0_0_12px_rgba(245,158,11,0.5)]">🥇👑</div>
                  <div className="text-center mt-2">
                    <h4 className="text-xl font-black text-amber-300 font-mono truncate max-w-[180px]">{playersList[0].name}</h4>
                    <p className="text-sm font-black text-slate-100 font-mono mt-1">
                      Skor: {playersList[0].score}/{KUIZ_SOALAN.length}
                    </p>
                    <p className="text-xs text-slate-400 font-mono">
                      Masa: {(playersList[0].totalTime / 1000).toFixed(2)}s
                    </p>
                  </div>
                  <div className="w-full bg-slate-800/50 h-3 rounded-full overflow-hidden mt-3">
                    <div className="bg-amber-500 h-full w-full"></div>
                  </div>
                </div>
              ) : (
                <div className="bg-slate-950 p-8 rounded-2xl h-64 flex items-center justify-center border border-slate-800 font-mono text-xs text-slate-500">
                  Tiada pemain dikesan.
                </div>
              )}

              {/* THIRD PLACE */}
              {playersList[2] ? (
                <div className="bg-slate-950 border-2 border-amber-700/80 p-6 rounded-2xl flex flex-col items-center justify-between order-3 h-48 relative shadow-[0_0_15px_rgba(180,83,9,0.25)]">
                  <span className="absolute -top-4 bg-amber-700 text-amber-100 text-xs font-mono font-black py-1.5 px-3 rounded-full uppercase">
                    🥉 KETIGA
                  </span>
                  <div className="text-4xl mt-3 filter drop-shadow-[0_0_8px_rgba(180,83,9,0.3)]">🥉</div>
                  <div className="text-center">
                    <h4 className="font-black text-slate-100 font-mono truncate max-w-[150px]">{playersList[2].name}</h4>
                    <p className="text-xs text-slate-400 mt-1 font-mono">
                      Skor: {playersList[2].score}/{KUIZ_SOALAN.length}
                    </p>
                    <p className="text-[10px] text-slate-500 font-mono">
                      Masa: {(playersList[2].totalTime / 1000).toFixed(2)}s
                    </p>
                  </div>
                  <div className="w-full bg-slate-800/50 h-3 rounded-full overflow-hidden mt-3">
                    <div className="bg-amber-700 h-full w-2/3"></div>
                  </div>
                </div>
              ) : (
                <div className="hidden md:block"></div>
              )}

            </div>

            {/* FULL COMPREHENSIVE LIST OF OTHERS */}
            <div className="bg-slate-950/80 rounded-2xl p-6 border border-slate-800 text-left max-w-2xl mx-auto mb-8">
              <h3 className="text-sm font-extrabold text-slate-300 font-mono uppercase mb-4 tracking-wider">
                Senarai Penuh Kedudukan Peserta ({playersList.length} orang)
              </h3>
              
              <div className="max-h-60 overflow-y-auto space-y-2 pr-2">
                {playersList.map((player, idx) => (
                  <div 
                    key={player.id} 
                    className="flex justify-between items-center py-2 px-4 rounded-lg bg-slate-900 border border-purple-950/40 text-xs font-mono text-slate-300"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500 font-bold w-6">{idx + 1}.</span>
                      <span className="font-bold text-slate-200">{player.name}</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="font-bold text-amber-300">{player.score} Betul</span>
                      <span className="text-slate-500">{(player.totalTime / 1000).toFixed(2)}s</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RETRO CONTROL ACTIONS */}
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  playSynthSound('click');
                  setGameState('menu');
                  setRole(null);
                  setRoomId('');
                  setPlayersList([]);
                  setSessionData(null);
                }}
                className="bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-300 font-bold py-3 px-6 rounded-xl transition-all font-mono text-sm uppercase"
              >
                🏠 Kembali ke Menu Utama
              </button>
              {role === 'host' && (
                <button
                  onClick={restartQuiz}
                  className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-500 hover:to-indigo-500 text-white font-black py-3 px-6 rounded-xl shadow-lg transition-all font-mono text-sm uppercase"
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
        <p className="mt-1">Dicipta menggunakan enjin audio & pangkalan data real-time Firestore.</p>
      </footer>

    </div>
  );
}
