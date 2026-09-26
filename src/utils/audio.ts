/**
 * Web Audio API Cat Purr Synthesizer
 * Produces a realistic 25-60Hz harmonic rumble with rhythmic breathing modulation.
 */

class PurrSynthesizer {
  private audioCtx: AudioContext | null = null;
  private isPlaying = false;
  private gainNode: GainNode | null = null;
  private lfoNode: OscillatorNode | null = null;
  private osc1: OscillatorNode | null = null;
  private osc2: OscillatorNode | null = null;

  public init() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.audioCtx = new AudioContextClass();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start() {
    this.init();
    if (!this.audioCtx) return;

    this.stop(); // Ensure clean state

    try {
      const now = this.audioCtx.currentTime;

      // Master output gain
      this.gainNode = this.audioCtx.createGain();
      this.gainNode.gain.setValueAtTime(0.01, now);
      this.gainNode.gain.exponentialRampToValueAtTime(0.18, now + 0.5);

      // Low pass filter to keep it deep and cozy
      const filter = this.audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(110, now);
      filter.Q.setValueAtTime(3.0, now);

      // Primary low rumble oscillator (triangle gives nice warm purr texture)
      this.osc1 = this.audioCtx.createOscillator();
      this.osc1.type = 'triangle';
      this.osc1.frequency.setValueAtTime(32, now);

      // Secondary oscillator slightly detuned for acoustic richness
      this.osc2 = this.audioCtx.createOscillator();
      this.osc2.type = 'sawtooth';
      this.osc2.frequency.setValueAtTime(34, now);

      // Sub-gain for the harsher oscillator
      const osc2Gain = this.audioCtx.createGain();
      osc2Gain.gain.setValueAtTime(0.3, now);

      // LFO for rhythmic purr vibration (~24-28 purr pulses per second)
      this.lfoNode = this.audioCtx.createOscillator();
      this.lfoNode.type = 'sine';
      this.lfoNode.frequency.setValueAtTime(26, now); // ~26 purr strokes/sec

      const lfoGain = this.audioCtx.createGain();
      lfoGain.gain.setValueAtTime(0.6, now);

      // Connect LFO to modulate filter and master volume
      this.lfoNode.connect(lfoGain);
      lfoGain.connect(filter.frequency);

      // Connect oscillators
      this.osc1.connect(filter);
      this.osc2.connect(osc2Gain);
      osc2Gain.connect(filter);

      filter.connect(this.gainNode);
      this.gainNode.connect(this.audioCtx.destination);

      this.osc1.start(now);
      this.osc2.start(now);
      this.lfoNode.start(now);

      this.isPlaying = true;
    } catch (e) {
      console.warn('Audio synthesis error:', e);
    }
  }

  public stop() {
    if (this.gainNode && this.audioCtx) {
      const now = this.audioCtx.currentTime;
      this.gainNode.gain.cancelScheduledValues(now);
      this.gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      setTimeout(() => {
        try {
          this.osc1?.stop();
          this.osc2?.stop();
          this.lfoNode?.stop();
          this.osc1?.disconnect();
          this.osc2?.disconnect();
          this.lfoNode?.disconnect();
          this.gainNode?.disconnect();
        } catch {
          // ignore cleanup errors
        }
      }, 350);
    }
    this.isPlaying = false;
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const purrSynth = new PurrSynthesizer();
