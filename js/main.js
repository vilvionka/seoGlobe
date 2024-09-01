
// subscription 
(() => {
  let inp = document.querySelectorAll('.last_box_wrap_form_flex_input')

  if (inp) {

    for (let i = 0; i < inp.length; i++) {
      inp[i].addEventListener('blur', function () {
        if (this.value == '') {
          this.closest('div').querySelector('span').classList.remove('remove');
        } else {
          this.closest('div').querySelector('span').classList.add('remove');
        }
      })
    }

  }

})();


// button 
(() => {
  let button = document.querySelectorAll('.js_button');

  function buttonLeave() {
    if (window.innerWidth < 371) {
      for (let i = 0; i < button.length; i++) {
        button[i].innerHTML = 'В ТОП!'
      }
    } else {
      for (let i = 0; i < button.length; i++) {
        button[i].innerHTML = 'Вывести в ТОП!'
      }
    }
  }
  buttonLeave();
  window.addEventListener('resize', () => {
    buttonLeave();
  });

})();

// nav
(() => {
  let nav = document.querySelector('.header_flex_nav_wrap_elem span');
  let navBox = document.querySelector('.header_flex_nav_wrap_box');

  nav.addEventListener('click', function () {
    if (navBox.classList.contains('active')) {
      navBox.classList.remove('active');
    } else {
      navBox.classList.add('active');
    }
  })

  document.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(nav);
    const gambLk = e.composedPath().includes(navBox);
    if (!lkEl && !gambLk) {
      navBox.classList.remove('active');
    }

  })



})();


// menu mobile
(() => {
  let menu = document.querySelector('.js_menu');
  let burger = document.querySelector('.js_burger');
  let close = document.querySelector('.js_close')

  burger.addEventListener('click', function () {
    menu.classList.add('active');
  })

  close.addEventListener('click', function () {
    menu.classList.remove('active');
  })


})();

// copy button call
(() => {
  let copyCall = document.querySelector('#copy_call');

  copyCall.addEventListener("click", function () {
    navigator.clipboard.writeText(document.querySelector("#call_text").innerText).then(function () {
      copyCall.innerText = 'Скопировано!';
    }).catch(function (error) {
      console.error('Error:', error);
    });
  });

})();

// copy button email

(() => {
  let copyEmail = document.querySelector('#copy_email');

  copyEmail.addEventListener("click", function () {
    navigator.clipboard.writeText(document.querySelector("#email_text").innerText).then(function () {
      copyEmail.innerText = 'Скопировано!';
    }).catch(function (error) {
      console.error('Error:', error);
    });
  });

})();