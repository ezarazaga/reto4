$(document).ready(function() {
    $("#faqs").click(function(){
        $("#carouselCaptions").load("faqs.html");
    });
    $("#productos").click(function(){
        $("#carouselCaptions").load("products.html");
    });
    $("#ventaTrenet").click(function(){
        $("#container").load("ventaTrenet.html");
    });
});