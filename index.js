
  $(document).ready(function(){
    $(window).scroll(function(){
      if(this.scrollY>55){
        $(".navbar").addClass("sticky");
      }
      else{
        $(".navbar").removeClass("sticky");
      }
    });
  });
  $(document).ready(function(){
    $('.preloader').fadeOut(2500, function() 
    {
        $(this).remove();
    });
  });