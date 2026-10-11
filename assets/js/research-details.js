(() => {
  const animations = new WeakMap();
  function setExpanded(button, expanded, animate = true) {
    const panel = document.getElementById(button.getAttribute("aria-controls"));
    const previous = animations.get(panel);
    if (previous) previous.cancel();
    button.setAttribute("aria-expanded", String(expanded));
    button.textContent = expanded ? "Less ↑" : "More details ↓";
    panel.hidden = false;
    if (!animate || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      panel.hidden = !expanded;
      return;
    }
    const height = panel.scrollHeight;
    const animation = panel.animate([{ height: expanded ? "0px" : `${height}px` }, { height: expanded ? `${height}px` : "0px" }], {
      duration: 180,
      easing: "ease-out",
    });
    animations.set(panel, animation);
    animation.onfinish = () => {
      panel.hidden = !expanded;
      animations.delete(panel);
    };
  }
  document.querySelectorAll(".research-details-toggle").forEach((button) => {
    button.addEventListener("click", () => setExpanded(button, button.getAttribute("aria-expanded") !== "true"));
  });
  document.querySelectorAll("[data-output-details]").forEach((link) => {
    link.addEventListener("click", (event) => {
      const button = document.querySelector(`[aria-controls="${link.dataset.outputDetails}"]`);
      if (button) setExpanded(button, true, false);
      const focusTarget = document.getElementById(link.dataset.outputFocus);
      if (focusTarget) {
        event.preventDefault();
        if (window.location.hash !== link.hash) window.history.pushState(null, "", link.hash);
        focusTarget.focus({ preventScroll: true });
        focusTarget.scrollIntoView({ block: "start" });
      }
    });
  });
  function revealHash() {
    const target = document.getElementById(window.location.hash.slice(1));
    const panel = target?.closest(".research-project-details");
    if (!panel) return;
    const button = document.querySelector(`[aria-controls="${panel.id}"]`);
    if (button) {
      setExpanded(button, true, false);
      target.scrollIntoView();
    }
  }
  window.addEventListener("hashchange", revealHash);
  revealHash();
})();
