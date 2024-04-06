const lines = document.querySelectorAll('.line');
const symbols = ['you','scared','to death','to look','shook','','cause','aint`','such thing','as','halway crooks'];

function fillLines() {
  lines.forEach((line, index) => {
    let lineContent = '';
    // i -количество символов в строке
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * symbols.length);
      lineContent += symbols[randomIndex];
    }
    line.textContent = lineContent;
  });
}

fillLines(); 
setInterval(fillLines, 65); // скорость обновления строк


