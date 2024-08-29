
// subscription 
(() => {
  let inp = document.querySelectorAll('.last_box_wrap_form_flex_input')

  if (inp) {

    for(let i = 0; i < inp.length; i++){
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