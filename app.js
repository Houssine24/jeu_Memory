// $(document).ready(function(){
//      var cartes = ["A","A","B","B","C","C","D","D","E","E","F","F","G","G"];
//      cartes.sort(function(){ return 0.5 = Math.random()});
//      var _html = "";
//      $.each(cartes,function (key,value){
//         _html += "<li><span class="
//      })
// });

// function brouiller_cartes()
// {

// }


var a=0;
var b=0;

var a1=0;
var b1=0;

// $('#img2').attr('src', 'simplon.png');

// $("#dos1").hide();
// $("#dos2").hide();
// $("#dos3").hide();
// $("#dos4").hide();

$(".img").click(function(){
    a=1; b=1; a1=1; b1=1;

    $(this).hide();
    $(this).show(); 
    if (a==a1){
        $(".position1,.position4").hide(3000);
    }
    else if (b==b1){
        $(".position2,.position3").hide(3000);
    }
    else{
    a1=0;    
    a=0;
    b=0;
    b1=0;
    }
});

// $("#img4").click(function(){
//     a1=2;
//     $("#img4").hide();
//     $("#dos4").show(); 
//     if (a==a1){         
//          $("#img1").hide(3000);
//          $("#dos1").hide(3000); 
//          $("#img4").hide(3000);
//          $("#dos4").hide(3000); 
//     }
//     else{
//     b=0;
//     b1=0;
//     c=0;
//     c1=0;
//     }
// });
// /////////////////////////////////
// $("#img2").click(function(){
//     b=2;
//     $("#img2").hide();
//     $("#dos2").show(); 
//     if (b==b1){
//        $("#img2").hide(3000);
//          $("#dos2").hide(3000); 
//          $("#img3").hide(3000);
//          $("#dos3").hide(3000);
//     }
//     else{
//     a=0;
//     a1=0;
//     c=0;
//     c1=0;
//     }
// });

// $("#img3").click(function(){
//     // for ( c= ; i < .length; i++) {
        
//     //}
//     b1=2;
//     $("#img3").hide();
//     $("#dos3").show(); 
//     if (b==b1){
//          $("#img2").hide(3000);
//          $("#dos2").hide(3000); 
//          $("#img3").hide(3000);
//          $("#dos3").hide(3000); 
//     }
//     else{
//     a=0;
//     a1=0;
//     c=0;
//     c1=0;
//     }
// });

