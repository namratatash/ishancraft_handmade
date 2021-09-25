// MarkActiveMenu puts active class for the give menuId.
function MarkActiveMenu(menuId) {
    $(function () {
        $("#header").load("header.html", function () {

            // mark the selected menu.
            console.log("header was loaded");
            $(".nav-menu").children("li").each(function () {
                $(this).children("a").each(function () {
                    $(this).attr("class", "");
                })
            })

            elementSelector= ".nav-menu #" + menuId

            $(elementSelector).attr("class", "active");
        });
    })
}