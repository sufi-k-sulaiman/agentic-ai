// Web Audio API sound engine for games
// All sounds are synthesized procedurally - no external files needed

let audioCtx = null;

const getAudioCtx = () => {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    return audioCtx;
};

const playTone = ({ frequency = 440, type = 'square', duration = 0.1, volume = 0.3, attack = 0.01, decay = 0.05, sustain = 0.3, release = 0.1, pitchEnd = null, delay = 0 }) => {
    try {
        const ctx = getAudioCtx();
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);
        oscillator.type = type;
        oscillator.frequency.setValueAtTime(frequency, ctx.currentTime + delay);
        if (pitchEnd) oscillator.frequency.exponentialRampToValueAtTime(pitchEnd, ctx.currentTime + delay + duration);
        gainNode.gain.setValueAtTime(0, ctx.currentTime + delay);
        gainNode.gain.linearRampToValueAtTime(volume, ctx.currentTime + delay + attack);
        gainNode.gain.linearRampToValueAtTime(volume * sustain, ctx.currentTime + delay + attack + decay);
        gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + delay + duration + release);
        oscillator.start(ctx.currentTime + delay);
        oscillator.stop(ctx.currentTime + delay + duration + release + 0.05);
    } catch (e) {}
};

const playNoise = ({ duration = 0.1, volume = 0.2, filter = 1000, delay = 0 }) => {
    try {
        const ctx = getAudioCtx();
        const bufferSize = ctx.sampleRate * duration;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
        const source = ctx.createBufferSource();
        source.buffer = buffer;
        const filterNode = ctx.createBiquadFilter();
        filterNode.type = 'bandpass';
        filterNode.frequency.value = filter;
        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(volume, ctx.currentTime + delay);
        gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + delay + duration);
        source.connect(filterNode);
        filterNode.connect(gainNode);
        gainNode.connect(ctx.destination);
        source.start(ctx.currentTime + delay);
        source.stop(ctx.currentTime + delay + duration + 0.05);
    } catch (e) {}
};

export const sounds = {
    // Shooting / laser fire
    shoot: () => {
        playTone({ frequency: 880, type: 'sawtooth', duration: 0.08, volume: 0.25, pitchEnd: 220, release: 0.05 });
    },

    // Laser beam (Space Battle FPS style)
    laserFire: () => {
        playTone({ frequency: 1200, type: 'sawtooth', duration: 0.12, volume: 0.2, pitchEnd: 400, attack: 0.005, release: 0.05 });
    },

    // Enemy/target explosion
    explosion: () => {
        playNoise({ duration: 0.35, volume: 0.5, filter: 800 });
        playTone({ frequency: 150, type: 'sine', duration: 0.3, volume: 0.3, pitchEnd: 40, release: 0.2 });
    },

    // Big explosion (bomb / base destroyed)
    bigExplosion: () => {
        playNoise({ duration: 0.7, volume: 0.6, filter: 500 });
        playTone({ frequency: 120, type: 'sine', duration: 0.5, volume: 0.4, pitchEnd: 30, release: 0.4 });
        playNoise({ duration: 0.5, volume: 0.3, filter: 300, delay: 0.1 });
    },

    // Player/hero hit
    playerHit: () => {
        playNoise({ duration: 0.2, volume: 0.3, filter: 600 });
        playTone({ frequency: 200, type: 'square', duration: 0.15, volume: 0.2, pitchEnd: 80, release: 0.1 });
    },

    // Correct answer / level up
    levelUp: () => {
        [523, 659, 784, 1047].forEach((freq, i) => {
            playTone({ frequency: freq, type: 'sine', duration: 0.15, volume: 0.3, delay: i * 0.1 });
        });
    },

    // Wrong answer
    wrong: () => {
        playTone({ frequency: 200, type: 'square', duration: 0.3, volume: 0.3, pitchEnd: 100, release: 0.15 });
    },

    // Score / collect
    score: () => {
        playTone({ frequency: 660, type: 'sine', duration: 0.08, volume: 0.25 });
        playTone({ frequency: 880, type: 'sine', duration: 0.08, volume: 0.25, delay: 0.08 });
    },

    // Tetris line clear
    lineClear: () => {
        [330, 440, 550, 660].forEach((freq, i) => {
            playTone({ frequency: freq, type: 'triangle', duration: 0.12, volume: 0.3, delay: i * 0.06 });
        });
    },

    // Tetris piece land
    pieceLand: () => {
        playTone({ frequency: 180, type: 'sine', duration: 0.1, volume: 0.2, attack: 0.005, release: 0.08 });
    },

    // Tetris hard drop
    hardDrop: () => {
        playTone({ frequency: 300, type: 'square', duration: 0.08, volume: 0.2, pitchEnd: 150 });
        playTone({ frequency: 200, type: 'square', duration: 0.1, volume: 0.25, pitchEnd: 100, delay: 0.05 });
    },

    // Tetris move piece
    movePiece: () => {
        playTone({ frequency: 220, type: 'sine', duration: 0.04, volume: 0.1 });
    },

    // Tetris rotate
    rotatePiece: () => {
        playTone({ frequency: 440, type: 'sine', duration: 0.05, volume: 0.12 });
    },

    // Game over
    gameOver: () => {
        [400, 350, 300, 250, 200].forEach((freq, i) => {
            playTone({ frequency: freq, type: 'sawtooth', duration: 0.2, volume: 0.25, delay: i * 0.12 });
        });
    },

    // Bomb deploy
    bomb: () => {
        playTone({ frequency: 60, type: 'sine', duration: 0.5, volume: 0.4, pitchEnd: 20, release: 0.3 });
        playNoise({ duration: 0.6, volume: 0.5, filter: 400, delay: 0.05 });
    },

    // Shield hit
    shieldHit: () => {
        playTone({ frequency: 800, type: 'sine', duration: 0.15, volume: 0.2, pitchEnd: 400, release: 0.1 });
        playNoise({ duration: 0.1, volume: 0.15, filter: 2000 });
    },

    // Word destroyed (vocabulary game)
    wordDestroyed: () => {
        playTone({ frequency: 523, type: 'triangle', duration: 0.1, volume: 0.25 });
        playTone({ frequency: 784, type: 'triangle', duration: 0.1, volume: 0.2, delay: 0.08 });
    },

    // Combo
    combo: () => {
        playTone({ frequency: 1047, type: 'sine', duration: 0.12, volume: 0.3 });
        playTone({ frequency: 1319, type: 'sine', duration: 0.12, volume: 0.25, delay: 0.1 });
    },
};