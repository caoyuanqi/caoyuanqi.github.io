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
    // modify the image's height when render the dom
    var image_height = $("#self-image").height();
    if (image_height != null) {
        $(".self-img-container").height(image_height);
    }
    // add hover function to the comtainer
    $(".self-img-container").hover(function () {
        card.toggleClass("flipped");
    });
    // detect the windows' resize and modify the height
    $(window).bind('resize', function () {
        console.log("resizing ...");
        var image_hight = $("#self-image").height();
        if (image_hight == null)
            return;
        console.log(image_hight);
        $(".self-img-container").height(image_hight);
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJyZXN1bWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImpxdWVyeS5kLnRzXCIgLz5cbiQoZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICBzY2FsZToge1xuICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgbGFuZ3VhZ2VDdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNraWxsU2V0Q2FudmFzXCIpO1xuICAgIHZhciBsYW5ndWFnZURhdGEgPSB7XG4gICAgICAgIGxhYmVsczogW1wiSmF2YVwiLCBcIkphdmFTY3JpcHRcIiwgXCJTQ1NTKENTUylcIiwgXCJQeXRob25cIiwgXCJQZXJsXCIsIFwiQ1wiLCBcIlNoZWxsXCJdLFxuICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcIkxhbmd1YWdlIFNraWxsIFNldFwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsIDEwMiwgMTUzLCAwLjIpXCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzY2OTljY1wiLFxuICAgICAgICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiBcIiMwMDY2OTlcIixcbiAgICAgICAgICAgICAgICBwb2ludEJvcmRlckNvbG9yOiBcIiMwMDY2OTlcIixcbiAgICAgICAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IFwiIzAwNjY5OVwiLFxuICAgICAgICAgICAgICAgIGRhdGE6IFs4NSwgODAsIDc1LCA3MCwgNjUsIDcwLCA2NV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH07XG4gICAgdmFyIGZyYW1ld29ya0N0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJhbWV3b3JrQ2FudmFzXCIpO1xuICAgIHZhciBteVJhZGFyQ2hhcnQgPSBuZXcgQ2hhcnQobGFuZ3VhZ2VDdHgsIHtcbiAgICAgICAgdHlwZTogJ3JhZGFyJyxcbiAgICAgICAgZGF0YTogbGFuZ3VhZ2VEYXRhLFxuICAgICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgfSk7XG4gICAgdmFyIGZyYW1ld29ya0RhdGEgPSB7XG4gICAgICAgIGxhYmVsczogW1wiU3ByaW5nXCIsIFwiQW5ndWxhciBKU1wiLCBcIkhpYmVybmF0ZVwiLCBcIlR5cGVTY3JpcHRcIiwgXCJTQVNTXCIsIFwiQ29mZmVlc2NyaXB0XCIsIFwiU2hpcm9cIl0sXG4gICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiRnJhbWV3b3JrIFNraWxsIFNldFwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NSw5OSwxMzIsMC4yKVwiLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInJnYmEoMjU1LDk5LDEzMiwxKVwiLFxuICAgICAgICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU1LDk5LDEzMiwxKVwiLFxuICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogXCJyZ2JhKDI1NSw5OSwxMzIsMSlcIixcbiAgICAgICAgICAgICAgICBkYXRhOiBbODUsIDgwLCA3NSwgNzAsIDc1LCA3MCwgNTVdXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9O1xuICAgIHZhciBteUZyYW13b3JrUmFkYXJDaGFydCA9IG5ldyBDaGFydChmcmFtZXdvcmtDdHgsIHtcbiAgICAgICAgdHlwZTogJ3JhZGFyJyxcbiAgICAgICAgZGF0YTogZnJhbWV3b3JrRGF0YSxcbiAgICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgIH0pO1xuICAgIC8vIHRyaWdnZXIgdGhlIG1vZGFsXG4gICAgJCgnLm1vZGFsLXRyaWdnZXInKS5sZWFuTW9kYWwoe1xuICAgICAgICBkaXNtaXNzaWJsZTogdHJ1ZSxcbiAgICAgICAgb3BhY2l0eTogMC43XG4gICAgfSk7XG4gICAgJCgnLnNjcm9sbHNweScpLnNjcm9sbFNweSgpO1xuICAgIC8vIGZsaXAgdGhlIGNhcmRcbiAgICB2YXIgY2FyZCA9ICQoXCIjc2VsZi1pbWctZmxpcFwiKTtcbiAgICAkKCcjc2VsZi1pbWctZmxpcCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FyZC50b2dnbGVDbGFzcyhcImZsaXBwZWRcIik7XG4gICAgfSk7XG4gICAgLy8gbW9kaWZ5IHRoZSBpbWFnZSdzIGhlaWdodCB3aGVuIHJlbmRlciB0aGUgZG9tXG4gICAgdmFyIGltYWdlX2hlaWdodCA9ICQoXCIjc2VsZi1pbWFnZVwiKS5oZWlnaHQoKTtcbiAgICBpZiAoaW1hZ2VfaGVpZ2h0ICE9IG51bGwpIHtcbiAgICAgICAgJChcIi5zZWxmLWltZy1jb250YWluZXJcIikuaGVpZ2h0KGltYWdlX2hlaWdodCk7XG4gICAgfVxuICAgIC8vIGFkZCBob3ZlciBmdW5jdGlvbiB0byB0aGUgY29tdGFpbmVyXG4gICAgJChcIi5zZWxmLWltZy1jb250YWluZXJcIikuaG92ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICBjYXJkLnRvZ2dsZUNsYXNzKFwiZmxpcHBlZFwiKTtcbiAgICB9KTtcbiAgICAvLyBkZXRlY3QgdGhlIHdpbmRvd3MnIHJlc2l6ZSBhbmQgbW9kaWZ5IHRoZSBoZWlnaHRcbiAgICAkKHdpbmRvdykuYmluZCgncmVzaXplJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInJlc2l6aW5nIC4uLlwiKTtcbiAgICAgICAgdmFyIGltYWdlX2hpZ2h0ID0gJChcIiNzZWxmLWltYWdlXCIpLmhlaWdodCgpO1xuICAgICAgICBpZiAoaW1hZ2VfaGlnaHQgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc29sZS5sb2coaW1hZ2VfaGlnaHQpO1xuICAgICAgICAkKFwiLnNlbGYtaW1nLWNvbnRhaW5lclwiKS5oZWlnaHQoaW1hZ2VfaGlnaHQpO1xuICAgIH0pO1xufSk7XG4iXSwiZmlsZSI6InJlc3VtZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
