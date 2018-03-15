//Обработчики событий
(document.querySelector('.table'))
    .addEventListener('click', (event) => SortColumn(event));

//Главная функция
const SortColumn = (event) => {
    const currTarget = event.target.classList.value;
    const oldTableBody = document.querySelector('tbody');    

    //Обработчики в зависимости от колонки
    const directOrder = isDirectOrder(oldTableBody, currTarget);

    if ( currTarget === "numeration") {
        sortedElems = createArray(directOrder, compareNumbers, "td:first-child");    
    } else if ( currTarget === "names" ) {
        sortedElems = createArray(directOrder, compareNames, "td:nth-child(2)");
    } else if ( currTarget === "birthdays") {
        sortedElems = createArray(directOrder, compareBirthdays, "td:last-child");
    }

    const newTableBody = document.createElement('tbody');
    //Класс в зависимости от направления сортировки
    if (!directOrder) {
      newTableBody.classList.add('order');
      newTableBody.classList.add(currTarget);
    } 

    //Создает новую таблицу
    sortedElems.forEach((elem) => newTableBody.appendChild(elem.parentElement));

    //Берем родителя tbody => tableBody, и заменяем в нем tbody
    (oldTableBody.parentElement).replaceChild(newTableBody, oldTableBody);
}

//Прямой или обратный порядок
const isDirectOrder = (table, buttonValue) => {
    return (table.classList.contains('order') && table.classList.contains(buttonValue)) ? true : false;
}

//Создает и возвращает отсортированный массив
const createArray = (sortOrder, sortFn, tdSelector) => {
    const elems = Array.from(document.querySelectorAll(tdSelector));
    return sortTableData(sortOrder, elems, sortFn);
}

const sortTableData = (directOrder, tableData, sortFn) => {
    //В зависимости от порядка сортировки меняются местами аргументы
    return directOrder ? tableData.sort((a,b) => sortFn(b, a)) : tableData.sort((a,b) => sortFn(a, b)); 
}

//Сравнение чисел
const compareNumbers = (a,b) => a.innerHTML - b.innerHTML;

//Сравнение имен
const compareNames = (a,b) => a.innerHTML > b.innerHTML ? 1 : a.innerHTML < b.innerHTML ? -1 : 0 ;

//Cравнение дней рождений по 2 последним цифра(возможно заменить на regex)
const compareBirthdays = (a,b) => {
    const A = (Array.from(a.innerHTML));
    const B = (Array.from(b.innerHTML));
    if ( A[A.length-2] > B[B.length-2] ) {
        return 1;
    } else if ( A[A.length-2] < B[B.length-2]) {
        return -1;
    } else if (A[A.length-1] > B[B.length-1]) {
        return 1;
    } else if (A[A.length-1] < B[B.length-1]){
        return -1;
    }
    return 0;
}