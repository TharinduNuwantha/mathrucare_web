/**
 * Pregnancy Support System — Research Website
 * site.js — Progressive Enhancement JavaScript
 * Project: R26-IT-146 | SLIIT Department of Information Technology
 *
 * Features:
 * - Centralized, editable Project Documents configuration & filtering
 * - Sticky navigation scroll behavior & active section tracking
 * - Mobile navigation drawer
 * - Milestone timeline interactive filter
 * - Accessible tabs & accordions
 * - Subtle scroll-reveal animation
 * - Transparent contact form handler with mailto fallback
 */

(function () {
  'use strict';

  // =======================================================================
  // 1. CENTRALIZED EDITABLE PROJECT DOCUMENTS CONFIGURATION
  // =======================================================================
  // Easily add, modify, or update documents here.
  const PROJECT_DOCUMENTS = [
    {
      id: "doc-ctg-proposal",
      category: "proposal",
      categoryLabel: "Research Proposal",
      title: "AI-Assisted CTG Analysis and Interpretation — Research Proposal",
      contributor: "Thirimanne D.P.B.",
      studentId: "IT22272386",
      component: "Component 01",
      status: "available",
      statusLabel: "Available",
      fileType: "PDF",
      fileSize: "701 KB",
      viewUrl: "assets/docs/IT22272386_Thirimanne_CTG_Proposal.pdf",
      downloadUrl: "assets/docs/IT22272386_Thirimanne_CTG_Proposal.pdf",
      description: "Original research proposal investigating consumer-grade photograph digitization and multi-tier classification of cardiotocography records."
    },
    {
      id: "doc-risk-proposal",
      category: "proposal",
      categoryLabel: "Research Proposal",
      title: "Maternal Health Analytics and Risk Classification — Research Proposal",
      contributor: "Randinu P.V.K.V.",
      studentId: "IT22557506",
      component: "Component 02",
      status: "available",
      statusLabel: "Available",
      fileType: "PDF",
      fileSize: "402 KB",
      viewUrl: "assets/docs/IT22557506_Randinu_Maternal_Risk_Proposal.pdf",
      downloadUrl: "assets/docs/IT22557506_Randinu_Maternal_Risk_Proposal.pdf",
      description: "Original research proposal establishing a multi-input maternal risk classifier with explainable AI (SHAP) and clinical alert dispatch."
    },
    {
      id: "doc-chatbot-proposal",
      category: "proposal",
      categoryLabel: "Research Proposal",
      title: "Bilingual AI Chatbot and Mood Detection — Research Proposal",
      contributor: "Livera S.D.",
      studentId: "IT22638168",
      component: "Component 03",
      status: "available",
      statusLabel: "Available",
      fileType: "PDF",
      fileSize: "667 KB",
      viewUrl: "assets/docs/IT22638168_Livera_Bilingual_Chatbot_Proposal.pdf",
      downloadUrl: "assets/docs/IT22638168_Livera_Bilingual_Chatbot_Proposal.pdf",
      description: "Original research proposal on Sinhala-English prenatal conversational wellbeing support with NLP sentiment analysis and consent-governed mood context."
    },
    {
      id: "doc-nutrition-proposal",
      category: "proposal",
      categoryLabel: "Research Proposal",
      title: "Virtual Nutritionist and GDM Action Engine — Research Proposal",
      contributor: "Nuwantha P.A.T.",
      studentId: "IT22284716",
      component: "Component 04",
      status: "available",
      statusLabel: "Available",
      fileType: "PDF",
      fileSize: "1.12 MB",
      viewUrl: "assets/docs/IT22284716_Nuwantha_Virtual_Nutritionist_Proposal.pdf",
      downloadUrl: "assets/docs/IT22284716_Nuwantha_Virtual_Nutritionist_Proposal.pdf",
      description: "Original research proposal on multimodal food logging, YOLOv8 Sri Lankan food recognition, and pre-consumption GDM glycemic scoring."
    },
    {
      id: "doc-group-charter",
      category: "group",
      categoryLabel: "Group Deliverable",
      title: "Group Project Charter",
      contributor: "Research Group R26-IT-146",
      studentId: "All Members",
      component: "General",
      status: "pending",
      statusLabel: "Pending Upload",
      fileType: "PDF",
      fileSize: "Pending",
      viewUrl: null,
      downloadUrl: null,
      description: "Formal charter governing team member responsibilities, supervisory review milestones, and quality benchmarks."
    },
    {
      id: "doc-group-proposal",
      category: "group",
      categoryLabel: "Group Deliverable",
      title: "Consolidated Research Proposal",
      contributor: "Research Group R26-IT-146",
      studentId: "All Members",
      component: "General",
      status: "pending",
      statusLabel: "Pending Upload",
      fileType: "PDF",
      fileSize: "Pending",
      viewUrl: null,
      downloadUrl: null,
      description: "Integrated group proposal uniting the four sub-domains into a single coherent maternal healthcare architecture."
    },
    {
      id: "doc-group-checklist",
      category: "group",
      categoryLabel: "Group Deliverable",
      title: "Project Proposal Submission Checklist",
      contributor: "Research Group R26-IT-146",
      studentId: "All Members",
      component: "General",
      status: "pending",
      statusLabel: "Pending Upload",
      fileType: "PDF",
      fileSize: "Pending",
      viewUrl: null,
      downloadUrl: null,
      description: "Departmental submission compliance and verification checklist."
    },
    {
      id: "doc-group-final-report",
      category: "group",
      categoryLabel: "Group Deliverable",
      title: "Final Group Research Report",
      contributor: "Research Group R26-IT-146",
      studentId: "All Members",
      component: "General",
      status: "upcoming",
      statusLabel: "Upcoming Milestone",
      fileType: "PDF",
      fileSize: "Upcoming",
      viewUrl: null,
      downloadUrl: null,
      description: "Comprehensive final academic dissertation documenting system integration, cross-component validation, and research conclusions."
    }
  ];

  // Expose to window for transparency and easy external inspection
  window.PROJECT_DOCUMENTS_CONFIG = PROJECT_DOCUMENTS;

  // -----------------------------------------------------------------------
  // 2. DOCUMENT FILTERING
  // -----------------------------------------------------------------------
  const docFilterButtons = document.querySelectorAll('.doc-filter-btn');
  const docCards = document.querySelectorAll('.doc-card');

  if (docFilterButtons.length > 0 && docCards.length > 0) {
    docFilterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const filter = this.getAttribute('data-filter');

        docFilterButtons.forEach(function (b) { b.classList.remove('active'); });
        this.classList.add('active');

        docCards.forEach(function (card) {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // -----------------------------------------------------------------------
  // 3. MOBILE NAVIGATION
  // -----------------------------------------------------------------------
  const navToggle = document.getElementById('nav-toggle');
  const navMobile = document.getElementById('nav-mobile');

  if (navToggle && navMobile) {
    navToggle.addEventListener('click', function () {
      const isOpen = navMobile.classList.contains('open');
      navMobile.classList.toggle('open');
      navToggle.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(!isOpen));
    });

    navMobile.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMobile.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', function (e) {
      if (!navToggle.contains(e.target) && !navMobile.contains(e.target)) {
        navMobile.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // -----------------------------------------------------------------------
  // 4. STICKY NAV & ACTIVE LINK HIGHLIGHTING
  // -----------------------------------------------------------------------
  const siteNav = document.getElementById('site-nav');
  const navLinks = document.querySelectorAll('.nav-links a, .nav-mobile a');
  const NAV_OFFSET = 120;

  function updateNav() {
    if (siteNav) {
      if (window.scrollY > 20) {
        siteNav.classList.add('scrolled');
      } else {
        siteNav.classList.remove('scrolled');
      }
    }

    // Determine current active section
    let current = '';
    const scrollY = window.scrollY + NAV_OFFSET;
    const mainSectionIds = ['home', 'domain', 'milestones', 'documents', 'presentations', 'about', 'contact'];

    mainSectionIds.forEach(function (id) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollY) {
        current = id;
      }
    });

    navLinks.forEach(function (link) {
      const href = link.getAttribute('href');
      if (href === '#' + current) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  // -----------------------------------------------------------------------
  // 5. DOMAIN SUB-NAV ACTIVE STATE
  // -----------------------------------------------------------------------
  const domainNavLinks = document.querySelectorAll('.domain-nav-link');
  const domainSectionIds = ['lit-survey', 'research-gap', 'research-problem', 'objectives', 'methodology', 'technologies', 'components'];

  function updateDomainNav() {
    const scrollY = window.scrollY + 160;
    let current = '';
    domainSectionIds.forEach(function (id) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollY) {
        current = id;
      }
    });
    domainNavLinks.forEach(function (link) {
      const href = link.getAttribute('href');
      if (href === '#' + current) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', updateDomainNav, { passive: true });

  // Domain nav visibility observer
  const domainNav = document.querySelector('.domain-nav');
  const domainSection = document.getElementById('domain');

  if (domainNav && domainSection && 'IntersectionObserver' in window) {
    const domainObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        domainNav.style.display = entry.isIntersecting ? '' : 'none';
      });
    }, { threshold: 0, rootMargin: '-60px 0px -80% 0px' });

    domainObserver.observe(domainSection);
    domainNav.style.display = 'none';
  }

  // -----------------------------------------------------------------------
  // 6. SMOOTH SCROLL WITH OFFSET
  // -----------------------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'), 10) || 68;
        const targetY = target.getBoundingClientRect().top + window.scrollY - navHeight - 8;
        window.scrollTo({ top: targetY, behavior: 'smooth' });

        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    });
  });

  // -----------------------------------------------------------------------
  // 7. MILESTONE FILTER
  // -----------------------------------------------------------------------
  const milestoneSelect = document.getElementById('milestone-select');
  const milestoneList = document.getElementById('milestone-list');

  if (milestoneSelect && milestoneList) {
    milestoneSelect.addEventListener('change', function () {
      const value = this.value;
      const items = milestoneList.querySelectorAll('.timeline-item');
      items.forEach(function (item) {
        if (value === 'all' || item.dataset.milestone === value) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }

  // -----------------------------------------------------------------------
  // 8. SCROLL REVEAL
  // -----------------------------------------------------------------------
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.reveal').forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // -----------------------------------------------------------------------
  // 9. BACK TO TOP
  // -----------------------------------------------------------------------
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }, { passive: true });
  }

  // -----------------------------------------------------------------------
  // 10. HONEST CONTACT FORM HANDLER (Direct Mailto Composer)
  // -----------------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('contact-name') ? document.getElementById('contact-name').value.trim() : '';
      const email = document.getElementById('contact-email') ? document.getElementById('contact-email').value.trim() : '';
      const role = document.getElementById('contact-role') ? document.getElementById('contact-role').value : 'Inquirer';
      const message = document.getElementById('contact-message') ? document.getElementById('contact-message').value.trim() : '';

      if (!name || !message) {
        alert('Please provide your name and message to compose your inquiry.');
        return;
      }

      // Construct mailto link with clear academic subject
      const subject = encodeURIComponent(`[R26-IT-146 Inquiry] ${role}: ${name}`);
      const body = encodeURIComponent(
        `Dear Research Team / Dr. Kapila Dissanayake,\n\n` +
        `Name: ${name}\n` +
        `Email: ${email || 'Not provided'}\n` +
        `Role: ${role}\n\n` +
        `Message:\n${message}\n\n` +
        `---\nInquiry generated from SLIIT Pregnancy Support System Research Website (R26-IT-146)`
      );

      // Direct to supervisor channel / project lead
      const mailtoUrl = `mailto:kapila.d@sliit.lk?subject=${subject}&body=${body}`;
      window.location.href = mailtoUrl;

      const notice = document.getElementById('contact-notice');
      if (notice) {
        notice.style.display = 'block';
        notice.innerHTML = `<strong>Email Client Opened:</strong> A draft has been prepared in your email client addressed to Dr. Kapila Dissanayake (Research Supervisor). If your client did not launch automatically, you can email directly at <code>kapila.d@sliit.lk</code> referencing Project R26-IT-146.`;
      }
    });
  }

  // -----------------------------------------------------------------------
  // 11. PRINT PREPARATION
  // -----------------------------------------------------------------------
  window.addEventListener('beforeprint', function () {
    document.querySelectorAll('.timeline-item').forEach(function (i) { i.style.display = ''; });
    document.querySelectorAll('.doc-card').forEach(function (c) { c.style.display = 'flex'; });
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('visible'); });
  });

  console.log('%cPregnancy Support System — R26-IT-146', 'color:#3D7A7A;font-weight:bold;font-size:14px;');
  console.log('%cSLIIT Department of Information Technology', 'color:#6B8F71;font-size:11px;');
})();
