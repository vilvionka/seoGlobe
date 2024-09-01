$('.second_slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  variableWidth: false,
  arrows: true,
  prevArrow: $('.second_slider_nav_prev'),
  nextArrow: $('.second_slider_nav_next'),
});



$(function () {
  var Accordion = function (el, multiple) {
    this.el = el || {};
    // more then one submenu open?
    this.multiple = multiple || false;

    var accordionHeader = this.el.find('.question_accordion_item_head');
    accordionHeader.on('click', {
      el: this.el,
      multiple: this.multiple
    },
      this.dropdown);
  };

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el,
      $this = $(this),
      //this is the ul.submenuItems
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      //show only one menu at the same time
      $el.find('.question_accordion_item_body').not($next).slideUp().parent().removeClass('open');
    }
  }

  var accordion = new Accordion($('.question_accordion'), false);
});



$(function () {
  var Accordion = function (el, multiple) {
    this.el = el || {};
    // more then one submenu open?
    this.multiple = multiple || false;

    var accordionHeader = this.el.find('.menu_box_elem');
    accordionHeader.on('click', {
      el: this.el,
      multiple: this.multiple
    },
      this.dropdown);
  };

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el,
      $this = $(this),
      //this is the ul.submenuItems
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      //show only one menu at the same time
      $el.find('.menu_box_wrap').not($next).slideUp().parent().removeClass('open');
    }
  }

  var accordion = new Accordion($('.menu_box'), false);
});


