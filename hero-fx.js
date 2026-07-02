/* Koken Labs — hero-fx.js
   Subtle "chaos to clarity" constellation: scattered points drift into a calm
   ordered line as they cross the hero. Canvas only; hidden under
   prefers-reduced-motion (CSS) and skipped here too. Lightweight (~40 nodes). */
(function () {
  var canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var ctx = canvas.getContext('2d');
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var W, H, nodes = [];
  var N = 40;

  function resize() {
    var r = canvas.parentElement.getBoundingClientRect();
    W = r.width; H = r.height;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function spawn(i) {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: 1 + Math.random() * 1.6,
      p: i / N
    };
  }

  function init() {
    resize();
    nodes = [];
    for (var i = 0; i < N; i++) nodes.push(spawn(i));
  }

  function tick() {
    ctx.clearRect(0, 0, W, H);
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      // Chaos on the left eases into order on the right.
      var order = Math.max(0, Math.min(1, n.x / W));       // 0 = chaos, 1 = clarity
      var targetY = H * 0.5;
      n.x += n.vx + 0.12;                                   // slow drift rightward
      n.y += n.vy * (1 - order) + (targetY - n.y) * 0.0035 * order;
      if (n.x > W + 12) { nodes[i] = spawn(i); nodes[i].x = -10; continue; }
      if (n.y < -12 || n.y > H + 12) n.vy *= -1;

      // links to close neighbors
      for (var j = i + 1; j < nodes.length; j++) {
        var m = nodes[j], dx = n.x - m.x, dy = n.y - m.y, d2 = dx * dx + dy * dy;
        if (d2 < 110 * 110) {
          var a = (1 - Math.sqrt(d2) / 110) * 0.22;
          ctx.strokeStyle = 'rgba(162,75,255,' + a.toFixed(3) + ')';
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(n.x, n.y); ctx.lineTo(m.x, m.y); ctx.stroke();
        }
      }
      // node: violet in chaos, pink as it clarifies
      var cr = Math.round(162 + (255 - 162) * order);
      var cg = Math.round(75 + (83 - 75) * order);
      var cb = Math.round(255 + (177 - 255) * order);
      ctx.fillStyle = 'rgba(' + cr + ',' + cg + ',' + cb + ',0.75)';
      ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill();
    }
    raf = requestAnimationFrame(tick);
  }

  var raf;
  init();
  tick();
  var rt;
  window.addEventListener('resize', function () {
    clearTimeout(rt); rt = setTimeout(init, 150);
  });
  // Pause when tab hidden
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) cancelAnimationFrame(raf); else tick();
  });
})();
