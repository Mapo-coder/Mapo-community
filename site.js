(function () {
  const S = window.SITE, $ = (s) => document.querySelector(s);
  const page = document.body.dataset.page;

  // Langue : choix sauvegardé, sinon langue du navigateur (fr / en)
  let lang = "fr";
  try { lang = localStorage.getItem("lang") || ((navigator.language || "fr").toLowerCase().startsWith("fr") ? "fr" : "en"); } catch (e) {}
  const t = (k) => window.T[lang][k] || k;
  const D = () => (lang === "en" ? window.EN : window); // CHARACTERS, WEAPONS, MAPS, MODES, CAMPAIGN, GUIDES
  const price = (p) => (typeof p === "number" ? p + " 🪙" : p);

  // Liens dynamiques (config.js)
  document.querySelectorAll("[data-link]").forEach((el) => {
    const url = S[el.dataset.link];
    if (url) el.href = url; else el.style.display = "none";
  });
  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

  // Bouton de langue dans la barre de navigation
  const nav = $("header.nav .wrap");
  const btn = document.createElement("button");
  btn.className = "langbtn"; btn.type = "button";
  nav.appendChild(btn);
  btn.addEventListener("click", () => {
    lang = lang === "fr" ? "en" : "fr";
    try { localStorage.setItem("lang", lang); } catch (e) {}
    tag = ""; // les thèmes des guides changent avec la langue
    renderAll();
  });

  // État des guides
  let tag = "";
  const q = $("#q"), chipsEl = $("#chips"), list = $("#guides");
  if (q) q.addEventListener("input", renderGuides);
  if (chipsEl) chipsEl.addEventListener("click", (e) => {
    if (e.target.dataset.t === undefined) return;
    tag = e.target.dataset.t; renderGuides();
  });

  // Galerie + lightbox (une seule fois)
  const gal = $("#gallery");
  if (gal) {
    gal.innerHTML = window.SHOTS.map((p) => `<img loading="lazy" src="${p.src}" alt="${p.alt}">`).join("");
    const lb = $("#lb"), lbi = lb.querySelector("img");
    gal.addEventListener("click", (e) => { if (e.target.tagName === "IMG") { lbi.src = e.target.src; lbi.alt = e.target.alt; lb.classList.add("open"); } });
    lb.addEventListener("click", () => lb.classList.remove("open"));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") lb.classList.remove("open"); });
  }

  // Encyclopédie
  const panel = $("#panel"), tabs = $("#tabs");
  const views = {
    personnages: () => `<div class="grid">${D().CHARACTERS.map((c) => `
      <div class="card"><h3>${c.name} <span class="badge price">${price(c.price)}</span></h3>
      <p>${c.traits}</p><p style="margin-top:8px"><strong style="color:var(--gold)">⚡ ${c.power}</strong> — ${c.desc}</p></div>`).join("")}</div>`,
    armes: () => `<div class="tablewrap"><table><thead><tr><th>${t("th_weapon")}</th><th>${t("th_price")}</th><th>${t("th_ammo")}</th><th>${t("th_dmg")}</th><th>${t("th_effect")}</th></tr></thead><tbody>${
      D().WEAPONS.map((w) => `<tr><td><strong>${w.name}</strong></td><td>${price(w.price)}</td><td>${w.ammo || "—"}</td><td>${w.dmg || "—"}</td><td>${w.desc}</td></tr>`).join("")}</tbody></table></div>
      <p class="muted">${t("wiki_note")}</p>`,
    cartes: () => `<div class="grid">${D().MAPS.map((m, i) => {
      const img = window.MAP_IMG[window.MAPS[i]];
      return `<div class="card">${img ? `<img class="mapimg" loading="lazy" src="${img}" alt="${m}">` : ""}<h3>${m}</h3></div>`;
    }).join("")}</div><p class="muted">${t("maps_note")}</p>`,
    modes: () => `<div class="grid">${D().MODES.map((m) => `<div class="card"><h3>${m.name}</h3><p>${m.desc}</p></div>`).join("")}</div>`,
    campagne: () => `<div class="grid">${D().CAMPAIGN.map((c, i) => `
      <div class="card"><div class="ico">${i + 1}</div><h3>${c.chapter}</h3><p>${t("camp_map")}: ${c.map}</p><p>${t("camp_boss")}: <strong>${c.boss}</strong> (${c.cls})</p></div>`).join("")}</div>`
  };
  function renderWiki() {
    if (!panel) return;
    let key = location.hash.slice(1);
    if (!views[key]) key = "personnages";
    tabs.querySelectorAll(".chip").forEach((c) => c.classList.toggle("on", c.dataset.t === key));
    panel.innerHTML = views[key]();
  }
  if (tabs) {
    tabs.addEventListener("click", (e) => { if (e.target.dataset.t) location.hash = e.target.dataset.t; });
    window.addEventListener("hashchange", renderWiki);
  }

  function renderGuides() {
    if (!list) return;
    const G = D().GUIDES;
    const tags = [...new Set(G.flatMap((g) => g.tags))];
    chipsEl.innerHTML = [`<button class="chip${tag === "" ? " on" : ""}" data-t="">${t("all")}</button>`]
      .concat(tags.map((x) => `<button class="chip${x === tag ? " on" : ""}" data-t="${x}">${x}</button>`)).join("");
    const term = q.value.trim().toLowerCase();
    const res = G.filter((g) => (!tag || g.tags.includes(tag)) &&
      (!term || (g.title + g.summary + g.tags.join(" ") + g.body).toLowerCase().includes(term)));
    list.innerHTML = res.length ? res.map((g) => `
      <details class="guide" id="${g.id}">
        <summary><span><strong>${g.title}</strong><small>${g.summary}</small></span>
          <span class="badge ${g.level}">${g.level}</span></summary>
        <div class="content">${g.body}</div>
      </details>`).join("") : `<p class="empty">${t("none")}</p>`;
    if (location.hash) { const d = document.getElementById(location.hash.slice(1)); if (d) d.open = true; }
  }

  function renderAll() {
    document.documentElement.lang = lang;
    document.title = t("title_" + page);
    const md = document.querySelector('meta[name="description"]'); if (md) md.content = t("desc");
    btn.textContent = lang === "fr" ? "EN" : "FR";
    btn.title = lang === "fr" ? "Switch to English" : "Passer en français";
    document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = t(el.dataset.i18n)));
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => (el.placeholder = t(el.dataset.i18nPh)));
    const wp = $("#weapons"); if (wp) wp.innerHTML = D().WEAPONS.slice(0, 8).map((w) => `<li><strong>${w.name}</strong> — <span class="muted">${w.desc}</span></li>`).join("");
    const mp = $("#maps"); if (mp) mp.innerHTML = D().MAPS.map((m) => `<li>${m}</li>`).join("");
    renderWiki();
    renderGuides();
    if (window.renderCrystal && page === "crystal") window.renderCrystal(lang, t);
  }
  renderAll();
})();
