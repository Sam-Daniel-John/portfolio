(() => {
  const PROJECT_ID = 'wazuh-detection-engineering';

  const projectMarkup = `
    <div class="project-detail-page-wrap">
      <article class="project-detail">
        <a href="#" class="back-link" data-project-back>← BACK TO PROJECTS</a>
        <div class="project-detail-category">SOC / SECURITY OPERATIONS</div>
        <h1>Wazuh Detection Engineering</h1>
        <p class="project-detail-lead">Building a detection from the ground up</p>

        <div class="project-detail-tags">
          <span>WAZUH</span><span>SYSMON</span><span>WINDOWS</span><span>POWERSHELL</span><span>MITRE ATT&amp;CK</span><span>DETECTION ENGINEERING</span>
        </div>

        <section class="detail-section">
          <h2>The project</h2>
          <p>For this project, I wanted to understand what actually happens when a suspicious command is executed on a Windows machine and how a SOC analyst can turn that activity into something useful.</p>
          <p>I built a small detection environment using <strong>Wazuh, Windows, and Sysmon</strong>. The goal was to detect PowerShell commands using encoded commands, which is a technique attackers can use to hide what they are executing.</p>
        </section>

        <section class="detail-section">
          <h2>What I built</h2>
          <p>I connected a Windows machine to a Wazuh server and used Sysmon to collect detailed process activity.</p>
          <p>I then created a <strong>custom Wazuh detection rule</strong> that looks for PowerShell being executed with both <code>NoProfile</code> and <code>EncodedCommand</code>.</p>
          <p>The detection was mapped to:</p>
          <div class="project-highlight"><strong>MITRE ATT&amp;CK: T1059.001 | PowerShell</strong></div>
          <div class="research-image-block"><img src="./P1.1.png" alt="Custom Wazuh detection rule 100101" loading="lazy"><span>Image 01: Custom Wazuh detection rule showing Rule ID 100101, Level 12 and MITRE ATT&amp;CK T1059.001.</span></div>
        </section>

        <section class="detail-section">
          <h2>How I tested it</h2>
          <p>I used a harmless encoded PowerShell command for testing:</p>
          <pre class="project-code"><code>powershell.exe -NoProfile -EncodedCommand UwB0AGEAcgB0AC0AUwBsAGUAZQBwACAAMQA=</code></pre>
          <p>The encoded command simply runs:</p>
          <pre class="project-code"><code>Start-Sleep 1</code></pre>
          <p>This allowed me to reproduce the suspicious behaviour without using actual malware.</p>
          <div class="research-image-block"><img src="./P1.2.png" alt="Harmless encoded PowerShell detection test" loading="lazy"><span>Image 02: Windows PowerShell test using the harmless encoded command.</span></div>
        </section>

        <section class="detail-section">
          <h2>Detection flow</h2>
          <div class="detection-flow"><span>Windows activity</span><b>→</b><span>Sysmon</span><b>→</b><span>Wazuh agent</span><b>→</b><span>Wazuh manager</span><b>→</b><span>Custom detection rule</span><b>→</b><span>SOC alert</span></div>
          <p>The alert appeared in Wazuh with <strong>Rule ID 100101</strong> and <strong>Level 12</strong>, along with the PowerShell command details and MITRE ATT&amp;CK mapping.</p>
          <div class="research-image-block"><img src="./P1.3.png" alt="Wazuh alerts dashboard showing Windows endpoint telemetry" loading="lazy"><span>Image 03: Wazuh alert stream showing endpoint telemetry generated during the test.</span></div>
        </section>

        <section class="detail-section">
          <h2>Alert investigation</h2>
          <p>The investigation view exposed the underlying Windows event fields, including the PowerShell process information collected from the endpoint.</p>
          <div class="research-image-block"><img src="./P1.3.1.png" alt="Wazuh investigation view showing PowerShell process details" loading="lazy"><span>Image 04: Wazuh investigation view showing the PowerShell process and endpoint event details.</span></div>
          <div class="research-image-block"><img src="./P1.3.2.png" alt="Wazuh rule details showing Rule ID 100101 and MITRE mapping" loading="lazy"><span>Image 05: Rule investigation details showing Rule ID 100101, Level 12 and MITRE ATT&amp;CK T1059.001.</span></div>
        </section>

        <section class="detail-section">
          <h2>What I learned</h2>
          <p>This project helped me understand detection engineering beyond simply looking at alerts.</p>
          <ul>
            <li>Collect Windows process telemetry with Sysmon</li>
            <li>Understand Wazuh's built-in detection rules</li>
            <li>Write and validate a custom Wazuh rule</li>
            <li>Detect suspicious PowerShell behaviour</li>
            <li>Map detections to MITRE ATT&amp;CK</li>
            <li>Test a detection safely</li>
            <li>Investigate the resulting alert in the Wazuh dashboard</li>
            <li>Follow an event from the endpoint all the way to the SOC alert</li>
          </ul>
        </section>

        <section class="detail-section">
          <h2>Result</h2>
          <p>The detection worked as intended. A suspicious PowerShell execution on the Windows endpoint was collected through Sysmon, processed by Wazuh, matched by my custom rule, and presented as a high severity SOC alert.</p>
          <p>This gave me practical experience with the complete <strong>endpoint telemetry to detection to investigation</strong> workflow.</p>
        </section>

        <a href="#" class="back-link bottom-back" data-project-back>← BACK TO PROJECTS</a>
      </article>
    </div>`;

  const cardMarkup = `
    <a href="#project/${PROJECT_ID}" class="project-card soc-project-card" data-soc-project="${PROJECT_ID}">
      <div class="project-card-top"><span class="project-number">01</span><span class="project-arrow">↗</span></div>
      <div class="project-content">
        <div class="project-category">DETECTION ENGINEERING</div>
        <h3>Wazuh Detection Engineering</h3>
        <p>Building a custom Wazuh detection for suspicious encoded PowerShell execution and tracing the event from Windows telemetry to a SOC alert.</p>
      </div>
      <div class="project-tags"><span>Wazuh</span><span>Sysmon</span><span>PowerShell</span><span>MITRE ATT&amp;CK</span></div>
      <div class="project-click">CLICK FOR MORE ↗</div>
    </a>`;

  function renderDetail() {
    if (window.location.hash !== '#project/' + PROJECT_ID) return false;
    const portfolio = document.querySelector('.portfolio');
    if (!portfolio || document.querySelector('.project-detail-page-wrap')) return true;
    const topBar = portfolio.querySelector('.top-bar');
    const footer = portfolio.querySelector('.footer');
    portfolio.innerHTML = '';
    if (topBar) portfolio.appendChild(topBar);
    const nav = document.createElement('div');
    nav.innerHTML = projectMarkup;
    portfolio.appendChild(nav.firstElementChild);
    if (footer) portfolio.appendChild(footer);
    document.querySelectorAll('[data-project-back]').forEach((el) => el.addEventListener('click', (event) => {
      event.preventDefault();
      window.location.hash = '';
      window.location.reload();
    }));
    window.scrollTo(0, 0);
    return true;
  }

  function addProjectSections() {
    const grid = document.querySelector('.projects-grid');
    if (!grid || document.querySelector('.project-domain-layout')) return false;

    const layout = document.createElement('div');
    layout.className = 'project-domain-layout';
    layout.innerHTML = `
      <section class="project-domain-section soc-project-section">
        <div class="project-domain-title"><span>01</span><strong>SOC / SECURITY OPERATIONS</strong></div>
        <div class="projects-grid soc-project-grid">${cardMarkup}</div>
      </section>
      <section class="project-domain-section usable-project-section">
        <div class="project-domain-title"><span>02</span><strong>USABLE SECURITY / HUMAN-CENTERED SECURITY</strong></div>
      </section>`;

    grid.parentNode.insertBefore(layout, grid);
    layout.querySelector('.usable-project-section').appendChild(grid);
    grid.classList.add('usable-project-grid');

    layout.querySelector('[data-soc-project]').addEventListener('click', (event) => {
      event.preventDefault();
      window.location.hash = '#project/' + PROJECT_ID;
    });
    return true;
  }

  function init() {
    if (renderDetail()) return true;
    return addProjectSections();
  }

  if (!init()) {
    const observer = new MutationObserver(() => {
      if (init()) observer.disconnect();
    });
    observer.observe(document.documentElement, {childList: true, subtree: true});
  }
  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#project/' + PROJECT_ID) renderDetail();
  });
})();
