(function () {
  const $slide = $('.questionnaire');
  const $btn = $('.btn-next');
  let count = 1;
  let inputLogin = $('.form__input').eq(0);
  const key ='keys';
  let isStorageSupport = true;
  let storage = "";

  try {
    storage = localStorage.getItem(key);
  } catch (err) {
    isStorageSupport = false;
  }

  const handleChange = function () {
    inputLogin.on('change', function (e) {
      let value = $(this).val();
      if (isStorageSupport) {
        localStorage.setItem(key, value);
      }
    })
  }

  if (storage) {
    inputLogin.val(storage);
  }

  const initSlide = () => {
    $slide.hide()
    $slide.eq(0).show();
    clickBtn()
  }

  const clickBtn = () => {
    $btn.on('click', (e) => {
      handleChange()
      nextSlide()
    })
  }

  const nextSlide = () => {
    $slide.fadeOut(1000)
    $slide.eq(count).fadeIn(1000)
    count++
  }

  initSlide()
  handleChange()
})()
