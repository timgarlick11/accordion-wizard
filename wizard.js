/// <reference path="c:\users\tim\documents\visual studio 2013\Projects\horizontal-slide-wizard\horizontal-slide-wizard\Scripts/jquery-2.1.3.intellisense.js" />
/// <reference path="c:\users\tim\documents\visual studio 2013\Projects\horizontal-slide-wizard\horizontal-slide-wizard\Scripts/jquery-2.1.3.js" />
var r = 0;
var g = 96;
var b = 112;

$(document).ready(function ()
{

    
    var pages = [1, 2, 3,4,5,6,7,8];

    for (var i = pages.length - 1; i >= 0 ; i--)
    {

        var builder = buildPage(i, pages);
        if (i == 0)
        {
            builder.addClass("selectedSmall");
        }

    }
});

function showNext(div)
{
    $(".accordion").removeClass("selectedSmall", 300);
   

    
        var a = div.prev().hasClass("selectedSmall", 300);

        if (!a) // if the current target doesnt have the class add it. if it does do nothing;
        {
            div.prev().addClass("selectedSmall", 300);
           
           


        }

}
function showPrev(div)
{
    $(".accordion").removeClass("selectedSmall", 300);
   
    

    var a = div.next().hasClass("selectedSmall", 300);

    if (!a) // if the current target doesnt have the class add it. if it does do nothing;
    {
        div.next().addClass("selectedSmall", 300);
       
        


    }

}

function buildPage(i, pages)
{
    
    var rbg = "rgb(" + r + ", " + g + ", " + b + ")";

    var accordionStep = $("<div>").appendTo($(".accordionContainer")).addClass("accordion").html(pages[i]).css("background", rbg).prop("id", "page" + i);

    // $("<div>").appendTo($(accordionStep)).addClass("fa fa-times-circle-o fa-2x").css({ "left": "49%" });
    if (i < (pages.length -1)) $("<div>").appendTo($(accordionStep)).addClass("fa fa-arrow-circle-o-right fa-3x").click(function (e)
    {
        $(".accordion").removeClass("fa")
        showNext(accordionStep);
    });
    if (i !== 0) $("<div>").appendTo($(accordionStep)).addClass("fa fa-arrow-circle-o-left fa-3x").click(function (e)
    {

        showPrev(accordionStep);
    });

    b = b + (pages.length + 12);
    g = g + (pages.length + 43);
    r = r + (pages.length + 65);
    return accordionStep;
}