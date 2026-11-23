const menu = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");
const productLinks = [...document.querySelectorAll(".product-tabs a")];
const panels = [...document.querySelectorAll(".product")];

function setMenu(open) {
  menu.setAttribute("aria-expanded", String(open));
  navigation.classList.toggle("is-open", open);
}

menu.addEventListener("click", () => setMenu(menu.getAttribute("aria-expanded") !== "true"));
navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenu(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menu.getAttribute("aria-expanded") === "true") {
    setMenu(false);
    menu.focus();
  }
});
matchMedia("(max-width: 650px)").addEventListener("change", () => setMenu(false));

function selectProduct(id) {
  for (const panel of panels) panel.hidden = panel.id !== id;
  for (const link of productLinks) {
    if (link.hash === "#" + id) link.setAttribute("aria-current", "true");
    else link.removeAttribute("aria-current");
  }
}

function syncLocation() {
  const id = location.hash.slice(1);
  const target = document.getElementById(id);
  if (target instanceof HTMLDetailsElement) target.open = true;
  if (panels.includes(target)) {
    selectProduct(id);
    document.querySelector(".product-tabs").scrollIntoView();
  }
  const section = target?.closest("main > section");
  for (const link of navigation.querySelectorAll("a")) {
    if (link.hash === "#" + section?.id) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  }
}

selectProduct("chatbot");
syncLocation();
window.addEventListener("hashchange", syncLocation);

const fallback = document.getElementById("chat-fallback");
const widgetHost = "[data-ieumbot-chatbot-id]";
function updateChatFallback() {
  const host = document.querySelector(widgetHost);
  const launcher = host?.shadowRoot?.querySelector(".ieum-floating");
  if (!launcher?.getClientRects().length) return;
  fallback.hidden = true;
  chatObserver.disconnect();
}
const chatObserver = new MutationObserver(updateChatFallback);
chatObserver.observe(document.body, { childList: true, subtree: true });
updateChatFallback();



