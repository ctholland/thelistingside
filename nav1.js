(function () {

  var links = [
    { label: 'Landlords',  href: 'landlord.html' },
    { label: 'Renters',    href: 'renter.html' },
    { label: 'Listings',   href: 'listings.html' },
    { label: 'Relocation', href: 'relocation.html' },
    { label: 'Sales',      href: 'sales.html' },
  ];

  var currentPage = window.location.pathname.split('/').pop() || 'index.html';

  /* ── Inject styles once ── */
  var style = document.createElement('style');
  style.textContent = [
    '#tls-nav-links { display:flex; align-items:center; height:100%; flex:1; overflow-x:auto; -ms-overflow-style:none; scrollbar-width:none; }',
    '#tls-nav-links::-webkit-scrollbar { display:none; }',
    '#tls-hamburger { display:none; background:none; border:none; cursor:pointer; padding:8px; flex-shrink:0; }',
    '#tls-hamburger span { display:block; width:22px; height:2px; background:#fff; margin:5px 0; transition:all .25s; border-radius:1px; }',
    '#tls-hamburger.open span:nth-child(1) { transform:translateY(7px) rotate(45deg); }',
    '#tls-hamburger.open span:nth-child(2) { opacity:0; }',
    '#tls-hamburger.open span:nth-child(3) { transform:translateY(-7px) rotate(-45deg); }',
    '#tls-mobile-menu {',
    '  display:none; position:absolute; top:100%; left:0; right:0;',
    '  background:#111111; border-top:1px solid #1e1e1e; border-bottom:3px solid #C8102E;',
    '  z-index:9000; flex-direction:column; padding:8px 0;',
    '}',
    '#tls-mobile-menu.open { display:flex; }',
    '#tls-mobile-menu a {',
    '  font-family:"DM Mono",monospace; font-size:11px; letter-spacing:.14em; text-transform:uppercase;',
    '  color:#ffffff; text-decoration:none; padding:14px 28px;',
    '  border-bottom:1px solid rgba(255,255,255,.06); display:block;',
    '  transition:color .15s, background .15s;',
    '}',
    '#tls-mobile-menu a:last-child { border-bottom:none; }',
    '#tls-mobile-menu a:hover, #tls-mobile-menu a.active { color:#C8102E; background:rgba(200,16,46,.05); }',
    '#tls-phone { font-family:"DM Mono",monospace; font-size:11px; letter-spacing:.1em; color:rgba(255,255,255,.5); text-decoration:none; flex-shrink:0; margin-left:24px; white-space:nowrap; transition:color .15s; }',
    '#tls-phone:hover { color:#fff; }',
    '@media (max-width: 768px) {',
    '  #tls-nav-links { display:none !important; }',
    '  #tls-hamburger { display:block !important; }',
    '  #tls-phone { display:none; }',
    '  #tls-nav-bar { padding:0 20px !important; }',
    '  #tls-brand { font-size:19px !important; }',
    '}',
  ].join('\n');
  document.head.appendChild(style);

  /* ── Desktop links HTML ── */
  var navLinksHtml = links.map(function (link, idx) {
    var isActive = currentPage === link.href;
    var isLast = idx === links.length - 1;
    return (
      '<a href="' + link.href + '"' +
      ' style="font-family:\'DM Mono\',monospace;font-size:10px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;' +
      'color:' + (isActive ? '#C8102E' : '#ffffff') + ';text-decoration:none;padding:0 20px;' +
      (isLast ? '' : 'border-right:1px solid rgba(255,255,255,.12);') +
      'white-space:nowrap;transition:color .15s;"' +
      ' onmouseover="if(this.style.color!==\'rgb(200, 16, 46)\')this.style.color=\'#C8102E\'"' +
      ' onmouseout="this.style.color=\'' + (isActive ? '#C8102E' : '#ffffff') + '\'"' +
      '>' + link.label + '</a>'
    );
  }).join('') +
    '<a href="https://christoferholland.com" target="_blank" rel="noopener"' +
    ' style="font-family:\'DM Mono\',monospace;font-size:10px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.45);text-decoration:none;padding:0 20px;white-space:nowrap;transition:color .15s;"' +
    ' onmouseover="this.style.color=\'#ffffff\'"' +
    ' onmouseout="this.style.color=\'rgba(255,255,255,.45)\'"' +
    '>christoferholland.com ↗</a>';

  /* ── Mobile menu links HTML ── */
  var mobileLinksHtml = links.map(function (link) {
    var isActive = currentPage === link.href;
    return '<a href="' + link.href + '"' + (isActive ? ' class="active"' : '') + '>' + link.label + '</a>';
  }).join('') +
    '<a href="https://christoferholland.com" target="_blank" rel="noopener" style="color:rgba(255,255,255,.45)!important;">christoferholland.com ↗</a>' +
    '<a href="tel:9172071414" style="color:rgba(255,255,255,.5)!important;font-size:10px;">917-207-1414</a>';

  /* ── Full nav HTML ── */
  var html =
    /* COMPLIANCE BAR */
    '<div style="background:#C8102E;padding:7px 24px;text-align:center;width:100%;">' +
      '<div style="display:inline-flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:0;max-width:1100px;margin:0 auto;">' +
        '<a href="https://d1e1jt2fj4r8r.cloudfront.net/documents/fairhousingnotice.pdf" target="_blank" rel="noopener" style="font-family:\'DM Mono\',monospace;font-size:9px;letter-spacing:.09em;text-transform:uppercase;color:rgba(255,255,255,.9);text-decoration:none;padding:0 12px;white-space:nowrap;">Fair Housing Notice</a>' +
        '<span style="color:rgba(255,255,255,.35);font-size:6px;">●</span>' +
        '<a href="https://d1e1jt2fj4r8r.cloudfront.net/d36fff22-1ea6-464a-8fbd-aee2a2b71bb2/-jHhTwrOg/sop.pdf" target="_blank" rel="noopener" style="font-family:\'DM Mono\',monospace;font-size:9px;letter-spacing:.09em;text-transform:uppercase;color:rgba(255,255,255,.9);text-decoration:none;padding:0 12px;white-space:nowrap;">Standard Operating Procedures</a>' +
        '<span style="color:rgba(255,255,255,.35);font-size:6px;">●</span>' +
        '<a href="https://kwnyc.com/ada-disclosure" target="_blank" rel="noopener" style="font-family:\'DM Mono\',monospace;font-size:9px;letter-spacing:.09em;text-transform:uppercase;color:rgba(255,255,255,.9);text-decoration:none;padding:0 12px;white-space:nowrap;">Reasonable Accommodation</a>' +
        '<span style="color:rgba(255,255,255,.35);font-size:6px;">●</span>' +
        '<a href="https://image.info.rebny.com/lib/fe35157075640479701d77/m/1/68142058-8e73-4146-b9d6-54fc56484a07.pdf?utm_source=sfmc&utm_medium=email&utm_campaign=FARE+Act+Updated+Compliance&utm_term=Flyer&utm_id=1811434&sfmc_id=628153611" target="_blank" rel="noopener" style="font-family:\'DM Mono\',monospace;font-size:9px;letter-spacing:.09em;text-transform:uppercase;color:rgba(255,255,255,.9);text-decoration:none;padding:0 12px;white-space:nowrap;">Agency Disclosure</a>' +
      '</div>' +
    '</div>' +

    /* MAIN NAV BAR */
    '<div id="tls-nav-bar" style="background:#111111;border-bottom:3px solid #C8102E;display:flex;align-items:center;justify-content:space-between;padding:0 40px;height:56px;position:relative;">' +

      /* Brand */
      '<a id="tls-brand" href="index.html" style="font-family:\'Bebas Neue\',sans-serif;font-size:22px;letter-spacing:.06em;color:#ffffff;text-decoration:none;flex-shrink:0;margin-right:32px;">' +
        'The Listing <span style="color:#C8102E;">Side</span>' +
      '</a>' +

      /* Desktop links */
      '<div id="tls-nav-links">' + navLinksHtml + '</div>' +

      /* Phone — desktop only */
      '<a id="tls-phone" href="tel:9172071414">917-207-1414</a>' +

      /* Hamburger — mobile only */
      '<button id="tls-hamburger" aria-label="Toggle menu" aria-expanded="false">' +
        '<span></span><span></span><span></span>' +
      '</button>' +

      /* Mobile dropdown — positioned absolute inside nav bar */
      '<div id="tls-mobile-menu">' + mobileLinksHtml + '</div>' +

    '</div>';

  /* ── Mount ── */
  var target = document.getElementById('nav');
  if (target) {
    target.innerHTML = html;
    target.style.cssText = 'position:sticky;top:0;z-index:9001;';
  }

  /* ── Hamburger toggle ── */
  var burger = document.getElementById('tls-hamburger');
  var mobileMenu = document.getElementById('tls-mobile-menu');

  if (burger && mobileMenu) {
    burger.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.contains('open');
      mobileMenu.classList.toggle('open');
      burger.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(!isOpen));
    });

    /* Close on outside tap */
    document.addEventListener('click', function (e) {
      if (!target.contains(e.target)) {
        mobileMenu.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

})();
