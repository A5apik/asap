// Получаем элементы, которые нужно анимировать
const elementsToAnimate = document.querySelectorAll('.other-elements');

// Функция для добавления класса через определенное время
function addClassWithDelay(element, className, delay) {
  setTimeout(() => {
    element.classList.add(className);
  }, delay);
}

// Добавляем класс с задержкой для каждого элемента
elementsToAnimate.forEach((element, index) => {
  addClassWithDelay(element, 'fin_op', 1000 * index); // Увеличиваем задержку для каждого последующего элемента
  element.style.opacity = 1; // Устанавливаем opacity в 1 после завершения анимации
});