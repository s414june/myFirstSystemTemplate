// @ts-nocheck
$(function () {
    const maxMenuWidth = $("html").css("--menu-width");
    $(".menu-btn").click(() => {
        $("#menu").toggle();
        let nowWidth = $("html").css("--menu-width");
        let nextWitdh = 0;
        nextWitdh = nowWidth === maxMenuWidth ? 0 : maxMenuWidth;
        $("html").css("--menu-width", nextWitdh);
    })
    $('#example').DataTable({
        searching: false
    });
})
// $(document).ready(function () {
//     // searching: false
// });