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

for (const button of document.querySelectorAll("[data-filter]")) {
  button.addEventListener("click", () => {
    const stage = button.dataset.filter;
    let count = 0;
    for (const filter of document.querySelectorAll("[data-filter]")) {
      filter.setAttribute("aria-pressed", String(filter === button));
    }
    for (const project of document.querySelectorAll("[data-status]")) {
      project.hidden = stage !== "all" && stage !== project.dataset.status;
      if (!project.hidden) count++;
    }
    document.getElementById("result-count").textContent = "프로젝트 " + count + "건";
  });
}

const form = document.getElementById("contact-form");
const serviceField = form.elements.namedItem("문의서비스");
const formStatus = document.getElementById("form-status");
const submitButton = form.querySelector("button[type=submit]");
for (const link of document.querySelectorAll("[data-service]")) {
  link.addEventListener("click", () => {
    serviceField.value = link.dataset.service;
  });
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (submitButton.disabled) return;
  const data = new FormData(form);
  const timeout = new AbortController();
  const timer = setTimeout(() => timeout.abort(), 12000);
  submitButton.disabled = true;
  formStatus.textContent = "문의를 보내는 중입니다.";
  try {
    const response = await fetch(form.action, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: data,
      signal: timeout.signal
    });
    if (!response.ok) throw new Error("Inquiry delivery failed");
    form.reset();
    formStatus.textContent = "문의가 접수되었습니다.";
  } catch {
    formStatus.textContent = "접수 여부를 확인하지 못했습니다. 잠시 후 다시 시도하거나 전화·이메일로 문의해 주세요.";
  } finally {
    clearTimeout(timer);
    submitButton.disabled = false;
  }
});

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



