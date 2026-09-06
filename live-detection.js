(() => {
  function addHeroRadar() {
    const hero = document.querySelector('.hero');
    if (!hero || hero.querySelector('.hero-radar')) return !!hero;

    const radar = document.createElement('div');
    radar.className = 'hero-radar';
    radar.setAttribute('aria-label', 'Simulated live SOC detection radar');
    radar.innerHTML = `
      <div class="radar-frame">
        <div class="radar-grid"></div>
        <div class="radar-ring ring-one"></div>
        <div class="radar-ring ring-two"></div>
        <div class="radar-ring ring-three"></div>
        <div class="radar-cross cross-x"></div>
        <div class="radar-cross cross-y"></div>
        <div class="radar-sweep"></div>
        <span class="radar-blip blip-one"></span>
        <span class="radar-blip blip-two"></span>
        <span class="radar-blip blip-three"></span>
        <span class="radar-blip blip-four"></span>
        <span class="radar-core"></span>
      </div>
      <div class="radar-meta">
        <span><i></i> LIVE DETECTION</span>
        <span>WAZUH / SYSMON</span>
      </div>
    `;
    hero.appendChild(radar);
    return true;
  }

  function cleanProjectsIntro() {
    const heading = document.querySelector('.projects-heading');
    if (!heading) return false;
    const description = heading.querySelector('p');
    if (description) description.remove();
    return true;
  }

  function moveJourneyAfterProjects() {
    const projects = document.querySelector('.projects-section');
    const journey = document.querySelector('.journey-section');
    if (!projects || !journey) return false;
    if (projects.nextElementSibling !== journey) projects.parentNode.insertBefore(journey, projects.nextElementSibling);
    return true;
  }

  function init() {
    const a = addHeroRadar();
    const b = cleanProjectsIntro();
    const c = moveJourneyAfterProjects();
    return a && b && c;
  }

  if (!init()) {
    const observer = new MutationObserver(() => {
      if (init()) observer.disconnect();
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
  }
})();
