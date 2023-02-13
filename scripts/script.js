// @ts-nocheck
$(function () {
    //手機高度
    $("html").css("--vh", $(window).height());
    const maxMenuWidth = $("html").css("--menu-width");
    if($(window).width()<768){
        toggleMenu();
    }
    $(".menu-btn").click(() => {
        toggleMenu();
    })
    $('#example').DataTable({
        searching: false
    });
    $(window).resize(()=>{
        //手機高度
        $("html").css("--vh", $(window).height());
    })
    function toggleMenu(){
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