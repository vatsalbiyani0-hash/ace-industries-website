/* ==========================================================================
   ACE INDUSTRIES — Site interactions
   - Sticky header state
   - Mobile navigation drawer
   - Active nav link by current page
   - Scroll reveal (IntersectionObserver)
   - Animated stat counters
   - Product category filtering
   - Accordion (FAQ / quality process)
   - Back-to-top + sticky CTA
   - Marquee seamless loop
   - Demo form handling (no backend)
   - Footer year
   ========================================================================== */
(function () {
  "use strict";

  const onReady = (fn) =>
    document.readyState !== "loading"
      ? fn()
      : document.addEventListener("DOMContentLoaded", fn);

  onReady(function () {
    /* ---------------------------------------------------------------------
       Sticky header shadow on scroll
    --------------------------------------------------------------------- */
    const header = document.querySelector("[data-header]");
    const backToTop = document.querySelector("[data-back-to-top]");

    const onScroll = () => {
      const y = window.scrollY;
      if (header) header.classList.toggle("is-scrolled", y > 8);
      if (backToTop) backToTop.classList.toggle("is-visible", y > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    if (backToTop) {
      backToTop.addEventListener("click", () =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      );
    }

    /* ---------------------------------------------------------------------
       Mobile navigation drawer
    --------------------------------------------------------------------- */
    const toggle = document.querySelector("[data-nav-toggle]");
    const backdrop = document.querySelector("[data-nav-backdrop]");
    const nav = document.querySelector("[data-nav]");

    const closeMenu = () => {
      document.body.classList.remove("menu-open");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    };
    const openMenu = () => {
      document.body.classList.add("menu-open");
      if (toggle) toggle.setAttribute("aria-expanded", "true");
    };

    if (toggle) {
      toggle.addEventListener("click", () =>
        document.body.classList.contains("menu-open") ? closeMenu() : openMenu()
      );
    }
    if (backdrop) backdrop.addEventListener("click", closeMenu);
    if (nav) {
      nav.querySelectorAll("a").forEach((a) =>
        a.addEventListener("click", closeMenu)
      );
    }
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });

    /* ---------------------------------------------------------------------
       Active nav link based on current path
    --------------------------------------------------------------------- */
    const current = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("[data-nav] a[href]").forEach((a) => {
      const href = a.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("http")) return;
      const file = href.split("/").pop();
      if (
        file === current ||
        (current === "" && file === "index.html") ||
        (current === "index.html" && file === "index.html")
      ) {
        a.classList.add("is-active");
        a.setAttribute("aria-current", "page");
      }
    });

    /* ---------------------------------------------------------------------
       Scroll reveal
    --------------------------------------------------------------------- */
    const revealEls = document.querySelectorAll("[data-reveal]");
    if ("IntersectionObserver" in window && revealEls.length) {
      const io = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      revealEls.forEach((el) => io.observe(el));
    } else {
      revealEls.forEach((el) => el.classList.add("is-visible"));
    }

    /* ---------------------------------------------------------------------
       Animated counters
    --------------------------------------------------------------------- */
    const counters = document.querySelectorAll("[data-count]");
    const animateCount = (el) => {
      const target = parseFloat(el.getAttribute("data-count"));
      const decimals = (el.getAttribute("data-count").split(".")[1] || "").length;
      const duration = 1600;
      const start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const value = target * eased;
        el.textContent = value.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target.toLocaleString("en-IN", { minimumFractionDigits: decimals });
      };
      requestAnimationFrame(step);
    };
    if ("IntersectionObserver" in window && counters.length) {
      const co = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCount(entry.target);
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      counters.forEach((el) => co.observe(el));
    } else {
      counters.forEach((el) => (el.textContent = el.getAttribute("data-count")));
    }

    /* ---------------------------------------------------------------------
       Product category filtering
    --------------------------------------------------------------------- */
    const filterBtns = document.querySelectorAll("[data-filter]");
    const filterItems = document.querySelectorAll("[data-category]");
    if (filterBtns.length && filterItems.length) {
      const grid = filterItems[0].closest("[data-filter-grid]") || document;
      filterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          const cat = btn.getAttribute("data-filter");
          filterBtns.forEach((b) => {
            b.classList.toggle("is-active", b === btn);
            b.setAttribute("aria-pressed", b === btn ? "true" : "false");
          });
          if (grid.classList) grid.classList.add("is-filtering");
          filterItems.forEach((item) => {
            const cats = (item.getAttribute("data-category") || "").split(" ");
            const show = cat === "all" || cats.includes(cat);
            item.hidden = !show;
          });
        });
      });
    }

    /* ---------------------------------------------------------------------
       Accordion
    --------------------------------------------------------------------- */
    document.querySelectorAll("[data-accordion]").forEach((acc) => {
      const triggers = acc.querySelectorAll(".accordion__trigger");
      triggers.forEach((trigger) => {
        trigger.addEventListener("click", () => {
          const panel = trigger.nextElementSibling;
          const isOpen = trigger.getAttribute("aria-expanded") === "true";
          // close others within this accordion
          triggers.forEach((t) => {
            if (t !== trigger) {
              t.setAttribute("aria-expanded", "false");
              t.nextElementSibling.style.maxHeight = null;
            }
          });
          trigger.setAttribute("aria-expanded", String(!isOpen));
          panel.style.maxHeight = isOpen ? null : panel.scrollHeight + "px";
        });
      });
    });

    /* ---------------------------------------------------------------------
       Marquee — duplicate items for seamless loop
    --------------------------------------------------------------------- */
    document.querySelectorAll("[data-marquee]").forEach((track) => {
      track.innerHTML += track.innerHTML;
    });

    /* ---------------------------------------------------------------------
       Demo form handling (front-end only)
    --------------------------------------------------------------------- */
    document.querySelectorAll("[data-demo-form]").forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }
        const success = form.querySelector("[data-form-success]");
        const submitBtn = form.querySelector("[type=submit]");
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.dataset.label = submitBtn.textContent;
          submitBtn.textContent = "Sending…";
        }
        // Simulate async request
        setTimeout(() => {
          form.reset();
          if (success) {
            success.classList.add("is-visible");
            success.scrollIntoView({ behavior: "smooth", block: "center" });
          }
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = submitBtn.dataset.label || "Submit";
          }
        }, 900);
      });
    });

    /* ---------------------------------------------------------------------
       Current year in footer
    --------------------------------------------------------------------- */
    document.querySelectorAll("[data-year]").forEach((el) => {
      el.textContent = new Date().getFullYear();
    });
  });
})();
