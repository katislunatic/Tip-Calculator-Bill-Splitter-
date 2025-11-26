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
});
