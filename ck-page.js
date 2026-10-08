// Affiche la page Crystal Keeper (appelée par site.js à chaque changement de langue).
window.renderCrystal = function (lang, t) {
  const C = window.CK[lang], $ = (s) => document.querySelector(s);
  const price = (p) => (typeof p === "number" ? p + " 💠" : p);        // 💠 = éclats
  const cards = [["⚔️", "c1"], ["🛡️", "c2"], ["🗺️", "c3"], ["🌋", "c4"], ["🏆", "c5"], ["📱", "c6"]];
  $("#ck-cards").innerHTML = cards.map(([ico, k]) => `<div class="card"><div class="ico">${ico}</div><h3>${t("ck_" + k + "t")}</h3><p>${t("ck_" + k + "d")}</p></div>`).join("");
  const keys = [["WASD", "← ↑ → ↓"], ["1", "6"], ["E", ""], ["U", ""], ["X", ""], ["Space", ""], ["P", ""], ["M", ""]];
  $("#ck-controls").innerHTML = [
    `<div><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> / <kbd>←</kbd><kbd>↑</kbd><kbd>→</kbd><kbd>↓</kbd> <small>${t("ck_k_move")}</small></div>`,
    `<div>${t("ck_k_clickname")} <small>${t("ck_k_build")}</small></div>`,
    `<div><kbd>1</kbd>–<kbd>6</kbd> <small>${t("ck_k_pick")}</small></div>`,
    `<div><kbd>E</kbd> <small>${t("ck_k_spell")}</small></div>`,
    `<div><kbd>U</kbd> <small>${t("ck_k_upgrade")}</small></div>`,
    `<div><kbd>X</kbd> <small>${t("ck_k_sell")}</small></div>`,
    `<div><kbd>Space</kbd> <small>${t("ck_k_next")}</small></div>`,
    `<div><kbd>P</kbd> / <kbd>M</kbd> <small>${t("ck_k_pause")}</small></div>`,
    `<div>📱 <small>${t("ck_k_touch")}</small></div>`
  ].join("");
  $("#ck-heroes").innerHTML = C.heroes.map((h) => `
    <div class="card"><img class="mapimg" style="max-width:150px;margin:0 auto 10px" loading="lazy" src="${h.img}" alt="${h.name}">
    <h3>${h.name} <span class="badge price">${price(h.price)}</span></h3><p>${h.traits}</p>
    <p style="margin-top:8px"><strong style="color:var(--gold)">✨ ${h.spell}</strong> — ${h.spellDesc}</p></div>`).join("");
  $("#ck-towers").innerHTML = C.towers.map((x) => `
    <div class="card"><img style="height:110px;display:block;margin:0 auto 8px" loading="lazy" src="${x.img}" alt="${x.name}">
    <h3>${x.name} <span class="badge price">${x.price} 🪙</span></h3><p>${x.desc}</p></div>`).join("");
  $("#ck-worlds").innerHTML = C.worlds.map((w) => `
    <div class="card"><img class="mapimg" loading="lazy" src="${w.img}" alt="${w.name}"><h3>${w.name}</h3>
    <p>${t("ck_boss")}: <strong>${w.boss}</strong></p><p>${t("ck_monsters")}: ${w.mons}</p><p style="margin-top:6px">🔓 ${w.unlock}</p></div>`).join("");
  $("#ck-special").innerHTML = C.special.map((s) => `<div class="card"><h3>${s[0]}</h3><p>${s[1]}</p></div>`).join("");
  $("#ck-events").innerHTML = C.events.map((e) => `<div class="card"><h3>${e[0]}</h3><p>${e[1]}</p></div>`).join("");
  $("#ck-ach").innerHTML = C.achievements.map((a) => `<div class="card"><h3>🏅 ${a[0]} <span class="badge price">+${a[2]} 💠</span></h3><p>${a[1]}</p></div>`).join("");
  $("#ck-guides").innerHTML = C.guides.map((g) => `
    <details class="guide"><summary><span><strong>${g.title}</strong><small>${g.summary}</small></span><span class="badge ${g.level}">${g.level}</span></summary>
    <div class="content">${g.body}</div></details>`).join("");
  // galerie : captures du jeu
  const shots = [["forest.jpg", "Whispering Forest"], ["snow.jpg", "Frostpeak"], ["desert.jpg", "Sunscorch Desert"], ["volcano.jpg", "Emberforge"], ["menu.jpg", "Menu"], ["tutorial.jpg", "Tutorial"], ["levelup.jpg", "Level up"]];
  $("#gallery").innerHTML = shots.map((s) => `<img loading="lazy" src="${s[0]}" alt="Crystal Keeper – ${s[1]}">`).join("");
};
