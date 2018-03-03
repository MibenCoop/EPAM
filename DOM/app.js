console.log("Hello");

//Theader buttons
const orderButton = document.querySelector('.order');
const nameButton = document.querySelector('.name');
const birthdayButton = document.querySelector('.birthday');

//
orderButton.addEventListener('click', () => sortOrderColumn('nums'));
nameButton.addEventListener('click', () => sortOrderColumn('names'));
birthdayButton.addEventListener('click', () => console.log('birthday'));







const sortOrderColumn = (button) => {
    let newTable = document.createElement('tbody');
    let oldTable = document.querySelector('tbody');    
    let tableParent = oldTable.parentElement;

    //Отсортировать в выбранном порядке
    let sortedElems = null;

    if ( button === "nums") {
        sortedElems = createNumsArray(oldTable);    
    } else if ( button === "names" ) {
        sortedElems = createNamesArray(oldTable);
    }

    //Создать новый tbodu
    sortedElems.forEach((elem) => {
        newTable.appendChild(elem.parentElement);
    });

    //Класс в зависимости от порядка
    isDirectOrder(oldTable) ? newTable.classList.remove('order') : newTable.classList.add('order');    

    tableParent.replaceChild(newTable, oldTable);
}


const createNumsArray = (table) => {
    const elems = Array.from(document.querySelectorAll("td:first-child"));
    return sortNums(isDirectOrder(table), elems);        
}
const createNamesArray = (table) => {
    const elems = Array.from(document.querySelectorAll("td:nth-child(2)"));
    return sortNames(isDirectOrder(table), elems);        
}


//Прямой или обратный порядок
const isDirectOrder = (table) => {
    return table.classList.contains('order') ? true : false;
};


//Сортировка в зависимости от порядка
const sortNums = (directOrder, nums) => {
    return directOrder ? nums.sort(compareReverseNumbers) :  nums.sort(compareDirectNumbers);
}

const sortNames = (directOrder, nums) => {
    return directOrder ? nums.sort(compareDirectNames) :  nums.sort(compareReverseNames);
}



//Сравнение чисел
const compareDirectNumbers = (a,b) => {
    return a.innerHTML - b.innerHTML;
}
const compareReverseNumbers = (a,b) => {
    return b.innerHTML - a.innerHTML;
}


//Сравнение имен
const compareDirectNames = (a,b) => {
    return a.innerHTML > b.innerHTML ? 1 : a.innerHTML < b.innerHTML ? -1 : 0 ;
}
const compareReverseNames = (a,b) => {
    return a.innerHTML > b.innerHTML ? -1 : a.innerHTML < b.innerHTML ? 1 : 0 ;
}