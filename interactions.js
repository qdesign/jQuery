jQuery.noConflict();   

jQuery(document).ready(function() {   

var questionNumber = jQuery(".MC").length;

var slideLeft =  function() {
 jQuery("#SkinContent").animate({
    right: "500px",
    opacity: 0
  }, 800 );
}

var autoClick = function() {
  setInterval(function(){        
  jQuery("#NextButton").click();},500);
}

var buttonEffect = function() {

  jQuery("#NextButton").on("click", function(){
    jQuery("#SkinContent").animate({
      right: "500px",
      opacity: 0
    },  800 );
  });

  jQuery("#PreviousButton").on("click", function(){
    jQuery("#SkinContent").animate({
      left: "500px",
      opacity: 0
    },  800 );
  });
}


var selectEffect = function() {
  jQuery("li").on("click", function(){
    jQuery(this).parent().find("li").css("opacity",.25 );
    jQuery(this).css("opacity",1);
    jQuery(this).parent().find("li").css("background","rgba(51, 51, 51, 0.2)")
    jQuery(this).css("background","#f7b21e");
  });

  jQuery(".Skin .MC .SAHR table td .LabelWrapper label").on("click", function(){
    jQuery(this).parent().find("li").css("opacity",.25 );
    jQuery(this).css("opacity",1);
    jQuery(".Skin .MC .SAHR table td").css("background","rgba(51, 51, 51, 0.2)");
    jQuery(this).closest("tr").find("label").css("background", "rgba(51,51,51,0)");
    jQuery(this).css("background","#f7b21e");
  });

  jQuery(".Skin .MC .MACOL table td .LabelWrapper label").on("click", function(){
    jQuery(this).closest("tbody").find("label").css("background","rgba(51,51,51,0.2)")
    jQuery(this).css("background","#f7b21e");
  });

  jQuery(".Skin .MC .MAHR  table td .LabelWrapper label").on("click", function(){
    jQuery(this).closest("tbody").find("label").css("background","rgba(51,51,51,0.2)")
    jQuery(this).css("background","#f7b21e");
  });
}
  

var autoAdvance = function() {
  jQuery("li").on("click", function(){
    jQuery(this).parent().find("li").css("opacity",.25 );
    jQuery(this).css("opacity",1);
    jQuery(this).parent().find("li").css("background","rgba(51, 51, 51, 0.2)")
    jQuery(this).css("background","#f7b21e")
    slideLeft();
    autoClick();    
    });

  jQuery(".Skin .MC .SAHR table td .LabelWrapper label").on("click", function(){
    jQuery(this).parent().children().css("opacity",.25 );
    jQuery(this).css("opacity",1);
    jQuery(".Skin .MC .SAHR table td").css("background","rgba(51, 51, 51, 0.2)")
    jQuery(this).css("background","#f7b21e")
    slideLeft();
    autoClick();     
    });

  jQuery(".Skin .MC .MACOL table td .LabelWrapper label").on("click", function(){
    jQuery(this).closest("tbody").find("label").css("background","rgba(51,51,51,0.2)")
    jQuery(this).css("background","#f7b21e");
    slideLeft();
    autoClick();
  });

  jQuery(".Skin .MC .MAHR  table td .LabelWrapper label").on("click", function(){
    jQuery(this).closest("tbody").find("label").css("background","rgba(51,51,51,0.2)")
    jQuery(this).css("background","#f7b21e");
    slideLeft();
    autoClick();
  });
}


if (questionNumber > 1) {
  buttonEffect();
  selectEffect();
}

else if (questionNumber == 0){
    buttonEffect();
    selectEffect();
}

else {
  buttonEffect();
  autoAdvance();
}

});