document.addEventListener('DOMContentLoaded', function () {

  var links = [
    { label: 'Landlords',   href: 'landlord.html' },
    { label: 'Renters',     href: 'renters.html' },
    { label: 'Lease Break',  href: 'lease-break.html' },
    { label: 'Listings',    href: 'listings.html' },
    { label: 'Relocation',  href: 'relocation.html' },
    { label: 'Sales',       href: 'sales.html' },
  ];

  var currentPage = window.location.pathname.split('/').pop() || 'index.html';

  var navLinks = links.map(function (link) {
    var isActive = currentPage === link.href;
    return (
      '<a href="' + link.href + '"' +
      ' style="' +
        'font-family:\'DM Mono\',monospace;' +
        'font-size:10px;' +
        'font-weight:500;' +
        'letter-spacing:.14em;' +
        'text-transform:uppercase;' +
        'color:' + (isActive ? '#C8102E' : '#ffffff') + ';' +
        'text-decoration:none;' +
        'padding:0 20px;' +
        'border-right:1px solid rgba(255,255,255,.12);' +
        'white-space:nowrap;' +
        'transition:color .15s;' +
      '"' +
      ' onmouseover="if(this.style.color!==\'#C8102E\')this.style.color=\'#C8102E\'"' +
      ' onmouseout="if(\'' + (isActive ? 'active' : '') + '\'!==\'active\')this.style.color=\'#ffffff\'"' +
      '>' + link.label + '</a>'
    );
  }).join('');

  var externalLink =
    '<a href="https://christoferholland.com" target="_blank" rel="noopener"' +
    ' style="' +
      'font-family:\'DM Mono\',monospace;' +
      'font-size:10px;' +
      'font-weight:500;' +
      'letter-spacing:.14em;' +
      'text-transform:uppercase;' +
      'color:rgba(255,255,255,.45);' +
      'text-decoration:none;' +
      'padding:0 20px;' +
      'white-space:nowrap;' +
      'transition:color .15s;' +
    '"' +
    ' onmouseover="this.style.color=\'#ffffff\'"' +
    ' onmouseout="this.style.color=\'rgba(255,255,255,.45)\'"' +
    '>christoferholland.com ↗</a>';

  var html =
    /* ── COMPLIANCE BAR ── */
    '<div style="' +
      'background:#C8102E;' +
      'padding:7px 24px;' +
      'text-align:center;' +
      'width:100%;' +
    '">' +
      '<div style="' +
        'display:inline-flex;' +
        'align-items:center;' +
        'justify-content:center;' +
        'flex-wrap:wrap;' +
        'gap:0;' +
        'max-width:1100px;' +
        'margin:0 auto;' +
      '">' +
        '<a href="https://d1e1jt2fj4r8r.cloudfront.net/documents/fairhousingnotice.pdf" target="_blank" rel="noopener" style="font-family:\'DM Mono\',monospace;font-size:9px;letter-spacing:.09em;text-transform:uppercase;color:rgba(255,255,255,.9);text-decoration:none;padding:0 12px;white-space:nowrap;">Fair Housing Notice</a>' +
        '<span style="color:rgba(255,255,255,.35);font-size:6px;">●</span>' +
        '<a href="https://d1e1jt2fj4r8r.cloudfront.net/d36fff22-1ea6-464a-8fbd-aee2a2b71bb2/-jHhTwrOg/sop.pdf" target="_blank" rel="noopener" style="font-family:\'DM Mono\',monospace;font-size:9px;letter-spacing:.09em;text-transform:uppercase;color:rgba(255,255,255,.9);text-decoration:none;padding:0 12px;white-space:nowrap;">Standard Operating Procedures</a>' +
        '<span style="color:rgba(255,255,255,.35);font-size:6px;">●</span>' +
        '<a href="https://kwnyc.com/ada-disclosure" target="_blank" rel="noopener" style="font-family:\'DM Mono\',monospace;font-size:9px;letter-spacing:.09em;text-transform:uppercase;color:rgba(255,255,255,.9);text-decoration:none;padding:0 12px;white-space:nowrap;">Reasonable Accommodation</a>' +
        '<span style="color:rgba(255,255,255,.35);font-size:6px;">●</span>' +
        '<a href="https://image.info.rebny.com/lib/fe35157075640479701d77/m/1/68142058-8e73-4146-b9d6-54fc56484a07.pdf?utm_source=sfmc&utm_medium=email&utm_campaign=FARE+Act+Updated+Compliance&utm_term=Flyer&utm_id=1811434&sfmc_id=628153611" target="_blank" rel="noopener" style="font-family:\'DM Mono\',monospace;font-size:9px;letter-spacing:.09em;text-transform:uppercase;color:rgba(255,255,255,.9);text-decoration:none;padding:0 12px;white-space:nowrap;">Agency Disclosure</a>' +
      '</div>' +
    '</div>' +

    /* ── MAIN NAV ── */
    '<div style="' +
      'background:#111111;' +
      'border-bottom:3px solid #C8102E;' +
      'display:flex;' +
      'align-items:center;' +
      'justify-content:space-between;' +
      'padding:0 40px;' +
      'height:56px;' +
      'position:relative;' +
    '">' +

      /* Brand */
      '<a href="index.html" style="' +
        'font-family:\'Bebas Neue\',sans-serif;' +
        'font-size:22px;' +
        'letter-spacing:.06em;' +
        'color:#ffffff;' +
        'text-decoration:none;' +
        'flex-shrink:0;' +
        'margin-right:32px;' +
      '">The Listing <span style="color:#C8102E;">Side</span></a>' +

      /* Links */
      '<div style="' +
        'display:flex;' +
        'align-items:center;' +
        'height:100%;' +
        'flex:1;' +
        'overflow-x:auto;' +
        '-ms-overflow-style:none;' +
        'scrollbar-width:none;' +
      '">' +
        navLinks +
        externalLink +
      '</div>' +

      /* Phone */
      '<a href="tel:9172071414" style="' +
        'font-family:\'DM Mono\',monospace;' +
        'font-size:11px;' +
        'letter-spacing:.1em;' +
        'color:rgba(255,255,255,.5);' +
        'text-decoration:none;' +
        'flex-shrink:0;' +
        'margin-left:24px;' +
        'white-space:nowrap;' +
      '"' +
      ' onmouseover="this.style.color=\'#ffffff\'"' +
      ' onmouseout="this.style.color=\'rgba(255,255,255,.5)\'"' +
      '>917-207-1414</a>' +

    '</div>';

  var target = document.getElementById('nav');
  if (target) {
    target.innerHTML = html;
    target.style.cssText = 'position:sticky;top:0;z-index:9001;';
  }

});
