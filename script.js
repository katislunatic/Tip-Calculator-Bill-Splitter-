// Load history from localStorage
let history = JSON.parse(localStorage.getItem("history")) || [];

// Update the list visually
function renderHistory() {
  const list = document.getElementById("historyList");
  list.innerHTML = "";

  history.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

renderHistory();

document.getElementById('calculate').addEventListener('click', () => {
  const bill = parseFloat(document.getElementById('bill').value) || 0;
  const tipPercent = parseFloat(document.getElementById('tip').value) || 0;
  const people = parseInt(document.getElementById('people').value) || 1;

  const tipAmount = (bill * tipPercent / 100).toFixed(2);
  const totalAmount = (bill + parseFloat(tipAmount)).toFixed(2);
  const perPerson = (totalAmount / people).toFixed(2);

  document.getElementById('tipAmount').innerText = tipAmount;
  document.getElementById('totalAmount').innerText = totalAmount;
  document.getElementById('perPerson').innerText = perPerson;

  // Save to history
  const entry = `Bill: $${bill} | Tip: ${tipPercent}% | People: ${people} | Total: $${totalAmount}`;
  history.unshift(entry); // add to start
  if (history.length > 20) history.pop(); // limit to 20 entries

  localStorage.setItem("history", JSON.stringify(history));

  renderHistory();
});

// Open history panel
document.getElementById("historyBtn").addEventListener("click", () => {
  document.getElementById("historyPanel").classList.add("show");
});

// Close history panel
document.getElementById("closeHistory").addEventListener("click", () => {
  document.getElementById("historyPanel").classList.remove("show");
});