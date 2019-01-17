$(document).ready(function(){
    if ($(window).width() > 720) {

        // initialize conway's game of life in header
        let conway = new Conway();
        let canvas = document.getElementById("conway");
        canvas.width = screen.width;
        canvas.height = Math.floor(canvas.width / 4);
        conway.run();

        // moves link image upward when hovered over
        $("#link_container img").mouseover(function () {
            // noinspection JSCheckFunctionSignatures
            $(this).animate({height: '2.7em'}, 100);
        }).mouseout(function () {
            // noinspection JSCheckFunctionSignatures
            $(this).animate({height: '2.5em'}, 100);
        });

        // Adds last updated date to footers on all pages
        let footer = document.getElementById("footer");

        footer.innerHTML += "<p>Last Updated 17 January 2019</p>"
    }
});

// prevents image dragging
$(document).on("dragstart", function() {
    return false;
});
