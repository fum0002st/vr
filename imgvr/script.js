$(function(){

    $(window).load(function(){
      $("iframe").attr("sandbox","");
      $(".visible").attr("sandbox","allow-scripts allow-same-origin");
    });

    $("input").click(function(){
      var myid = "#" + $(this).attr("class");
      console.log(myid);
      $(myid).attr("sandbox","allow-scripts allow-same-origin");
      $(".visible").attr("sandbox","");
      $(".visible").removeClass("visible");
      $(myid).addClass("visible");
    });


});


