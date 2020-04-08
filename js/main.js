$(function(){

  /* прячущаяся шапка */
  var header = $('#header'),
    scrollPrev = 0;

  $(window).scroll(function () {
    var scrolled = $(window).scrollTop();

    if (scrolled > 59 && scrolled > scrollPrev) {
      header.addClass('out');
    } else {
      header.removeClass('out');
    }
    scrollPrev = scrolled;
  });


  /* Burger menu
  =====================*/
  $("#nav_toggle").on("click touchstart", function (event) {
    event.preventDefault();
    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
    return false;
  });

  // ZOOM IMG
  $(".modal-work__photo").on("click", function (event) {
    event.preventDefault();
    $(this).toggleClass("zoom");
    $('.modal__dialog').toggleClass("ma");
  });

  /* Плавный скрол к элементам*/
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    var $this = $(this),
      blockId = $this.data('scroll'),
      blockOffset = $(blockId).offset().top;

    $("#nav a").removeClass("active");
    $this.addClass("active");

    $("html, body").animate({
      scrollTop: blockOffset
    }, 500);

  });



  /* Filter
  =====================*/
  let filter = $("[data-filter]");
  filter.on("click", function (event) {
    event.preventDefault();
    let cat = $(this).data('filter');
    if (cat == 'all') {
      $("[data-cat]").removeClass("hide");
      $('.btn-bg--deco').addClass("hide");
    }
    else {
      $("[data-cat]").each(function () {
        let workCat = $(this).data('cat');
        if (workCat != cat) {
          $(this).addClass('hide');
          $('.btn-bg--deco').addClass('hide');
        }
        else {
          $(this).removeClass('hide');
        }
      });
    }
  });

    /* show more
  =====================*/
  $(".btn-bg--deco").on("click touchstart", function (event) {
    event.preventDefault();
    $('.hide').removeClass("hide");
    $(this).addClass("hide");
    return false;
  });



  $('#copy').on('click', function () {
    var code = document.querySelector('#text'); // #text - блок из которого нужно скопировать
    var range = document.createRange();
    range.selectNode(code);
    window.getSelection().addRange(range);

    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'удачно!' : 'неудачно';
      alert('Почта скопирована ' + msg);
    } catch (err) {
      alert('Код не скопирован автоматически :с' + '\n' + 'Попробуйте вручную');
    }
    window.getSelection().removeAllRanges();
  });

  /*  Scroll to top FIXED
/* ------------------------------------ */

  var btn = $('#toTop');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });


  /* Modal
=====================*/

  const modalCall = $("[data-modal]");
  const modalClose = $("[data-close]");

  modalCall.on("click", function (event) {
    event.preventDefault();

    let $this = $(this);
    let modalId = $this.data('modal');

    $(modalId).addClass('show');
    $("body").addClass('no-scroll');

    setTimeout(function () {
      $(modalId).find(".modal__dialog").css({
        transform: "scale(1)"
      });
    }, 200);

  });


  modalClose.on("click", function (event) {
    event.preventDefault();

    let $this = $(this);
    let modalParent = $this.parents('.modal');

    modalParent.find(".modal__dialog").css({
      transform: "scale(0)"
    });

    setTimeout(function () {
      modalParent.removeClass('show');
      $("body").removeClass('no-scroll');
    }, 200);
  });


  $(".modal").on("click", function (event) {
    let $this = $(this);

    $this.find(".modal__dialog").css({
      transform: "scale(0)"
    });

    setTimeout(function () {
      $this.removeClass('show');
      $("body").removeClass('no-scroll');
    }, 200);
  });

  $(".modal__dialog").on("click", function (event) {
    event.stopPropagation();
  });


  var t, a;
  function example(e) {
    clearTimeout(t);
    var w = e.width;
    if (a) {
      t = setInterval(function () {
        if (w <= 450) clearTimeout(t); // Стили на уменьшение
        e.style.cursor = 'zoom-in';
        e.style.borderRadius = '1px';
        e.style.boxShadow = '2px 2px 5px #fff'
        e.width = w--;
      }, 5);
    }
    else {
      t = setInterval(function () {
        if (w >= 650) clearTimeout(t);
        // Стили на увеличение
        e.style.cursor = 'zoom-out';
        e.style.borderRadius = '5px';
        e.style.boxShadow = '2px 2px 5px #888'
        e.width = w++;
      }, 5);
    }
    a = !a;
  }
});