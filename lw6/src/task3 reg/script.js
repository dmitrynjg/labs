window.onload = function(){
'use strict';
var btnReg = document.querySelector('.form__btn');
function dataCheck(){
'use strict';
var fioUser = document.querySelector('.form-reg__fio');
var emailUser = document.querySelector('.form-reg__email');
var passwordUser = document.querySelectorAll('.form-reg__password');
if((fioUser.value.lenght = 0) || (fioUser.value.search(/[А-ЯA-Z][a-zа-я]{0,} [А-ЯA-Z][a-zа-я]{0,} [А-ЯA-Z][a-zа-я]{0,}/g) != 0) ){
  fioUser.classList.add('form-reg__input_error');
  fioUser.parentNode.classList.add('form-reg_fioerror');
}
else{
    fioUser.classList.remove('form-reg__input_error');
  fioUser.parentNode.classList.remove('form-reg_fioerror');
}

}
btnReg.onclick = dataCheck;
}
