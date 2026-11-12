'use strict';



// -------------------------------------------------------------------
// content rendering — projects & experiments
// The lists live in ./projects-data.js and ./experiments-data.js so
// content can be updated without touching index.html.
// This runs before the filter/navigation logic below, so the
// generated cards are picked up by the existing event handlers.
// -------------------------------------------------------------------

(function () {

  const escapeHtml = function (value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  };

  // ----- projects -----

  const projectList = document.querySelector("[data-project-list]");
  const projects = window.projectsData || [];

  if (projectList && projects.length > 0) {

    projectList.innerHTML = projects.map(function (project) {

      const filters = Array.isArray(project.filters)
        ? project.filters
        : [project.filters || project.category || ""];

      const category = project.category || filters[0] || "";
      const width = project.width || 800;
      const height = project.height || 500;

      const badge = project.badge
        ? '<span class="project-badge">' +
            '<ion-icon name="' + escapeHtml(project.badge.icon) + '" aria-hidden="true"></ion-icon>' +
            escapeHtml(project.badge.label) +
          '</span>'
        : "";

      const openIcon = project.href
        ? '<span class="project-open-icon">' +
            '<ion-icon name="open-outline" aria-hidden="true"></ion-icon>' +
          '</span>'
        : "";

      const cardContent =
        '<figure class="project-img">' +
          badge +
          '<img src="' + escapeHtml(project.image) + '" ' +
            'alt="' + escapeHtml(project.alt || project.title) + '" ' +
            'loading="lazy" width="' + width + '" height="' + height + '" />' +
        '</figure>' +
        '<div class="project-body">' +
          '<p class="project-category">' + escapeHtml(category) + '</p>' +
          '<h3 class="project-title">' + escapeHtml(project.title) + '</h3>' +
        '</div>' +
        openIcon;

      const card = project.href
        ? '<a href="' + escapeHtml(project.href) + '" ' +
            'target="_blank" rel="noopener noreferrer" ' +
            'class="project-card" ' +
            'aria-label="' + escapeHtml(project.title + " — opens in a new tab") + '">' +
            cardContent +
          '</a>'
        : '<div class="project-card project-card--static">' + cardContent + '</div>';

      return '<li class="project-item active" data-filter-item ' +
        'data-category="' + escapeHtml(filters.join(", ")) + '">' +
        card +
      '</li>';

    }).join("");

  }

  // ----- experiments -----

  const experimentList = document.querySelector("[data-experiment-list]");
  const experiments = window.experimentsData || [];

  if (experimentList && experiments.length > 0) {

    experimentList.innerHTML = experiments.map(function (experiment) {

      return '<li class="blog-post-item">' +
        '<a href="' + escapeHtml(experiment.href) + '">' +
          '<figure class="blog-banner-box">' +
            '<img src="' + escapeHtml(experiment.image) + '" ' +
              'alt="' + escapeHtml(experiment.alt || experiment.title) + '" ' +
              'loading="lazy" width="400" height="240" />' +
          '</figure>' +
          '<div class="blog-content">' +
            '<div class="blog-meta">' +
              '<p class="blog-category">' + escapeHtml(experiment.category) + '</p>' +
              '<span class="dot"></span>' +
              '<time datetime="' + escapeHtml(experiment.datetime) + '">' +
                escapeHtml(experiment.date) +
              '</time>' +
            '</div>' +
            '<h3 class="h3 blog-item-title">' + escapeHtml(experiment.title) + '</h3>' +
            '<p class="blog-text">' + escapeHtml(experiment.text) + '</p>' +
          '</div>' +
        '</a>' +
      '</li>';

    }).join("");

  }

})();




// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); };



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
if (sidebarBtn) {
  // The collapsed panel only shows the avatar row. Instead of
  // guessing the expanded height with a fixed max-height (which
  // clipped the contacts on small phones and with larger text),
  // measure the real content and let the CSS transition animate
  // to that exact value.
  const syncSidebarHeight = function () {
    if (!sidebar) return;

    const isDesktop = getComputedStyle(sidebarBtn).display === "none";

    if (isDesktop || !sidebar.classList.contains("active")) {
      sidebar.style.maxHeight = "";
      return;
    }

    sidebar.style.maxHeight = sidebar.scrollHeight + 4 + "px";
  };

  sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
    const isExpanded = sidebar.classList.contains("active");
    sidebarBtn.setAttribute("aria-expanded", isExpanded);
    sidebarBtn.setAttribute("aria-label", isExpanded ? "Hide contacts" : "Show contacts");
    sidebarBtn.querySelector("span").textContent = isExpanded ? "Hide Contacts" : "Show Contacts";
    syncSidebarHeight();
  });

  // once the expand animation finishes, trim any oversized cap so
  // the next collapse animates from the true content height
  sidebar.addEventListener("transitionend", function (event) {
    if (event.target !== sidebar || event.propertyName !== "max-height") return;
    if (!sidebar.classList.contains("active")) return;

    const exact = sidebar.scrollHeight + 4;
    const current = parseFloat(sidebar.style.maxHeight) || 0;

    if (Math.abs(current - exact) > 1) {
      sidebar.style.maxHeight = exact + "px";
    }
  });

  // re-measure one frame after a viewport change, so the new width's
  // layout (and any re-wrapped text) is settled before measuring
  let sidebarSyncFrame = 0;
  let sidebarSyncTimer = 0;
  const scheduleSidebarSync = function () {
    cancelAnimationFrame(sidebarSyncFrame);
    clearTimeout(sidebarSyncTimer);
    sidebarSyncFrame = requestAnimationFrame(syncSidebarHeight);
    sidebarSyncTimer = setTimeout(syncSidebarHeight, 150);
  };

  window.addEventListener("resize", scheduleSidebarSync);
  window.addEventListener("orientationchange", scheduleSidebarSync);

  // fonts and images settle after first paint — re-measure so the
  // expanded panel always ends up exactly as tall as its content
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(syncSidebarHeight);
  }

  syncSidebarHeight();
}



// scroll to top
const scrollToTopBtn = document.getElementById("scrollToTop");

if (scrollToTopBtn) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add("visible");
    } else {
      scrollToTopBtn.classList.remove("visible");
    }
  });

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  if (modalContainer) modalContainer.classList.toggle("active");
  if (overlay) overlay.classList.toggle("active");
}

// add click event to all modal items
if (testimonialsItem.length > 0 && modalContainer) {
  for (let i = 0; i < testimonialsItem.length; i++) {
    testimonialsItem[i].addEventListener("click", function () {
      const avatar = this.querySelector("[data-testimonials-avatar]");
      if (avatar && modalImg) {
        modalImg.src = avatar.src;
        modalImg.alt = avatar.alt;
      }
      const titleEl = this.querySelector("[data-testimonials-title]");
      if (titleEl && modalTitle) modalTitle.innerHTML = titleEl.innerHTML;
      const textEl = this.querySelector("[data-testimonials-text]");
      if (textEl && modalText) modalText.innerHTML = textEl.innerHTML;
      testimonialsModalFunc();
    });
  }
}

// add click event to modal close button
if (modalCloseBtn) modalCloseBtn.addEventListener("click", testimonialsModalFunc);
if (overlay) overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

// Normalize function for comparison
function normalizeText(text) {
  return text.toLowerCase().replace(/\s+/g, " ").trim();
}

if (select) {
  select.addEventListener("click", function (e) {
    e.stopPropagation();
    elementToggleFunc(select);
    select.setAttribute("aria-expanded", select.classList.contains("active"));
  });
}

// close select dropdown when clicking outside
if (select) {
  document.addEventListener("click", function (e) {
    if (!select.contains(e.target) && !e.target.closest('.select-list')) {
      select.classList.remove("active");
      select.setAttribute("aria-expanded", "false");
    }
  });
}

// close select dropdown with Escape key
if (select) {
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && select.classList.contains("active")) {
      select.classList.remove("active");
      select.setAttribute("aria-expanded", "false");
    }
  });
}

// add event in all select items
if (selectItems.length > 0) {
  for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function (e) {
      e.stopPropagation();

      let selectedValue = normalizeText(this.innerText);
      let displayText = this.innerText;

      let selectValueEl = document.querySelector("[data-select-value]");
      if (selectValueEl) selectValueEl.innerText = displayText;

      if (select) {
        elementToggleFunc(select);
        select.setAttribute("aria-expanded", select.classList.contains("active"));
      }
      filterFunc(selectedValue);

    });
  }
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  let filterValue = normalizeText(selectedValue);

  for (let i = 0; i < filterItems.length; i++) {

    // a project may belong to multiple categories, stored as a
    // comma separated list in data-category
    let projectCategories = (filterItems[i].dataset.category || "")
      .split(",")
      .map(function (category) { return normalizeText(category); });

    if (filterValue === "all" || projectCategories.indexOf(filterValue) !== -1) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = normalizeText(this.innerText);

    // Update dropdown display value
    let selectValueEl = document.querySelector("[data-select-value]");
    if (selectValueEl) selectValueEl.innerText = this.innerText;

    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}


// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// keep the submit button in step with the form's validity
if (form && formInputs.length > 0) {
  const syncFormBtn = function () {
    if (!formBtn) return;

    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  };

  // add event to all form input field
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", syncFormBtn);
    formInputs[i].addEventListener("change", syncFormBtn);
  }

  // browsers may restore or autofill values on load or on back/forward
  // without firing input, so match the button to the current validity
  syncFormBtn();
  window.addEventListener("pageshow", syncFormBtn);
}


// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    let navText = normalizeText(this.innerHTML);
    let clickedBtn = this;

    for (let j = 0; j < pages.length; j++) {
      let pageText = normalizeText(pages[j].dataset.page);

      if (navText === pageText) {
        pages[j].classList.add("active");
        clickedBtn.classList.add("active");
        clickedBtn.setAttribute("aria-current", "page");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        pages[j].classList.remove("active");
      }
    }

    for (let k = 0; k < navigationLinks.length; k++) {
      if (navigationLinks[k] !== clickedBtn) {
        navigationLinks[k].classList.remove("active");
        navigationLinks[k].removeAttribute("aria-current");
      }
    }

  });
}

// hero call-to-action navigation
// triggers the matching navbar button so the existing
// page navigation logic stays the single source of truth
const gotoTriggers = document.querySelectorAll("[data-nav-goto]");

for (let i = 0; i < gotoTriggers.length; i++) {
  gotoTriggers[i].addEventListener("click", function () {

    let targetPage = normalizeText(this.dataset.navGoto);

    for (let j = 0; j < navigationLinks.length; j++) {
      if (normalizeText(navigationLinks[j].innerHTML) === targetPage) {
        navigationLinks[j].click();
        break;
      }
    }

  });
}


// -------------------------------------------------------------------
// scroll-triggered reveals — progressive enhancement.
// content blocks fade up into view while scrolling, using the same
// fade-up motion and 0.5s ease timing as the page transitions.
// skipped entirely when the user prefers reduced motion or when
// IntersectionObserver is unavailable — the page then renders
// fully visible, exactly like the original.
// -------------------------------------------------------------------

(function () {

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) return;

  // project cards are excluded on purpose — .project-item already
  // has the projectIn entrance animation from the filter logic,
  // and the hero reveals through its own entrance animation.
  const REVEAL_SELECTOR = [
    ".language-item",
    ".testimonials-item",
    ".clients-item",
    ".skill-card",
    ".timeline-item",
    ".blog-post-item",
    ".contact-detail-item"
  ].join(", ");

  const targets = document.querySelectorAll(REVEAL_SELECTOR);

  if (targets.length === 0) return;

  // every reveal style is gated behind this class, so without
  // JavaScript the page stays fully visible
  document.documentElement.classList.add("js-reveal");

  for (let i = 0; i < targets.length; i++) {
    targets[i].setAttribute("data-reveal", "");
  }

  const reveal = function (elem, delay) {

    if (delay) { elem.style.transitionDelay = delay + "ms"; }

    elem.classList.add("is-revealed");

    // once the transition has played, drop the reveal styles so
    // element-specific hovers (e.g. the skill-card lift) keep
    // working untouched
    window.setTimeout(function () {
      elem.removeAttribute("data-reveal");
      elem.style.transitionDelay = "";
    }, 550 + delay);

  };

  const revealObserver = new IntersectionObserver(function (entries) {

    let visibleCount = 0;

    for (let i = 0; i < entries.length; i++) {

      if (!entries[i].isIntersecting) continue;

      revealObserver.unobserve(entries[i].target);

      // gentle stagger for items entering the view together
      reveal(entries[i].target, visibleCount * 60);

      visibleCount++;

    }

  }, { rootMargin: "0px 0px -12% 0px" });

  for (let i = 0; i < targets.length; i++) {
    revealObserver.observe(targets[i]);
  }

})();


// -------------------------------------------------------------------
// mobile navbar clearance — on very narrow screens (below ~344px)
// the five navbar links wrap onto a second row, making the fixed
// bottom navbar taller than the base margin under <main> reserves.
// This keeps the reserved space matched to the real navbar height,
// so the last section is never covered — on any device width.
// -------------------------------------------------------------------

(function () {

  const navbar = document.querySelector(".navbar");
  const mainEl = document.querySelector("main");

  if (!navbar || !mainEl) return;

  const syncNavbarClearance = function () {

    // desktop (≥1024px) floats the navbar at the top-right instead
    if (getComputedStyle(navbar).position !== "fixed") {
      mainEl.style.marginBottom = "";
      return;
    }

    const needed = navbar.offsetHeight + 16; // the theme's resting gap

    // read the stylesheet's own margin for this breakpoint (not a
    // previously written inline value) and only raise it if needed
    mainEl.style.marginBottom = "";
    const base = parseFloat(getComputedStyle(mainEl).marginBottom) || 75;

    if (needed > base) {
      mainEl.style.marginBottom = needed + "px";
    }

  };

  syncNavbarClearance();

  // link widths change once the webfont finishes loading
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(syncNavbarClearance);
  }

  window.addEventListener("resize", syncNavbarClearance);

})();
