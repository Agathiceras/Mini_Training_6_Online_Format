/* Back Office simulation — text loader (shared code, NOT for translators).
   The simulation shows its English text by default. Opening it with ?lang=xx loads assets/sim-content-xx.js,
   whose SIM_TEXT.strings maps every English text to its translation, and applies it to the page.
   The training page adds ?lang=xx automatically to the simulation iframes when it is opened in language xx. */
(function(){
  var SKIP={SCRIPT:1,STYLE:1,NOSCRIPT:1,svg:1,SVG:1};
  var INLINE={B:1,I:1,STRONG:1,EM:1,U:1,BR:1,CODE:1,SMALL:1,SUP:1,SUB:1};
  var ATTRS=['title','placeholder','alt','aria-label'];
  function norm(s){ return String(s).replace(/\s+/g,' ').trim(); }
  function isMixed(el){
    var hasText=false, hasInline=false, i, c;
    for(i=0;i<el.childNodes.length;i++){
      c=el.childNodes[i];
      if(c.nodeType===3){ if(c.nodeValue.trim()) hasText=true; }
      else if(c.nodeType===1){ if(INLINE[c.tagName]) hasInline=true; else return false; }
    }
    return hasText && hasInline;
  }
  /* cb(kind, node, attrName, key): kind = 'text' | 'attr' | 'html' */
  function walk(el,cb){
    if(!el || el.nodeType!==1 || SKIP[el.tagName]) return;
    var i, a, v, c;
    for(i=0;i<ATTRS.length;i++){
      a=ATTRS[i];
      if(el.hasAttribute(a)){ v=norm(el.getAttribute(a)); if(v) cb('attr',el,a,v); }
    }
    if(isMixed(el)){ cb('html',el,null,norm(el.innerHTML)); return; }
    for(i=0;i<el.childNodes.length;i++){
      c=el.childNodes[i];
      if(c.nodeType===3){ v=norm(c.nodeValue); if(v) cb('text',c,null,v); }
      else if(c.nodeType===1){ walk(c,cb); }
    }
  }
  window.SimI18n={walk:walk,norm:norm};

  var params=new URLSearchParams(location.search);
  var lang=(params.get('lang')||'en').toLowerCase().replace(/[^a-z\-]/g,'');
  window.SIM_LANG=lang;
  if(lang==='en') return;
  var root=document.documentElement, S=null, busy=false, done=new Set();
  root.style.visibility='hidden';
  var timer=setTimeout(function(){ root.style.visibility=''; },3000);
  var s=document.createElement('script');
  s.src='assets/sim-content-'+lang+'.js';
  s.onload=function(){ clearTimeout(timer); start(); root.style.visibility=''; };
  s.onerror=function(){ clearTimeout(timer); root.style.visibility=''; };
  document.head.appendChild(s);

  function apply(el){
    if(!S||!el) return;
    busy=true;
    try{
      walk(el,function(kind,node,name,key){
        var tr=S[key];
        if(tr==null||tr===''||tr===key) return;
        if(kind==='text'){ var v=node.nodeValue; node.nodeValue=v.match(/^\s*/)[0]+tr+v.match(/\s*$/)[0]; }
        else if(kind==='attr'){ node.setAttribute(name,tr); }
        else { node.innerHTML=tr; done.add(node); setTimeout(function(){ done.delete(node); },0); }
      });
    }catch(e){}
    busy=false;
  }
  function start(){
    var T=window.SIM_TEXT||{}; S=T.strings||{};
    if(T.lang) root.lang=T.lang;
    if(T.dir) root.dir=T.dir;
    var t=S[norm(document.title)]; if(t) document.title=t;
    apply(document.body);
    new MutationObserver(function(muts){
      if(busy) return;
      muts.forEach(function(m){
        if(m.type==='childList'){ if(done.has(m.target)) return;
          for(var i=0;i<m.addedNodes.length;i++){ var n=m.addedNodes[i]; apply(n.nodeType===1?n:n.parentNode); }
          if(m.target && m.target.nodeType===1) apply(m.target);
        } else if(m.type==='characterData'){ apply(m.target.parentNode); }
        else if(m.type==='attributes'){ apply(m.target); }
      });
    }).observe(document.body,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:ATTRS});
  }
})();
