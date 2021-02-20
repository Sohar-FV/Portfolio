$(function(){
          function darkmode(){
            if($("body").css("background-color")=="rgb(255, 255, 255)"){

              $("body").css("background-color","#1f1f1f");
              $(".dark").css({"background-color":"#333333", "color": "white"});
              $("#darkmode").attr("src", "images/lightmode.png");

            }else{

              $("body").css("background-color","#ffffff");
              $(".dark").css({"background-color":"#ffffff", "color": "black"});
              $("#darkmode").attr("src", "images/darkmode.png");

            }
          }

          $("#darkmode").on("click", darkmode);
})