/* ===== STATE WITH DEMO DATA ===== */
const state = {
  network: [
    { id: 1, name: "Core Router",        ip: "192.168.1.1",   type: "router",       location: "Server Room",      status: "online"  },
    { id: 2, name: "Main Switch",         ip: "192.168.1.2",   type: "switch",       location: "Server Room",      status: "online"  },
    { id: 3, name: "Staff WiFi AP",       ip: "192.168.1.10",  type: "access-point", location: "Block A, Floor 1", status: "online"  },
    { id: 4, name: "Lab Switch 01",       ip: "192.168.1.20",  type: "switch",       location: "Computer Lab",     status: "online"  },
    { id: 5, name: "CCTV NVR",            ip: "192.168.1.50",  type: "server",       location: "Security Office",  status: "online"  },
    { id: 6, name: "Backup Server",       ip: "192.168.1.100", type: "server",       location: "Server Room",      status: "offline" },
    { id: 7, name: "Student WiFi AP",     ip: "192.168.1.11",  type: "access-point", location: "Library",          status: "online"  },
    { id: 8, name: "HR Dept Printer",     ip: "192.168.1.80",  type: "printer",      location: "HR Office",        status: "offline" },
  ],
  devices: [
    { id: 1, name: "Dell Latitude 5520",   serial: "SN-DL55-001", user: "Cyprian Paul",  condition: "good",         dept: "ICT Department",  date: "2024-03-10" },
    { id: 2, name: "HP LaserJet Pro 400",  serial: "SN-HP40-002", user: "Finance Office",condition: "fair",         dept: "Finance",         date: "2022-07-15" },
    { id: 3, name: "Cisco 2960 Switch",    serial: "SN-CS29-003", user: "Server Room",   condition: "excellent",    dept: "ICT Department",  date: "2023-01-20" },
    { id: 4, name: "Dell OptiPlex 7080",   serial: "SN-DO70-004", user: "Grace Wanjiku", condition: "good",         dept: "Administration",  date: "2023-09-05" },
    { id: 5, name: "Lenovo ThinkPad E15",  serial: "SN-LT15-005", user: "Peter Otieno",  condition: "needs-repair", dept: "Sales",           date: "2021-11-30" },
    { id: 6, name: "Epson LQ-690",         serial: "SN-EP69-006", user: "HR Office",     condition: "fair",         dept: "HR",              date: "2020-06-18" },
    { id: 7, name: "UPS APC 1500VA",       serial: "SN-AP15-007", user: "Server Room",   condition: "excellent",    dept: "ICT Department",  date: "2024-01-08" },
    { id: 8, name: "Hikvision IP Camera",  serial: "SN-HK01-008", user: "Security",      condition: "good",         dept: "Security",        date: "2023-05-22" },
    { id: 9, name: "HP EliteBook 840",     serial: "SN-HP84-009", user: "Linda Chebet",  condition: "excellent",    dept: "Marketing",       date: "2024-06-01" },
    { id: 10, name: "Desktop PC Acer",     serial: "SN-AC01-010", user: "Tom Njoroge",   condition: "faulty",       dept: "Operations",      date: "2019-03-14" },
  ],
  users: [
    { id: 1, name: "Cyprian Paul Mang'ong'o", email: "cyprian@company.ac.ke",  role: "admin",      dept: "ICT Department",  status: "active"   },
    { id: 2, name: "Grace Wanjiku",            email: "grace@company.ac.ke",    role: "staff",      dept: "Administration",  status: "active"   },
    { id: 3, name: "Peter Otieno",             email: "peter@company.ac.ke",    role: "staff",      dept: "Sales",           status: "active"   },
    { id: 4, name: "Linda Chebet",             email: "linda@company.ac.ke",    role: "staff",      dept: "Marketing",       status: "active"   },
    { id: 5, name: "Tom Njoroge",              email: "tom@company.ac.ke",      role: "technician", dept: "ICT Department",  status: "active"   },
    { id: 6, name: "Amina Hassan",             email: "amina@company.ac.ke",    role: "staff",      dept: "Finance",         status: "active"   },
    { id: 7, name: "Kevin Ngugi",              email: "kevin@company.ac.ke",    role: "student",    dept: "Lab Users",       status: "active"   },
    { id: 8, name: "Fatuma Abdi",              email: "fatuma@company.ac.ke",   role: "staff",      dept: "HR",              status: "inactive" },
    { id: 9, name: "James Omondi",             email: "james@company.ac.ke",    role: "staff",      dept: "Finance",         status: "active"   },
    { id: 10, name: "Sarah Kimani",            email: "sarah@company.ac.ke",    role: "admin",      dept: "Administration",  status: "active"   },
  ],
  threats: 2,
};

/* ===== CLOCK ===== */
function updateClock() {
  var el = document.getElementById("systemTime");
  if (!el) return;
  var now = new Date();
  el.textContent = now.toLocaleTimeString("en-KE", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
}
setInterval(updateClock, 1000);
updateClock();

/* ===== SIDEBAR TOGGLE ===== */
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("open");
}

/* ===== PANEL SWITCH ===== */
const titles = { dashboard: "Dashboard", network: "Network Monitor", devices: "Device Management", users: "User Management", security: "Security Scanner", ai: "AI ICT Support", reports: "Reports & Analytics" };

function switchPanel(name, btn) {
  document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
  document.getElementById("panel-" + name).classList.add("active");
  btn.classList.add("active");
  document.getElementById("pageTitle").textContent = titles[name] || name;
  if (name === "dashboard") updateDashboard();
  if (name === "reports") updateReports();
}

/* ===== DASHBOARD ===== */
const activityLog = [
  { text: "Core Router (192.168.1.1) is online and responding", color: "#10b981", time: "Just now"  },
  { text: "Backup Server went offline — check power supply",    color: "#ef4444", time: "14 min ago" },
  { text: "HR Dept Printer not responding to ping",             color: "#f59e0b", time: "32 min ago" },
  { text: "Security scan flagged 2 critical threats",           color: "#8b5cf6", time: "1 hr ago"   },
  { text: "User Fatuma Abdi account deactivated",               color: "#f59e0b", time: "2 hrs ago"  },
  { text: "Dell Latitude 5520 logged to device inventory",      color: "#3b82f6", time: "3 hrs ago"  },
  { text: "10 users registered in the system",                  color: "#00d4ff", time: "Today"      },
  { text: "Network scan completed — 8 devices found",           color: "#10b981", time: "Today"      },
];

const healthData = [
  { label: "Network Uptime", pct: 98, color: "#10b981" },
  { label: "Device Health", pct: 82, color: "#3b82f6" },
  { label: "Security Score", pct: 74, color: "#8b5cf6" },
  { label: "User Activity", pct: 91, color: "#f59e0b" },
];

function updateDashboard() {
  // Counters
  animateCount("dash-devices", state.network.length + state.devices.length);
  animateCount("dash-users", state.users.length);
  animateCount("dash-threats", state.threats);
  document.getElementById("dash-health").textContent = state.network.length > 0 ? "Good" : "--";

  // Activity
  const all = [...activityLog];
  if (state.network.length > 0) all.unshift({ text: `${state.network[state.network.length-1]?.name} added to network`, color: "#3b82f6", time: "Recent" });
  if (state.users.length > 0) all.unshift({ text: `User ${state.users[state.users.length-1]?.name} registered`, color: "#10b981", time: "Recent" });
  document.getElementById("activityList").innerHTML = all.slice(0, 6).map(a => `
    <div class="activity-item">
      <span class="activity-dot" style="background:${a.color};"></span>
      <span>${a.text}</span>
      <span class="activity-time">${a.time}</span>
    </div>
  `).join("");

  // Health bars
  document.getElementById("healthBars").innerHTML = healthData.map(h => `
    <div class="health-row">
      <div class="health-label-row">
        <span>${h.label}</span>
        <span class="health-pct">${h.pct}%</span>
      </div>
      <div class="health-track">
        <div class="health-fill" style="width:${h.pct}%; background:${h.color};"></div>
      </div>
    </div>
  `).join("");
}

function animateCount(id, target) {
  const el = document.getElementById(id);
  if (!el) return;
  let current = 0;
  const step = Math.max(1, Math.ceil(target / 30));
  const iv = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current;
    if (current >= target) clearInterval(iv);
  }, 30);
}

/* ===== NETWORK ===== */
function addNetworkDevice() {
  const name = document.getElementById("net-name").value.trim();
  const ip = document.getElementById("net-ip").value.trim();
  const type = document.getElementById("net-type").value;
  const location = document.getElementById("net-location").value.trim();
  if (!name || !ip) { alert("Please enter Device Name and IP Address."); return; }

  const device = { id: Date.now(), name, ip, type, location, status: "online" };
  state.network.push(device);
  renderNetworkTable();
  document.getElementById("net-name").value = "";
  document.getElementById("net-ip").value = "";
  document.getElementById("net-location").value = "";
}

function renderNetworkTable() {
  document.getElementById("netCount").textContent = state.network.length + " device" + (state.network.length !== 1 ? "s" : "");
  document.getElementById("networkBody").innerHTML = state.network.map(d => `
    <tr>
      <td>${d.name}</td>
      <td><span style="font-family:var(--mono);font-size:12px;">${d.ip}</span></td>
      <td style="text-transform:capitalize;">${d.type}</td>
      <td>${d.location || "—"}</td>
      <td><span class="badge badge-${d.status === 'online' ? 'online' : 'offline'}">${d.status}</span></td>
      <td>
        <button class="btn-primary btn-sm btn-warn" onclick="toggleNetStatus(${d.id})">Toggle</button>
        <button class="btn-primary btn-sm btn-danger" onclick="removeNet(${d.id})" style="margin-left:6px;">Remove</button>
      </td>
    </tr>
  `).join("");
}

function toggleNetStatus(id) {
  const d = state.network.find(x => x.id === id);
  if (d) { d.status = d.status === "online" ? "offline" : "online"; renderNetworkTable(); }
}

function removeNet(id) {
  state.network = state.network.filter(x => x.id !== id);
  renderNetworkTable();
}

/* ===== DEVICES ===== */
function addDevice() {
  const name = document.getElementById("dev-name").value.trim();
  const serial = document.getElementById("dev-serial").value.trim();
  const user = document.getElementById("dev-user").value.trim();
  const condition = document.getElementById("dev-condition").value;
  const dept = document.getElementById("dev-dept").value.trim();
  const date = document.getElementById("dev-date").value;
  if (!name) { alert("Please enter a Device Name."); return; }

  const device = { id: Date.now(), name, serial, user, condition, dept, date };
  state.devices.push(device);
  renderDeviceTable();
  document.getElementById("dev-name").value = "";
  document.getElementById("dev-serial").value = "";
  document.getElementById("dev-user").value = "";
  document.getElementById("dev-dept").value = "";
  document.getElementById("dev-date").value = "";
}

function renderDeviceTable() {
  document.getElementById("devCount").textContent = state.devices.length + " device" + (state.devices.length !== 1 ? "s" : "");
  document.getElementById("deviceBody").innerHTML = state.devices.map(d => {
    const badgeMap = { excellent: "good", good: "good", fair: "fair", "needs-repair": "repair", faulty: "repair" };
    return `
      <tr>
        <td>${d.name}</td>
        <td><span style="font-family:var(--mono);font-size:12px;">${d.serial || "—"}</span></td>
        <td>${d.user || "Unassigned"}</td>
        <td>${d.dept || "—"}</td>
        <td><span class="badge badge-${badgeMap[d.condition] || 'fair'}" style="text-transform:capitalize;">${d.condition.replace("-", " ")}</span></td>
        <td><button class="btn-primary btn-sm btn-danger" onclick="removeDevice(${d.id})">Remove</button></td>
      </tr>
    `;
  }).join("");
}

function removeDevice(id) {
  state.devices = state.devices.filter(x => x.id !== id);
  renderDeviceTable();
}

/* ===== USERS ===== */
function addUser() {
  const name = document.getElementById("usr-name").value.trim();
  const email = document.getElementById("usr-email").value.trim();
  const role = document.getElementById("usr-role").value;
  const dept = document.getElementById("usr-dept").value.trim();
  if (!name || !email) { alert("Please enter Name and Email."); return; }

  const user = { id: Date.now(), name, email, role, dept, status: "active" };
  state.users.push(user);
  renderUserTable();
  document.getElementById("usr-name").value = "";
  document.getElementById("usr-email").value = "";
  document.getElementById("usr-dept").value = "";
}

function renderUserTable() {
  document.getElementById("usrCount").textContent = state.users.length + " user" + (state.users.length !== 1 ? "s" : "");
  document.getElementById("userBody").innerHTML = state.users.map(u => `
    <tr>
      <td>${u.name}</td>
      <td><span style="font-family:var(--mono);font-size:12px;">${u.email}</span></td>
      <td style="text-transform:capitalize;">${u.role}</td>
      <td>${u.dept || "—"}</td>
      <td><span class="badge badge-${u.status === 'active' ? 'active' : 'inactive'}">${u.status}</span></td>
      <td>
        <button class="btn-primary btn-sm btn-warn" onclick="toggleUser(${u.id})">Toggle</button>
        <button class="btn-primary btn-sm btn-danger" onclick="removeUser(${u.id})" style="margin-left:6px;">Remove</button>
      </td>
    </tr>
  `).join("");
}

function toggleUser(id) {
  const u = state.users.find(x => x.id === id);
  if (u) { u.status = u.status === "active" ? "inactive" : "active"; renderUserTable(); }
}

function removeUser(id) {
  state.users = state.users.filter(x => x.id !== id);
  renderUserTable();
}

/* ===== SECURITY SCANNER ===== */
const threatDB = [
  { id: "sql", detect: t => /'\s*or\s*'|union\s+select|drop\s+table|insert\s+into.*values/i.test(t), level: "critical", color: "#ef4444", title: "SQL Injection Pattern", desc: "Malicious SQL syntax detected. An attacker may attempt to manipulate your database queries to extract, modify, or delete data." },
  { id: "hardcoded", detect: t => /(password|secret|api_key|apikey)\s*[=:]\s*['"][^'"]{4,}/i.test(t) && !/process\.env|os\.environ/i.test(t), level: "critical", color: "#ef4444", title: "Hardcoded Credentials", desc: "Passwords or API keys appear to be hardcoded in plain text. Move all secrets to environment variables immediately." },
  { id: "eval", detect: t => /\beval\s*\(/.test(t), level: "critical", color: "#ef4444", title: "Dangerous eval() Usage", desc: "eval() executes arbitrary code and is a severe security risk if any user input reaches it." },
  { id: "xss", detect: t => /innerHTML\s*=|document\.write\s*\(/i.test(t), level: "high", color: "#f59e0b", title: "XSS Vulnerability Risk", desc: "Directly writing to innerHTML without sanitization allows attackers to inject malicious scripts." },
  { id: "http", detect: t => /http:\/\/(?!localhost|127\.)/.test(t), level: "medium", color: "#f59e0b", title: "Insecure HTTP Endpoint", desc: "Unencrypted HTTP connections expose data in transit. Switch all endpoints to HTTPS." },
  { id: "root", detect: t => /logged\s+in\s+as\s+root|su\s+-\s+root|sudo\s+su/i.test(t), level: "high", color: "#f59e0b", title: "Root Access Detected", desc: "Root or superuser access found in logs. Limit privileged access and use least-privilege accounts." },
  { id: "failed", detect: t => (t.match(/failed\s+login|authentication\s+failed|invalid\s+password/gi) || []).length > 3, level: "medium", color: "#f59e0b", title: "Brute Force Attempt", desc: "Multiple failed login attempts detected. Consider IP blocking, rate limiting, and MFA." },
  { id: "port", detect: t => /port\s+scan|nmap|masscan/i.test(t), level: "high", color: "#f59e0b", title: "Port Scan Activity", desc: "Port scanning tools detected in logs. This often precedes an intrusion attempt." },
];

function runSecurityScan() {
  const text = document.getElementById("secInput").value.trim();
  if (!text) { alert("Please paste text or logs to scan."); return; }

  const found = threatDB.filter(t => t.detect(text));
  state.threats = found.filter(f => f.level === "critical").length;

  const criticals = found.filter(f => f.level === "critical").length;
  const highs = found.filter(f => f.level === "high").length;
  const mediums = found.filter(f => f.level === "medium").length;

  let score = 100 - (criticals * 25) - (highs * 15) - (mediums * 8);
  score = Math.max(0, score);

  const color = score >= 75 ? "#10b981" : score >= 45 ? "#f59e0b" : "#ef4444";
  const verdict = score >= 75 ? "Low Risk" : score >= 45 ? "Medium Risk" : "High Risk — Action Required";
  const summary = found.length === 0
    ? "No threats detected. The scanned content appears clean based on known threat patterns."
    : `${found.length} issue${found.length > 1 ? "s" : ""} detected — ${criticals} critical, ${highs} high, ${mediums} medium. Review and address immediately.`;

  document.getElementById("scanResults").style.display = "block";
  document.getElementById("scanScoreVal").textContent = score;
  document.getElementById("scanScoreCircle").style.color = color;
  document.getElementById("scanScoreCircle").style.borderColor = color;
  document.getElementById("scanVerdict").textContent = verdict;
  document.getElementById("scanVerdict").style.color = color;
  document.getElementById("scanSummary").textContent = summary;

  document.getElementById("threatCards").innerHTML = found.length === 0
    ? `<div class="threat-card" style="border-left-color:#10b981;"><div class="threat-level" style="color:#10b981;">ALL CLEAR</div><div class="threat-title">No Threats Found</div><div class="threat-desc">The scanned content passed all security checks.</div></div>`
    : found.map(f => `
        <div class="threat-card" style="border-left-color:${f.color};">
          <div class="threat-level" style="color:${f.color};">${f.level.toUpperCase()}</div>
          <div class="threat-title">${f.title}</div>
          <div class="threat-desc">${f.desc}</div>
        </div>
      `).join("");
}

/* ===== AI CHAT ===== */
const ictAnswers = [
  { keys: ["ip", "address", "subnet", "mask"], answer: "An IP address is a unique identifier for a device on a network. For a typical office LAN, use the 192.168.1.0/24 range. Subnet mask 255.255.255.0 gives you 254 usable host addresses. Make sure your DHCP server is configured to avoid conflicts with static IPs." },
  { keys: ["dhcp", "assign", "automatic"], answer: "DHCP automatically assigns IP addresses to devices. On a Cisco switch or router, configure it with: ip dhcp pool LAN, network 192.168.1.0 255.255.255.0, default-router 192.168.1.1, dns-server 8.8.8.8. Exclude static IPs with: ip dhcp excluded-address 192.168.1.1 192.168.1.20." },
  { keys: ["cctv", "camera", "surveillance", "dvr"], answer: "For CCTV setup: run Cat6 cables from cameras to DVR, configure each camera IP in the same subnet as your LAN, enable port forwarding on your router for remote access (typically port 8080 or 554 for RTSP). Test with VLC using rtsp://camera-ip/stream. Ensure cameras are on a separate VLAN for security." },
  { keys: ["lan", "cable", "cabling", "ethernet"], answer: "For structured LAN cabling: use Cat6 cable for runs up to 100 meters. Terminate with RJ45 connectors using T568B standard (Orange-white, Orange, Green-white, Blue, Blue-white, Green, Brown-white, Brown). Test all runs with a cable tester before connecting devices. Label both ends of every cable." },
  { keys: ["wifi", "wireless", "access point", "ssid"], answer: "For wireless setup: place access points centrally, configure the same SSID and password for seamless roaming. Use WPA3 or WPA2-AES encryption. Set the 2.4GHz band for wider coverage and 5GHz for faster speeds. Avoid channel overlap — use channels 1, 6, or 11 for 2.4GHz." },
  { keys: ["virus", "malware", "infected", "antivirus"], answer: "If a device is infected: disconnect it from the network immediately to prevent spread. Boot from a clean USB antivirus tool like Malwarebytes. Run a full scan. If infection persists, wipe and reinstall the OS. Ensure all devices have updated antivirus software and Windows Defender is active." },
  { keys: ["slow", "network slow", "speed", "bandwidth"], answer: "For slow network issues: test speed at the router first using speedtest.net. If router speed is fine, the issue is LAN-side. Check for: duplicate IP conflicts, faulty cables, overloaded switches, or heavy users consuming bandwidth. Use a managed switch to identify traffic by port and apply QoS rules." },
  { keys: ["password", "reset", "forgot", "login"], answer: "For Windows password reset: boot from Windows installation media, open Command Prompt, type: net user username newpassword. For Active Directory: use Active Directory Users and Computers > right-click user > Reset Password. Always verify user identity before resetting. Log all resets for audit purposes." },
  { keys: ["printer", "print", "not printing"], answer: "Printer troubleshooting steps: 1) Check physical connections and power. 2) Clear the print queue in Windows (Services > Print Spooler > Restart). 3) Reinstall the printer driver. 4) For network printers, ping the printer IP. 5) Check paper and ink/toner levels. 6) Try printing a test page from the printer's control panel directly." },
  { keys: ["backup", "data", "recovery"], answer: "Best practice for data backup: follow the 3-2-1 rule — 3 copies, 2 different media types, 1 offsite. Use Windows Backup or Veeam for local backups. Schedule automatic daily incremental backups. Test your restore process monthly. For critical data, consider cloud backup with Google Drive, OneDrive, or Backblaze." },
  { keys: ["firewall", "block", "port"], answer: "To configure Windows Firewall: go to Windows Defender Firewall > Advanced Settings > Inbound Rules > New Rule > Port. Specify TCP or UDP and the port number. For Cisco ASA firewall, use: access-list ACL_NAME permit/deny tcp/udp any host IP eq PORT, then apply to interface. Always document your firewall rules." },
  { keys: ["ccna", "cisco", "switch config", "vlan"], answer: "Basic Cisco switch configuration: enable > configure terminal > hostname SWITCH-NAME. Create VLAN: vlan 10, name STAFF. Assign to port: interface fa0/1, switchport mode access, switchport access vlan 10. Save config: write memory or copy running-config startup-config. Use show vlan brief to verify." },
];

function sendChat() {
  const input = document.getElementById("chatInput");
  const text = input.value.trim();
  if (!text) return;

  appendChat(text, "user");
  input.value = "";

  const typingId = appendTyping();

  setTimeout(() => {
    removeTyping(typingId);
    const answer = getICTAnswer(text);
    appendChat(answer, "bot");
  }, 900 + Math.random() * 600);
}

function appendChat(text, role) {
  const msgs = document.getElementById("chatMessages");
  const div = document.createElement("div");
  div.className = "chat-msg " + role;
  div.innerHTML = `
    <div class="chat-avatar ${role === "bot" ? "bot-avatar" : "user-av"}">${role === "bot" ? "AI" : "You"}</div>
    <div class="chat-bubble">${text}</div>
  `;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function appendTyping() {
  const msgs = document.getElementById("chatMessages");
  const id = "typing-" + Date.now();
  const div = document.createElement("div");
  div.className = "chat-msg bot";
  div.id = id;
  div.innerHTML = `<div class="chat-avatar bot-avatar">AI</div><div class="chat-bubble"><div class="typing-dot"><span></span><span></span><span></span></div></div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  return id;
}

function removeTyping(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

function getICTAnswer(text) {
  const lower = text.toLowerCase();
  for (const item of ictAnswers) {
    if (item.keys.some(k => lower.includes(k))) return item.answer;
  }
  return "That is a good ICT question. Based on best practices: start by documenting the issue clearly, check all physical connections, verify network connectivity, review recent changes to the system, and consult device logs. If the issue persists, escalate with full documentation of steps already taken. Feel free to give me more details and I will give a more specific answer.";
}

/* ===== REPORTS ===== */
function updateReports() {
  document.getElementById("reportGrid").innerHTML = `
    <div class="report-card"><div class="report-num">${state.network.length}</div><div class="report-label">Network Devices</div></div>
    <div class="report-card"><div class="report-num">${state.devices.length}</div><div class="report-label">Hardware Devices</div></div>
    <div class="report-card"><div class="report-num">${state.users.length}</div><div class="report-label">Registered Users</div></div>
    <div class="report-card"><div class="report-num">${state.threats}</div><div class="report-label">Critical Threats</div></div>
    <div class="report-card"><div class="report-num">${state.users.filter(u => u.status === "active").length}</div><div class="report-label">Active Users</div></div>
    <div class="report-card"><div class="report-num">${state.network.filter(n => n.status === "online").length}</div><div class="report-label">Devices Online</div></div>
  `;
}

function generateReport() {
  const title = document.getElementById("rep-title").value.trim() || "ICT Infrastructure Report";
  const by = document.getElementById("rep-by").value.trim() || "ICT Administrator";
  const now = new Date().toLocaleDateString("en-KE", { year: "numeric", month: "long", day: "numeric" });

  const report = `
${title}
${"=".repeat(title.length)}
Date: ${now}
Prepared by: ${by}

EXECUTIVE SUMMARY
-----------------
This report provides a snapshot of the current ICT infrastructure status.
All figures reflect live data from the management system.

NETWORK INFRASTRUCTURE
----------------------
Total network devices registered : ${state.network.length}
Devices currently online          : ${state.network.filter(n => n.status === "online").length}
Devices currently offline         : ${state.network.filter(n => n.status === "offline").length}

HARDWARE INVENTORY
------------------
Total hardware devices logged     : ${state.devices.length}
Devices in good/excellent condition: ${state.devices.filter(d => ["excellent","good"].includes(d.condition)).length}
Devices needing attention         : ${state.devices.filter(d => ["needs-repair","faulty"].includes(d.condition)).length}

USER MANAGEMENT
---------------
Total registered users            : ${state.users.length}
Active user accounts              : ${state.users.filter(u => u.status === "active").length}
Inactive user accounts            : ${state.users.filter(u => u.status === "inactive").length}

SECURITY STATUS
---------------
Critical threats detected         : ${state.threats}
Recommendation                    : ${state.threats > 0 ? "Immediate action required. Review security scanner findings." : "No critical threats. Maintain regular scanning schedule."}

RECOMMENDATIONS
---------------
1. Maintain regular device inventory audits every quarter.
2. Ensure all user accounts are reviewed monthly.
3. Run security scans on all new systems before deployment.
4. Keep all firmware and software updated.
5. Backup all critical data following the 3-2-1 backup rule.

END OF REPORT
`.trim();

  const out = document.getElementById("reportOutput");
  out.textContent = report;
  out.style.display = "block";
}

/* ===== INIT ===== */
function init() {
  updateDashboard();
  renderNetworkTable();
  renderDeviceTable();
  renderUserTable();
  updateReports();
}

/* ===== LOGIN / LOGOUT ===== */
function doLogin() {
  var user = document.getElementById("login-user").value.trim();
  var pass = document.getElementById("login-pass").value.trim();
  var err  = document.getElementById("login-err");

  if (user === "admin" && pass === "admin123") {
    err.style.display = "none";
    document.getElementById("login-page").style.display = "none";
    document.getElementById("app-wrap").style.display   = "flex";
    if (typeof init === "function") init();
  } else {
    err.style.display = "block";
  }
}

function doLogout() {
  document.getElementById("app-wrap").style.display   = "none";
  document.getElementById("login-page").style.display = "flex";
  document.getElementById("login-user").value = "";
  document.getElementById("login-pass").value = "";
}

document.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    var lp = document.getElementById("login-page");
    if (lp && lp.style.display !== "none") doLogin();
  }
});