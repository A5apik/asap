// ЗАПУСК
// Сначала скрываем все элементы, кроме анимации
document.querySelectorAll('.other-elements').forEach(element => {
  element.style.display = 'none';
});

// Затем запускаем анимацию
document.querySelector('.anim').classList.add('animate');

// После завершения анимации показываем остальные элементы
document.querySelector('.anim').addEventListener('animationend', () => {
  document.querySelectorAll('.other-elements').forEach(element => {
    element.style.display = 'block';
  });
});
