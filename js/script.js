$(document).ready(function() {
  $('.add, .tit').click(function(){
      $(this).siblings('.sub_nav').show();
  });
  $('.subs').click(function(){
      $(this).siblings('.sub_nav').hide();
  });
});
