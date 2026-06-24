// Wait until the external frames file (Dropbox) is loaded
function whenFramesReady(cb) {
  if (window.frames && window.frames.length) return cb();
  const iv = setInterval(() => {
    if (window.frames && window.frames.length) {
      clearInterval(iv);
      cb();
    }
  }, 50);
}

whenFramesReady(() => {
  const ansi_up = new AnsiUp();
  const asciiEl = document.getElementById('ascii');
  const fps = 12;

  // --- Auto-detect top crop ---
  const ANSI_RE = /\x1B\[[0-?]*[ -/]*[@-~]/g;
  const BG_SET = new Set(['m', ' ']); // treat 'm' and spaces as background

  function detectTopCrop(frame, maxScan = 60, threshold = 0.1) {
    const lines = frame.replace(ANSI_RE, '').split('\n');
    const limit = Math.min(maxScan, lines.length);
    for (let r = 0; r < limit; r++) {
      const line = lines[r] || '';
      if (!line.length) continue;
      let fg = 0, total = 0;
      for (let i = 0; i < line.length; i++) {
        const ch = line[i];
        if (ch !== '\r' && ch !== '\n') {
          total++;
          if (!BG_SET.has(ch)) fg++;
        }
      }
      if (total > 0 && fg / total >= threshold) {
        return r;
      }
    }
    return 0; // fallback
  }

  const first = window.frames[0] || "";
  const TOP_CROP = detectTopCrop(first, 60, 0.08);
  const BOTTOM_CROP = 0;

  function cropFrame(frame) {
    const lines = frame.split('\n');
    const start = Math.min(TOP_CROP, lines.length);
    const end = BOTTOM_CROP ? -BOTTOM_CROP : undefined;
    return lines.slice(start, end).join('\n');
  }

  // --- Animate ---
  let i = 0;
  function draw() {
    const raw = window.frames[i] || "";
    const cropped = cropFrame(raw);
    asciiEl.innerHTML = ansi_up.ansi_to_html(cropped); // preserve color
    i = (i + 1) % window.frames.length;
  }

  setInterval(draw, 1000 / fps);
  draw();
});