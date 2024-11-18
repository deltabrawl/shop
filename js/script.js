$( document ).ready(function () {
  // возвращает куки с указанным name,
  // или undefined, если ничего не найдено
  function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    console.log(matches ? decodeURIComponent(matches[1]) : undefined);
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }


  $('.goMain').click(function () {
    goToLink("https://cheapdonate.ru");
  });

  $('.goHelp').click(function () {
    goToLink("https://help.cheapdonate.ru");
  });

  $('.bs').click(function() {
    goToLink("https://deltabrawl.github.io/main");
  });

  $('.bsb').click(function() {
    goToLink("https://t.me/deltabrawlfaixus");
  });

  $('.rb').click(function() {
    goToLink("https://roblox.cheapdonate.ru");
  });

  $('.mn').click(function() {
    goToLink("https://minecraft.cheapdonate.ru");
  });

  function goToLink(link) {
    window.open(link, "_self");
  };

  function goDomain(subdomain) {
    var link = "https://" + subdomain + ".cheapdonate.ru/"
    window.open(subdomain, "_self");
  };

  $('.menu').click(function() {
    // $('.center').css("display", "flex");
    $('.center,.menu__nav,.menu,#main').toggleClass('active');
  });
});