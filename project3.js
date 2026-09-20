(() => {
  const PROJECT_ID = 'network-security-monitoring';

  const projectMarkup = `
    <div class="project-detail-page-wrap nsm-detail-wrap">
      <article class="project-detail nsm-detail">
        <a href="#" class="back-link" data-project-back>← BACK TO PROJECTS</a>
        <div class="project-detail-category">SOC / NETWORK SECURITY</div>
        <div class="project03-number">PROJECT 03</div>
        <h1>Network Security Monitoring &amp; Detection Lab</h1>
        <p class="project-detail-lead">Building a small network monitoring pipeline from traffic visibility to validated detection.</p>

        <div class="project-detail-tags">
          <span>LINUX</span><span>NMAP</span><span>WIRESHARK</span><span>TCPDUMP</span><span>SURICATA</span><span>PYTHON</span><span>DETECTION ENGINEERING</span>
        </div>

        <section class="detail-section">
          <h2>The project</h2>
          <p>I built a small network security monitoring environment on Kali Linux to understand the complete workflow from network discovery and traffic capture to IDS detection, alert analysis, and infrastructure assessment.</p>
          <p>The project was designed as an independent security engineering project, with controlled testing performed inside my local network.</p>
          <div class="nsm-metric-grid">
            <div><strong>9</strong><span>hosts discovered</span></div>
            <div><strong>0</strong><span>open TCP ports on Kali baseline</span></div>
            <div><strong>0</strong><span>packet drops during IDS capture</span></div>
            <div><strong>2</strong><span>custom Suricata detections</span></div>
          </div>
        </section>

        <section class="detail-section">
          <h2>Architecture</h2>
          <div class="nsm-architecture">
            <img src="./nsm-architecture.svg" alt="Architecture diagram showing local network, Kali Linux, traffic analysis, Suricata IDS, alert pipeline and security assessment" loading="lazy">
          </div>
        </section>

        <section class="detail-section">
          <h2>Network baseline</h2>
          <p>I started by discovering active hosts on the local network and establishing a service baseline for the Kali host.</p>
          <pre class="project-code"><code>Network: 192.168.2.0/24
Kali:    192.168.2.76
Gateway: 192.168.2.1

Host discovery: 9 active hosts
Kali TCP baseline: 1000 ports scanned, 0 open</code></pre>
          <p>This baseline provides a reference point for later monitoring and investigation.</p>
        </section>

        <section class="detail-section">
          <h2>Traffic investigation</h2>
          <p>I captured baseline traffic with tcpdump and investigated the resulting PCAP in Wireshark. The analysis included ARP, DNS, TCP, IPv6 and other normal network activity.</p>

          <div class="nsm-evidence-grid">
            <figure><img src="./wireshark-arp.png" alt="Wireshark ARP traffic analysis" loading="lazy"><figcaption>ARP traffic observed during the baseline capture.</figcaption></figure>
            <figure><img src="./wireshark-dna.png" alt="Wireshark DNS traffic analysis" loading="lazy"><figcaption>DNS traffic investigated in the captured traffic.</figcaption></figure>
            <figure><img src="./wireshark-tcp.png" alt="Wireshark TCP traffic analysis" loading="lazy"><figcaption>TCP traffic used for protocol-level investigation.</figcaption></figure>
          </div>
        </section>

        <section class="detail-section">
          <h2>Suricata IDS</h2>
          <p>I configured Suricata to monitor <strong>wlan0</strong> and restricted the monitored home network to <strong>192.168.2.0/24</strong>.</p>
          <p>The IDS configuration was validated successfully and packet capture completed with <strong>0 packet drops</strong> during the final tests.</p>
        </section>

        <section class="detail-section">
          <h2>Custom detection engineering</h2>
          <p>I created two local Suricata rules and validated them using controlled traffic generation.</p>
          <div class="nsm-detection-cards">
            <div class="project-highlight"><strong>ICMP Echo Detection</strong><br><span>Detects ICMP echo requests inside the monitored network.</span></div>
            <div class="project-highlight"><strong>TCP SYN Scan Detection</strong><br><span>Detects repeated TCP SYN activity from an internal source.</span></div>
          </div>
          <div class="detection-flow nsm-flow">
            <span>Controlled traffic</span><b>→</b><span>wlan0</span><b>→</b><span>Suricata</span><b>→</b><span>Custom rule</span><b>→</b><span>fast.log alert</span>
          </div>
        </section>

        <section class="detail-section">
          <h2>Detection validation</h2>
          <p>I validated the TCP SYN detection by running a controlled Nmap SYN scan against the local network gateway.</p>
          <div class="research-image-block nsm-alert-image">
            <img src="./syn-scan-alert.jpg" alt="Suricata fast.log showing validated TCP SYN scan detection" loading="lazy">
            <span>Suricata alert evidence showing the custom TCP SYN scan detection firing during controlled Nmap testing.</span>
          </div>
        </section>

        <section class="detail-section">
          <h2>Python alert analysis</h2>
          <p>I built a Python log analyzer that parses Suricata <code>fast.log</code> and summarizes the detected activity by rule, source IP, destination IP, and recent events.</p>
          <pre class="project-code"><code>Total alerts: 12

Alerts by rule:
  8  NSM LAB - Internal TCP SYN Scan Detected
  4  NSM LAB - ICMP Echo Request Detected

Source IPs:
  12  192.168.2.76

Destination IPs:
  12  192.168.2.1</code></pre>
          <p>The analyzer turns raw IDS alerts into a compact view that can support initial triage.</p>
        </section>

        <section class="detail-section">
          <h2>Infrastructure security assessment</h2>
          <p>I also assessed the Kali host for exposed services and basic hardening opportunities.</p>
          <ul>
            <li>No listening TCP services were identified in the baseline.</li>
            <li>SSH was not exposed or running.</li>
            <li>No active nftables rules were detected.</li>
            <li>UFW and iptables were not installed.</li>
            <li>The UDP discovery service <code>wsdd</code> was identified and attributed before making any changes.</li>
          </ul>
          <p>The assessment resulted in recommendations around host-based firewall controls, service minimization, network discovery review, and continued monitoring.</p>
        </section>

        <section class="detail-section">
          <h2>What I built</h2>
          <ul>
            <li>Network discovery and service baselines</li>
            <li>Packet capture and Wireshark investigation workflow</li>
            <li>Suricata IDS configuration</li>
            <li>Custom ICMP and TCP SYN detection rules</li>
            <li>Controlled Nmap detection validation</li>
            <li>Python-based Suricata alert analyzer</li>
            <li>Host network exposure and hardening assessment</li>
            <li>Evidence-driven technical documentation</li>
          </ul>
        </section>

        <section class="detail-section">
          <h2>Project outcome</h2>
          <p>The final workflow connects <strong>network visibility → traffic investigation → IDS detection → alert analysis → infrastructure assessment</strong> in one small, reproducible security monitoring environment.</p>
          <div class="nsm-artifact-links">
            <a href="./security-assessment.md" target="_blank" rel="noopener">SECURITY ASSESSMENT ↗</a>
            <a href="./syn-scan-alert.txt" target="_blank" rel="noopener">DETECTION LOG ↗</a>
            <a href="./log_analyzer.py" target="_blank" rel="noopener">PYTHON ANALYZER ↗</a>
          </div>
        </section>

        <a href="#" class="back-link bottom-back" data-project-back>← BACK TO PROJECTS</a>
      </article>
    </div>`;

  const cardMarkup = `
    <a href="#project/${PROJECT_ID}" class="project-card soc-project-card" data-soc-project="${PROJECT_ID}">
      <div class="project-card-top"><span class="project-number">03</span><span class="project-arrow">↗</span></div>
      <div class="project-content">
        <div class="project-category">NETWORK SECURITY</div>
        <h3>Network Security Monitoring &amp; Detection Lab</h3>
        <p>Building network visibility, IDS detections, alert analysis, and infrastructure security assessment on Kali Linux.</p>
      </div>
      <div class="project-tags"><span>Suricata</span><span>Nmap</span><span>Wireshark</span><span>Python</span></div>
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
    if (!portfolio || document.querySelector('.nsm-detail-wrap')) return true;
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