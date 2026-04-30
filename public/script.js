async function loadStatus() {
  const res = await fetch("/api/status");
  const data = await res.json();
  document.getElementById("status").innerText = data.message;
}

loadStatus();