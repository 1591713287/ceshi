// $(function(){
//     var len = $(".bottom-box div").length / 2;
//     var i = 0;
//     $("#btn-l").click(function(){
//         i++;
//         if (i >= len) {
//             i = 0;
//         }
//         // console.log(i);
//         $(".bottom-box").animate({
//                 "margin-left": -i * 1080 + "px"
//             }, 500, function() {})
//     })
//     $("#btn-r").click(function(){
//         i--;
//         if (i <= 0) {
//             i = len - 1;
//         }
//         $(".bottom-box").animate({
//             "margin-left": -i * 1080 + "px"
//         }, 500, function() {})
//     })
// })


$(function(){
    $("#btn-l").click(function(){
        console.log(111)
        $(".bottom-content").animate({"margin-left":-260+"px"},1000)
    })
})
