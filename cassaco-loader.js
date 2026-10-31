// Cassaco: tela de carregamento com o cassaco correndo.
// Carregue no <head>, antes de tudo: <script src="cassaco-loader.js"></script>
// Some sozinha quando a página termina de carregar. Para SPA ou controle manual:
// <script src="cassaco-loader.js" data-manual></script> e depois CassacoLoader.hide().
(function () {
  if (window.CassacoLoader) return;
  var me = document.currentScript;
  var manual = !!(me && me.hasAttribute('data-manual'));
  var KEY = 'cassaco-loader-seen';
  var first = true;
  try { first = !sessionStorage.getItem(KEY); sessionStorage.setItem(KEY, '1'); } catch (e) {}
  var MIN_MS = first ? 1600 : 0;   // na primeira visita da sessão, deixa ver umas passadas
  var MAX_MS = 9000;               // nunca prende o site
  var t0 = Date.now();

  var FILL = 'fill="var(--cs-fill,#FBF8F1)"';
  var S = 'stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"';
  function leg(cls, x, y) {
    return '<g class="csl-leg ' + cls + '" transform="translate(' + x + ' ' + y + ')"><g>' +
      '<path d="M0 0 L0 40" ' + S + ' stroke-width="17" fill="none"/>' +
      '<ellipse cx="5" cy="44" rx="13" ry="7.5" fill="currentColor"/></g></g>';
  }

  // Cassaco de perfil, olhando para a direita (grade 320x200)
  var runner =
    '<svg class="csl-svg" viewBox="0 0 320 200" aria-hidden="true">' +
      // contorno branco de adesivo, igual ao filtro cs-diecut da marca
      '<defs><filter id="csl-diecut" x="-20%" y="-20%" width="140%" height="140%" color-interpolation-filters="sRGB">' +
        '<feMorphology in="SourceAlpha" operator="dilate" radius="6" result="d"/>' +
        '<feFlood flood-color="#FFFFFF"/><feComposite in2="d" operator="in" result="w"/>' +
        '<feGaussianBlur in="d" stdDeviation="3" result="b"/><feOffset in="b" dy="4" result="bo"/>' +
        '<feFlood flood-color="#120F0A" flood-opacity=".2"/><feComposite in2="bo" operator="in" result="sh"/>' +
        '<feMerge><feMergeNode in="sh"/><feMergeNode in="w"/><feMergeNode in="SourceGraphic"/></feMerge>' +
      '</filter></defs>' +
      '<ellipse class="csl-shadow" cx="180" cy="186" rx="96" ry="9" fill="currentColor"/>' +
      '<g class="csl-body" filter="url(#csl-diecut)">' +
        leg('csl-bf', 118, 120) + leg('csl-ff', 192, 120) +
        '<g class="csl-tail"><path d="M92 104 C58 112 30 98 30 72 C30 50 56 48 58 66 C60 80 44 82 44 72" ' + S + ' stroke-width="9" fill="none"/></g>' +
        '<path d="M88 102 C88 76 120 64 158 64 C196 64 216 80 216 104 C216 128 192 140 154 140 C116 140 88 128 88 102Z" ' + FILL + ' ' + S + ' stroke-width="7"/>' +
        leg('csl-bn', 108, 124) + leg('csl-fn', 182, 124) +
        '<g class="csl-head">' +
          '<circle cx="214" cy="58" r="17" fill="currentColor"/>' +
          '<path d="M196 94 C194 68 214 52 236 54 C256 56 276 78 294 98 C282 108 258 114 234 114 C212 114 197 108 196 94Z" ' + FILL + ' ' + S + ' stroke-width="7"/>' +
          '<circle cx="232" cy="50" r="15" fill="currentColor"/>' +
          '<path d="M226 55 C240 54 252 59 260 67 C248 66 236 62 226 55Z" fill="currentColor"/>' +
          '<ellipse cx="250" cy="86" rx="11.5" ry="8.5" transform="rotate(22 250 86)" fill="currentColor"/>' +
          '<circle cx="253" cy="85" r="3.8" ' + FILL + '/>' +
          '<ellipse cx="294" cy="98" rx="9" ry="7" fill="currentColor"/>' +
          '<path d="M280 104 L302 100 M279 110 L299 114" ' + S + ' stroke-width="3" fill="none"/>' +
        '</g>' +
      '</g>' +
      '<g class="csl-dust" fill="currentColor"><circle cx="96" cy="176" r="6"/><circle cx="84" cy="168" r="4"/><circle cx="172" cy="178" r="5"/></g>' +
      '<g class="csl-speed" ' + S + ' stroke-width="5"><path d="M20 112 H-24"/><path d="M34 134 H-6"/><path d="M14 156 H-30"/></g>' +
    '</svg>';

  var css =
    '#cassaco-loader{position:fixed;inset:0;z-index:2147483000;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:26px;' +
      'background:var(--paper,#F5F2EA);color:var(--ink,#121212);transition:opacity .45s ease .25s,visibility 0s linear .7s}' +
    '#cassaco-loader.csl-out{opacity:0;visibility:hidden}' +
    '#cassaco-loader .csl-stage{position:relative;width:min(420px,78vw);overflow:visible}' +
    '#cassaco-loader .csl-ground{height:3px;margin:-6px -40px 0;opacity:.35;background:repeating-linear-gradient(90deg,currentColor 0 14px,transparent 14px 26px);animation:csl-ground .2s linear infinite}' +
    '#cassaco-loader .csl-run{display:block;animation:csl-bob .18s ease-in-out infinite alternate}' +
    '#cassaco-loader .csl-svg{display:block;width:100%;height:auto;overflow:visible}' +
    '#cassaco-loader .csl-shadow{opacity:.12;transform-origin:180px 186px;animation:csl-shadow .18s ease-in-out infinite alternate}' +
    '#cassaco-loader .csl-leg>g{animation:csl-leg .36s ease-in-out infinite alternate}' +
    '#cassaco-loader .csl-fn>g,#cassaco-loader .csl-bf>g{animation-delay:-.36s}' +
    '#cassaco-loader .csl-head{transform-origin:206px 100px;animation:csl-head .18s ease-in-out infinite alternate}' +
    '#cassaco-loader .csl-tail{transform-origin:92px 104px;animation:csl-tail .36s ease-in-out infinite alternate}' +
    '#cassaco-loader .csl-dust circle{transform-box:fill-box;transform-origin:center;animation:csl-dust .54s ease-out infinite}' +
    '#cassaco-loader .csl-dust circle:nth-child(2){animation-delay:-.18s}#cassaco-loader .csl-dust circle:nth-child(3){animation-delay:-.36s}' +
    '#cassaco-loader .csl-speed path{animation:csl-speed .36s linear infinite}' +
    '#cassaco-loader .csl-speed path:nth-child(2){animation-delay:-.12s}#cassaco-loader .csl-speed path:nth-child(3){animation-delay:-.24s}' +
    '#cassaco-loader .csl-word{font-family:Anybody,"Arial Narrow",sans-serif;font-weight:900;font-stretch:58%;font-size:44px;line-height:1;letter-spacing:-.01em}' +
    '#cassaco-loader .csl-label{display:flex;align-items:center;gap:10px;font-family:"IBM Plex Mono",ui-monospace,monospace;font-size:12px;letter-spacing:.08em;text-transform:uppercase}' +
    '#cassaco-loader .csl-pill{padding:6px 12px;border:2px solid currentColor;border-radius:999px;background:var(--sig,#D6FF3D);color:#121212}' +
    '#cassaco-loader .csl-dots i{font-style:normal;animation:csl-dot 1.2s steps(1) infinite}' +
    '#cassaco-loader .csl-dots i:nth-child(2){animation-delay:.2s}#cassaco-loader .csl-dots i:nth-child(3){animation-delay:.4s}' +
    '#cassaco-loader.csl-out .csl-run{animation:csl-exit .55s cubic-bezier(.5,0,.9,.4) forwards}' +
    '@keyframes csl-bob{from{transform:translateY(0)}to{transform:translateY(-7px)}}' +
    '@keyframes csl-shadow{from{transform:scaleX(1)}to{transform:scaleX(.86)}}' +
    '@keyframes csl-leg{from{transform:rotate(38deg)}to{transform:rotate(-38deg)}}' +
    '@keyframes csl-head{from{transform:rotate(-2deg)}to{transform:rotate(3deg)}}' +
    '@keyframes csl-tail{from{transform:rotate(-8deg)}to{transform:rotate(10deg)}}' +
    '@keyframes csl-dust{0%{transform:translateX(0) scale(.4);opacity:.5}100%{transform:translateX(-46px) scale(1.4);opacity:0}}' +
    '@keyframes csl-speed{0%{transform:translateX(20px);opacity:0}30%{opacity:.6}100%{transform:translateX(-50px);opacity:0}}' +
    '@keyframes csl-ground{from{background-position:0 0}to{background-position:-26px 0}}' +
    '@keyframes csl-dot{0%{opacity:0}50%{opacity:1}}' +
    '@keyframes csl-exit{to{transform:translateX(120vw)}}' +
    '@media (prefers-reduced-motion:reduce){#cassaco-loader *{animation-duration:1.4s!important}#cassaco-loader.csl-out .csl-run{animation:none}}';

  var style = document.createElement('style');
  style.id = 'cassaco-loader-css';
  style.textContent = css;
  (document.head || document.documentElement).appendChild(style);

  var el = document.createElement('div');
  el.id = 'cassaco-loader';
  el.setAttribute('role', 'status');
  el.setAttribute('aria-live', 'polite');
  el.setAttribute('aria-label', 'Carregando');
  el.innerHTML =
    '<div class="csl-stage"><div class="csl-run">' + runner + '</div><div class="csl-ground"></div></div>' +
    '<div class="csl-word">cassaco</div>' +
    '<div class="csl-label"><span class="csl-pill">Carregando<span class="csl-dots"><i>.</i><i>.</i><i>.</i></span></span><span>Loading</span></div>';
  document.documentElement.appendChild(el);

  var done = false;
  function hide() {
    if (done) return;
    done = true;
    el.classList.add('csl-out');
    setTimeout(function () {
      if (el.parentNode) el.parentNode.removeChild(el);
      if (style.parentNode) style.parentNode.removeChild(style);
    }, 900);
  }
  function hideSoon() {
    setTimeout(hide, Math.max(0, MIN_MS - (Date.now() - t0)));
  }
  window.CassacoLoader = { hide: hideSoon, el: el };

  if (!manual) {
    // Páginas do Claude Design (<x-dc>) só desenham depois que o React sobe: espera o runtime também.
    var ready = function () {
      var dc = document.querySelector('x-dc');
      return !dc || !!window.__dcRegistry;
    };
    var whenLoaded = function () {
      var fonts = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
      fonts.then(function poll() {
        if (ready() || Date.now() - t0 > MAX_MS) {
          requestAnimationFrame(function () { requestAnimationFrame(hideSoon); });
        } else {
          setTimeout(poll, 60);
        }
      });
    };
    if (document.readyState === 'complete') whenLoaded();
    else window.addEventListener('load', whenLoaded);
  }
  setTimeout(hide, MAX_MS);
})();
