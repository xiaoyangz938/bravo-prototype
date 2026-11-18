(function () {
  const app = document.querySelector('#app');
  const header = document.querySelector('.site-header');
  const menuButton = document.querySelector('.menu-button');
  const types = ['Concerts','Tours','Festivals','Cultural Projects','Brand Experiences','Stage & Spatial','Visual Systems','Creative Technology','Live Content'];
  const descriptions = [
    'A live identity built to move across stages, screens and cities.',
    'An audience-first environment shaped through light, sound and space.',
    'A flexible visual system for venue, broadcast and social formats.',
    'A shared cultural experience connecting people, place and performance.',
    'A brand moment translated into a clear, buildable live experience.'
  ];
  const projectNames = ['Afterlight — Tour Identity','Open Air — Festival System','Signal / Noise — Live Campaign','Common Ground — Cultural Programme','Night Shift — Brand Experience','Field Notes — Stage Environment','Parade — Visual System','Low Frequency — Creative Technology','The Long Way — Live Content'];
  const projects = Array.from({ length: 99 }, (_, i) => ({
    id: String(i + 1).padStart(2, '0'),
    title: projectNames[i % projectNames.length],
    type: types[i % types.length],
    description: descriptions[i % descriptions.length],
    year: 2026 - (i % 3)
  }));

  const projectCard = (project, index, featured = false) => `
    <a class="project-card ${featured && index === 0 ? 'wide' : ''} ${index % 7 === 3 ? 'tall' : ''}" href="#project/${project.id}" data-type="${project.type}">
      <div class="project-art" aria-hidden="true"></div>
      <div class="project-meta"><h3>${project.title} — ${project.type}</h3><p>${project.description}</p></div>
    </a>`;

  function homePage() {
    const media = (className='story-wide') => `<div class="story-media ${className}" aria-label="Image placeholder"></div>`;
    const caption = (text) => `<p class="story-caption">${text}</p>`;
    const bodyCopy = 'BRAVO builds live identities for artists, audiences and places. We move between strategy, design and production to make every visual decision feel intentional in the room, on screen and in memory.';
    return `<article class="page home-story">
      <section class="story-hero shell">${media('story-hero-media')}<div class="story-entry" data-sound-prompt><p>This project is designed to be experienced with music.</p><button class="button story-sound" type="button" data-sound>Enter with sound <span>→</span></button></div></section>
      <section class="story-title shell"><h1>Ideas made<br>for live moments.</h1><p>Creative direction, visual systems and production design for concerts, tours, festivals and cultural projects.</p></section>
      <section class="story-sequence shell">
        ${media()}${media()}
        <div class="story-split"><p class="story-copy">${bodyCopy}<br><br>We start with the question behind the brief, then build a clear visual language that can travel from the first sketch to the final cue.</p>${media('story-tall')}</div>
        ${media()}${caption('A visual language for a team, a place and a shared audience.')}
        ${media()}${caption('Campaign image-making, motion tests and small details that give the work its rhythm.')}
        ${media()}
        <div class="story-split story-split--reverse">${media('story-tall')}<p class="story-copy">Selected work is shown as a sequence rather than a single hero image: moving image, stills, typography and spatial studies sit alongside the project story.</p></div>
        ${media()}${media()}${media()}
        <div class="story-two-up">${media('story-tall')}${media('story-tall')}</div>
        ${media()}${caption('A toolkit of moments: the quiet frame, the wide shot and the detail that holds the memory.')}
        ${media()}
        <div class="story-two-up">${media('story-tall')}${media('story-tall')}</div>
        ${media()}
        <div class="story-offset"><div>${media('story-small')}</div>${media('story-large')}</div>
        <div class="story-three-up">${media('story-tall')}${media('story-tall')}${media('story-tall')}</div>
        ${media()}
      </section>
      <section class="story-meta shell"><div><span>Project credits</span><strong>BRAVO Studio<br>Selected work 2026</strong></div><div><span>Sector / discipline</span><strong>Live entertainment<br>Culture &amp; events<br>Brand experience</strong></div><div><span>BRAVO team</span><strong>Creative direction<br>Design · Motion<br>Development</strong></div><div><span>Photography / partners</span><strong>Working with artists<br>production teams &amp; partners</strong></div></section>
      <section class="story-related shell"><div class="section-head"><p class="eyebrow">Related projects</p><a class="small-note" href="#projects">Drag / swipe →</a></div><div class="related-grid">${projects.slice(0,4).map((p,i)=>projectCard(p,i)).join('')}</div></section>
    </article>`;
  }

  function projectsPage(active = 'All Projects') {
    const filtered = active === 'All Projects' ? projects : projects.filter(p => p.type === active);
    return `<article class="page projects-page">
      <section class="projects-filter-panel shell"><p class="eyebrow">Filter projects</p><div class="projects-filter-list" aria-label="Project filters">${['All Projects',...types].map(type=>`<button class="filter ${type===active?'active':''}" data-filter="${type}">${type}</button>`).join('')}</div></section>
      <div class="projects-note-row shell"><p class="projects-note">Working content · Project names, clients and credits to validate</p><span class="projects-filter-hint">Click → filtered view</span></div>
      <section class="projects-grid shell"><div class="project-grid">${filtered.map((p,i)=>projectCard(p,i,false)).join('')}</div></section>
    </article>`;
  }

  function studioPage() {
    const capabilities = ['Creative Direction','Stage & Spatial Design','Visual Systems','Motion & 3D','Creative Technology','Production Design'];
    const roles = [['01','Creative Direction','Ideas, narrative and audience experience'],['02','Design','Identity, space, motion and content'],['03','Technology','Systems, interaction and previsualisation'],['04','Production','Feasibility, coordination and delivery']];
    return `<article class="page">
      <section class="studio-hero studio-wireframe-hero"><p class="eyebrow">BRAVO / Studio</p><h1 class="display">We are an ideas-first<br>design company.</h1><p class="lead">BRAVO is an evolving creative collective rooted in live entertainment, culture and events. We connect ideas, people and production to make experiences that can be built and remembered.</p></section>
      <section class="studio-visual" aria-label="BRAVO studio culture visual"><div class="studio-visual__inner">STUDIO / SHOWREEL</div></section>
      <section class="studio-section shell studio-team-wireframe"><p class="eyebrow">The team</p><p class="lead">A multidisciplinary team that brings creative direction, spatial thinking, visual systems and production intelligence together around each project.</p><div class="team-list">${roles.map(r=>`<div class="team-row"><span>${r[0]}</span><div>${r[1]}</div><div>${r[2]}</div></div>`).join('')}</div></section>
      <section class="studio-section shell studio-clients-wireframe"><p class="eyebrow">Selected clients / collaborators</p><div class="client-columns"><div>Artists<br>Producers<br>Venues<br>Festivals<br>Cultural organisations</div><div>Agencies<br>Brands<br>Touring teams<br>Creative partners<br>Production specialists</div><div>Working content<br>Names to validate<br>Credits to validate<br>Permissions to confirm<br>BRAVO collective</div></div></section>
      <section class="studio-section shell studio-press-wireframe"><div class="section-head"><p class="eyebrow">Selected press</p><span class="small-note">Horizontal rail · drag / swipe →</span></div><div class="press-wire-rail">${[1,2,3,4].map(i=>`<article><div class="wire-media"></div><p>Press / studio note ${String(i).padStart(2,'0')}</p><strong>A working headline about process, culture or collaboration.</strong></article>`).join('')}</div></section>
      <section class="studio-section shell studio-awards-wireframe"><p class="eyebrow">Selected recognition</p><div class="award-wire-list">${['2026','2025','2024'].map((year,i)=>`<div><strong>${year}</strong><span>Award programme / category</span><span>Project recognition / working placeholder</span></div>`).join('')}</div></section>
      <section class="studio-section shell studio-thoughts-wireframe"><p class="eyebrow">Studio thoughts</p><div class="thought-wire-grid">${['The audience is part of the design system.','Good technology disappears into the moment.','A live experience begins before the doors open.','The best ideas are clear enough to build.'].map(t=>`<article><span>Thought</span><p>${t}</p></article>`).join('')}</div></section>
      <section class="statement-band"><p class="eyebrow">Start with the uncertainty</p><p class="lead">Tell us what you are making, where the project feels unresolved and what must be true when the audience arrives.</p><a class="button button--dark" href="#contact" data-scroll-contact>Start a conversation <span>→</span></a></section>
    </article>`;
  }

  function journalPage() {
    const entries = ['Behind the live moment','Making a visual system tour-ready','The audience is part of the design system.'];
    return `<article class="page studio-journal-wireframe"><section class="studio-hero studio-wireframe-hero"><p class="eyebrow">BRAVO / Journal</p><h1 class="display">Notes from<br>the work.</h1><p class="lead">Ideas, process notes and working observations from the collective.</p></section><section class="studio-section shell"><div class="thought-wire-grid">${entries.map((e,i)=>`<article><span>Note 0${i+1}</span><p>${e}</p></article>`).join('')}</div></section></article>`;
  }

  function projectDetailPage(id) {
    const p = projects.find(item => item.id === id) || projects[0];
    return `<article class="page">
      <section class="project-detail-hero project-detail-wireframe"><a class="back-link" href="#projects">← Back to all work</a><div class="detail-feature"><div class="detail-art" aria-label="Project media placeholder"></div><div class="detail-entry"><p>This project is designed to be experienced with the audience.</p><a class="button" data-project-entry href="#detail-content">Enter project <span>→</span></a></div></div><div class="detail-intro"><p class="eyebrow">${p.title} / ${p.type}</p><h1 class="display">A clear idea<br>made buildable.</h1><p class="lead">${p.description}</p></div></section>
      <section id="detail-content" class="detail-wire-sequence shell"><div class="wire-wide"></div><div class="wire-wide"></div><div class="wire-split"><p class="lead">The ask, the constraint and the creative move are made visible before the final image.</p><div class="wire-tall"></div></div><div class="wire-wide"></div><div class="wire-wide"></div><div class="detail-facts"><div><span>Situation</span>${p.type}</div><div><span>Contribution</span>Creative direction · Visual systems</div><div><span>Status</span>Working content to validate</div></div></section>
      <section class="statement-band"><p class="eyebrow">Have a related project?</p><p class="lead">Let’s turn the energy of the idea into a clear, buildable experience.</p><a class="button button--dark" href="#contact" data-scroll-contact>Start a conversation <span>→</span></a></section>
    </article>`;
  }

  function closeMenu() { document.body.classList.remove('menu-open'); menuButton.setAttribute('aria-expanded','false'); }

  function render() {
    const raw = location.hash.slice(1) || 'home';
    const [route, id] = raw.split('/');
    if (route === 'projects') app.innerHTML = projectsPage();
    else if (route === 'studio') app.innerHTML = studioPage();
    else if (route === 'journal') app.innerHTML = journalPage();
    else if (route === 'project') app.innerHTML = projectDetailPage(id);
    else app.innerHTML = homePage();
    document.querySelectorAll('[data-route]').forEach(link => link.classList.toggle('active', link.dataset.route === route || (route === 'project' && link.dataset.route === 'projects')));
    closeMenu(); window.scrollTo({ top: 0, behavior: 'instant' }); app.focus({ preventScroll: true });
  }

  document.addEventListener('click', event => {
    const sound = event.target.closest('[data-sound]');
    if (sound) {
      sound.classList.add('is-on');
      sound.innerHTML = 'Sound enabled <span>✓</span>';
      document.documentElement.classList.add('sound-dismissed');
      try { sessionStorage.setItem('bravo-sound-enabled', '1'); } catch (_) {}
      const prompt = sound.closest('[data-sound-prompt]');
      if (prompt) prompt.setAttribute('hidden', '');
      return;
    }
    const projectEntry = event.target.closest('[data-project-entry]');
    if (projectEntry) { event.preventDefault(); document.querySelector('#detail-content')?.scrollIntoView({ behavior:'smooth' }); return; }
    const filter = event.target.closest('[data-filter]');
    if (filter) { app.innerHTML = projectsPage(filter.dataset.filter); return; }
    const contact = event.target.closest('[data-scroll-contact]');
    if (contact) { event.preventDefault(); closeMenu(); document.querySelector('#contact').scrollIntoView({ behavior:'smooth' }); }
  });
  menuButton.addEventListener('click', () => { const open = !document.body.classList.contains('menu-open'); document.body.classList.toggle('menu-open', open); menuButton.setAttribute('aria-expanded', String(open)); });
  addEventListener('hashchange', render);
  addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 12), { passive:true });
  try { if (sessionStorage.getItem('bravo-sound-enabled') === '1') document.documentElement.classList.add('sound-dismissed'); } catch (_) {}
  render();
})();
