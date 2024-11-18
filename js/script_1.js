$( document ).ready(function () {
  var vseButton = $('#vseButton');
  var toggleButton = $('#toggleButton');
  var gemButton = $('#gemButton');
  
  var grid = $('.block_cart_full')

  var tovarElements = $('.tovar');
  var tovarbpElements = $('.tovarbp');

  vseButton.on('click', function () {
    showAllElements();
    if (window.matchMedia("(max-width: 900px)").matches) {
        grid.css("grid-template-rows", "repeat(5, 16rem)")
    }
  });

  toggleButton.on('click', function () {
    hideElements(tovarElements);
    if (window.matchMedia("(max-width: 900px)").matches) {
        grid.css("grid-template-rows", "repeat(5, 16rem)")
    }
    // Если кнопка "Кристаллы" была нажата, отображаем элементы с классом "tovarbp"
    if (gemButton.data('isActive') === 'true') {
      showElements(tovarbpElements);
      if(window.matchMedia("(max-width: 900px)").matches) {
        grid.css("grid-template-rows", "repeat(1, 16rem)")
      }
    }
  });

  gemButton.on('click', function () {
    hideElements(tovarbpElements);
    // При нажатии кнопки "Кристаллы" устанавливаем атрибут isActive в true
    gemButton.data('isActive', 'true');
    if (window.matchMedia("(max-width: 900px)").matches) {
        grid.css("grid-template-rows", "repeat(4, 16rem)")
    }
  });

  gemButton.on('click', function() {
      // Перебираем все элементы с классом 'tovar'
      for (var i = 0; i < tovarElements.length; i++) {
        // Устанавливаем стиль display:block
        tovarElements[i].style.display = 'flex';
      }
      if(window.matchMedia("(max-width: 900px)").matches) {
        grid.css("grid-template-rows", "repeat(4, 16rem)")
      }
  });

  function hideElements(elements) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = 'none';
    }
  }

  function showAllElements() {
    showElements(tovarElements);
    showElements(tovarbpElements);
  }

  function showElements(elements) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = 'flex';
    }
  }

  var vseButton = $('#vseButton');
  var toggleButton = $('#toggleButton');
  var gemButton = $('#gemButton');

  // Добавляем слушатели событий к каждой кнопке
  vseButton.on('click', function() {
    // Меняем стиль текущей кнопки на 'textviborvse'
    vseButton.attr('class', 'textviborvse');

    // Проверяем и меняем стиль других кнопок
    if (toggleButton.hasClass('textviborvse')) {
      toggleButton.attr('class', 'textvibor_next');
    }
    if (gemButton.hasClass('textviborvse')) {
      gemButton.attr('class', 'textvibor_next');
    }
  });

  toggleButton.on('click', function() {
    // Меняем стиль текущей кнопки на 'textviborvse'
    toggleButton.attr('class', 'textviborvse');

    // Проверяем и меняем стиль других кнопок
    if (vseButton.hasClass('textviborvse')) {
      vseButton.attr('class', 'textvibor_next');
    }
    if (gemButton.hasClass('textviborvse')) {
      gemButton.attr('class', 'textvibor_next');
    }
  });

  gemButton.on('click', function() {
    // Меняем стиль текущей кнопки на 'textviborvse'
    gemButton.attr('class', 'textviborvse');

    // Проверяем и меняем стиль других кнопок
    if (vseButton.hasClass('textviborvse')) {
      vseButton.attr('class', 'textvibor_next');
    }
    if (toggleButton.hasClass('textviborvse')) {
      toggleButton.attr('class', 'textvibor_next');
    }
  });

  function goToLink(link) {
    window.open(link, "_self")
  }

});
