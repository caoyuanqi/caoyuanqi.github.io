/// <reference path="jquery.d.ts" />
$(function () {
    var options = {
        scale: {
            ticks: {
                beginAtZero: true
            }
        }
    };
    var languageCtx = document.getElementById("skillSetCanvas");
    var languageData = {
        labels: ["Java", "JavaScript", "SCSS(CSS)", "Python", "Perl", "C", "Shell"],
        datasets: [
            {
                label: "Language Skill Set",
                backgroundColor: "rgba(0, 102, 153, 0.2)",
                borderColor: "#6699cc",
                pointBackgroundColor: "#006699",
                pointBorderColor: "#006699",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "#006699",
                data: [85, 80, 75, 70, 65, 70, 65]
            }
        ]
    };
    var frameworkCtx = document.getElementById("frameworkCanvas");
    var myRadarChart = new Chart(languageCtx, {
        type: 'radar',
        data: languageData,
        options: options
    });
    var frameworkData = {
        labels: ["Spring", "Angular JS", "Hibernate", "TypeScript", "SASS", "Coffeescript", "Shiro"],
        datasets: [
            {
                label: "Framework Skill Set",
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                pointBackgroundColor: "rgba(255,99,132,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(255,99,132,1)",
                data: [85, 80, 75, 70, 75, 70, 55]
            }
        ]
    };
    var myFramworkRadarChart = new Chart(frameworkCtx, {
        type: 'radar',
        data: frameworkData,
        options: options
    });
    // trigger the modal
    $('.modal-trigger').leanModal({
        dismissible: true,
        opacity: 0.7
    });
    $('.scrollspy').scrollSpy();
    // flip the card
    var card = $("#self-img-flip");
    $('#self-img-flip').click(function () {
        card.toggleClass("flipped");
    });
    // add hover function to the comtainer
    $(".self-img-container").hover(function () {
        card.toggleClass("flipped");
    });
    // detect the windows' resize and modify the height
    $(window).bind('resize', function () {
        var image_hight = $("#self-image").height();
        if (image_hight == null)
            return;
        console.log(image_hight);
        $(".self-img-container").height(image_hight);
    });
    // $('#self-image').ready(function(){
    // var image_h = $('#self-image').height();
    //     console.log("Self-image's height is " + image_h);
    //     console.log("Self Image Loaded");
    //      if(this.complete) $(this).load();
    //     if(image_h != null){
    //         $(".self-img-container").height(image_h);
    //     }
    // });
    $(window).load(function () {
        console.log("Image is loaded.");
        var image_h = $("#self-image").height();
        if (image_h != null) {
            $(".self-img-container").height(image_h);
        }
    });
});
// change the image's height after the image is completed received

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJyZXN1bWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImpxdWVyeS5kLnRzXCIgLz5cbiQoZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICBzY2FsZToge1xuICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgbGFuZ3VhZ2VDdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNraWxsU2V0Q2FudmFzXCIpO1xuICAgIHZhciBsYW5ndWFnZURhdGEgPSB7XG4gICAgICAgIGxhYmVsczogW1wiSmF2YVwiLCBcIkphdmFTY3JpcHRcIiwgXCJTQ1NTKENTUylcIiwgXCJQeXRob25cIiwgXCJQZXJsXCIsIFwiQ1wiLCBcIlNoZWxsXCJdLFxuICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcIkxhbmd1YWdlIFNraWxsIFNldFwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsIDEwMiwgMTUzLCAwLjIpXCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzY2OTljY1wiLFxuICAgICAgICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiBcIiMwMDY2OTlcIixcbiAgICAgICAgICAgICAgICBwb2ludEJvcmRlckNvbG9yOiBcIiMwMDY2OTlcIixcbiAgICAgICAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IFwiIzAwNjY5OVwiLFxuICAgICAgICAgICAgICAgIGRhdGE6IFs4NSwgODAsIDc1LCA3MCwgNjUsIDcwLCA2NV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH07XG4gICAgdmFyIGZyYW1ld29ya0N0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJhbWV3b3JrQ2FudmFzXCIpO1xuICAgIHZhciBteVJhZGFyQ2hhcnQgPSBuZXcgQ2hhcnQobGFuZ3VhZ2VDdHgsIHtcbiAgICAgICAgdHlwZTogJ3JhZGFyJyxcbiAgICAgICAgZGF0YTogbGFuZ3VhZ2VEYXRhLFxuICAgICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgfSk7XG4gICAgdmFyIGZyYW1ld29ya0RhdGEgPSB7XG4gICAgICAgIGxhYmVsczogW1wiU3ByaW5nXCIsIFwiQW5ndWxhciBKU1wiLCBcIkhpYmVybmF0ZVwiLCBcIlR5cGVTY3JpcHRcIiwgXCJTQVNTXCIsIFwiQ29mZmVlc2NyaXB0XCIsIFwiU2hpcm9cIl0sXG4gICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiRnJhbWV3b3JrIFNraWxsIFNldFwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NSw5OSwxMzIsMC4yKVwiLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInJnYmEoMjU1LDk5LDEzMiwxKVwiLFxuICAgICAgICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU1LDk5LDEzMiwxKVwiLFxuICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogXCJyZ2JhKDI1NSw5OSwxMzIsMSlcIixcbiAgICAgICAgICAgICAgICBkYXRhOiBbODUsIDgwLCA3NSwgNzAsIDc1LCA3MCwgNTVdXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9O1xuICAgIHZhciBteUZyYW13b3JrUmFkYXJDaGFydCA9IG5ldyBDaGFydChmcmFtZXdvcmtDdHgsIHtcbiAgICAgICAgdHlwZTogJ3JhZGFyJyxcbiAgICAgICAgZGF0YTogZnJhbWV3b3JrRGF0YSxcbiAgICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgIH0pO1xuICAgIC8vIHRyaWdnZXIgdGhlIG1vZGFsXG4gICAgJCgnLm1vZGFsLXRyaWdnZXInKS5sZWFuTW9kYWwoe1xuICAgICAgICBkaXNtaXNzaWJsZTogdHJ1ZSxcbiAgICAgICAgb3BhY2l0eTogMC43XG4gICAgfSk7XG4gICAgJCgnLnNjcm9sbHNweScpLnNjcm9sbFNweSgpO1xuICAgIC8vIGZsaXAgdGhlIGNhcmRcbiAgICB2YXIgY2FyZCA9ICQoXCIjc2VsZi1pbWctZmxpcFwiKTtcbiAgICAkKCcjc2VsZi1pbWctZmxpcCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FyZC50b2dnbGVDbGFzcyhcImZsaXBwZWRcIik7XG4gICAgfSk7XG4gICAgLy8gYWRkIGhvdmVyIGZ1bmN0aW9uIHRvIHRoZSBjb210YWluZXJcbiAgICAkKFwiLnNlbGYtaW1nLWNvbnRhaW5lclwiKS5ob3ZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhcmQudG9nZ2xlQ2xhc3MoXCJmbGlwcGVkXCIpO1xuICAgIH0pO1xuICAgIC8vIGRldGVjdCB0aGUgd2luZG93cycgcmVzaXplIGFuZCBtb2RpZnkgdGhlIGhlaWdodFxuICAgICQod2luZG93KS5iaW5kKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpbWFnZV9oaWdodCA9ICQoXCIjc2VsZi1pbWFnZVwiKS5oZWlnaHQoKTtcbiAgICAgICAgaWYgKGltYWdlX2hpZ2h0ID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnNvbGUubG9nKGltYWdlX2hpZ2h0KTtcbiAgICAgICAgJChcIi5zZWxmLWltZy1jb250YWluZXJcIikuaGVpZ2h0KGltYWdlX2hpZ2h0KTtcbiAgICB9KTtcbiAgICAvLyAkKCcjc2VsZi1pbWFnZScpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgLy8gdmFyIGltYWdlX2ggPSAkKCcjc2VsZi1pbWFnZScpLmhlaWdodCgpO1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIlNlbGYtaW1hZ2UncyBoZWlnaHQgaXMgXCIgKyBpbWFnZV9oKTtcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJTZWxmIEltYWdlIExvYWRlZFwiKTtcbiAgICAvLyAgICAgIGlmKHRoaXMuY29tcGxldGUpICQodGhpcykubG9hZCgpO1xuICAgIC8vICAgICBpZihpbWFnZV9oICE9IG51bGwpe1xuICAgIC8vICAgICAgICAgJChcIi5zZWxmLWltZy1jb250YWluZXJcIikuaGVpZ2h0KGltYWdlX2gpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfSk7XG4gICAgJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkltYWdlIGlzIGxvYWRlZC5cIik7XG4gICAgICAgIHZhciBpbWFnZV9oID0gJChcIiNzZWxmLWltYWdlXCIpLmhlaWdodCgpO1xuICAgICAgICBpZiAoaW1hZ2VfaCAhPSBudWxsKSB7XG4gICAgICAgICAgICAkKFwiLnNlbGYtaW1nLWNvbnRhaW5lclwiKS5oZWlnaHQoaW1hZ2VfaCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuLy8gY2hhbmdlIHRoZSBpbWFnZSdzIGhlaWdodCBhZnRlciB0aGUgaW1hZ2UgaXMgY29tcGxldGVkIHJlY2VpdmVkXG4iXSwiZmlsZSI6InJlc3VtZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
