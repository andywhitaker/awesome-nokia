// Awesome Nokia - Search Card Target Focus & Smooth Navigation
(function () {
  function highlightTargetCard() {
    const hash = window.location.hash;
    // Clear any previous focus
    document.querySelectorAll('.card-target-focus').forEach(el => {
      el.classList.remove('card-target-focus');
    });

    if (!hash || hash.length <= 1) return;

    try {
      const targetId = decodeURIComponent(hash.slice(1));
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        const card = targetEl.closest('li');
        if (card) {
          card.classList.add('card-target-focus');
          // Smoothly scroll the card into view, vertically centered
          setTimeout(() => {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 80);
        }
      }
    } catch (e) {
      // Ignore invalid selector / hash
    }
  }

  // Run on initial load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', highlightTargetCard);
  } else {
    highlightTargetCard();
  }

  // Run on hash changes (e.g., clicking search results or browser navigation)
  window.addEventListener('hashchange', highlightTargetCard);

  // Material for MkDocs / Zensical instant navigation hook
  if (typeof document$ !== 'undefined') {
    document$.subscribe(function () {
      highlightTargetCard();
    });
  }
  document.addEventListener('DOMContentSwitch', highlightTargetCard);

  // ========================================================
  // PREPOPULATED SEARCH (Star-Ranked Official Projects)
  // ========================================================
  // PREPOPULATED SEARCH (Star-Ranked Official Projects)
  // ========================================================
  function getStarSvg(isDark) {
    const starColor = isDark ? '#fbbf24' : '#d97706';
    return '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="' + starColor + '" stroke="' + starColor + '" stroke-width="2" style="display:inline-block;vertical-align:-1px;margin-right:3px;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
  }

  // Top 12 official & community projects ranked by GitHub stars
  const POPULAR_PROJECTS = [
    { title: "Robot Framework", cat: "General Networking", stars: "11,916", href: "networking/#gen-robot-framework", desc: "Generic open source automation framework for acceptance testing and test-driven development.", tags: ["#testing", "#automation"] },
    { title: "Netmiko", cat: "General Networking", stars: "4,295", href: "networking/#gen-netmiko", desc: "Multi-vendor Python library to simplify CLI connections to network devices via SSH.", tags: ["#python", "#ssh", "#automation"] },
    { title: "Containerlab", cat: "Containerlab", stars: "2,841", href: "containerlab/#clab-core", desc: "Open-source virtual network lab orchestrator for containers and virtual machines.", tags: ["#lab", "#orchestration", "#official"] },
    { title: "Netlab", cat: "General Networking", stars: "746", href: "networking/#gen-netlab", desc: "Network automation tool creating topology diagrams and provisioning lab environments using Containerlab.", tags: ["#lab", "#topology"] },
    { title: "gNMIc", cat: "General Networking", stars: "322", href: "networking/#gen-gnmic", desc: "Open source gNMI CLI client and collector with full SR Linux and SROS telemetry support.", tags: ["#telemetry", "#gnmi", "#official"] },
    { title: "vrnetlab", cat: "Containerlab", stars: "287", href: "containerlab/#vrnetlab", desc: "Tool to convert VM-based network device images into Containerlab-compatible containers.", tags: ["#containers", "#vm", "#official"] },
    { title: "Clabernetes", cat: "Containerlab", stars: "135", href: "containerlab/#clabernetes", desc: "Containerlab in Kubernetes allowing distributed, scale-out network labs.", tags: ["#kubernetes", "#cloud", "#official"] },
    { title: "SR Linux Lab Container", cat: "SR Linux", stars: "101", href: "srlinux/#srl-lab-container", desc: "Virtual SR Linux node container image for lab testing, automation experiments, and development.", tags: ["#lab", "#srlinux", "#official"] },
    { title: "SROS YANG Models", cat: "SROS", stars: "77", href: "sros/#sros-yang-models", desc: "Official repository of Nokia 7x50 SROS YANG models for model-driven configuration and state.", tags: ["#yang", "#sros", "#official"] },
    { title: "Antimony", cat: "Containerlab", stars: "57", href: "containerlab/#antimony", desc: "Alternative GUI and lab manager focused on educational environments.", tags: ["#gui", "#lab", "#education"] },
    { title: "pySROS Python Library", cat: "SROS", stars: "57", href: "sros/#sros-pysros", desc: "Python client library for model-driven management and automation of Nokia SROS routers.", tags: ["#sros", "#python", "#automation"] },
    { title: "Muxus", cat: "General Apps", stars: "43", href: "apps/#gen-app-muxus", desc: "Modern terminal multiplexer with seamless split-pane SSH sessions for network engineers.", tags: ["#terminal", "#ssh", "#gui"] }
  ];

  function findSearchShadow() {
    const host = Array.from(document.body.children).find(el => el.shadowRoot);
    return host ? host.shadowRoot : null;
  }

  function getBaseScope() {
    try {
      if (typeof __md_scope !== 'undefined' && __md_scope.href) {
        return __md_scope.href;
      }
      const logoLink = document.querySelector('.md-header__button.md-logo');
      if (logoLink && logoLink.href) {
        return logoLink.href;
      }
    } catch (e) {
      // Ignore
    }
    return window.location.origin + '/awesome-nokia/';
  }

  function renderPrepopulated(shadow) {
    if (!shadow) return;
    const list = shadow.querySelector('ol.b');
    const z = shadow.querySelector('.z');
    const input = shadow.querySelector('input');
    if (!list || !z || !input) return;

    // Only populate when input is empty
    if (input.value.trim() !== '') return;

    const isDark = document.body.getAttribute('data-md-color-scheme') === 'slate';
    const starSvg = getStarSvg(isDark);
    const starTextColor = isDark ? '#38bdf8' : '#0369a1';
    const headerTextColor = isDark ? '#94a3b8' : '#475569';
    const breadcrumbColor = isDark ? '#94a3b8' : '#64748b';
    const titleColor = isDark ? '#f8fafc' : '#0f172a';
    const descColor = isDark ? '#cbd5e1' : '#334155';
    const tagBg = isDark ? '#1e293b' : '#f1f5f9';
    const tagColor = isDark ? '#7dd3fc' : '#0369a1';
    const tagBorder = isDark ? '1px solid rgba(56,189,248,0.25)' : '1px solid #cbd5e1';

    let header = shadow.querySelector('.prepopulated-header');
    if (!header) {
      header = document.createElement('div');
      header.className = 'B prepopulated-header';
      z.insertBefore(header, list);
    }
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
    header.style.fontWeight = '600';
    header.style.letterSpacing = '0.05em';
    header.style.padding = '6px 14px 4px 14px';
    header.style.fontSize = '11px';
    header.style.color = headerTextColor;
    header.innerHTML = '<span>POPULAR PROJECTS (BY GITHUB STARS)</span><span style="display:flex;align-items:center;">' + starSvg + ' STARS</span>';

    const base = getBaseScope();

    list.innerHTML = POPULAR_PROJECTS.map(item => {
      let fullUrl;
      try {
        fullUrl = new URL(item.href, base).href;
      } catch (err) {
        fullUrl = item.href;
      }
      return (
        '<li class="prepopulated-item">' +
          '<a href="' + fullUrl + '" class="i">' +
            '<div class="C">' +
              '<div class="D">' +
                '<menu class="n"><li style="color:' + breadcrumbColor + ';">' + item.cat + '</li></menu>' +
                '<span class="E prepopulated-star-count" style="font-weight:600;display:inline-flex;align-items:center;color:' + starTextColor + ';">' + starSvg + ' ' + item.stars + '</span>' +
              '</div>' +
              '<h2 class="x" style="color:' + titleColor + ';">' + item.title + '</h2>' +
              '<div class="u" style="color:' + descColor + ';">' + item.desc + ' ' + item.tags.map(t => '<code style="background:' + tagBg + ';color:' + tagColor + ';border:' + tagBorder + ';padding:2px 6px;border-radius:4px;font-size:11px;">' + t + '</code>').join(' ') + '</div>' +
            '</div>' +
          '</a>' +
        '</li>'
      );
    }).join('');

    // Clicking an item closes the search dialog
    list.querySelectorAll('.prepopulated-item a').forEach(a => {
      a.addEventListener('click', () => {
        const backdrop = shadow.querySelector('.p');
        if (backdrop) backdrop.click();
      });
    });
  }

  function clearPrepopulated(shadow) {
    if (!shadow) return;
    const header = shadow.querySelector('.prepopulated-header');
    if (header) {
      header.style.display = 'none';
    }
    shadow.querySelectorAll('.prepopulated-item').forEach(el => el.remove());
  }

  function setupSearchShadow(shadow) {
    if (!shadow) return;

    function attachListeners() {
      const input = shadow.querySelector('input');
      const list = shadow.querySelector('ol.b');
      const modalEl = shadow.querySelector('.l');
      const z = shadow.querySelector('.z');

      if (!input || !list || !z) return false;

      if (!input._hasPrepopulateListener) {
        input._hasPrepopulateListener = true;
        const handleQuery = () => {
          if (input.value.trim() === '') {
            renderPrepopulated(shadow);
          } else {
            clearPrepopulated(shadow);
          }
        };
        input.addEventListener('input', handleQuery);
        input.addEventListener('keyup', handleQuery);
        input.addEventListener('search', handleQuery);
        input.addEventListener('focus', () => {
          if (input.value.trim() === '') {
            renderPrepopulated(shadow);
          }
        });
      }

      if (modalEl && !modalEl._hasPrepopulateObserver) {
        modalEl._hasPrepopulateObserver = true;
        const modalObserver = new MutationObserver(() => {
          if (!modalEl.classList.contains('d')) {
            // Modal opened
            const curInput = shadow.querySelector('input');
            if (curInput && curInput.value.trim() === '') {
              renderPrepopulated(shadow);
            }
          }
        });
        modalObserver.observe(modalEl, { attributes: true, attributeFilter: ['class'] });
      }

      if (list && !list._hasPrepopulateObserver) {
        list._hasPrepopulateObserver = true;
        const listObserver = new MutationObserver(() => {
          const curInput = shadow.querySelector('input');
          if (curInput && curInput.value.trim() === '' && list.children.length === 0) {
            renderPrepopulated(shadow);
          }
        });
        listObserver.observe(list, { childList: true });
      }

      // Initial render if input is currently empty
      if (input.value.trim() === '') {
        renderPrepopulated(shadow);
      }

      return true;
    }

    if (!attachListeners()) {
      const shadowObs = new MutationObserver(() => {
        if (attachListeners()) {
          shadowObs.disconnect();
        }
      });
      shadowObs.observe(shadow, { childList: true, subtree: true });
    }
  }

  // Observe theme changes to dynamically refresh prepopulated colors
  const themeObserver = new MutationObserver(() => {
    const shadow = findSearchShadow();
    if (shadow) {
      const input = shadow.querySelector('input');
      if (input && input.value.trim() === '') {
        renderPrepopulated(shadow);
      }
    }
  });
  themeObserver.observe(document.body, { attributes: true, attributeFilter: ['data-md-color-scheme'] });

  // Observe creation of the search modal shadow root
  const bodyObserver = new MutationObserver(() => {
    const shadow = findSearchShadow();
    if (shadow) setupSearchShadow(shadow);
  });
  bodyObserver.observe(document.body, { childList: true });

  const existingShadow = findSearchShadow();
  if (existingShadow) setupSearchShadow(existingShadow);

  // Global search triggers
  document.querySelectorAll('.md-search__button, label[for="__search"]').forEach(btn => {
    btn.addEventListener('click', () => {
      setTimeout(() => {
        const shadow = findSearchShadow();
        if (shadow) {
          setupSearchShadow(shadow);
          renderPrepopulated(shadow);
        }
      }, 60);
    });
  });
})();
