$(document).ready(function(){
  const headerHight = 100;
  $('.js-smooth').click((e) => {
    const speed = 500;
    const href= e.target.attributes.href.value
    const target = $(href == "#" || href == "" ? 'html' : href);
    const position = target.offset().top-headerHight;
    $("html, body").animate({scrollTop:position}, speed, "swing");
  });
});
