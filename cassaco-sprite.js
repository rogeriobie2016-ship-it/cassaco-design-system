// Cassaco: SVG sprite (mascote, marcas, ícones, filtro die-cut). Injected once per page.
(function () {
  if (document.getElementById('cassaco-sprite')) return;
  var FILL = 'style="fill:var(--cs-fill,#FBF8F1)"';
  var INK = 'fill="currentColor"';
  var S = 'stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"';
  function arm(x1, y1, x2, y2) {
    var d = 'M' + x1 + ' ' + y1 + ' L' + x2 + ' ' + y2;
    return '<path d="' + d + '" ' + S + ' stroke-width="19" fill="none"/>';
  }
  function pose(id, inner, vb) {
    return '<symbol id="' + id + '" viewBox="' + (vb || '0 0 240 280') + '" overflow="visible">' + inner + '</symbol>';
  }
  var sit = '<use href="#g-tail"/><use href="#g-body"/><use href="#g-head" transform="translate(20 -6)"/>';

  var defs =
    '<filter id="cs-diecut" x="-20%" y="-20%" width="140%" height="140%" color-interpolation-filters="sRGB">' +
      '<feMorphology in="SourceAlpha" operator="dilate" radius="10" result="d"/>' +
      '<feFlood flood-color="#FFFFFF"/><feComposite in2="d" operator="in" result="w"/>' +
      '<feGaussianBlur in="d" stdDeviation="4" result="b"/><feOffset in="b" dy="5" result="bo"/>' +
      '<feFlood flood-color="#120F0A" flood-opacity=".22"/><feComposite in2="bo" operator="in" result="sh"/>' +
      '<feMerge><feMergeNode in="sh"/><feMergeNode in="w"/><feMergeNode in="SourceGraphic"/></feMerge>' +
    '</filter>' +
    '<filter id="cs-diecut-sm" x="-20%" y="-20%" width="140%" height="140%" color-interpolation-filters="sRGB">' +
      '<feMorphology in="SourceAlpha" operator="dilate" radius="5" result="d"/>' +
      '<feFlood flood-color="#FFFFFF"/><feComposite in2="d" operator="in" result="w"/>' +
      '<feGaussianBlur in="d" stdDeviation="2" result="b"/><feOffset in="b" dy="2.5" result="bo"/>' +
      '<feFlood flood-color="#120F0A" flood-opacity=".22"/><feComposite in2="bo" operator="in" result="sh"/>' +
      '<feMerge><feMergeNode in="sh"/><feMergeNode in="w"/><feMergeNode in="SourceGraphic"/></feMerge>' +
    '</filter>' +
    // head, 200 grid
    '<g id="g-headbase">' +
      '<circle cx="62" cy="58" r="22" ' + INK + '/><circle cx="138" cy="58" r="22" ' + INK + '/>' +
            '<path d="M100 182 C82 174 50 132 50 97 C50 64 74 46 100 46 C126 46 150 64 150 97 C150 132 118 174 100 182Z" ' + FILL + ' ' + S + ' stroke-width="7"/>' +
      '<path d="M100 49 C91 58 89 70 100 86 C111 70 109 58 100 49Z" ' + INK + '/>' +
      '<ellipse cx="100" cy="172" rx="12" ry="8.5" ' + INK + '/>' +
      '<path d="M84 150 L60 145 M85 158 L63 164 M116 150 L140 145 M115 158 L137 164" ' + S + ' stroke-width="3.5" fill="none"/>' +
    '</g>' +
    '<g id="g-patches"><ellipse cx="79" cy="108" rx="15" ry="11.5" transform="rotate(-24 79 108)" ' + INK + '/><ellipse cx="121" cy="108" rx="15" ry="11.5" transform="rotate(24 121 108)" ' + INK + '/></g>' +
    '<g id="g-eyes"><use href="#g-patches"/><circle cx="81" cy="106" r="4" ' + FILL + '/><circle cx="119" cy="106" r="4" ' + FILL + '/></g>' +
    '<g id="g-eyes-dead"><use href="#g-patches"/><path d="M74 102 L84 112 M84 102 L74 112 M116 102 L126 112 M126 102 L116 112" style="stroke:var(--cs-fill,#FBF8F1)" stroke-linecap="round" stroke-width="3.5" fill="none"/>' +
      '<path d="M104 178 C108 190 104 198 98 197 C92 196 93 188 96 179Z" ' + S + ' stroke-width="4"/></g>' +
    '<g id="g-head"><use href="#g-headbase"/><use href="#g-eyes"/></g>' +
    '<g id="g-head-dead"><use href="#g-headbase"/><use href="#g-eyes-dead"/></g>' +
    // body, 240x280 grid
    '<path id="g-tail" d="M164 236 C202 240 224 212 213 184 C204 162 177 168 181 189 C184 204 201 202 200 191" ' + S + ' stroke-width="9" fill="none"/>' +
    '<g id="g-body">' +
      '<path d="M72 254 C62 206 78 150 120 150 C162 150 178 206 168 254Z" ' + FILL + ' ' + S + ' stroke-width="7"/>' +
      '<ellipse cx="94" cy="256" rx="19" ry="9.5" ' + INK + '/>' +
      '<ellipse cx="146" cy="256" rx="19" ry="9.5" ' + INK + '/>' +
    '</g>';

  var symbols =
    '<symbol id="cs-head" viewBox="36 30 128 158" overflow="visible"><use href="#g-head"/></symbol>' +
    '<symbol id="cs-head-dead" viewBox="36 30 128 172" overflow="visible"><use href="#g-head-dead"/></symbol>' +
    pose('cs-sit', sit) +
    pose('cs-pose-phone', sit + arm(92, 182, 106, 214) + arm(148, 182, 134, 214) +
      '<rect x="102" y="178" width="36" height="58" rx="8" ' + INK + ' style="stroke:var(--cs-fill,#FBF8F1)" stroke-width="4"/><rect x="108" y="185" width="24" height="40" rx="3"/>' +
      '<circle cx="120" cy="230" r="2" ' + FILL + '/>') +
    pose('cs-pose-brush', sit + arm(92, 182, 128, 210) + arm(148, 182, 150, 222) +
      '<path d="M170 246 L128 194" ' + S + ' stroke-width="10" fill="none"/>' +
      '<path d="M130 198 C118 190 104 182 96 164 C114 166 128 176 136 190Z" ' + S + ' stroke-width="5"/>' +
      '<circle cx="62" cy="214" r="7"/><circle cx="48" cy="232" r="4"/>') +
    pose('cs-pose-camera', sit + arm(92, 182, 90, 210) + arm(148, 182, 150, 210) +
      '<rect x="100" y="174" width="22" height="12" rx="3" ' + INK + '/><rect x="84" y="182" width="72" height="48" rx="10" ' + INK + ' style="stroke:var(--cs-fill,#FBF8F1)" stroke-width="4"/>' +
      '<circle cx="120" cy="206" r="17" ' + FILL + ' ' + S + ' stroke-width="5"/><circle cx="120" cy="206" r="8.5"/>' +
      '<circle cx="145" cy="193" r="3.5"/>') +
    pose('cs-pose-laptop', sit +
      '<rect x="74" y="176" width="92" height="58" rx="8" ' + INK + ' style="stroke:var(--cs-fill,#FBF8F1)" stroke-width="4"/><circle cx="120" cy="205" r="8"/>' +
      '<rect x="64" y="231" width="112" height="10" rx="5" ' + INK + ' style="stroke:var(--cs-fill,#FBF8F1)" stroke-width="4"/>' + arm(92, 190, 82, 180) + arm(148, 190, 158, 180)) +
    pose('cs-pose-vr', sit + arm(90, 180, 74, 104) + arm(150, 180, 166, 104) +
      '<path d="M78 98 L56 92 M162 98 L184 92" ' + S + ' stroke-width="7" fill="none"/>' +
      '<rect x="76" y="80" width="88" height="38" rx="16" ' + INK + '/><rect x="88" y="90" width="64" height="9" rx="4.5"/>') +
    pose('cs-pose-cube', sit + arm(90, 186, 100, 230) + arm(150, 186, 140, 230) +
      '<path d="M116 170 H156 V210 H116Z" ' + S + ' stroke-width="4.5" fill="none"/>' +
      '<path d="M98 186 H138 V226 H98Z" ' + FILL + ' ' + S + ' stroke-width="4.5"/>' +
      '<path d="M98 186 L116 170 M138 186 L156 170 M138 226 L156 210 M98 226 L116 210" ' + S + ' stroke-width="4.5" fill="none"/>' +
      '<circle cx="98" cy="186" r="5.5"/><circle cx="138" cy="186" r="5.5"/><circle cx="156" cy="170" r="5.5"/><circle cx="116" cy="170" r="5.5"/><circle cx="156" cy="210" r="5.5"/><circle cx="138" cy="226" r="5.5"/><circle cx="98" cy="226" r="5.5"/>') +
    pose('cs-pose-trophy', sit + arm(92, 186, 104, 234) + arm(148, 186, 136, 234) +
      '<path d="M100 186 C86 186 86 204 102 206 M140 186 C154 186 154 204 138 206" ' + S + ' stroke-width="5.5" fill="none"/>' +
      '<path d="M98 178 H142 V196 C142 211 133 220 120 220 C107 220 98 211 98 196Z" ' + S + ' stroke-width="5.5"/>' +
      '<path d="M120 188 L123 194 L129 195 L124.5 199 L126 205 L120 202 L114 205 L115.5 199 L111 195 L117 194Z" ' + INK + '/>' +
      '<rect x="114" y="219" width="12" height="10" ' + INK + '/><rect x="102" y="227" width="36" height="11" rx="4" ' + INK + '/>') +
    pose('cs-pose-hang',
      '<path d="M22 20 L218 14" ' + S + ' stroke-width="9" fill="none"/>' +
      '<ellipse cx="44" cy="12" rx="13" ry="6" transform="rotate(-20 44 12)"/><ellipse cx="196" cy="8" rx="12" ry="5.5" transform="rotate(16 196 8)"/>' +
      '<path d="M120 44 C117 28 122 8 136 8 C150 8 152 24 141 28 C132 31 128 22 134 17" ' + S + ' stroke-width="7" fill="none"/>' +
      '<g transform="rotate(180 120 148)"><use href="#g-body"/>' + arm(96, 176, 64, 116) + arm(144, 176, 176, 116) + '<use href="#g-head" transform="translate(20 -6)"/></g>') +
    pose('cs-pose-dead',
            '<g transform="translate(22 0) rotate(-90 120 160)"><use href="#g-tail"/><use href="#g-body"/><use href="#g-head-dead" transform="translate(20 -6)"/></g>' +
      '<path d="M236 112 C246 100 258 106 252 116 M226 96 C230 86 240 88 238 96" ' + S + ' stroke-width="4" fill="none"/>', '0 40 270 200') +
    pose('cs-pose-babies',
      '<use href="#cs-head" x="30" y="104" width="66" height="78"/><use href="#cs-head" x="144" y="96" width="66" height="78"/>' + sit +
      arm(92, 184, 104, 220) + arm(148, 184, 136, 220)) +
    // logo mark: geometric head
    '<symbol id="cs-mark" viewBox="0 0 100 100">' +
      '<circle cx="25" cy="25" r="15" ' + INK + '/><circle cx="75" cy="25" r="15" ' + INK + '/>' +
      '<path d="M50 90 L19 47 C14 33 30 25 50 25 C70 25 86 33 81 47Z" fill="none" ' + S + ' stroke-width="8"/>' +
      '<path d="M50 27 L44 38 L50 48 L56 38Z" ' + INK + '/>' +
      '<circle cx="38" cy="54" r="5.5" ' + INK + '/><circle cx="62" cy="54" r="5.5" ' + INK + '/>' +
      '<circle cx="50" cy="83" r="7" ' + INK + '/>' +
    '</symbol>' +
    // monogram C
    '<symbol id="cs-mono" viewBox="0 0 100 100">' +
      '<circle cx="30" cy="22" r="11" ' + INK + '/><circle cx="56" cy="16" r="11" ' + INK + '/>' +
      '<path d="M76 38 A30 30 0 1 0 76 72" fill="none" ' + S + ' stroke-width="17"/>' +
      '<circle cx="52" cy="50" r="5.5" ' + INK + '/><circle cx="84" cy="36" r="7"/>' +
    '</symbol>' +
    '<symbol id="cs-curl" viewBox="0 0 60 60" overflow="visible"><path d="M0 44 C16 50 38 48 47 33 C55 19 43 6 32 12 C23 17 29 30 39 25" fill="none" ' + S + ' stroke-width="10"/></symbol>' +
    // icons 24 grid
    '<symbol id="ic-conteudo" viewBox="0 0 24 24" fill="none" ' + S + ' stroke-width="2"><rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M10.5 18.5h3"/><path d="M12 13.2l-2.1-2a1.4 1.4 0 0 1 2.1-1.8 1.4 1.4 0 0 1 2.1 1.8z"/></symbol>' +
    '<symbol id="ic-marca" viewBox="0 0 24 24" fill="none" ' + S + ' stroke-width="2"><path d="M20.5 3.5l-9 9"/><path d="M11 12.5c-2.8-.3-5 1.6-5 4.3 0 1.4-1 2.4-2.5 2.7 3.8 1.6 9 .8 9.6-3.2.3-1.7-.6-3.2-2.1-3.8z"/></symbol>' +
    '<symbol id="ic-audiovisual" viewBox="0 0 24 24" fill="none" ' + S + ' stroke-width="2"><rect x="2.5" y="6.5" width="13.5" height="11" rx="2"/><path d="M16 10.5l5.5-3v9l-5.5-3"/></symbol>' +
    '<symbol id="ic-sites" viewBox="0 0 24 24" fill="none" ' + S + ' stroke-width="2"><rect x="2.5" y="3.5" width="19" height="17" rx="2"/><path d="M2.5 8.5h19M9 13l-2 2 2 2M15 13l2 2-2 2"/></symbol>' +
    '<symbol id="ic-imersivo" viewBox="0 0 24 24" fill="none" ' + S + ' stroke-width="2"><path d="M2.5 9a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-4.2L13.5 14.5h-3L8.7 17H4.5a2 2 0 0 1-2-2z"/><path d="M6.5 11h2M15.5 11h2"/></symbol>' +
    '<symbol id="ic-3d" viewBox="0 0 24 24" fill="none" ' + S + ' stroke-width="2"><path d="M12 2.5l8.5 4.8v9.4L12 21.5l-8.5-4.8V7.3z"/><path d="M3.5 7.3L12 12l8.5-4.7M12 12v9.5"/></symbol>' +
    '<symbol id="ic-edu" viewBox="0 0 24 24" fill="none" ' + S + ' stroke-width="2"><path d="M7 7.5h10a4.5 4.5 0 0 1 4.5 4.5v1.8a3.2 3.2 0 0 1-5.8 1.9L14.4 14H9.6l-1.3 1.7a3.2 3.2 0 0 1-5.8-1.9V12A4.5 4.5 0 0 1 7 7.5z"/><path d="M7.5 9.8v3.4M5.8 11.5h3.4"/><circle cx="15.5" cy="10.8" r=".6" fill="currentColor"/><circle cx="17.5" cy="12.6" r=".6" fill="currentColor"/></symbol>' +
    '<symbol id="ic-arrow" viewBox="0 0 24 24" fill="none" ' + S + ' stroke-width="2.2"><path d="M4 12h15M13 6l6 6-6 6"/></symbol>' +
    '<symbol id="ic-arrow-ur" viewBox="0 0 24 24" fill="none" ' + S + ' stroke-width="2.2"><path d="M7 17L17 7M8 7h9v9"/></symbol>' +
    '<symbol id="ic-check" viewBox="0 0 24 24" fill="none" ' + S + ' stroke-width="2.4"><path d="M5 12.5l4.5 4.5L19 7.5"/></symbol>' +
    '<symbol id="ic-plus" viewBox="0 0 24 24" fill="none" ' + S + ' stroke-width="2.2"><path d="M12 5v14M5 12h14"/></symbol>' +
    '<symbol id="ic-globe" viewBox="0 0 24 24" fill="none" ' + S + ' stroke-width="2"><circle cx="12" cy="12" r="9.5"/><path d="M2.5 12h19M12 2.5c2.6 2.8 3.8 6 3.8 9.5s-1.2 6.7-3.8 9.5c-2.6-2.8-3.8-6-3.8-9.5S9.4 5.3 12 2.5z"/></symbol>' +
    '<symbol id="ic-mail" viewBox="0 0 24 24" fill="none" ' + S + ' stroke-width="2"><rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="M3 6l9 7 9-7"/></symbol>' +
    '<symbol id="ic-pin" viewBox="0 0 24 24" fill="none" ' + S + ' stroke-width="2"><path d="M12 21.5s7-6.2 7-11.5a7 7 0 0 0-14 0c0 5.3 7 11.5 7 11.5z"/><circle cx="12" cy="10" r="2.5"/></symbol>' +
    '<symbol id="ic-insta" viewBox="0 0 24 24" fill="none" ' + S + ' stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r=".8" fill="currentColor"/></symbol>' +
    '<symbol id="ic-phone" viewBox="0 0 24 24" fill="none" ' + S + ' stroke-width="2"><path d="M5 3.5h3.5l1.8 4.5-2.3 1.5a11 11 0 0 0 6.5 6.5l1.5-2.3 4.5 1.8V19a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 3.5 5.1 1.5 1.5 0 0 1 5 3.5z"/></symbol>';

  var bp = [];
  for (var i = 0; i < 48; i++) { var a = Math.PI * 2 * i / 48, r = i % 2 ? 86 : 98; bp.push((100 + r * Math.cos(a)).toFixed(1) + ',' + (100 + r * Math.sin(a)).toFixed(1)); }
  symbols += '<symbol id="cs-burst" viewBox="0 0 200 200"><polygon points="' + bp.join(' ') + '"/></symbol>';
  defs += '<path id="cs-seal-path" d="M100 24 a76 76 0 1 1 -0.01 0"/><path id="cs-seal-path-lg" d="M100 17 a83 83 0 1 1 -0.01 0"/>';
  var wrap = document.createElement('div');
  wrap.id = 'cassaco-sprite';
  wrap.setAttribute('aria-hidden', 'true');
  wrap.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden';
  wrap.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0"><defs>' + defs + '</defs>' + symbols + '</svg>';
  (document.body || document.documentElement).appendChild(wrap);
})();
