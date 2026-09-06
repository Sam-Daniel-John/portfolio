(() => {
  const PROJECT_ID = 'malware-detection-dashboard';

  const projectMarkup = `
    <div class="project-detail-page-wrap project02-detail-wrap">
      <article class="project-detail project02-detail">
        <a href="#" class="back-link" data-project-back>← BACK TO PROJECTS</a>
        <div class="project-detail-category">SOC / SECURITY OPERATIONS</div>
        <div class="project02-number">PROJECT 02</div>
        <h1>Malware Detection Dashboard</h1>
        <p class="project-detail-lead">Turning security logs into something an analyst can actually use</p>

        <div class="project-detail-tags">
          <span>WAZUH</span><span>WINDOWS</span><span>SYSMON</span><span>POWERSHELL</span><span>LOLBINS</span><span>MITRE ATT&amp;CK</span><span>SOC DASHBOARD</span>
        </div>

        <section class="detail-section">
          <h2>The next step after detection</h2>
          <p>After building the detection in Project 01, I wanted to take the next step.</p>
          <p>A SOC can collect thousands of security events, but simply having a lot of logs does not make investigation easier. I wanted to see how those events could be organized into a dashboard that gives an analyst a quick picture of what is happening.</p>
          <p>For this project, I used the same <strong>Wazuh, Windows, and Sysmon environment</strong> and built a SOC dashboard around the security telemetry being collected from the Windows endpoint.</p>
        </section>

        <section class="detail-section">
          <h2>What I built</h2>
          <p>I created a dashboard that brings different parts of the security data together, including:</p>
          <ul>
            <li>Alert severity</li>
            <li>Suspicious PowerShell activity</li>
            <li>Windows process and LOLBin activity</li>
            <li>MITRE ATT&amp;CK tactics</li>
            <li>Top alert rules</li>
            <li>Activity over time</li>
          </ul>
          <p>The idea was simple: <strong>give an analyst a starting point for investigation instead of making them search through raw events one by one.</strong></p>
        </section>

        <section class="detail-section project02-evidence-section">
          <h2>Evidence</h2>
          <p>The dashboard brings the main investigation views together in one place.</p>
          <div class="research-image-block project02-image-block project02-wide-image">
            <img src="./P2.2.png" alt="Final SOC dashboard showing alert severity, LOLBin activity, suspicious PowerShell activity, and MITRE ATT&CK tactics" loading="lazy">
            <span>Image 01: Final SOC dashboard combining multiple Wazuh security views.</span>
          </div>
        </section>

        <section class="detail-section">
          <h2>Looking at suspicious activity</h2>
          <p>One of the main areas I focused on was <strong>PowerShell and Windows processes</strong>.</p>
          <p>Tools such as PowerShell and other Windows utilities are legitimate and commonly used by administrators, but they can also be abused by attackers.</p>
          <p>By visualizing this activity, I could quickly see which processes and security events were appearing in the environment and use that information to decide where to investigate further.</p>
          <div class="research-image-block project02-image-block project02-wide-image">
            <img src="./P2.3.png" alt="Suspicious PowerShell activity and Windows process activity in Wazuh" loading="lazy">
            <span>Image 02: Suspicious PowerShell and Windows process activity used for investigation.</span>
          </div>
        </section>

        <section class="detail-section">
          <h2>Adding MITRE ATT&amp;CK context</h2>
          <p>I also added MITRE ATT&amp;CK information to the dashboard.</p>
          <p>This makes it easier to understand the type of activity behind an alert and gives the analyst additional context when investigating an event.</p>
          <p>Instead of only seeing:</p>
          <div class="project-highlight"><strong>"An alert happened"</strong></div>
          <p>the dashboard helps answer:</p>
          <div class="project-highlight"><strong>"What kind of activity does this alert represent?"</strong></div>
          <div class="research-image-block project02-image-block project02-wide-image">
            <img src="./P2.4.png" alt="MITRE ATT&CK tactics visualization from Wazuh alerts" loading="lazy">
            <span>Image 03: MITRE ATT&amp;CK tactics visualization providing context for detected activity.</span>
          </div>
        </section>

        <section class="detail-section">
          <h2>Activity over time</h2>
          <p>Another part of the dashboard shows security activity over time.</p>
          <p>This makes it easier to notice periods where alert activity increases or changes.</p>
          <p>For a SOC analyst, this can be useful when trying to understand whether several events happened around the same time and whether they may be related.</p>
          <div class="research-image-block project02-image-block project02-wide-image">
            <img src="./P2.5.png" alt="Wazuh activity over time visualization" loading="lazy">
            <span>Image 04: Activity over time showing changes in endpoint alert volume.</span>
          </div>
        </section>

        <section class="detail-section">
          <h2>Windows and Sysmon telemetry</h2>
          <p>The dashboard is built from endpoint telemetry collected from the Windows environment. The underlying process activity provides the evidence that the dashboard views help summarize and prioritize.</p>
          <div class="research-image-block project02-image-block project02-telemetry-image">
            <img src="./P2.1.png" alt="Windows PowerShell and network telemetry captured during the SOC project" loading="lazy">
            <span>Image 05: Windows endpoint telemetry used as the underlying data for the dashboard.</span>
          </div>
        </section>

        <section class="detail-section">
          <h2>Investigation flow</h2>
          <div class="detection-flow project02-flow">
            <span>See the activity</span><b>↓</b><span>Identify something unusual</span><b>↓</b><span>Check severity and rule</span><b>↓</b><span>Understand MITRE ATT&amp;CK context</span><b>↓</b><span>Look at the underlying endpoint event</span><b>↓</b><span>Investigate further</span>
          </div>
        </section>

        <section class="detail-section">
          <h2>Result</h2>
          <p>The final dashboard gives a much quicker overview of the Windows endpoint than looking through individual events alone.</p>
          <p>It brings together <strong>severity, process activity, PowerShell activity, MITRE ATT&amp;CK information, alert rules, and time-based activity</strong> in one place.</p>
          <p>This project helped me move from building a single detection to thinking about the bigger SOC picture: <strong>how an analyst can use security data to spot patterns, prioritize activity, and start an investigation.</strong></p>
        </section>

        <section class="detail-section">
          <h2>What I learned</h2>
          <p>This project gave me practical experience with:</p>
          <ul>
            <li>Wazuh security data</li>
            <li>SOC dashboard design</li>
            <li>Windows and Sysmon telemetry</li>
            <li>Security log analysis</li>
            <li>PowerShell activity</li>
            <li>LOLBin awareness</li>
            <li>MITRE ATT&amp;CK</li>
            <li>Alert prioritization</li>
            <li>Visualizing security events</li>
            <li>Thinking from an analyst's perspective</li>
          </ul>
        </section>

        <a href="#" class="back-link bottom-back" data-project-back>← BACK TO PROJECTS</a>
      </article>
    </div>`;

  const cardMarkup = `
    <a href="#project/${PROJECT_ID}" class="project-card soc-project-card" data-soc-project="${PROJECT_ID}">
      <div class="project-card-top"><span class="project-number">02</span><span class="project-arrow">↗</span></div>
      <div class="project-content">
        <div class="project-category">SOC DASHBOARD</div>
        <h3>Malware Detection Dashboard</h3>
        <p>Turning Wazuh, Windows, and Sysmon telemetry into a dashboard for spotting suspicious activity and starting an investigation.</p>
      </div>
      <div class="project-tags"><span>Wazuh</span><span>Sysmon</span><span>Windows</span><span>MITRE ATT&amp;CK</span></div>
      <div class="project-click">CLICK FOR MORE ↗</div>
    </a>`;

  function addCard() {
    const grid = document.querySelector('.soc-project-grid');
    if (!grid || grid.querySelector('[data-soc-project="' + PROJECT_ID + '"]')) return false;
    grid.insertAdjacentHTML('beforeend', cardMarkup);
    grid.querySelector('[data-soc-project="' + PROJECT_ID + '"]').addEventListener('click', (event) => {
      event.preventDefault();
      window.location.hash = '#project/' + PROJECT_ID;
    });
    return true;
  }

  function renderDetail() {
    if (window.location.hash !== '#project/' + PROJECT_ID) return false;
    const portfolio = document.querySelector('.portfolio');
    if (!portfolio || document.querySelector('.project02-detail-wrap')) return true;
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

  function init() {
    if (renderDetail()) return true;
    return addCard();
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
