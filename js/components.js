/**
 * Old Bay Newfoundlands - Shared Components
 * Replaces: Navbar, Footer, Breadcrumb, QuickView, TopPanel, TopHeader, MegaMenu
 * 
 * Usage: include this file on every page AFTER data.js
 * Call initPage(pageTitle) at the bottom of each page's script.
 */

// ─── STATE ────────────────────────────────────────────────────────────────────
// Simple page-level state (replaces Redux for navigation purposes)
let currentDogId = null;
let currentLitterId = null;

function setCurrentDog(id) { currentDogId = id; }
function setCurrentLitter(id) { currentLitterId = id; }

// ─── UTILITIES ────────────────────────────────────────────────────────────────

function formatDate(dateStr) {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    if (isNaN(d)) return dateStr;
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' });
}

// ─── TOP PANEL ────────────────────────────────────────────────────────────────

function renderTopPanel() {
    return `
    <div class="top-panel" id="topPanel">
        <div class="container">
            <div class="panel-content">
                <p><strong>We do NOT have any puppies or adults at this time. </strong>
                    <a href="https://www.newfpuppy.com" target="_blank">
                        Click here: https://www.newfpuppy.com for information about how to find a puppy.
                    </a>
                </p>
                <i onclick="document.getElementById('topPanel').classList.add('hide')" 
                   class="fas fa-times panel-close-btn" style="cursor:pointer"></i>
            </div>
        </div>
    </div>`;
}

// ─── TOP HEADER ───────────────────────────────────────────────────────────────

function renderTopHeader() {
    const prefix = window.ASSET_PREFIX || '';
    return `
    <div class="top-header">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-7 col-md-6">
                    <ul class="top-header-nav">
                        <li><a href="${prefix}/aboutUs.html" title="About Old Bay Newfoundlands">About</a></li>
                        <li><a href="${prefix}/contactUs.html" title="Contact Old Bay Newfoundlands">Contact</a></li>
                    </ul>
                </div>
                <div class="col-lg-5 col-md-6">
                    <ul class="top-header-right-nav">
                        <li><a href="https://www.akc.org/dog-breeds/newfoundland/" target="_blank" title="American Kennel Club">AKC <i class="fas fa-dog"></i></a></li>
                        <li><a href="http://www.ncanewfs.org/" target="_blank" title="Newfoundland Club of America">NCA <i class="fas fa-paw"></i></a></li>
                        <li><a href="http://cncnewfs.com/" target="_blank" title="Colonial Newfoundland Club">CNC <i class="fas fa-dog"></i></a></li>
                        <li><a href="https://www.ofa.org/" target="_blank" title="Canine Health Information Center">OFA <i class="fas fa-paw"></i></a></li>
                        <li><a href="http://www.middleburgkc.com/index.html/" target="_blank" title="Middleburg Kennel Club">MKC <i class="fas fa-dog"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>`;
}

// ─── MEGA MENU ────────────────────────────────────────────────────────────────

function renderMegaMenu() {
    const prefix = window.ASSET_PREFIX || '';

    const boys    = (window.DOGS || []).filter(d => d.sex === 'male'   && d.ours && !d.rip);
    const studs   = (window.DOGS || []).filter(d => d.sex === 'male'   && d.stud && !d.rip);
    const girls   = (window.DOGS || []).filter(d => d.sex === 'female' && d.ours && !d.rip);
    const dams    = (window.DOGS || []).filter(d => d.sex === 'female' && d.dams && !d.rip);
    const past1   = (window.DOGS || []).filter(d => d.rip && d.id <= 20);
    const past2   = (window.DOGS || []).filter(d => d.rip && d.id > 20);
    const rom     = (window.DOGS || []).filter(d => d.rom);
    const top20   = (window.DOGS || []).filter(d => d.toptwenty);
    const litters = window.LITTERS || [];
    const lit1    = litters.slice(0, 10);
    const lit2    = litters.slice(10, 20);
    const lit3    = litters.slice(20);

    const dogLink = (dog) =>
        `<li><a href="${prefix}/aboutDog.html?id=${dog.id}" title="${dog.call}">${dog.call}</a></li>`;
    const dogImg = (dog) =>
        `<li><a href="${prefix}/aboutDog.html?id=${dog.id}" title="${dog.call}">
            <img src="${dog.image}" alt="${dog.call}" />
         </a></li>`;
    const dogImgModal = (dog) =>
        `<li><a href="#" title="${dog.call} (${dog.toptwenty})" 
            onclick="openQuickView(event, ${dog.id})">
            <img src="${dog.image}" alt="${dog.call}" />
         </a></li>`;
    const litterLink = (lit) =>
        `<li><a href="${prefix}/litter.html?id=${lit.id}" title="${lit.parents}">${lit.parents}</a></li>`;

    return `
    <div class="navbar-area">
        <div id="navbar" class="comero-nav">
            <div class="container">
                <nav class="navbar navbar-expand-md navbar-light">
                    <a class="navbar-brand" href="${prefix}/index.html" title="Go to Home Page">
                        <img src="${prefix}/images/logo.jpg" alt="Old Bay Newfoundlands" />
                    </a>

                    <button class="navbar-toggler navbar-toggler-right collapsed" type="button"
                        onclick="toggleMobileNav()" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav">

                            <li class="nav-item p-relative">
                                <a class="nav-link" href="${prefix}/index.html">Home</a>
                            </li>

                            <!-- AWARDS -->
                            <li class="nav-item megamenu" id="dd-awards">
                                <a class="nav-link" href="#" onclick="toggleDropdown(event,'dd-awards')">
                                    Awards <i class="fas fa-chevron-down"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <div class="container"><div class="row">
                                            <div class="col">
                                                <h6 class="submenu-title">Award Type</h6>
                                                <ul class="megamenu-submenu">
                                                    <li><a href="${prefix}/specialties.html">Specialties</a></li>
                                                    <li><a href="${prefix}/top20.html">Top Twenty</a></li>
                                                    <li><a href="${prefix}/rom.html">Register of Merit</a></li>
                                                    <li><a href="${prefix}/vn.html">Versatile Newfoundland</a></li>
                                                    <li><a href="${prefix}/wa.html">Working Achievement</a></li>
                                                    <li><a href="${prefix}/champions.html">Champions</a></li>
                                                    <li><a href="${prefix}/working.html">Working</a></li>
                                                    <li><a href="${prefix}/titled.html">Titled</a></li>
                                                </ul>
                                            </div>
                                            <div class="col">
                                                <h6 class="submenu-title">Register of Merit</h6>
                                                <ul class="megamenu-submenu top-brands">
                                                    ${rom.map(dogImgModal).join('')}
                                                </ul>
                                            </div>
                                            <div class="col">
                                                <h6 class="submenu-title">NCA Top Twenty</h6>
                                                <ul class="megamenu-submenu top-brands">
                                                    ${top20.map(dogImgModal).join('')}
                                                </ul>
                                            </div>
                                        </div></div>
                                    </li>
                                </ul>
                            </li>

                            <!-- THE BOYS -->
                            <li class="nav-item megamenu" id="dd-boys">
                                <a class="nav-link" href="#" onclick="toggleDropdown(event,'dd-boys')">
                                    The Boys <i class="fas fa-chevron-down"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <div class="container"><div class="row">
                                            <div class="col">
                                                <h6 class="submenu-title">Old Bay Boys</h6>
                                                <ul class="megamenu-submenu">${boys.map(dogLink).join('')}</ul>
                                            </div>
                                            <div class="col">
                                                <h6 class="submenu-title">The Studs</h6>
                                                <ul class="megamenu-submenu top-brands">${studs.map(dogImg).join('')}</ul>
                                            </div>
                                        </div></div>
                                    </li>
                                </ul>
                            </li>

                            <!-- THE GIRLS -->
                            <li class="nav-item megamenu" id="dd-girls">
                                <a class="nav-link" href="#" onclick="toggleDropdown(event,'dd-girls')">
                                    The Girls <i class="fas fa-chevron-down"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <div class="container"><div class="row">
                                            <div class="col">
                                                <h6 class="submenu-title">Old Bay Girls</h6>
                                                <ul class="megamenu-submenu">${girls.map(dogLink).join('')}</ul>
                                            </div>
                                            <div class="col">
                                                <h6 class="submenu-title">The Dams</h6>
                                                <ul class="megamenu-submenu top-brands">${dams.map(dogImg).join('')}</ul>
                                            </div>
                                        </div></div>
                                    </li>
                                </ul>
                            </li>

                            <!-- PUPPIES -->
                            <li class="nav-item megamenu" id="dd-puppies">
                                <a class="nav-link" href="#" onclick="toggleDropdown(event,'dd-puppies')">
                                    Puppies <i class="fas fa-chevron-down"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <div class="container"><div class="row">
                                        <div class="col">
                                            <h6 class="submenu-title">Past Litters</h6>
                                            <ul class="megamenu-submenu">${lit1.map(litterLink).join('')}</ul>
                                        </div>
                                        <div class="col">
                                            <h6 class="submenu-title">Past Litters (continued)</h6>
                                            <ul class="megamenu-submenu">${lit2.map(litterLink).join('')}</ul>
                                        </div>
                                        ${lit3.length ? `
                                        <div class="col">
                                            <h6 class="submenu-title">Past Litters (continued)</h6>
                                            <ul class="megamenu-submenu">${lit3.map(litterLink).join('')}</ul>
                                        </div>` : ''}
                                    </div></div>
                                </ul>
                            </li>

                            <!-- OUR PAST -->
                            <li class="nav-item megamenu" id="dd-past">
                                <a class="nav-link" href="#" onclick="toggleDropdown(event,'dd-past')">
                                    Our Past <i class="fas fa-chevron-down"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <div class="container"><div class="row">
                                            <div class="col">
                                                <h6 class="submenu-title">Our Past</h6>
                                                <ul class="megamenu-submenu">${past1.map(dogLink).join('')}</ul>
                                            </div>
                                            <div class="col">
                                                <h6 class="submenu-title">Our Past</h6>
                                                <ul class="megamenu-submenu top-brands">${past1.map(dogImg).join('')}</ul>
                                            </div>
                                            <div class="col">
                                                <h6 class="submenu-title">Our Past</h6>
                                                <ul class="megamenu-submenu">${past2.map(dogLink).join('')}</ul>
                                            </div>
                                            <div class="col">
                                                <h6 class="submenu-title">Our Past</h6>
                                                <ul class="megamenu-submenu top-brands">
                                                    ${past2.filter(d => d.image).map(dogImg).join('')}
                                                </ul>
                                            </div>
                                        </div></div>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>`;
}

// ─── NAVBAR (combined) ────────────────────────────────────────────────────────

function renderNavbar() {
    return renderTopPanel() + renderTopHeader() + renderMegaMenu();
}

// ─── BREADCRUMB ───────────────────────────────────────────────────────────────

function renderBreadcrumb(title) {
    const prefix = window.ASSET_PREFIX || '';
    return `
    <div class="page-title-area">
        <div class="container">
            <ul>
                <li><a href="${prefix}/index.html">Home</a></li>
                <li>${title}</li>
            </ul>
        </div>
    </div>`;
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────

function renderFooter() {
    const prefix = window.ASSET_PREFIX || '';
    return `
    <footer class="footer-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="single-footer-widget">
                        <p>Cindy and John Flowers together with Kathy Hamilton raise Newfoundland dogs in North Carolina, USA.<br>
                        Newfoundlands dogs are our passion. Please feel free to ask us any questions you have about Newfoundlands.</p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="single-footer-widget">
                        <h3>Contact Us</h3>
                        <ul class="footer-contact-info">
                            <li><i class="fas fa-map-marker-alt"></i> Location: Oak Island, NC - USA</li>
                            <li><i class="far fa-envelope"></i> <a href="${prefix}/contactUs.html">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-area">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-12 col-md-12">
                        <p>
                            <span id="siteseal">
                                <script async type="text/javascript"
                                    src="https://seal.godaddy.com/getSeal?sealID=6pCVTnwD2GuDZmHGQLaZml5obAG8Jnq8p8DPhyCmzRoZGKfLOvUIsTX3y0jn">
                                </script>
                            </span>
                            Copyright &copy; 2020 Old Bay Newfoundlands. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <!-- Go To Top -->
    <div class="go-top" id="goTop" style="display:none" onclick="scrollToTop()">
        <i class="fas fa-arrow-up"></i>
        <i class="fas fa-arrow-up"></i>
    </div>`;
}

// ─── QUICK VIEW MODAL ─────────────────────────────────────────────────────────

function renderQuickViewModal() {
    return `
    <div class="modal fade productQuickView" id="quickViewModal" tabindex="-1" style="display:none">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content" id="quickViewContent">
                <!-- filled by openQuickView() -->
            </div>
        </div>
    </div>
    <div class="modal-backdrop fade" id="modalBackdrop" style="display:none"></div>`;
}

function openQuickView(event, dogId) {
    if (event) event.preventDefault();
    const dog = (window.DOGS || []).find(d => d.id === dogId);
    if (!dog) return;

    const awards = (window.AWARDS || []).filter(a => a.id === dogId);

    const titlesHtml = dog.Titles && dog.Titles.length ? `
        <div class="table-responsive">
            <table class="table table-striped">
                <thead><tr><th>Title</th><th>Date</th><th>Organization</th></tr></thead>
                <tbody>
                    ${dog.Titles.map(t => `
                        <tr>
                            <td>${t.title}</td>
                            <td>${formatDate(t.date)}</td>
                            <td>${t.org}</td>
                        </tr>`).join('')}
                </tbody>
            </table>
        </div>` : '';

    const awardsHtml = awards.length ? `
        <div class="table-responsive">
            <table class="table table-striped">
                <thead><tr><th>Award</th><th>Show</th><th>Date</th></tr></thead>
                <tbody>
                    ${awards.map(a => `
                        <tr>
                            <td>${a.award}</td>
                            <td>${a.show}</td>
                            <td>${formatDate(a.date)}</td>
                        </tr>`).join('')}
                </tbody>
            </table>
        </div>` : '';

    document.getElementById('quickViewContent').innerHTML = `
        <button type="button" class="close" onclick="closeQuickView()" aria-label="Close">
            <span aria-hidden="true"><i class="fas fa-times"></i></span>
        </button>
        <div class="row">
            <div class="col-lg-6 col-md-6">
                <div class="productQuickView-image">
                    <h2><b>${dog.call}</b></h2>
                    <img src="${dog.image}" alt="${dog.call}" />
                </div>
            </div>
            <div class="col-lg-6 col-md-6">
                <div class="about-content">
                    <h2>${dog.name}</h2>
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <tbody>
                                <tr><td>Born</td><td>${formatDate(dog.dob)}</td></tr>
                                <tr><td>Sire</td><td>${dog.sire || ''}</td></tr>
                                <tr><td>Dam</td><td>${dog.dam || ''}</td></tr>
                                <tr><td>Owner</td><td>${dog.owner || ''}</td></tr>
                                <tr><td>Lives With</td><td>${dog.lives || ''}</td></tr>
                                <tr><td>AKA</td><td>${dog.aka || ''}</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        ${titlesHtml}
        ${awardsHtml}
    `;

    const modal = document.getElementById('quickViewModal');
    const backdrop = document.getElementById('modalBackdrop');
    modal.style.display = 'block';
    modal.classList.add('show');
    backdrop.style.display = 'block';
    backdrop.classList.add('show');
    document.body.classList.add('modal-open');
}

function closeQuickView() {
    const modal = document.getElementById('quickViewModal');
    const backdrop = document.getElementById('modalBackdrop');
    modal.style.display = 'none';
    modal.classList.remove('show');
    backdrop.style.display = 'none';
    backdrop.classList.remove('show');
    document.body.classList.remove('modal-open');
}

// ─── NAV INTERACTIONS ─────────────────────────────────────────────────────────

function toggleDropdown(event, menuId) {
    event.preventDefault();
    // Close all other open dropdowns
    document.querySelectorAll('.nav-item.megamenu').forEach(el => {
        if (el.id !== menuId) {
            el.querySelector('.dropdown-menu')?.classList.remove('show');
        }
    });
    const menu = document.getElementById(menuId);
    menu?.querySelector('.dropdown-menu')?.classList.toggle('show');
}

function toggleMobileNav() {
    const nav = document.getElementById('navbarSupportedContent');
    nav.classList.toggle('show');
}

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.megamenu')) {
        document.querySelectorAll('.dropdown-menu.show').forEach(el => el.classList.remove('show'));
    }
});

// Sticky navbar on scroll
document.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const goTop = document.getElementById('goTop');
    if (navbar) {
        navbar.classList.toggle('is-sticky', window.scrollY > 170);
    }
    if (goTop) {
        goTop.style.display = window.scrollY > 170 ? 'block' : 'none';
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─── DOG CARD RENDERER ────────────────────────────────────────────────────────
// Replaces all 8 DogXxxCard components with one function.
// cardType: 'award' | 'dog'
//   award card shows: dog name, award, show, date  (specialties, rom, top20)
//   dog card shows:   call name, full name, owner  (champions, vn, wa, titled, working)

function renderDogCard(data, cardType) {
    const line2 = cardType === 'award'
        ? `${data.award || ''}<br>${data.show || ''}<br>${formatDate(data.date)}`
        : `${data.name || ''}<br>${data.owner || ''}`;

    const heading = cardType === 'award'
        ? `<h3><a href="#" onclick="openQuickView(event,${data.id})">${data.dog || data.call}</a></h3>`
        : `<h3>${data.call}</h3>`;

    return `
    <div class="col-lg-4 col-sm-6 col-md-4 col-6 products-col-item">
        <div class="single-product-box">
            <div class="product-image">
                <a href="#" onclick="openQuickView(event,${data.id})">
                    <img class="specialty-image" src="${data.image}" alt="${data.call || data.dog}" />
                </a>
                <ul>
                    <li>
                        <a title="Quick View" onclick="openQuickView(event,${data.id})" href="#">
                            <i class="far fa-eye"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="product-content">
                ${heading}
                ${line2}
            </div>
        </div>
    </div>`;
}

// ─── FILTER / SORT BAR ────────────────────────────────────────────────────────

function renderFilterBar(total, currentSort, onSortChange) {
    return `
    <div class="products-filter-options">
        <div class="row align-items-center">
            <div class="col d-flex">
                <span>View:</span>
                <div class="view-list-row">
                    <div class="view-column">
                        <a href="#" class="icon-view-two"  onclick="setGrid(event,'products-col-two')"><span></span><span></span></a>
                        <a href="#" class="icon-view-three" onclick="setGrid(event,'products-col-three')"><span></span><span></span><span></span></a>
                        <a href="#" class="icon-view-four active" onclick="setGrid(event,'products-col-four')"><span></span><span></span><span></span><span></span></a>
                        <a href="#" class="view-grid-switch" onclick="setGrid(event,'products-row-view')"><span></span><span></span></a>
                    </div>
                </div>
            </div>
            <div class="col d-flex justify-content-center">
                <p>Showing ${total} results</p>
            </div>
            <div class="col d-flex">
                <span>Sort:</span>
                <div class="products-ordering-list">
                    <select id="sortSelect" onchange="handleSort(this.value)">
                        <option value="1" ${currentSort==1?'selected':''}>Date Descending</option>
                        <option value="2" ${currentSort==2?'selected':''}>Date Ascending</option>
                        <option value="3" ${currentSort==3?'selected':''}>Name Descending</option>
                        <option value="4" ${currentSort==4?'selected':''}>Name Ascending</option>
                    </select>
                </div>
            </div>
        </div>
    </div>`;
}

function setGrid(event, gridClass) {
    event.preventDefault();
    const grid = document.getElementById('products-filter');
    if (!grid) return;
    grid.className = `products-collections-listing row ${gridClass}`;
    // update active icon
    document.querySelectorAll('.view-column a').forEach(a => a.classList.remove('active'));
    event.currentTarget.classList.add('active');
}

// handleSort is defined per-page since each page has its own data array.
// Pages should override this function after including components.js.

// ─── SIMPLE CAROUSEL ─────────────────────────────────────────────────────────
// Lightweight replacement for OwlCarousel (no dependencies)

function initCarousel(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const slides = container.querySelectorAll('.carousel-slide');
    if (!slides.length) return;

    let current = parseInt(container.dataset.start || '0');
    const total = slides.length;

    function show(index) {
        slides.forEach((s, i) => s.classList.toggle('active', i === index));
        const dots = container.querySelectorAll('.carousel-dot');
        dots.forEach((d, i) => d.classList.toggle('active', i === index));
        current = index;
    }

    // Build nav HTML
    const nav = document.createElement('div');
    nav.className = 'carousel-nav';
    nav.innerHTML = `
        <button class="carousel-prev" onclick="carouselPrev('${containerId}')">
            <i class="fas fa-arrow-left"></i>
        </button>
        <div class="carousel-dots">
            ${Array.from(slides).map((_, i) => `<span class="carousel-dot" onclick="carouselGo('${containerId}',${i})"></span>`).join('')}
        </div>
        <button class="carousel-next" onclick="carouselNext('${containerId}')">
            <i class="fas fa-arrow-right"></i>
        </button>`;
    container.appendChild(nav);

    container._carousel = { current, total, show };
    show(current);
}

function carouselPrev(id) {
    const c = document.getElementById(id)?._carousel;
    if (c) c.show((c.current - 1 + c.total) % c.total);
}
function carouselNext(id) {
    const c = document.getElementById(id)?._carousel;
    if (c) c.show((c.current + 1) % c.total);
}
function carouselGo(id, index) {
    const c = document.getElementById(id)?._carousel;
    if (c) c.show(index);
}

// ─── PAGE INIT ────────────────────────────────────────────────────────────────

function initPage(pageTitle) {
    // Inject navbar
    const navEl = document.getElementById('navbar-container');
    if (navEl) navEl.innerHTML = renderNavbar();

    // Inject breadcrumb
    const bcEl = document.getElementById('breadcrumb-container');
    if (bcEl && pageTitle) bcEl.innerHTML = renderBreadcrumb(pageTitle);

    // Inject footer
    const footEl = document.getElementById('footer-container');
    if (footEl) footEl.innerHTML = renderFooter();

    // Inject modal placeholder
    const modalEl = document.getElementById('modal-container');
    if (modalEl) modalEl.innerHTML = renderQuickViewModal();
}
