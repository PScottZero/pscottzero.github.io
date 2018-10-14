$(document).ready(function(){
    if ($(window).width() > 700) {
        let conway = new Conway();

        let canvas = document.getElementById("conway");
        let width = document.body.offsetWidth;
        let height = Math.floor(width / 3);
        canvas.width = width;
        canvas.height = height;

        conway.draw();

        window.setInterval(function () {
            conway.step();
        }, 2000);

        $(window).resize(function () {
            let canvas = document.getElementById("conway");
            let width = document.body.offsetWidth;
            let height = Math.floor(width / 3);
            canvas.width = width;
            canvas.height = height;
        });

        // moves link image upward when hovered over
        $("#link_container img").mouseover(function () {
            // noinspection JSCheckFunctionSignatures
            $(this).animate({height: '2.7em'}, 100);
        }).mouseout(function () {
            // noinspection JSCheckFunctionSignatures
            $(this).animate({height: '2.5em'}, 100);
        });

        // When the user scrolls the page, execute myFunction
        window.onscroll = function () {
            myFunction()
        };

        // Get the header
        let header = document.getElementById("header");

        // Get the offset position of the navbar
        let sticky = header.offsetTop;

        // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
        function myFunction() {
            if (window.pageYOffset > sticky) {
                header.classList.add("header_sticky");
            } else {
                header.classList.remove("header_sticky");
            }
        }

        // Adds last updated date to footers on all pages
        let footer = document.getElementById("footer");

        footer.innerHTML += "Last Updated 14 October 2018"
    }
});