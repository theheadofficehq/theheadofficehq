const msgs=[
"Board Meeting in Progress",
"HR is investigating Little Head",
"Wallet has rejected the proposal",
"Brain requested additional evidence",
"Heart has appealed the decision",
"Eyes reported another distraction",
"Emergency Meeting in Progress"
];
document.getElementById("statusText").textContent=msgs[Math.floor(Math.random()*msgs.length)];
