let tipTimer;
function showConservationTip() {
  const tips = [
    "Plant native trees to provide food and shelter for wildlife.",
    "Avoid single-use plastics to reduce pollution.",
    "Never disturb wild animals or their natural habitats.",
    "Save water and support responsible environmental practices.",
    "Spread awareness about endangered species.",
    "Keep forests and natural habitats free from litter.",
    "Observe wild animals from a safe distance.",
  ];
  const m = document.getElementById("tipMessage");
  m.textContent = tips[Math.floor(Math.random() * tips.length)];
  clearTimeout(tipTimer);
  tipTimer = setTimeout(() => {
    m.textContent = "";
  }, 6000);
}
function fill(id, data, key) {
  const box = document.getElementById(id);
  if (!data) return;
  const h = document.createElement("h3");
  h.textContent = data.title;
  const p = document.createElement("p");
  p.textContent = data[key];
  box.replaceChildren(h, p);
  box.classList.add("show");
  box.scrollIntoView({ behavior: "smooth", block: "nearest" });
}
function showWildlifeInfo(type) {
  fill(
    "wildlifeInfo",
    {
      animals: {
        title: "Protect Wildlife",
        description:
          "Support wildlife protection programs, avoid products made from endangered animals, and report suspected wildlife crime to the appropriate authorities.",
      },
      habitats: {
        title: "Restore Natural Habitats",
        description:
          "Forests, wetlands, and grasslands provide food, water, and shelter. Plant native species, reduce pollution, and support habitat restoration.",
      },
      biodiversity: {
        title: "Preserve Biodiversity",
        description:
          "Biodiversity keeps ecosystems healthy. Protect native plants and animals, prevent habitat destruction, and help preserve nature for future generations.",
      },
    }[type],
    "description",
  );
}
function showRiskInfo(topic) {
  fill(
    "riskInfo",
    {
      rescue: {
        title: "Safe Wildlife Rescue",
        text: "Do not handle, feed, or attempt to treat a wild animal yourself. Keep a safe distance and contact an authorized wildlife rescue service or your local forest department.",
      },
      habitat: {
        title: "Protect Natural Habitats",
        text: "Support native tree planting, avoid littering, reduce plastic use, and encourage the protection of forests, wetlands, and grasslands.",
      },
      community: {
        title: "Make Conservation a Community Effort",
        text: "Share trustworthy information, participate in organized cleanups, support responsible conservation groups, and report suspected wildlife crime to the appropriate authorities.",
      },
    }[topic],
    "text",
  );
}
/* Placeholder for your missing image files */
const ph =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#A8C39F"/><stop offset="1" stop-color="#456B4A"/></linearGradient></defs><rect width="400" height="240" fill="url(#g)"/><text x="200" y="130" font-family="Arial" font-size="22" fill="#fff" text-anchor="middle">Your photo here</text></svg>',
  );
document.querySelectorAll("img").forEach((i) => {
  const swap = () => {
    if (i.src !== ph) i.src = ph;
  };
  i.addEventListener("error", swap);
  if (i.complete && i.naturalWidth === 0) swap();
});