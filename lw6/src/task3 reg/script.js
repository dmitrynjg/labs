'use strict';
window.onload = function () {
  var btnReg = document.querySelector('.form__btn');
  function dataCheck() {
    var fioUser = document.querySelector('.form-reg__fio');
    var emailUser = document.querySelector('.form-reg__email');
    var passwordUser = document.querySelectorAll('.form-reg__password');
    var genderUser = document.querySelector('.form-reg-select');
    function errorRegistration(arg) {
      arg.classList.add('form-reg__input_error');
      arg.parentNode.classList.add('form-reg_error');
      if (arg === fioUser) {
        arg.parentNode.classList.add('form-reg_fioerror');
      }
      if (arg === emailUser) {
        arg.parentNode.classList.add('form-reg_emailerror');
      }
      if (arg === passwordUser[0]) {
        arg.parentNode.classList.add('form-reg_passerror');
      }
      if (arg === passwordUser[1]) {
        arg.parentNode.classList.add('form-reg_againpasserror');
      }
    }
    function successRegistration(arg) {
      arg.classList.remove('form-reg__input_error');
      arg.parentNode.classList.remove('form-reg_error');
      if (arg === fioUser) {
        arg.parentNode.classList.remove('form-reg_fioerror');
      }
      if (arg === emailUser) {
        arg.parentNode.classList.remove('form-reg_emailerror');
      }
      if (arg === passwordUser[0]) {
        arg.parentNode.classList.remove('form-reg_passerror');
      }
      if (arg === passwordUser[1]) {
        arg.parentNode.classList.remove('form-reg_againpasserror');
      }
    }
    if (fioUser.value.search(/[А-ЯA-Z][a-zа-я]{0,} [А-ЯA-Z][a-zа-я]{0,} [А-ЯA-Z][a-zа-я]{0,}/g) !== 0) {
      errorRegistration(fioUser);
    }
    else {
      successRegistration(fioUser);
    }
    if (emailUser.value.search(/[a-z0-9.]{0,}[@][a-z]{1,}[.][a-z]{1,}/g) !== 0) {
      errorRegistration(emailUser);
    }
    else {
      successRegistration(emailUser);
    }
    if (passwordUser[0].value.search(/[0-9a-zA-Z]{6,}/g) !== 0) {
      errorRegistration(passwordUser[0]);
    }
    else {
      successRegistration(passwordUser[0]);
    }
    if (passwordUser[0].value !== passwordUser[1].value) {
      errorRegistration(passwordUser[1]);
    }
    else {
      successRegistration(passwordUser[1]);
    }
    if (genderUser.selectedIndex === 0) {
      errorRegistration(genderUser);
    }
    else {
      successRegistration(genderUser);
    }
  }
  btnReg.onclick = dataCheck;
};