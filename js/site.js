/* MedicMais Sobradinho · comportamento do site */
// Cabeçalho encolhe ao rolar; faixa mostra se a clínica está aberta agora (horário de Brasília)
(function(){
  var top=document.getElementById('top');
  function onScroll(){top.classList.toggle('scrolled',window.scrollY>40);}
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();
  try{
    var now=new Date(new Date().toLocaleString('en-US',{timeZone:'America/Sao_Paulo'}));
    var d=now.getDay(),h=now.getHours()+now.getMinutes()/60,txt,open=false;
    if(d>=1&&d<=5){open=h>=8&&h<18;txt=open?'Aberto agora · até 18h':(h<8?'Fechado · abre hoje às 8h':(d===5?'Fechado · abre sábado às 8h':'Fechado · abre amanhã às 8h'));}
    else if(d===6){open=h>=8&&h<12;txt=open?'Aberto agora · até 12h':(h<8?'Fechado · abre hoje às 8h':'Fechado · abre segunda às 8h');}
    else{txt='Fechado hoje · abre segunda às 8h';}
    document.getElementById('openText').textContent=txt;
    if(!open)document.getElementById('openDot').classList.add('closed');
  }catch(e){}
})();

// No celular, a barra com o botão só aparece depois que o botão principal do topo sai da tela
(function(){
  var bar=document.getElementById('bar'), heroBtn=document.querySelector('.hero .btn');
  if(!('IntersectionObserver' in window)||!heroBtn){bar.hidden=false;return;}
  new IntersectionObserver(function(e){bar.hidden=e[0].isIntersecting||e[0].boundingClientRect.top>0;}).observe(heroBtn);
})();
