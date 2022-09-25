'use strict';

import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form')
const LOCALE_STORAGE_KEY = "feedback-form-state";
import { save, load, remove } from './storage';

initPage();

const onFormInput = event => {
  const { name, value } = event.target;

  let saveData = load(LOCALE_STORAGE_KEY);
  saveData = saveData ? saveData : {};

  saveData[name] = value;

  save(LOCALE_STORAGE_KEY, saveData);
};

const throttledOnFormInput = throttle(onFormInput, 300);
formRef.addEventListener('input', throttledOnFormInput);

function initPage() {
  const saveData = load(LOCALE_STORAGE_KEY);

  if (!saveData) {
    return;
  }
  Object.entries(saveData).forEach(([name, value]) => {
    formRef.elements[name].value = value;
  });
}

const handleSubmit = event => {
  event.preventDefault();

  const {
    elements: { email, message },
  } = event.currentTarget;

  if(!email.value) {
    alert('Поле email не заполнено');
    return;
  }
  
  if(!message.value) {
    alert('Поле messege не заполнено');
    return;
  }

  console.log({ email: email.value, message: message.value });

  refs.btn.disabled = !event.currentTarget.checked;
  event.currentTarget.reset();
  remove(LOCALE_STORAGE_KEY);
};

formRef.addEventListener('submit', handleSubmit);


// -----------------------------REPETA--------------------------------

// import throttle from 'lodash.throttle';
// const formRef = document.querySelector('.feedback-form');
// const textarea = document.querySelector('textarea');
// const STORAGE_KEY = 'feedback-msg'


// formRef.addEventListener('submit', onFormSubmit);
// textarea.addEventListener('input', throttle (onTextareaInput,1000));

// populateTextarea();

// function onFormSubmit(event) {
//   event.preventDefault();
//   event.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY)
// }

// function onTextareaInput(event) {
//   const message = event.target.value;
//   localStorage.setItem(STORAGE_KEY, message);
//   console.log(message);
// }

// function populateTextarea() {
//   const saveMessage = localStorage.getItem(STORAGE_KEY);
  
//   if (saveMessage) {
//     textarea.value = saveMessage; 
//     console.log(saveMessage);
//   }

// }

