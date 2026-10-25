/* 페이지를 그리는 코드 — 보통 고칠 필요 없어요. 내용은 data.js 에서 고치세요. */
(function(){
var D=document,root=D.documentElement,page=D.body.getAttribute('data-page'),app=D.getElementById('app');
var TRACE='M0 39.8 L3 40.5 L6 39.8 L9 39.7 L12 39.2 L15 39.8 L18 41.0 L21 40.4 L24 40.9 L27 40.2 L30 40.4 L33 40.2 L36 38.5 L39 40.8 L42 40.5 L45 40.4 L48 38.5 L51 38.4 L54 39.2 L57 39.6 L60 40.3 L63 40.0 L66 40.5 L69 39.4 L72 40.3 L75 40.4 L78 39.4 L81 41.5 L84 40.5 L87 41.1 L90 39.4 L93 39.3 L96 39.7 L99 39.9 L102 40.6 L105 40.2 L108 39.6 L111 39.1 L114 39.5 L117 41.1 L120 39.3 L123 40.2 L126 40.4 L129 38.7 L132 40.0 L135 41.2 L138 38.2 L141 39.7 L144 39.9 L147 39.3 L150 40.4 L153 39.9 L156 38.7 L159 40.7 L162 40.6 L165 40.9 L168 41.3 L171 40.3 L174 40.1 L177 38.8 L180 40.6 L183 39.4 L186 39.6 L189 38.9 L192 39.1 L195 39.5 L198 41.2 L201 38.2 L204 38.7 L207 40.2 L210 41.3 L213 40.5 L216 38.3 L219 37.7 L222 40.3 L225 39.3 L228 39.0 L231 40.9 L234 41.0 L237 40.1 L240 40.2 L243 40.4 L246 41.4 L249 40.6 L252 40.5 L255 40.5 L258 38.6 L261 41.2 L264 40.9 L267 40.5 L270 38.2 L273 39.4 L276 40.8 L279 38.4 L282 39.8 L285 40.9 L288 38.8 L291 41.4 L294 40.5 L297 39.9 L300 40.3 L303 41.7 L306 39.9 L309 37.4 L312 41.8 L315 43.6 L318 36.2 L321 38.5 L324 42.5 L327 44.6 L330 33.3 L333 41.9 L336 42.4 L339 40.2 L342 32.9 L345 44.1 L348 45.1 L351 34.8 L354 38.5 L357 43.1 L360 42.3 L363 33.2 L366 43.1 L369 44.1 L372 41.0 L375 33.1 L378 44.9 L381 43.1 L384 36.9 L387 36.9 L390 45.3 L393 41.9 L396 34.8 L399 41.8 L402 45.1 L405 40.7 L408 33.2 L411 44.2 L414 41.8 L417 38.8 L420 35.9 L423 45.5 L426 42.4 L429 33.2 L432 39.4 L435 43.9 L438 40.2 L441 34.8 L444 43.6 L447 42.1 L450 38.7 L453 35.7 L456 47.4 L459 40.3 L462 36.3 L465 39.5 L468 43.8 L471 39.2 L474 33.3 L477 42.6 L480 42.6 L483 52.2 L486 55.0 L489 56.1 L492 43.5 L495 28.4 L498 7.6 L501 13.5 L504 36.7 L507 66.5 L510 74.3 L513 50.5 L516 33.7 L519 24.1 L522 26.6 L525 16.3 L528 30.6 L531 59.1 L534 75.2 L537 53.8 L540 30.7 L543 24.9 L546 28.2 L549 27.5 L552 32.6 L555 53.1 L558 66.7 L561 55.8 L564 36.2 L567 25.0 L570 22.3 L573 32.7 L576 40.5 L579 49.2 L582 51.7 L585 54.0 L588 45.4 L591 23.9 L594 18.9 L597 31.1 L600 48.6 L603 46.3 L606 49.5 L609 50.6 L612 47.3 L615 26.9 L618 22.7 L621 33.9 L624 44.0 L627 49.3 L630 48.6 L633 48.4 L636 39.6 L639 35.3 L642 27.6 L645 31.3 L648 39.0 L651 50.5 L654 52.3 L657 43.5 L660 38.2 L663 37.9 L666 35.8 L669 30.0 L672 36.2 L675 49.4 L678 52.9 L681 42.1 L684 38.5 L687 36.2 L690 34.1 L693 31.8 L696 36.2 L699 47.0 L702 49.1 L705 43.7 L708 38.6 L711 36.5 L714 33.4 L717 38.2 L720 39.7 L723 44.4 L726 45.5 L729 48.0 L732 40.4 L735 34.8 L738 31.0 L741 38.0 L744 40.3 L747 41.5 L750 42.3 L753 45.5 L756 42.1 L759 33.7 L762 34.1 L765 38.5 L768 43.2 L771 41.2 L774 44.3 L777 44.5 L780 40.1 L783 36.0 L786 35.5 L789 38.3 L792 37.7 L795 43.5 L798 44.6 L801 42.2 L804 38.7 L807 40.7 L810 37.5 L813 34.9 L816 37.6 L819 43.7 L822 44.6 L825 39.2 L828 38.9 L831 38.8 L834 36.8 L837 36.0 L840 39.2 L843 42.8 L846 40.7 L849 41.0 L852 39.8 L855 36.7 L858 38.1 L861 38.6 L864 38.2 L867 40.2 L870 41.6 L873 42.5 L876 40.7 L879 38.3 L882 38.0 L885 40.8 L888 41.2 L891 40.5 L894 42.0 L897 40.9 L900 40.9 L903 38.5 L906 38.5 L909 39.3 L912 41.8 L915 38.4 L918 42.6 L921 43.3 L924 39.1 L927 39.4 L930 40.9 L933 38.5 L936 40.2 L939 42.4 L942 40.5 L945 40.1 L948 39.9 L951 41.3 L954 38.5 L957 38.2 L960 38.9 L963 41.8 L966 41.4 L969 39.9 L972 39.5 L975 39.4 L978 41.1 L981 39.6 L984 41.2 L987 38.5 L990 41.3 L993 40.6 L996 42.2 L999 39.4';
if(typeof SITE==='undefined'){app.textContent='data.js 를 불러오지 못했어요. data.js 의 쉼표와 따옴표를 확인해 주세요. (Mac Chrome: Option+Cmd+J 로 오류 위치를 볼 수 있어요)';return}
var S=SITE;

function el(t,c,x){var e=D.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e}
function add(p){for(var i=1;i<arguments.length;i++)if(arguments[i])p.appendChild(arguments[i]);return p}
function T(o,l){if(typeof o==='string')return o;if(!o)return '';return o[l]||o[l==='ko'?'en':'ko']||''}
function sp(o){var f=D.createDocumentFragment();['ko','en'].forEach(function(l){f.appendChild(el('span',l,T(o,l)))});return f}
function pair(tag,o,cls){var f=D.createDocumentFragment();['ko','en'].forEach(function(l){f.appendChild(el(tag,l+(cls?' '+cls:''),T(o,l)))});return f}
function link(o,url,cls){var a=el('a',cls);a.href=url;if(/^https?:/.test(url)){a.target='_blank';a.rel='noopener'}a.appendChild(sp(o));return a}
function rich(s){var f=D.createDocumentFragment();String(s).split('**').forEach(function(p,i){if(p)f.appendChild(i%2?el('strong',null,p):D.createTextNode(p))});return f}
function q(k){return new URLSearchParams(location.search).get(k)}
function byId(list,id){return (list||[]).filter(function(x){return x.id===id})[0]}
function sec(title,id){var s=el('section'),h=el('h2');if(id)s.id=id;h.appendChild(sp(title));return add(s,h)}
function ptitle(o){var h=el('h1','ptitle');h.appendChild(sp(o));return h}
function back(url,o){var a=link(o,url,'back');return a}
function btns(list){if(!list||!list.length)return null;var d=el('div','btns');list.forEach(function(k){d.appendChild(link(k,k.url,'btn'))});return d}
function figs(list,cls){
  if(!list||!list.length)return null;var d=el('div',cls||'figs');
  list.forEach(function(f){
    var fg=el('figure'),a=el('a'),im=el('img');a.href=f.src;a.target='_blank';a.rel='noopener';
    im.src=f.src;im.loading='lazy';im.alt=T(f,'en');a.appendChild(im);fg.appendChild(a);
    var c=el('figcaption');c.appendChild(sp(f));fg.appendChild(c);d.appendChild(fg);
  });
  return d;
}
function notFound(url,o){var s=el('section');add(s,el('p','ko','찾을 수 없는 페이지예요.'),el('p','en','Page not found.'),back(url,o));return s}

/* ---------- 언어 ---------- */
var saved=null;try{saved=localStorage.getItem('lang')}catch(e){}
if(!saved)saved=(navigator.language||'ko').toLowerCase().indexOf('ko')===0?'ko':'en';
function setLang(l){root.lang=l;try{localStorage.setItem('lang',l)}catch(e){}}
setLang(saved);

/* ---------- 공통 조각 ---------- */
function nav(){
  var n=el('nav'),L=el('div','links');n.setAttribute('aria-label','Main');
  [['index.html','home',{ko:'홈',en:'Home'},1],
   ['research.html','research',{ko:'연구',en:'Research'},S.projects.length],
   ['publications.html','publications',{ko:'논문',en:'Publications'},S.publications.length],
   ['cv.html','cv',{ko:'학력·이력',en:'CV'},1],
   ['photos.html','photos',{ko:'사진',en:'Photos'},S.albums.length]
  ].forEach(function(t){
    if(!t[3])return;var a=link(t[2],t[0]);
    if(t[1]===page||(page==='project'&&t[1]==='research')||(page==='album'&&t[1]==='photos'))a.setAttribute('aria-current','page');
    L.appendChild(a);
  });
  var b=el('button','lang');b.type='button';b.setAttribute('aria-label','Switch language');
  b.appendChild(el('span','ko','English'));b.appendChild(el('span','en','한국어'));
  b.onclick=function(){setLang(root.lang==='ko'?'en':'ko')};
  return add(n,L,b);
}
function footer(){
  var s=sec({ko:'연락처',en:'Contact'},'contact'),dl=el('dl'),C=S.contact;
  function row(l,node){dl.appendChild(pair('dt',l));dl.appendChild(add(el('dd'),node))}
  var m=el('a',null,C.email);m.href='mailto:'+C.email;row({ko:'이메일',en:'Email'},m);
  row({ko:'소속',en:'Affiliation'},D.createTextNode(C.affiliation));
  if(C.advisor)row({ko:'지도교수',en:'Advisor'},D.createTextNode(C.advisor));
  if(S.links.length){var ll=el('div','linklist');S.links.forEach(function(k){ll.appendChild(link(k,k.url))});row({ko:'링크',en:'Links'},ll)}
  if(S.show.cv)row({ko:'CV',en:'CV'},link({ko:'PDF 내려받기',en:'Download PDF'},'Suhee_Park_CV.pdf'));
  s.appendChild(dl);
  var f=el('footer');f.appendChild(D.createTextNode('© '+new Date().getFullYear()+' Suhee Park'));
  var w=D.createDocumentFragment();return add(w,s,f);
}
function hero(){
  var P=S.profile,c=el('div','hero-card'),h=el('header','hero'),ph=el('div','photo'),im=el('img'),r=el('div'),h1=el('h1');
  im.src=P.photo;im.alt=T(P.name,'ko')+' '+T(P.name,'en');im.onerror=function(){im.remove()};
  var ini=el('span',null,'SP');ini.setAttribute('aria-hidden','true');add(ph,im,ini);
  h1.appendChild(sp(P.name));add(r,h1,pair('p',P.role,'role'));
  ['ko','en'].forEach(function(l){(P.intro[l]||[]).forEach(function(t){r.appendChild(el('p',l+' intro',t))})});
  var ul=el('ul','tags');S.keywords.forEach(function(k){ul.appendChild(add(el('li'),sp(k)))});r.appendChild(ul);
  add(h,ph,r);c.appendChild(h);
  var w=el('div','trace-wrap');
  w.innerHTML='<svg class="trace" viewBox="0 0 1000 80" preserveAspectRatio="none" aria-hidden="true"><path pathLength="1" d="'+TRACE+'"/></svg><span class="phase" style="left:30%">P</span><span class="phase" style="left:48%">S</span>';
  return add(c,w);
}
function projCard(p){
  var a=el('a','proj');a.href='project.html?id='+encodeURIComponent(p.id);
  return add(a,pair('h3',p.title),pair('p',p.meta,'meta'),pair('p',p.summary));
}
function pubCard(p){
  var c=el('div','card'),a=el('p','meta'),v=el('p','meta'),b=[];
  a.appendChild(rich(p.authors));if(p.year)a.appendChild(D.createTextNode(' ('+p.year+')'));
  v.appendChild(el('em',null,p.venue||''));
  if(p.doi){var d=el('a',null,'doi:'+p.doi);d.href='https://doi.org/'+p.doi;d.target='_blank';d.rel='noopener';v.appendChild(D.createTextNode(' · '));v.appendChild(d);b.push({ko:'논문 보기',en:'Read the paper',url:'https://doi.org/'+p.doi})}
  (p.links||[]).forEach(function(k){b.push(k)});
  return add(c,el('h3',null,p.title),a,v,btns(b));
}
function tag(o){var t=el('span','tagc');t.appendChild(sp(o));return t}

/* ---------- 페이지 ---------- */
function home(){
  add(app,nav(),hero());
  if(S.news.length){
    var s=sec({ko:'소식',en:'News'}),dl=el('dl');dl.id='news-list';
    S.news.forEach(function(n){dl.appendChild(el('dt',null,n.date));dl.appendChild(add(el('dd'),sp(n)))});
    app.appendChild(add(s,dl));
  }
  if(S.projects.length){
    var s2=sec({ko:'연구',en:'Research'}),g=el('div','projs');
    S.projects.forEach(function(p){g.appendChild(projCard(p))});
    app.appendChild(add(s2,g));
  }
}
function research(){
  add(app,nav(),ptitle({ko:'연구',en:'Research'}));
  var g=el('div','projs');S.projects.forEach(function(p){g.appendChild(projCard(p))});app.appendChild(g);
}
function project(){
  app.appendChild(nav());
  var p=byId(S.projects,q('id'));
  if(!p){app.appendChild(notFound('research.html',{ko:'← 연구 목록',en:'← All research'}));return}
  D.title=T(p.title,'en')+' · Suhee Park';
  var s=el('section'),h=el('h1','ptitle');h.appendChild(sp(p.title));
  add(s,back('research.html',{ko:'← 연구 목록',en:'← All research'}),h,pair('p',p.meta,'meta'),pair('p',p.summary));
  ['ko','en'].forEach(function(l){((p.body||{})[l]||[]).forEach(function(t){s.appendChild(el('p',l,t))})});
  add(s,btns(p.links));
  (p.papers||[]).forEach(function(id){var pb=byId(S.publications,id);if(pb){var w=el('div');w.style.marginTop='22px';s.appendChild(add(w,pubCard(pb)))}});
  add(s,figs(p.figures));
  app.appendChild(s);
}
function publications(){
  add(app,nav(),ptitle({ko:'논문',en:'Publications'}));
  [['first',{ko:'제1저자',en:'First-author'}],['co',{ko:'공저',en:'Co-authored'}]].forEach(function(g){
    var list=S.publications.filter(function(p){return (p.role||'first')===g[0]}).sort(function(a,b){return String(b.year).localeCompare(String(a.year))});
    if(!list.length)return;
    var s=sec(g[1]);list.forEach(function(p){s.appendChild(pubCard(p))});app.appendChild(s);
  });
}
function cv(){
  add(app,nav(),ptitle({ko:'학력 · 이력',en:'CV'}));
  if(S.show.cv){var s0=el('section');s0.appendChild(btns([{ko:'CV 내려받기 (PDF)',en:'Download CV (PDF)',url:'Suhee_Park_CV.pdf'}]));s0.firstChild.style.marginTop='0';app.appendChild(s0)}
  var e=sec({ko:'학력 · 경력',en:'Education & Experience'},'education');
  S.education.forEach(function(x){var d=el('div','item');add(d,pair('h3',x.title),pair('p',x.meta,'meta'));if(x.note)d.appendChild(pair('p',x.note));e.appendChild(d)});
  app.appendChild(e);
  if(S.talks.length){
    var t=sec({ko:'학회 발표',en:'Talks'});
    S.talks.forEach(function(x){
      var d=el('div','item'),h=el('h3',null,x.title);
      if(x.role==='coauthor')h.appendChild(tag({ko:'공저',en:'Co-author'}));
      add(d,h,el('p','meta',[x.venue,x.year,x.type].filter(Boolean).join(' · ')));
      if(x.presenter)d.appendChild(pair('p',{ko:'발표자: '+x.presenter,en:'Presenter: '+x.presenter},'meta'));
      t.appendChild(d);
    });
    app.appendChild(t);
  }
  if(S.teaching.length){
    var c=sec({ko:'조교 경력',en:'Teaching'});
    S.teaching.forEach(function(x){c.appendChild(add(el('div','item'),el('h3',null,x.course),el('p','meta',[x.role,x.where,x.term].filter(Boolean).join(' · '))))});
    app.appendChild(c);
  }
  if(S.awards.length){
    var a=sec({ko:'수상 · 장학금',en:'Awards'}),dl=el('dl');dl.id='awards-list';
    S.awards.forEach(function(x){dl.appendChild(el('dt',null,x.year));dl.appendChild(add(el('dd'),sp(x)))});
    app.appendChild(add(a,dl));
  }
}
var TYPES={field:{ko:'현장',en:'Field'},conference:{ko:'학회',en:'Conference'}};
function photos(){
  add(app,nav(),ptitle({ko:'사진',en:'Photos'}));
  var g=el('div','albums');
  S.albums.forEach(function(al){
    var a=el('a','album'),im=el('img'),inn=el('div','in'),m=el('p','meta');
    a.href='album.html?id='+encodeURIComponent(al.id);
    im.src=al.cover||(al.photos&&al.photos[0]&&al.photos[0].src)||'';im.alt='';im.loading='lazy';
    m.appendChild(D.createTextNode([al.date,(al.photos||[]).length+''].filter(Boolean).join(' · ')));
    if(al.type)m.appendChild(tag(TYPES[al.type]||al.type));
    add(inn,pair('h3',al.title),m);add(a,im,inn);g.appendChild(a);
  });
  app.appendChild(g);
}
function album(){
  app.appendChild(nav());
  var al=byId(S.albums,q('id'));
  if(!al){app.appendChild(notFound('photos.html',{ko:'← 사진 목록',en:'← All albums'}));return}
  D.title=T(al.title,'en')+' · Suhee Park';
  var s=el('section'),h=el('h1','ptitle');h.appendChild(sp(al.title));
  add(s,back('photos.html',{ko:'← 사진 목록',en:'← All albums'}),h);
  if(al.date||al.type){var m=el('p','meta');m.appendChild(D.createTextNode(al.date||''));if(al.type)m.appendChild(tag(TYPES[al.type]||al.type));s.appendChild(m)}
  var gl=figs(al.photos,'gallery');gl.style.marginTop='20px';
  app.appendChild(add(s,gl));
}

try{
  ({home:home,research:research,project:project,publications:publications,cv:cv,photos:photos,album:album})[page]();
  app.appendChild(footer());
}catch(err){
  console.error(err);
  app.appendChild(el('p',null,'페이지를 그리는 중 오류가 났어요. data.js 를 확인해 주세요: '+err.message));
}
})();
