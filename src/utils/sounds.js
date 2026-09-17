// Sonidos simples con Web Audio API (sin archivos externos)
let audioCtx = null;
let muted = false;

try {
  muted = localStorage.getItem('console-muted') === '1';
} catch {
  muted = false;
}

const getCtx = () => {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
};

const beep = ({ freq = 440, duration = 0.08, type = 'square', gain = 0.08, slideTo }) => {
  if (muted) return;
  try {
    const ctx = getCtx();
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    if (slideTo) {
      osc.frequency.exponentialRampToValueAtTime(slideTo, ctx.currentTime + duration);
    }
    g.gain.setValueAtTime(gain, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.connect(g);
    g.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch {
    // silencioso si el navegador bloquea audio
  }
};

export const sounds = {
  click: () => beep({ freq: 520, duration: 0.05, type: 'square', gain: 0.06 }),
  move: () => beep({ freq: 380, duration: 0.04, type: 'triangle', gain: 0.05 }),
  confirm: () => beep({ freq: 660, duration: 0.09, type: 'square', gain: 0.07, slideTo: 880 }),
  back: () => beep({ freq: 320, duration: 0.08, type: 'triangle', gain: 0.06, slideTo: 220 }),
  powerOn: () => {
    beep({ freq: 220, duration: 0.12, type: 'sawtooth', gain: 0.07, slideTo: 440 });
    setTimeout(() => beep({ freq: 440, duration: 0.15, type: 'square', gain: 0.06, slideTo: 660 }), 100);
  },
  powerOff: () => beep({ freq: 400, duration: 0.2, type: 'sawtooth', gain: 0.05, slideTo: 120 }),
  open: () => beep({ freq: 500, duration: 0.1, type: 'square', gain: 0.07, slideTo: 750 }),
};

export const isMuted = () => muted;

export const toggleMute = () => {
  muted = !muted;
  try {
    localStorage.setItem('console-muted', muted ? '1' : '0');
  } catch {
    /* ignore */
  }
  if (!muted) sounds.click();
  return muted;
};
