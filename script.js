// Показать нужную страницу
function show(id) {
  document.getElementById('home').style.display   = (id === 'home')   ? 'block' : 'none';
  document.getElementById('models').style.display = (id === 'models') ? 'block' : 'none';
  document.getElementById('calc').style.display   = (id === 'calc')   ? 'block' : 'none';
}

// Расчёт стоимости
function calc() {
  let sum = +document.getElementById('model').value;

  if (sum === 0) {
    alert('Выберите модель');
    return;
  }

  if (document.getElementById('opt1').checked) sum += 120000;
  if (document.getElementById('opt2').checked) sum += 200000;
  if (document.getElementById('opt3').checked) sum += 350000;

  document.getElementById('result').textContent = 'Итого: ' + sum.toLocaleString('ru-RU') + ' ₽';
}