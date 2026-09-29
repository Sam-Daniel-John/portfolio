(() => {
 const PROJECT_ID = 'nis2-data-governance';

 const projectMarkup = `
 <div class="project-detail-page-wrap grc-detail-wrap">
 <article class="project-detail grc-detail">
 <a href="#" class="back-link" data-project-back>← BACK TO PROJECTS</a>
 <div class="project-detail-category">GRC / NIS2 / DATA GOVERNANCE</div>
 <h1>Cybersecurity &amp; Data Governance Assessment</h1>
 <p class="project-detail-lead">A practical case study showing how technical security evidence can become a risk, a control, an owner and a remediation plan.</p>
 <div class="project-detail-tags"><span>NIS2</span><span>RISK</span><span>GDPR</span><span>CONTROL MAPPING</span><span>REMEDIATION</span></div>

 <section class="detail-section"><h2>01 , Company &amp; scope</h2>
 <p>I created a fictional European B2B SaaS company with about 250 employees, Microsoft 365, Active Directory, Azure, a SaaS platform and several external suppliers. The case covers identity, endpoints, cloud, data processing, logging, incident handling, suppliers, vulnerabilities and recovery.</p>
 <div class="grc-mini-grid"><div class="project-highlight"><strong>Data</strong><br><span>Customer PII, HR data, authentication data and security logs.</span></div><div class="project-highlight"><strong>Critical assets</strong><br><span>AD, Azure platform, backups and security monitoring.</span></div><div class="project-highlight"><strong>Suppliers</strong><br><span>Cloud, CRM, payment provider and MSP.</span></div></div>
 </section>

 <section class="detail-section"><h2>02 , Asset &amp; data inventory</h2>
 <div class="grc-table-wrap"><table class="grc-table"><thead><tr><th>Asset</th><th>Owner</th><th>Criticality</th><th>Main concern</th></tr></thead><tbody>
 <tr><td>Active Directory</td><td>IT</td><td>Critical</td><td>Privilege escalation</td></tr><tr><td>Microsoft 365</td><td>IT</td><td>High</td><td>Account compromise</td></tr><tr><td>CRM</td><td>Sales</td><td>High</td><td>Customer data exposure</td></tr><tr><td>Azure SaaS platform</td><td>Engineering</td><td>Critical</td><td>Service compromise</td></tr><tr><td>Backup system</td><td>IT</td><td>Critical</td><td>Recovery failure</td></tr></tbody></table></div>
 </section>

 <section class="detail-section"><h2>03 , Technical evidence</h2>
 <p>This is the part that connects the project to my hands-on security work.</p>
 <div class="detection-flow"><span>Wazuh alert</span><b>→</b><span>PowerShell finding</span><b>→</b><span>Endpoint risk</span><b>→</b><span>Control</span><b>→</b><span>Owner</span></div>
 <p>My Wazuh project uses Windows + Sysmon telemetry and a custom rule for suspicious PowerShell using <code>-NoProfile</code> and encoded commands. A harmless lab simulation generated a Level 12 alert and maps to ATT&amp;CK T1059.001.</p>
 <div class="detection-flow"><span>Suricata alert</span><b>→</b><span>Network evidence</span><b>→</b><span>Affected asset</span><b>→</b><span>Risk</span><b>→</b><span>Remediation</span></div>
 <p>My network lab uses Nmap, Wireshark, Suricata and Python with custom ICMP/TCP SYN rules and an alert analyser.</p>
 </section>

 <section class="detail-section"><h2>04 , Evidence-based gap</h2>
 <p>For the case study I use clearly labelled illustrative assessment data: 14/20 endpoints report expected telemetry, one critical application lacks central authentication logs, and retention is inconsistent.</p>
 <p><strong>Risk:</strong> investigators may not have enough evidence to reconstruct an attack.</p><p><strong>Control:</strong> define required log sources, owners, retention and escalation rules.</p>
 </section>

 <section class="detail-section"><h2>05 , Risk methodology</h2><p><strong>Risk = Likelihood × Impact</strong>, with both scored 1-5. Low = 1-4, Medium = 5-9, High = 10-16, Critical = 17-25.</p>
 <div class="grc-table-wrap"><table class="grc-table"><thead><tr><th>Risk</th><th>Initial</th><th>Control</th><th>Residual</th><th>Owner</th></tr></thead><tbody>
 <tr><td>Privileged account compromise</td><td>20</td><td>MFA + privileged access review</td><td>6</td><td>IT Security</td></tr><tr><td>Incomplete logging</td><td>12</td><td>Central logging + retention</td><td>6</td><td>Security</td></tr><tr><td>Unknown assets</td><td>16</td><td>Asset inventory + ownership</td><td>8</td><td>IT Operations</td></tr><tr><td>Supplier compromise</td><td>15</td><td>Supplier assessment</td><td>8</td><td>Procurement/Security</td></tr></tbody></table></div>
 </section>

 <section class="detail-section"><h2>06 , NIS2-oriented control mapping</h2>
 <div class="grc-table-wrap"><table class="grc-table"><thead><tr><th>Finding</th><th>NIS2-oriented area</th><th>Evidence</th><th>Control</th><th>Owner</th></tr></thead><tbody>
 <tr><td>Privileged accounts lack MFA</td><td>Access / risk management</td><td>IAM audit</td><td>MFA + access review</td><td>IT</td></tr><tr><td>Incomplete logging</td><td>Incident handling</td><td>Wazuh coverage</td><td>Centralised logging</td><td>Security</td></tr><tr><td>Unknown assets</td><td>Risk / vulnerability management</td><td>Asset register</td><td>Asset ownership</td><td>IT</td></tr><tr><td>Supplier lacks review</td><td>Supply-chain security</td><td>Questionnaire</td><td>Vendor assessment</td><td>Procurement</td></tr><tr><td>Backups not tested</td><td>Business continuity</td><td>Restore report</td><td>Recovery testing</td><td>IT</td></tr></tbody></table></div>
 </section>

 <section class="detail-section"><h2>07 , Control maturity</h2><p>1 = Ad hoc, 2 = Developing, 3 = Defined, 4 = Managed, 5 = Optimised.</p><div class="grc-table-wrap"><table class="grc-table"><thead><tr><th>Control</th><th>Current</th><th>Target</th><th>Gap</th></tr></thead><tbody><tr><td>Privileged MFA</td><td>2/5</td><td>4/5</td><td>Incomplete coverage</td></tr><tr><td>Asset management</td><td>2/5</td><td>4/5</td><td>Incomplete ownership</td></tr><tr><td>Logging</td><td>3/5</td><td>4/5</td><td>Coverage inconsistent</td></tr><tr><td>Incident response</td><td>2/5</td><td>4/5</td><td>Playbooks incomplete</td></tr></tbody></table></div></section>

 <section class="detail-section"><h2>08 , Remediation &amp; risk acceptance</h2><div class="detection-flow"><span>0-30 days</span><b>→</b><span>MFA + playbooks</span><b>→</b><span>31-90 days</span><b>→</b><span>Assets + suppliers + logging</span><b>→</b><span>90-180 days</span><b>→</b><span>Recovery testing</span></div><p>Residual risk is reviewed after treatment. A risk can be reduced, transferred, avoided or accepted by its owner when it is within the organisation's risk appetite.</p></section>

 <section class="detail-section"><h2>Artifacts</h2><p><a href="./grc-projects/01-nis2-data-governance.md" target="_blank">Case study documentation ↗</a> &nbsp; <a href="./grc-projects/wazuh_evidence.json" target="_blank">Wazuh evidence ↗</a> &nbsp; <a href="./grc-projects/network_evidence.md" target="_blank">Network evidence ↗</a> &nbsp; <a href="./grc-projects/risk-workflow.svg" target="_blank">Workflow diagram ↗</a></p></section>

 <section class="detail-section"><h2>Outcome</h2><p><strong>Asset → Evidence → Finding → Risk → Control → NIS2 area → Owner → Remediation → Residual risk.</strong></p><p>This is the main skill I wanted to demonstrate: understanding the technical problem and translating it into something an organisation can manage.</p></section>
 <a href="#" class="back-link bottom-back" data-project-back>← BACK TO PROJECTS</a>
 </article>
 </div>`;

 function renderDetail() {
 if (window.location.hash !== '#project/' + PROJECT_ID) return false;
 const portfolio = document.querySelector('.portfolio');
 if (!portfolio || document.querySelector('.grc-detail-wrap')) return true;
 const topBar = portfolio.querySelector('.top-bar');
 const footer = portfolio.querySelector('.footer');
 portfolio.innerHTML = '';
 if (topBar) portfolio.appendChild(topBar);
 const nav = document.createElement('div');
 nav.innerHTML = projectMarkup;
 portfolio.appendChild(nav.firstElementChild);
 if (footer) portfolio.appendChild(footer);
 document.querySelectorAll('[data-project-back]').forEach(el => el.addEventListener('click', e => {
 e.preventDefault(); window.location.hash = ''; window.location.reload();
 }));
 window.scrollTo(0,0);
 return true;
 }
 if (!renderDetail()) {
 const observer = new MutationObserver(() => { if (renderDetail()) observer.disconnect(); });
 observer.observe(document.documentElement,{childList:true,subtree:true});
 }
 window.addEventListener('hashchange', renderDetail);
})();
