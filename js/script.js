window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  const inputPassword = document.querySelector('.form__input--password');
  const inputEmail = document.querySelector('.form__input--email');
  const key = 'keys';
  let isStorageSupport = true;
  let storage = "";

  try {
    storage = localStorage.getItem(key);
  } catch (err) {
    isStorageSupport = false;
  }

  const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  const checkValidate = () => {
    inputEmail.addEventListener('input', (e) => {
      if (validateEmail(inputEmail.value) === true) {
        inputPassword.removeAttribute('disabled');

        if (isStorageSupport) {
          localStorage.setItem(key, inputEmail.value);
        }
      }
    })
  }

  const checkStorage = () => {
    if (storage) {
      inputEmail.value = storage;
      inputPassword.removeAttribute('disabled')
    }
  }

  checkValidate()
  checkStorage()
});
