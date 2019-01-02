$(document).ready(function() {
    //点击搜索按钮事件
    $(".search-icon").on('click', function() {
        $(".header-bottom-search").slideToggle();
        $(".first-currencies").css("display", "none");
        $(".first-languages").css("display", "none");
    });
});