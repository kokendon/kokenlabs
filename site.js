// Koken Labs — site interactions
(function(){
  // mobile nav
  var t=document.querySelector('.nav-toggle'),l=document.querySelector('.nav-links');
  if(t&&l)t.addEventListener('click',function(){l.classList.toggle('open');});
  // reveal on scroll
  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver'in window){
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
    },{threshold:.12});
    els.forEach(function(e){io.observe(e);});
  }else{els.forEach(function(e){e.classList.add('in');});}
  // contact form (no backend) -> mailto
  var f=document.getElementById('contactForm');
  if(f)f.addEventListener('submit',function(ev){
    ev.preventDefault();
    var d=new FormData(f);
    var body=encodeURIComponent('Name: '+(d.get('name')||'')+'\nCompany: '+(d.get('company')||'')+'\nEmail: '+(d.get('email')||'')+'\nService: '+(d.get('service')||'')+'\n\n'+(d.get('message')||''));
    var subj=encodeURIComponent('New project inquiry — '+(d.get('company')||d.get('name')||'Koken Labs'));
    window.location.href='mailto:hello@kokenlabs.ai?subject='+subj+'&body='+body;
    var note=document.getElementById('formNote');
    if(note)note.style.display='block';
  });
})();
