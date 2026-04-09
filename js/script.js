function showTab(tabId) {
  document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
}
