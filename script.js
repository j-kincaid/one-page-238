// $(document).ready(function(){
//     $('#toggleIntro').hover(function(){
//       $('#intro').slideToggle('slow');
//     });
//   });
//   $(document).ready(function(){
//     $('#toggleIng').hover(function(){
//       $('#ing').slideToggle('slow');
//     });
//   });


//   $(document).ready(function(){
//     $('#toggleVis').hover(function(){
//       $('#vis').slideToggle('slow');
//     });
//   });

//   $(document).ready(function(){
//     $('#toggleComp').hover(function(){
//       $('#comp').slideToggle('slow');
//     });
//   });

$(document).ready(function(){
    $('#menu ul > li ul')
      .click(function(event){
        event.stopPropagation();
      })
      .filter(':not(:first)')
      .hide();
      
    $('#menu ul > li').click(function(){
      var selfClick = $(this).find('ul:first').is(':visible');
      if(!selfClick) {
        $(this)
          .parent()
          .find('> li ul:visible')
          .slideToggle(slow);
      }
      
      $(this)
        .find('ul:first')
        .stop(true, true)
        .slideToggle();
    });
  });
  