document.addEventListener("DOMContentLoaded", () => {
  const projectCards = Array.from(document.querySelectorAll(".project-card"));
  const filterChips = Array.from(document.querySelectorAll(".filter-chip"));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const setCardVisible = (card, visible) => {
    card.style.display = visible ? "flex" : "none";
  };

  const applyFilter = (tag) => {
    projectCards.forEach((card) => {
      const tags = card.dataset.tags || "";
      const isMatch = tag === "all" || tags.split(",").map((item) => item.trim()).includes(tag);
      setCardVisible(card, isMatch);
    });
  };

  filterChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const target = chip.dataset.filter || "all";
      filterChips.forEach((item) => item.classList.remove("active"));
      chip.classList.add("active");
      applyFilter(target);
    });
  });

  if (!reduceMotion) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("reveal-in");
          }, index * 90);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    });

    projectCards.forEach((card) => {
      card.classList.add("reveal-init");
      observer.observe(card);
    });
  }
});

