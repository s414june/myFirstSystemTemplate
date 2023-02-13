// @ts-nocheck
$(function () {
    //手機高度
    $("html").css("--vh", $(window).height());
    const maxMenuWidth = $("html").css("--menu-width");
    const isLessThanMedium = $(window).width() < 768;
    if (isLessThanMedium) toggleMenuWidth();
    $(".menu-btn").click(() => {
        toggleMenuWidth();
    })
    $('#example').DataTable({
        searching: false
    });
    $(window).resize(() => {
        //手機高度
        $("html").css("--vh", $(window).height());
        const isLessThanMedium = $(window).width() < 768;
        if (isLessThanMedium) $("#menu").hide();
    })

    function toggleMenuWidth() {
        $("#menu").toggle();
        let nowWidth = $("html").css("--menu-width");
        let nextWitdh = 0;
        nextWitdh = nowWidth === maxMenuWidth ? 0 : maxMenuWidth;
        $("html").css("--menu-width", nextWitdh);
    }
})
// $(document).ready(function () {
//     // searching: false
// });