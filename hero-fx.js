// Koken Labs — hero node constellation (hero-only, brand Nova gradient)
(function(){
  var canvas = document.querySelector('.hero-canvas');
  if(!canvas) return;
  var hero = canvas.closest('.hero');
  var ctx = canvas.getContext('2d');
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var W = 0, H = 0, nodes = [], COUNT = 0, raf = null;
  var mouse = {x:0,y:0,tx:0,ty:0}, scrollY = 0;

  function mix(a,b,t){ return a + (b-a)*t; }
  function nova(t){ // violet (#A24BFF) -> pink (#FF53B1)
    return [Math.round(mix(162,255,t)), Math.round(mix(75,83,t)), Math.round(mix(255,177,t))];
  }
  function size(){
    W = hero.clientWidth; H = hero.clientHeight;
    canvas.width = W*dpr; canvas.height = H*dpr;
    canvas.style.width = W+'px'; canvas.style.height = H+'px';
    ctx.setTransform(dpr,0,0,dpr,0,0);
    COUNT = Math.max(26, Math.min(58, Math.round(W*H/27000)));
    init();
  }
  function init(){
    nodes = [];
    for(var i=0;i<COUNT;i++){
      nodes.push({
        x:Math.random()*W, y:Math.random()*H,
        vx:(Math.random()-0.5)*0.18, vy:(Math.random()-0.5)*0.18,
        r:Math.random()*1.5+0.7, ph:Math.random()*Math.PI*2
      });
    }
  }
  function draw(now){
    ctx.clearRect(0,0,W,H);
    mouse.x += (mouse.tx-mouse.x)*0.05;
    mouse.y += (mouse.ty-mouse.y)*0.05;
    var px = mouse.x*14, py = mouse.y*14 + scrollY*0.05;
    var MAX = Math.min(150, W/6);
    for(var i=0;i<nodes.length;i++){
      var n=nodes[i]; n.x+=n.vx; n.y+=n.vy;
      if(n.x<-20)n.x=W+20; if(n.x>W+20)n.x=-20; if(n.y<-20)n.y=H+20; if(n.y>H+20)n.y=-20;
    }
    for(var i=0;i<nodes.length;i++){
      var a=nodes[i];
      for(var j=i+1;j<nodes.length;j++){
        var b=nodes[j], dx=a.x-b.x, dy=a.y-b.y, d2=dx*dx+dy*dy;
        if(d2<MAX*MAX){
          var d=Math.sqrt(d2), alpha=(1-d/MAX)*0.20, c=nova(((a.x+b.x)/2)/W);
          ctx.strokeStyle='rgba('+c[0]+','+c[1]+','+c[2]+','+alpha+')';
          ctx.lineWidth=0.6; ctx.beginPath();
          ctx.moveTo(a.x+px,a.y+py); ctx.lineTo(b.x+px,b.y+py); ctx.stroke();
        }
      }
    }
    for(var i=0;i<nodes.length;i++){
      var n=nodes[i], pulse=0.55+0.45*Math.sin(now*0.001+n.ph), c=nova(n.x/W);
      ctx.fillStyle='rgba('+c[0]+','+c[1]+','+c[2]+','+(0.55*pulse)+')';
      ctx.beginPath(); ctx.arc(n.x+px,n.y+py,n.r,0,Math.PI*2); ctx.fill();
    }
    raf = requestAnimationFrame(draw);
  }
  function start(){ if(!raf && !reduced) raf=requestAnimationFrame(draw); }
  function stop(){ if(raf){ cancelAnimationFrame(raf); raf=null; } }

  window.addEventListener('resize', size);
  window.addEventListener('scroll', function(){ scrollY=window.scrollY||window.pageYOffset||0; }, {passive:true});
  window.addEventListener('mousemove', function(e){
    mouse.tx=(e.clientX/window.innerWidth-0.5)*2;
    mouse.ty=(e.clientY/window.innerHeight-0.5)*2;
  }, {passive:true});
  if('IntersectionObserver' in window){
    new IntersectionObserver(function(es){ es.forEach(function(e){ e.isIntersecting?start():stop(); }); },{threshold:0}).observe(hero);
  }
  document.addEventListener('visibilitychange', function(){ document.hidden?stop():start(); });

  size();
  if(reduced){ requestAnimationFrame(function(now){ draw(now); stop(); }); } else { start(); }
})();
