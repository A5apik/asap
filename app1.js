// АНИМАЦИЯ
let $wrap = document.querySelector('.wrap');

function addItem(text) {
    let $ul = document.createElement('ul');
    let $li = document.createElement('li');
    $ul.innerHTML = `${text} <li class="symbol">-</li>`;
    $wrap.appendChild($ul);

    let $symbol = $ul.querySelector('.symbol');
    $symbol.classList.add('rotate-symbol');

    setTimeout(function(){
        if ($symbol.classList.contains('rotate-symbol')) {
            $ul.classList.add('color')
            $symbol.classList.remove('rotate-symbol');
        } else {
            $symbol.classList.add('rotate-symbol');
        }
        if (text !== 'Complete') {
            $symbol.innerHTML = 'ok';
        } else {
            $ul.classList.remove('color')
            $symbol.innerHTML = ''
        }
    }, 1000);
}

    setTimeout(function () {
        addItem('Checking authority...');
    }, 0);

    setTimeout(function () {
        addItem('Intializing system...');
    }, 1000);

    setTimeout(function () {
        addItem('Optimizing system...');
    }, 3000);

    setTimeout(function () {
        addItem('Checking data...');
    }, 3500);

    setTimeout(function () {
        addItem('Accessing data...');
    }, 4000);

    setTimeout(function () {
        addItem('Synchronizing data...');
    }, 4700);

    setTimeout(function () {
        addItem('Waiting...');
    }, 4900);


    setTimeout(function () {
        addItem('Complete.');
    }, 5200);


    setTimeout(function () {
        $wrap.classList.add('fin_op')
    }, 6400)
