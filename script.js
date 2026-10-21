const menuData = {
  pizza: [
    ["Classic Veg", "₹128"],
    ["Paneer Tikka", "₹160"],
    ["Sweet Corn", "₹144"],
    ["Cheese Garlic", "₹160"],
    ["Chicken Pizza", "₹160"],
    ["Schezwan Pizza", "₹160"],
    ["Barbeque Pizza", "₹160"],
    ["Chicken Tikka", "₹160"]
  ],
  sandwich: [
    ["Mixed Veg", "₹112"],
    ["Veg Cheese", "₹144"],
    ["Paneer Tikka", "₹144"]
  ]
};

const menuList = document.querySelector("#menu-list");
const menuTitle = document.querySelector("#menu-title");
const tabs = [...document.querySelectorAll(".tab")];

function renderMenu(category) {
  menuTitle.textContent = category === "pizza" ? "Pizza" : "Sandwiches";
  menuList.innerHTML = menuData[category].map(([name, price]) => `
    <article class="menu-item">
      <div>
        <div class="item-name">${name}</div>
        <a class="item-link" href="https://ig.me/m/haveitvizag" target="_blank" rel="noopener">Ask about this item ↗</a>
      </div>
      <span class="item-price">${price}</span>
    </article>
  `).join("");
  tabs.forEach(tab => {
    const selected = tab.dataset.category === category;
    tab.classList.toggle("active", selected);
    tab.setAttribute("aria-selected", String(selected));
  });
}

tabs.forEach(tab => tab.addEventListener("click", () => renderMenu(tab.dataset.category)));
renderMenu("pizza");

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
  toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  toggle.textContent = isOpen ? "×" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.textContent = "☰";
}));
