(function () {
  "use strict";

  /* ======================================================================
     DOCUMENTS - Ordered sequentially for cover-to-cover reading
     ====================================================================== */
  var DOCUMENTS = [
    // Part I - Orientation
    {
      title: "This Is a Tool",
      path: "chapters/rewrites/chapter-01-this-is-a-tool.md",
      section: "Part I \u2014 Orientation",
      sectionKey: "part-1",
      keywords: [
        "tool",
        "framework",
        "operating system",
        "philosophy",
        "purpose",
        "introduction",
        "mental model",
      ],
    },
    {
      title: "A Way to Think and Act",
      path: "chapters/rewrites/chapter-02-a-way-to-think-and-act.md",
      section: "Part I \u2014 Orientation",
      sectionKey: "part-1",
      keywords: [
        "thinking",
        "acting",
        "mindset",
        "decision",
        "approach",
        "method",
        "clarity",
      ],
    },

    // Part II - The Framework
    {
      title: "Three Rules",
      path: "chapters/rewrites/chapter-03-three-rules.md",
      section: "Part II \u2014 The Framework",
      sectionKey: "part-2",
      keywords: [
        "rules",
        "three rules",
        "principles",
        "core",
        "foundation",
        "constraints",
      ],
    },
    {
      title: "The Root of the Problem",
      path: "chapters/rewrites/chapter-04-root-of-the-problem.md",
      section: "Part II \u2014 The Framework",
      sectionKey: "part-2",
      keywords: [
        "root cause",
        "problem",
        "ego",
        "identity",
        "source",
        "origin",
        "diagnosis",
      ],
    },
    {
      title: "Composure > Everything",
      path: "chapters/rewrites/chapter-05-composure-everything.md",
      section: "Part II \u2014 The Framework",
      sectionKey: "part-2",
      keywords: [
        "composure",
        "calm",
        "regulation",
        "equanimity",
        "self-control",
        "stillness",
        "clarity",
      ],
    },
    {
      title: "Respond Over React",
      path: "chapters/rewrites/chapter-06-respond-over-react.md",
      section: "Part II \u2014 The Framework",
      sectionKey: "part-2",
      keywords: [
        "respond",
        "react",
        "stimulus",
        "pause",
        "choice",
        "intention",
        "impulse",
      ],
    },

    // Part III - Living It
    {
      title: "The Ability to Do",
      path: "chapters/rewrites/chapter-07-the-ability-to-do.md",
      section: "Part III \u2014 Living It",
      sectionKey: "part-3",
      keywords: [
        "ability",
        "action",
        "agency",
        "execution",
        "capability",
        "doing",
        "commitment",
      ],
    },
    {
      title: "Roles Not Titles",
      path: "chapters/rewrites/chapter-08-roles-not-titles.md",
      section: "Part III \u2014 Living It",
      sectionKey: "part-3",
      keywords: [
        "roles",
        "titles",
        "identity",
        "responsibility",
        "relationships",
        "expectations",
        "purpose",
      ],
    },
    {
      title: "The Commons and the Community",
      path: "chapters/rewrites/chapter-09-the-commons-and-the-community.md",
      section: "Part III \u2014 Living It",
      sectionKey: "part-3",
      keywords: [
        "community",
        "commons",
        "shared",
        "contribution",
        "belonging",
        "social",
        "collective",
      ],
    },
    {
      title: "The Commons and the Community (v2)",
      path: "chapters/rewrites/chapter-09-the-commons-and-the-community-v2.md",
      section: "Part III \u2014 Living It",
      sectionKey: "part-3",
      keywords: [
        "community",
        "commons",
        "class struggle",
        "political philosophy",
        "synthesis",
        "actionable",
        "v2",
      ],
    },
    {
      title: "Living With This",
      path: "chapters/rewrites/chapter-10-living-with-this.md",
      section: "Part III \u2014 Living It",
      sectionKey: "part-3",
      keywords: [
        "practice",
        "daily",
        "application",
        "living",
        "integration",
        "consistency",
        "real life",
      ],
    },

    // Part IV - Reference
    {
      title: "Stoicism",
      path: "chapters/rewrites/chapter-11-stoicism.md",
      section: "Part IV \u2014 Reference",
      sectionKey: "part-4",
      keywords: [
        "stoicism",
        "stoic",
        "marcus aurelius",
        "epictetus",
        "seneca",
        "virtue",
        "control",
        "acceptance",
      ],
    },
    {
      title: "Cognitive Biases",
      path: "chapters/rewrites/chapter-12-cognitive-biases.md",
      section: "Part IV \u2014 Reference",
      sectionKey: "part-4",
      keywords: [
        "cognitive bias",
        "bias",
        "heuristic",
        "thinking errors",
        "mental shortcuts",
        "psychology",
      ],
    },
    {
      title: "Logical Fallacies",
      path: "chapters/rewrites/chapter-13-logical-fallacies.md",
      section: "Part IV \u2014 Reference",
      sectionKey: "part-4",
      keywords: [
        "logical fallacy",
        "fallacy",
        "argument",
        "reasoning",
        "logic",
        "rhetoric",
        "debate",
      ],
    },

    // Endnotes
    {
      title: "Endnotes",
      path: "chapters/rewrites/endnotes.md",
      section: "Endnotes",
      sectionKey: "endnotes",
      keywords: [
        "endnotes",
        "notes",
        "sources",
        "references",
        "citations",
        "bibliography",
      ],
    },
  ];

  /* ======================================================================
     SECTIONS - for TOC and home cards
     ====================================================================== */
  var SECTIONS = [
    {
      key: "part-1",
      label: "Part I \u2014 Orientation",
      color: "var(--color-part-1)",
    },
    {
      key: "part-2",
      label: "Part II \u2014 The Framework",
      color: "var(--color-part-2)",
    },
    {
      key: "part-3",
      label: "Part III \u2014 Living It",
      color: "var(--color-part-3)",
    },
    {
      key: "part-4",
      label: "Part IV \u2014 Reference",
      color: "var(--color-part-4)",
    },
    {
      key: "endnotes",
      label: "Endnotes",
      color: "var(--color-endnotes)",
    },
  ];

  /* ======================================================================
     STATE
     ====================================================================== */
  var state = {
    currentIndex: -1,
    bookmarkIndex: -1,
    bookmarkHeadingId: null,
    cachedContent: {},
    searchIndex: null,
  };

  /* ======================================================================
     DOM CACHE
     ====================================================================== */
  var dom = {};

  function cacheDom() {
    dom.topbarTitle = document.getElementById("topbarTitle");
    dom.menuBtn = document.getElementById("menuBtn");
    dom.homeBtn = document.getElementById("homeBtn");
    dom.searchBtn = document.getElementById("searchBtn");

    dom.sidebar = document.getElementById("sidebar");
    dom.sidebarClose = document.getElementById("sidebarClose");
    dom.sidebarOverlay = document.getElementById("sidebarOverlay");
    dom.toc = document.getElementById("toc");

    dom.searchOverlay = document.getElementById("searchOverlay");
    dom.searchInput = document.getElementById("searchInput");
    dom.searchClose = document.getElementById("searchClose");
    dom.searchResults = document.getElementById("searchResults");

    dom.mainContent = document.getElementById("mainContent");
    dom.homeScreen = document.getElementById("homeScreen");
    dom.homeSections = document.getElementById("homeSections");
    dom.startBtn = document.getElementById("startReadingBtn");
    dom.browseBtn = document.getElementById("browseBtn");

    dom.documentView = document.getElementById("documentView");
    dom.docSection = document.getElementById("docSection");
    dom.docNumber = document.getElementById("docNumber");
    dom.docBody = document.getElementById("docBody");
    dom.docMeta = document.getElementById("docMeta");
    dom.chapterNav = document.getElementById("chapterNav");
    dom.prevBtn = document.getElementById("prevBtn");
    dom.nextBtn = document.getElementById("nextBtn");
    dom.prevTitle = document.getElementById("prevTitle");
    dom.nextTitle = document.getElementById("nextTitle");

    dom.bottomHome = document.getElementById("bottomHome");
    dom.bottomToc = document.getElementById("bottomToc");
    dom.bottomSearch = document.getElementById("bottomSearch");
    dom.bottomPrev = document.getElementById("bottomPrev");
    dom.bottomNext = document.getElementById("bottomNext");

    dom.bookmarkBtn = document.getElementById("bookmarkBtn");
    dom.continueReadingBtn = document.getElementById("continueReadingBtn");
  }

  /* ======================================================================
     INIT
     ====================================================================== */
  function initializeApp() {
    cacheDom();
    loadBookmark();
    buildToc();
    buildHomeCards();
    bindEvents();
    handleInitialHash();
  }

  /* ======================================================================
     TOC - Build sidebar table of contents
     ====================================================================== */
  function buildToc() {
    var html = "";

    SECTIONS.forEach(function (section) {
      var docs = getDocsForSection(section.key);
      html += '<div class="reader__toc-section">';
      html +=
        '<button class="reader__toc-heading" data-section="' +
        section.key +
        '" aria-expanded="false">';
      html += escapeHtml(section.label);
      html += '<span class="material-symbols-outlined">expand_more</span>';
      html += "</button>";
      html += '<ul class="reader__toc-list" role="list">';

      docs.forEach(function (doc) {
        var globalIndex = DOCUMENTS.indexOf(doc);
        html += '<li class="reader__toc-item">';
        html +=
          '<button class="reader__toc-link" data-index="' + globalIndex + '">';
        html += escapeHtml(doc.title);
        html += "</button>";
        html += "</li>";
      });

      html += "</ul>";
      html += "</div>";
    });

    dom.toc.innerHTML = html;
  }

  /* ======================================================================
     HOME CARDS - Build section cards on home screen
     ====================================================================== */
  function buildHomeCards() {
    var html = "";

    SECTIONS.forEach(function (section) {
      var docs = getDocsForSection(section.key);
      html += '<div class="reader__section-card">';
      html +=
        '<button class="reader__section-card-header" aria-expanded="false">';
      html +=
        '<span class="reader__section-card-dot" style="background-color: ' +
        section.color +
        ';"></span>';
      html += '<span class="reader__section-card-info">';
      html +=
        '<span class="reader__section-card-title">' +
        escapeHtml(section.label) +
        "</span>";
      html +=
        '<span class="reader__section-card-count">' +
        docs.length +
        " chapter" +
        (docs.length !== 1 ? "s" : "") +
        "</span>";
      html += "</span>";
      html += '<span class="material-symbols-outlined">expand_more</span>';
      html += "</button>";
      html += '<ul class="reader__section-card-items" role="list">';

      docs.forEach(function (doc) {
        var globalIndex = DOCUMENTS.indexOf(doc);
        html += "<li>";
        html +=
          '<button class="reader__section-card-link" data-index="' +
          globalIndex +
          '">';
        html += escapeHtml(doc.title);
        html += "</button>";
        html += "</li>";
      });

      html += "</ul>";
      html += "</div>";
    });

    dom.homeSections.innerHTML = html;
  }

  /* ======================================================================
     EVENTS
     ====================================================================== */
  function bindEvents() {
    // Top bar
    dom.menuBtn.addEventListener("click", toggleSidebar);
    dom.searchBtn.addEventListener("click", openSearch);

    // Sidebar
    dom.sidebarClose.addEventListener("click", closeSidebar);
    dom.sidebarOverlay.addEventListener("click", closeSidebar);

    // TOC section toggles
    dom.toc.addEventListener("click", function (e) {
      var heading = e.target.closest(".reader__toc-heading");
      if (heading) {
        toggleTocSection(heading);
        return;
      }
      var link = e.target.closest(".reader__toc-link");
      if (link) {
        var idx = parseInt(link.getAttribute("data-index"), 10);
        loadDocument(idx);
        closeSidebar();
      }
    });

    // Home section card toggles
    dom.homeSections.addEventListener("click", function (e) {
      var cardHeader = e.target.closest(".reader__section-card-header");
      if (cardHeader) {
        toggleHomeCard(cardHeader);
        return;
      }
      var link = e.target.closest(".reader__section-card-link");
      if (link) {
        var idx = parseInt(link.getAttribute("data-index"), 10);
        loadDocument(idx);
      }
    });

    // Home CTA buttons
    dom.startBtn.addEventListener("click", function () {
      loadDocument(0);
    });

    dom.browseBtn.addEventListener("click", function () {
      var isDesktop = window.matchMedia("(min-width: 1024px)").matches;
      if (isDesktop) {
        dom.homeSections.scrollIntoView({ behavior: "smooth" });
      } else {
        toggleSidebar();
      }
    });

    dom.homeBtn.addEventListener("click", showHome);

    // Bookmark
    dom.bookmarkBtn.addEventListener("click", function () {
      setBookmark(state.currentIndex, null);
    });

    // Heading-level bookmark clicks (event delegation)
    dom.docBody.addEventListener("click", function (e) {
      var btn = e.target.closest(".reader__heading-bookmark");
      if (!btn) return;
      var headingId = btn.getAttribute("data-heading-id");
      setBookmark(state.currentIndex, headingId);
    });

    dom.continueReadingBtn.addEventListener("click", function () {
      if (state.bookmarkIndex >= 0) {
        loadDocument(state.bookmarkIndex, state.bookmarkHeadingId);
      }
    });

    // Chapter nav
    dom.prevBtn.addEventListener("click", function () {
      if (state.currentIndex > 0) loadDocument(state.currentIndex - 1);
    });

    dom.nextBtn.addEventListener("click", function () {
      if (state.currentIndex < DOCUMENTS.length - 1) {
        var nextIndex = state.currentIndex + 1;
        setBookmark(nextIndex);
        loadDocument(nextIndex);
      }
    });

    // Bottom bar
    dom.bottomHome.addEventListener("click", showHome);
    dom.bottomToc.addEventListener("click", toggleSidebar);
    dom.bottomSearch.addEventListener("click", openSearch);
    dom.bottomPrev.addEventListener("click", function () {
      if (state.currentIndex > 0) loadDocument(state.currentIndex - 1);
    });
    dom.bottomNext.addEventListener("click", function () {
      if (state.currentIndex < DOCUMENTS.length - 1) {
        var nextIndex = state.currentIndex + 1;
        setBookmark(nextIndex);
        loadDocument(nextIndex);
      }
    });

    // Search
    dom.searchClose.addEventListener("click", closeSearch);
    dom.searchInput.addEventListener("input", debounce(handleSearch, 300));
    dom.searchResults.addEventListener("click", function (e) {
      var item = e.target.closest(".reader__search-item");
      if (item) {
        var idx = parseInt(item.getAttribute("data-index"), 10);
        closeSearch();
        loadDocument(idx);
      }
    });

    // Keyboard shortcuts
    document.addEventListener("keydown", function (e) {
      // Ctrl/Cmd + K - search
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        openSearch();
      }
      // Escape - close modals
      if (e.key === "Escape") {
        if (dom.searchOverlay.classList.contains("is-open")) {
          closeSearch();
        } else if (dom.sidebar.classList.contains("is-open")) {
          closeSidebar();
        }
      }
    });

    // Browser back/forward
    window.addEventListener("popstate", handlePopState);
  }

  /* ======================================================================
     NAVIGATION
     ====================================================================== */
  function loadDocument(index, scrollToHeadingId) {
    if (index < 0 || index >= DOCUMENTS.length) return;

    var doc = DOCUMENTS[index];
    state.currentIndex = index;

    // Update URL hash
    var hash = docPathToHash(doc.path);
    if (window.location.hash !== "#" + hash) {
      history.pushState({ index: index }, "", "#" + hash);
    }

    // Show loading
    dom.homeScreen.hidden = true;
    dom.documentView.hidden = false;
    dom.docBody.innerHTML =
      '<div class="reader__loading">' +
      '<div class="reader__loading-spinner"></div>' +
      "<span>Loading...</span>" +
      "</div>";

    // Update meta
    dom.docSection.textContent = doc.section;
    dom.docNumber.textContent = index + 1 + " of " + DOCUMENTS.length;
    dom.topbarTitle.textContent = doc.title;

    // Update chapter nav
    updateChapterNav(index);

    // Update bottom bar state
    updateBottomBar(index);

    // Highlight TOC
    highlightTocItem(index);

    // Update bookmark icon
    updateBookmarkIcon(index);

    // Scroll to top
    window.scrollTo(0, 0);

    // Fetch markdown
    fetchDocument(doc.path, function (content) {
      renderMarkdown(content);
      if (scrollToHeadingId) {
        var target = document.getElementById(scrollToHeadingId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  }

  function fetchDocument(path, callback) {
    if (state.cachedContent[path]) {
      callback(state.cachedContent[path]);
      return;
    }

    fetch(path)
      .then(function (res) {
        if (!res.ok) throw new Error("Failed to load: " + res.status);
        return res.text();
      })
      .then(function (text) {
        state.cachedContent[path] = text;
        callback(text);
      })
      .catch(function () {
        dom.docBody.innerHTML =
          '<div class="reader__error">' +
          '<span class="material-symbols-outlined">error_outline</span>' +
          '<p class="reader__error-text">Could not load this chapter.</p>' +
          '<button class="reader__btn reader__btn--secondary"' +
          ' onclick="location.reload()">Retry</button>' +
          "</div>";
      });
  }

  function slugify(text) {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
  }

  function renderMarkdown(text) {
    dom.docBody.innerHTML = marked.parse(text);

    // Inject bookmark buttons into h2 headings
    var headings = dom.docBody.querySelectorAll("h2");
    for (var i = 0; i < headings.length; i++) {
      var h = headings[i];
      var id = slugify(h.textContent);
      h.id = id;
      var btn = document.createElement("button");
      btn.className = "reader__icon-btn reader__heading-bookmark";
      btn.setAttribute("data-heading-id", id);
      btn.setAttribute("aria-label", "Bookmark this subsection");
      btn.innerHTML = '<span class="material-symbols-outlined">bookmark</span>';
      h.appendChild(btn);
    }

    // Update heading bookmark icons after injection
    if (state.currentIndex >= 0) {
      updateBookmarkIcon(state.currentIndex);
    }
  }

  function showHome() {
    state.currentIndex = -1;
    dom.homeScreen.hidden = false;
    dom.documentView.hidden = true;
    dom.topbarTitle.textContent = "Arcane Art of Virtue";

    if (window.location.hash) {
      history.pushState(null, "", window.location.pathname);
    }

    updateBottomBar(-1);
    updateContinueBtn();
    clearTocHighlight();
    window.scrollTo(0, 0);
  }

  function handleInitialHash() {
    var hash = window.location.hash.replace("#", "");
    if (hash) {
      var index = findDocByHash(hash);
      if (index !== -1) {
        loadDocument(index);
        return;
      }
    }
    // Auto-resume from bookmark
    if (state.bookmarkIndex >= 0) {
      loadDocument(state.bookmarkIndex, state.bookmarkHeadingId);
      return;
    }
    showHome();
  }

  function handlePopState() {
    var hash = window.location.hash.replace("#", "");
    if (hash) {
      var index = findDocByHash(hash);
      if (index !== -1) {
        loadDocument(index);
        return;
      }
    }
    showHome();
  }

  /* ======================================================================
     CHAPTER NAV
     ====================================================================== */
  function updateChapterNav(index) {
    // Previous
    if (index > 0) {
      dom.prevBtn.disabled = false;
      dom.prevTitle.textContent = DOCUMENTS[index - 1].title;
    } else {
      dom.prevBtn.disabled = true;
      dom.prevTitle.textContent = "";
    }

    // Next
    if (index < DOCUMENTS.length - 1) {
      dom.nextBtn.disabled = false;
      dom.nextTitle.textContent = DOCUMENTS[index + 1].title;
    } else {
      dom.nextBtn.disabled = true;
      dom.nextTitle.textContent = "";
    }
  }

  function updateBottomBar(index) {
    dom.bottomPrev.disabled = index <= 0;
    dom.bottomNext.disabled = index < 0 || index >= DOCUMENTS.length - 1;

    // Active states
    var isHome = index === -1;
    dom.bottomHome.classList.toggle("is-active", isHome);
    dom.bottomToc.classList.remove("is-active");
    dom.bottomSearch.classList.remove("is-active");
  }

  /* ======================================================================
     SIDEBAR
     ====================================================================== */
  function toggleSidebar() {
    var isOpen = dom.sidebar.classList.contains("is-open");
    if (isOpen) {
      closeSidebar();
    } else {
      openSidebar();
    }
  }

  function openSidebar() {
    dom.sidebar.classList.add("is-open");
    dom.sidebarOverlay.classList.add("is-visible");
    document.body.style.overflow = "hidden";
  }

  function closeSidebar() {
    dom.sidebar.classList.remove("is-open");
    dom.sidebarOverlay.classList.remove("is-visible");
    document.body.style.overflow = "";
  }

  function toggleTocSection(heading) {
    var expanded = heading.classList.contains("is-expanded");
    var list = heading.nextElementSibling;

    heading.classList.toggle("is-expanded", !expanded);
    heading.setAttribute("aria-expanded", String(!expanded));
    list.classList.toggle("is-expanded", !expanded);
  }

  function highlightTocItem(index) {
    clearTocHighlight();
    var link = dom.toc.querySelector('[data-index="' + index + '"]');
    if (link) {
      link.classList.add("is-active");
      // Expand parent section
      var section = link.closest(".reader__toc-section");
      if (section) {
        var heading = section.querySelector(".reader__toc-heading");
        var list = section.querySelector(".reader__toc-list");
        heading.classList.add("is-expanded");
        heading.setAttribute("aria-expanded", "true");
        list.classList.add("is-expanded");
      }
      // Scroll into view within sidebar
      link.scrollIntoView({ block: "nearest" });
    }
  }

  function clearTocHighlight() {
    var active = dom.toc.querySelector(".reader__toc-link.is-active");
    if (active) active.classList.remove("is-active");
  }

  /* ======================================================================
     HOME CARDS
     ====================================================================== */
  function toggleHomeCard(header) {
    var expanded = header.classList.contains("is-expanded");
    var list = header.nextElementSibling;

    header.classList.toggle("is-expanded", !expanded);
    header.setAttribute("aria-expanded", String(!expanded));
    list.classList.toggle("is-expanded", !expanded);
  }

  /* ======================================================================
     SEARCH
     ====================================================================== */
  function openSearch() {
    dom.searchOverlay.hidden = false;
    // Force reflow before adding class for transition
    void dom.searchOverlay.offsetHeight;
    dom.searchOverlay.classList.add("is-open");
    dom.searchInput.value = "";
    dom.searchResults.innerHTML = renderSearchEmpty();
    dom.searchInput.focus();
    document.body.style.overflow = "hidden";
  }

  function closeSearch() {
    dom.searchOverlay.classList.remove("is-open");
    dom.searchInput.value = "";
    dom.searchResults.innerHTML = "";
    document.body.style.overflow = "";
    // Hide after transition
    setTimeout(function () {
      if (!dom.searchOverlay.classList.contains("is-open")) {
        dom.searchOverlay.hidden = true;
      }
    }, 200);
  }

  function handleSearch() {
    var query = dom.searchInput.value.trim().toLowerCase();
    if (query.length < 2) {
      dom.searchResults.innerHTML = renderSearchEmpty();
      return;
    }

    var results = searchDocuments(query);

    if (results.length === 0) {
      dom.searchResults.innerHTML =
        '<div class="reader__search-empty">' +
        '<span class="material-symbols-outlined">search_off</span>' +
        '<p>No results for "' +
        escapeHtml(query) +
        '"</p>' +
        "</div>";
      return;
    }

    var html =
      '<div class="reader__search-count">' +
      results.length +
      " result" +
      (results.length !== 1 ? "s" : "") +
      "</div>";

    results.forEach(function (r) {
      html +=
        '<div class="reader__search-item" data-index="' +
        r.index +
        '" tabindex="0" role="button">';
      html +=
        '<span class="reader__search-item-section">' +
        escapeHtml(r.doc.section) +
        "</span>";
      html +=
        '<div class="reader__search-item-title">' +
        highlightMatch(r.doc.title, query) +
        "</div>";
      if (r.excerpt) {
        html +=
          '<div class="reader__search-item-excerpt">' + r.excerpt + "</div>";
      }
      html += "</div>";
    });

    dom.searchResults.innerHTML = html;
  }

  function searchDocuments(query) {
    var results = [];
    var queryLower = query.toLowerCase();
    var queryWords = queryLower.split(/\s+/);

    DOCUMENTS.forEach(function (doc, index) {
      var score = 0;
      var excerpt = "";

      // Title match (highest weight)
      if (doc.title.toLowerCase().indexOf(queryLower) !== -1) {
        score += 100;
      }

      // Keyword match
      var keywordMatch = doc.keywords.some(function (kw) {
        return kw.indexOf(queryLower) !== -1 || queryLower.indexOf(kw) !== -1;
      });
      if (keywordMatch) score += 50;

      // Word-level matching
      queryWords.forEach(function (word) {
        if (doc.title.toLowerCase().indexOf(word) !== -1) score += 20;
        doc.keywords.forEach(function (kw) {
          if (kw.indexOf(word) !== -1) score += 10;
        });
        if (doc.section.toLowerCase().indexOf(word) !== -1) score += 5;
      });

      // Cached content search (full-text)
      if (state.cachedContent[doc.path]) {
        var content = state.cachedContent[doc.path].toLowerCase();
        var contentIndex = content.indexOf(queryLower);
        if (contentIndex !== -1) {
          score += 30;
          // Extract excerpt around match
          var start = Math.max(0, contentIndex - 60);
          var end = Math.min(content.length, contentIndex + query.length + 100);
          var raw = state.cachedContent[doc.path].substring(start, end);
          // Clean markdown characters
          raw = raw.replace(/[#*_`\[\]]/g, "").trim();
          if (start > 0) raw = "..." + raw;
          if (end < content.length) raw = raw + "...";
          excerpt = highlightMatch(escapeHtml(raw), query);
        }
      }

      if (score > 0) {
        results.push({
          doc: doc,
          index: index,
          score: score,
          excerpt: excerpt,
        });
      }
    });

    // Sort by score descending
    results.sort(function (a, b) {
      return b.score - a.score;
    });

    return results.slice(0, 20);
  }

  function renderSearchEmpty() {
    return (
      '<div class="reader__search-empty">' +
      '<span class="material-symbols-outlined">search</span>' +
      "<p>Search by concept, idea, or chapter</p>" +
      "</div>"
    );
  }

  /* ======================================================================
     BOOKMARK
     ====================================================================== */
  function loadBookmark() {
    try {
      var saved = localStorage.getItem("book-bookmark");
      if (saved !== null) {
        var data;
        try {
          data = JSON.parse(saved);
        } catch (_) {
          // Legacy format: plain number
          data = { index: parseInt(saved, 10), headingId: null };
        }
        var idx =
          typeof data.index === "number"
            ? data.index
            : parseInt(data.index, 10);
        if (idx >= 0 && idx < DOCUMENTS.length) {
          state.bookmarkIndex = idx;
          state.bookmarkHeadingId = data.headingId || null;
        }
      }
    } catch (e) {
      // localStorage unavailable
    }
  }

  function setBookmark(index, headingId) {
    if (index < 0 || index >= DOCUMENTS.length) return;
    state.bookmarkIndex = index;
    state.bookmarkHeadingId = headingId || null;
    try {
      localStorage.setItem(
        "book-bookmark",
        JSON.stringify({
          index: index,
          headingId: state.bookmarkHeadingId,
        }),
      );
    } catch (e) {
      // localStorage unavailable
    }
    updateBookmarkIcon(index);
  }

  function updateBookmarkIcon(currentIndex) {
    // Top-level page bookmark
    var isPageBookmarked =
      state.bookmarkIndex === currentIndex && !state.bookmarkHeadingId;
    var icon = dom.bookmarkBtn.querySelector(".material-symbols-outlined");
    icon.textContent = isPageBookmarked ? "bookmark_added" : "bookmark";
    dom.bookmarkBtn.classList.toggle("is-bookmarked", isPageBookmarked);
    dom.bookmarkBtn.setAttribute(
      "aria-label",
      isPageBookmarked ? "Bookmarked" : "Bookmark this chapter",
    );

    // Heading-level bookmarks
    var headingBtns = dom.docBody.querySelectorAll(".reader__heading-bookmark");
    for (var i = 0; i < headingBtns.length; i++) {
      var btn = headingBtns[i];
      var hId = btn.getAttribute("data-heading-id");
      var isActive =
        state.bookmarkIndex === currentIndex && state.bookmarkHeadingId === hId;
      var hIcon = btn.querySelector(".material-symbols-outlined");
      hIcon.textContent = isActive ? "bookmark_added" : "bookmark";
      btn.classList.toggle("is-bookmarked", isActive);
      btn.setAttribute(
        "aria-label",
        isActive ? "Bookmarked" : "Bookmark this subsection",
      );
    }
  }

  function updateContinueBtn() {
    if (state.bookmarkIndex >= 0) {
      dom.continueReadingBtn.hidden = false;
      var doc = DOCUMENTS[state.bookmarkIndex];
      dom.continueReadingBtn.setAttribute(
        "aria-label",
        "Continue reading: " + doc.title,
      );
    } else {
      dom.continueReadingBtn.hidden = true;
    }
  }

  /* ======================================================================
     BACKGROUND CONTENT PREFETCH
     ====================================================================== */
  function prefetchContent() {
    var i = 0;
    function loadNext() {
      if (i >= DOCUMENTS.length) return;
      var doc = DOCUMENTS[i];
      i++;
      if (state.cachedContent[doc.path]) {
        loadNext();
        return;
      }
      fetch(doc.path)
        .then(function (res) {
          return res.ok ? res.text() : "";
        })
        .then(function (text) {
          if (text) state.cachedContent[doc.path] = text;
          // Stagger fetches to avoid overwhelming the browser
          setTimeout(loadNext, 100);
        })
        .catch(function () {
          setTimeout(loadNext, 200);
        });
    }
    // Start prefetch after a delay so it doesn't compete with initial load
    setTimeout(loadNext, 2000);
  }

  /* ======================================================================
     UTILITIES
     ====================================================================== */
  function getDocsForSection(sectionKey) {
    return DOCUMENTS.filter(function (d) {
      return d.sectionKey === sectionKey;
    });
  }

  function docPathToHash(path) {
    return path
      .replace(/\.md$/, "")
      .replace(/\s/g, "-")
      .replace(/[^a-zA-Z0-9\-\/]/g, "");
  }

  function findDocByHash(hash) {
    for (var i = 0; i < DOCUMENTS.length; i++) {
      if (docPathToHash(DOCUMENTS[i].path) === hash) return i;
    }
    return -1;
  }

  function escapeHtml(str) {
    var el = document.createElement("span");
    el.textContent = str;
    return el.innerHTML;
  }

  function highlightMatch(text, query) {
    if (!query) return text;
    var escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    var re = new RegExp("(" + escaped + ")", "gi");
    return text.replace(re, "<mark>$1</mark>");
  }

  function debounce(fn, delay) {
    var timer;
    return function () {
      var args = arguments;
      var context = this;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    };
  }

  /* ======================================================================
     BOOT
     ====================================================================== */
  if (document.readyState === "complete") {
    initializeApp();
    prefetchContent();
  } else {
    window.addEventListener(
      "load",
      function () {
        initializeApp();
        prefetchContent();
      },
      { once: true },
    );
  }
})();
