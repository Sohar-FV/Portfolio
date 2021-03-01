$(function(){
          function darkmode(){
            if($("body").css("background-color")=="rgb(255, 255, 255)"){

              $("body").css("background-color","#1f1f1f");
              $(".dark").css({"background-color":"#333333", "color": "white", "border-color":"white"});
              $("#darkmode").attr("src", "images/lightmode.png");

            }else{

              $("body").css("background-color","#ffffff");
              $(".dark").css({"background-color":"#ffffff", "color": "black", "border-color":"black"});
              $("#darkmode").attr("src", "images/darkmode.png");

            }
          }

          function burgerOnOff(){
            if($("nav").css("display")=="none"){
              $("nav").css("display","flex");
            }else{
              $("nav").css("display","none");
            }
          }

          function inaccessible(){
            alert("Ce projet est en cours, vous pourrez le consulter plus tard");
          }

          $("#darkmode").on("click", darkmode);

          $("#buttonBurger").on("click", burgerOnOff);

          $("#cavt").on("click", inaccessible);
})
