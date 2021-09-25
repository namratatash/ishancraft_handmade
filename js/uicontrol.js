// MarkActiveMenu puts active class for the give menuId. depends on header menu structure.
function MarkActiveMenu(menuId) {
    $(function () {
        $("#header").load("header.html", function () {
            console.debug("header was loaded");

            // reset all menus
            $(".nav-menu").children("li").each(function () {
                $(this).children("a").each(function () {
                    $(this).attr("class", "");
                })
            })
            
            // mark the selected menu.
            elementSelector= ".nav-menu #" + menuId
            $(elementSelector).attr("class", "active");
        });
    })
}