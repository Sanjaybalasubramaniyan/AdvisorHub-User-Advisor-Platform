const API = "http://localhost:3000/api";

async function loadAdvisors() {
  const q = document.getElementById("q").value.trim();
  const res = await fetch(`${API}/advisors${q ? `?q=${encodeURIComponent(q)}` : ""}`);
  const list = await res.json();
  const root = document.getElementById("advisors");
  root.innerHTML = "";
  if (!list.length) { root.innerHTML = "<p>No advisors found.</p>"; return; }
  list.forEach(a => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${a.name} — <small>${a.expertise}</small></h3>
      <p>${a.bio ?? ""}</p>
      <p>Rate: ₹${a.ratePerHour}/hr | Rating: ${a.rating ?? "N/A"}</p>
      <p><b>Advisor ID:</b> ${a._id}</p>
      <p><b>Slots:</b> ${(a.slots || []).join(", ") || "—"}</p>
    `;
    root.appendChild(div);
  });
}

async function createBooking() {
  const payload = {
    advisorId: document.getElementById("b_advisorId").value.trim(),
    userName: document.getElementById("b_userName").value.trim(),
    userEmail: document.getElementById("b_userEmail").value.trim(),
    slot: document.getElementById("b_slot").value.trim(),
    notes: document.getElementById("b_notes").value.trim()
  };
  const res = await fetch(`${API}/bookings`, {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(payload)
  });
  const data = await res.json();
  if (res.ok) {
    alert("✅ Booking created!\nID: " + data._id);
  } else {
    alert("❌ Error: " + (data.error || JSON.stringify(data)));
  }
}

loadAdvisors();
