let nameElement = document.querySelector('.name');
let telElement = document.querySelector('.tel');
let btnElement = document.querySelector('.form_btn');
let answerElement = document.querySelector('.answer')

btnElement.addEventListener('click', function() {
    if (nameElement.value == '' && telElement.value == '') {
        nameElement.style.border = '3px solid red';
        telElement.style.border = '3px solid red';
        answerElement.style.color = 'red';
        answerElement.textContent = 'Заполните оба поля!';
    }
    else if (nameElement.value != '' && telElement.value == '') {
        nameElement.style.border = '3px solid green';
        telElement.style.border = '3px solid red';
        answerElement.style.color = 'red';
        answerElement.textContent = 'Введите номер телефона!';
    }
    else if (nameElement.value == '' && telElement.value != '') {
        nameElement.style.border = '3px solid red';
        telElement.style.border = '3px solid green';
        answerElement.style.color = 'red';
        answerElement.textContent = 'Введите Ваше Имя!';
    }
    else {
        nameElement.style.border = '3px solid green';
        telElement.style.border = '3px solid green';
        answerElement.style.color = 'green';
        answerElement.textContent = 'Все верно ;)';
    }
});