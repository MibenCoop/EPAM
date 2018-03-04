//Кнопки для добавления событий сортировки
const orderButton = document.querySelector('.order');
const nameButton = document.querySelector('.name');
const birthdayButton = document.querySelector('.birthday');

//Селекторы кнопок для сортировки
const numsSelector = "td:first-child";
const namesSelector = "td:nth-child(2)";
const birthdaysSelector = "td:last-child";

//Обработчики событий
orderButton.addEventListener('click', () => SortColumn('nums'));
nameButton.addEventListener('click', () => SortColumn('names'));
birthdayButton.addEventListener('click', () => SortColumn('birthdays'));

//Главная функция
const SortColumn = (buttonValue) => {
    const newTableBody = document.createElement('tbody');
    const oldTableBody = document.querySelector('tbody');    

    //Обработчики в зависимости от колонки
    const sortOrder = isDirectOrder(oldTableBody, buttonValue);
    if ( buttonValue === "nums") {
        sortedElems = createArray(sortOrder, compareNumbers, numsSelector);    
    } else if ( buttonValue === "names" ) {
        sortedElems = createArray(sortOrder, compareNames, namesSelector);
    } else if ( buttonValue === "birthdays") {
        sortedElems = createArray(sortOrder, compareBirthdays, birthdaysSelector);
    }
    //Класс в зависимости от направления сортировки
    sortOrder ? null : (newTableBody.classList.add('order') && newTableBody.classList.add(buttonValue));

    //Создает новую таблицу
    sortedElems.forEach((elem) => {
        newTableBody.appendChild(elem.parentElement);
    });

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
const compareNumbers = (a,b) => {
    return a.innerHTML - b.innerHTML;
}

//Сравнение имен
const compareNames = (a,b) => {
    return a.innerHTML > b.innerHTML ? 1 : a.innerHTML < b.innerHTML ? -1 : 0 ;
}

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