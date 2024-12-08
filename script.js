
// Accordion

$(document).ready(function(){
  $('#navigation ul > li ul')
    .click(function(event){
      event.stopPropagation();
    })
    .filter(':not(:first)')
    .hide();
    
  $('#navigation ul > li').click(function(){
    var selfClick = $(this).find('ul:first').is(':visible');
    if(!selfClick) {
      $(this)
        .parent()
        .find('> li ul:visible')
        .slideToggle();
    }
    
    $(this)
      .find('ul:first')
      .stop(true, true)
      .slideToggle();
  });
});
