 $(document).ready(function(){
 	$(".globalcontent dd").hide();
    $(".globalcontent dt").click(function(){
        $(this).next().slideToggle();
        $(this).prevAll("dd").slideUp("slow");
        $(this).next().nextAll("dd").slideUp("slow");
        return false;
    });
});