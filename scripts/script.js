// @ts-nocheck
$(function () {
    //手機高度
    defineMobileVh();
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
        defineMobileVh();
    })
    function toggleMenu(){
        $("#menu").toggle();
        let nowWidth = $("html").css("--menu-width");
        let nextWitdh = 0;
        nextWitdh = nowWidth === maxMenuWidth ? 0 : maxMenuWidth;
        $("html").css("--menu-width", nextWitdh);
    }
    function defineMobileVh(){
        $("html").css("--vh", $(window).height()/100 + "px");
    }
})
// $(document).ready(function () {
//     // searching: false
// });