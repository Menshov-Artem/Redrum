$(function() {

  var owl = $(".owl-carousel");
  owl.owlCarousel({
    margin: 30,
    touchDrag: false,
    mouseDrag: false,
    items: 8,
    stagePadding: 10,
    nav: false,
    singleItem: true,
    responsive : {
      1440: {items: 5},
      1280: {items: 4},
      980: {items: 3},
      414: {items: 2},
      0: {items: 1}
    }
  });
  
  $(".goods__button-next").click(function() {owl.trigger("next.owl.carousel");});
  $(".goods__button-prev").click(function() {owl.trigger("prev.owl.carousel");});
  
  var list = document.querySelectorAll("[data-image]");
  for (var i = 0; i < list.length; i++) {
    var url = list[i].getAttribute('data-image');
    list[i].style.backgroundImage="url('" + url + "')";
  }
  
  $(".message__button").click(function(){
    $(".message").addClass("message_hidden");
  });
  
  $(".footer__button").click(function() {$(".write").addClass("write_open")});
  $(".write__close").click(function() {$(".write").removeClass("write_open");});
  
  $(".background").addClass("background_load");
  
  // $(".message").addClass("message_visible");
  $(".message__container").addClass("message__container_visible");
  // $(".message__audio").trigger('play');
  
  $(".catalog__mobile-filters").click(function() {
    $(".catalog__category").addClass("catalog__category_is-active");
  });

});
