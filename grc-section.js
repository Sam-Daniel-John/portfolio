(() => {
 const SECTION_ID = 'grc-projects';

 const sectionMarkup = `
 <section class="projects-section grc-projects-section" id="${SECTION_ID}">
 <div class="section-header">
 <div class="section-label">GRC / CYBER GOVERNANCE</div>
 </div>
 <div class="projects-heading">
 <h2>Security beyond the alert.</h2>
 <p>I connect hands-on security work with risk, data protection, governance, and practical remediation.</p>
 </div>
 <div class="projects-grid grc-project-grid"></div>
 </section>`;

 const cards = [
 {
 id: 'nis2-data-governance',
 category: 'GRC / NIS2',
 title: 'Cybersecurity & Data Governance Assessment',
 description: 'A practical assessment that connects security findings with risk, NIS2, data governance, owners, and remediation.',
 tags: ['NIS2','Risk Assessment','GDPR','Security Controls','Remediation']
 },
 {
 id: 'ai-privacy-security',
 category: 'PRIVACY / AI SECURITY',
 title: 'AI Privacy & Security Risk Assessment',
 description: 'A DPIA-style assessment of an AI system, covering data flows, privacy risks, security controls, and practical safeguards.',
 tags: ['DPIA','GDPR','AI Act','Privacy by Design','Risk']
 }
 ];

 function card(c) {
 return `
 <a href="#project/${c.id}" class="project-card grc-project-card" data-grc-project="${c.id}">
 <div class="project-card-top"><span></span><span class="project-arrow">↗</span></div>
 <div class="project-content">
 <div class="project-category">${c.category}</div>
 <h3>${c.title}</h3>
 <p>${c.description}</p>
 </div>
 <div class="project-tags">${c.tags.map(t => `<span>${t}</span>`).join('')}</div>
 <div class="project-click">CLICK FOR MORE ↗</div>
 </a>`;
 }

 function init() {
 if (document.getElementById(SECTION_ID)) return true;
 const projects = document.querySelector('.projects-section');
 if (!projects) return false;
 projects.insertAdjacentHTML('afterend', sectionMarkup);
 const grid = document.querySelector('.grc-project-grid');
 if (grid) {
 grid.innerHTML = cards.map(card).join('');
 grid.querySelectorAll('[data-grc-project]').forEach(el => {
 el.addEventListener('click', e => {
 e.preventDefault();
 window.location.hash = '#project/' + el.dataset.grcProject;
 });
 });
 }
 return true;
 }

 if (!init()) {
 const observer = new MutationObserver(() => {
 if (init()) observer.disconnect();
 });
 observer.observe(document.documentElement, {childList:true, subtree:true});
 }
})();
