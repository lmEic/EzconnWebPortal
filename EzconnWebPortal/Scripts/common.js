$(document).ready(function() {

    // members
    members();

    // nav
    nav();

    // sideNav
    //sideNav();

    // foot
    foot();

    // scroll to top
    $(".toTop").click(function() {
        $("html, body").animate({ scrollTop: $('.wrapper').offset().top }, 600);
    })

    // contact table
    contactTable();

    // resume
    resume();

})

////////////////////////////////////////////
// members
////////////////////////////////////////////

function members() {

    var allow = false;

    $(".memberLink").hover(function() {

        // $(".members").slideDown("fast");
        $(".members").show();

    }, function() {

        // if (allow) $(".members").slideUp("fast");
        // $(".members").slideUp("fast", false);
        $(".members").hide();

    })

    $(".members").hover(function() {

        // $(".members").slideDown("fast", );
        $(".members").show();

    }, function() {

        // $(".members").slideUp("fast");
        $(".members").hide();

    })
	
}

////////////////////////////////////////////
// nav
////////////////////////////////////////////

var idx;
var arr_offsetX = [0, 144, 233, 345, 400, 450];

function nav() {

    $(".topNavList a").hover(function() {

        idx = $(".topNavList a").index(this);

        // $(".subNav .subItemWrapper").eq(idx).show().siblings().hide();

        $(".subNavWrapper").show();
        $(".activeLeft").show();
        $(".activeRight").show();

        var offsetXArrow = $(".topNavList a").eq(idx).position().left - 455;
        var w = $(".topNavList a").eq(idx).width() + 22;

        // $(".logo").text(offsetXArrow + " " + w);

        $(".topNavList a").eq(idx).addClass("activeTopNav");
        $(".activeLeft").css("left", offsetXArrow+'px');
        $(".activeRight").css("left", offsetXArrow+w+'px');

        // $(".navArrow").animate({"left": offsetXArrow + 'px'}, {duration: 200, queue: false});

        // var offsetX = offsetXArrow - 40*$(".subNav .subItemWrapper").eq(idx).find("a").length - 25;

        // if (idx == 2 || idx == 4 || idx == 5) {

        //     if ($(".subNav .subItemWrapper").eq(idx).find("a").length == 2) $(".subNav .subItemWrapper").eq(idx).css("margin-left", offsetX+'px');
        //     if ($(".subNav .subItemWrapper").eq(idx).find("a").length > 2) $(".subNav .subItemWrapper").eq(idx).css("margin-left", offsetX-17+'px');

        // };

        $(".subNavSet div").eq(idx).show();

        if (idx == 0 || idx == 1 || idx == 3 || idx == 5) {
            $(".subNavSet .subNav").eq(idx).find("ul").css("width", "132px");
            $(".subNavSet .features").eq(idx).css("left", "195px");
        } else {
            $(".subNavSet .subNav").eq(idx).find("ul").css("width", "292px");
            $(".subNavSet .features").eq(idx).css("left", "315px");
        };

    }, function() {
        
        $(".subNavWrapper").hide();
        $(".activeLeft").hide();
        $(".activeRight").hide();

        $(".topNavList a").eq(idx).removeClass("activeTopNav");
        // $(".subNav .subItemWrapper").hide();
        // $(".subNav").hide();
        // $(".navArrow").hide();

        $(".subNavSet div").eq(idx).hide();

    })

    // var offsetXArrow = $(".nav a").eq(idx).position().left + $(".nav a").eq(idx).width() * .5 + 30;

    // $(".logo").text($(".activeTopNav").offset().left + " " + $(".activeTopNav").width());
    // $(".logo").text($(".topNavList a").eq(1).offset().left + " " + $(".activeTopNav").width());

    $(".subNavSet div").hover(function() {
        $(".subNavWrapper").show();
        $(".topNavList a").eq(idx).addClass("activeTopNav");
        $(".activeLeft").show();
        $(".activeRight").show();
        $(this).show();

    }, function() {
        $(".subNavWrapper").hide();
        $(".activeLeft").hide();
        $(".topNavList a").eq(idx).removeClass("activeTopNav");
        $(".activeRight").hide();
        $(this).hide();

    })

}

////////////////////////////////////////////
// sideNav
////////////////////////////////////////////

function sideNav() {
    // show the active level 1 wrapper by default
    $(".activeLv0").next().show();
    $(".activeLv1").next().show();

    $(".lv0").find("a:first").click(function() {
        
        if ($(this).next().is(":hidden")) {
            $(this).find("i").css("background-position-y","bottom");
            $(this).next().slideDown(100);
        } else {
            $(this).find("i").css("background-position-y","0");
            $(this).next().slideUp(100);
        }

    })

    $(".lv1").click(function() {
        
        if ($(this).find(".lvWrapper2").is(":hidden")) {
            $(this).find("i").css("background-position-y","bottom");
            $(this).find(".lvWrapper2").slideDown(100);
        } else {
            $(this).find("i").css("background-position-y","0");
            $(this).find(".lvWrapper2").slideUp(100);
        }

    })

    $(".activeLv1").parent().parent().show();
    $(".activeLv2").parent().parent().show();
    $(".activeLv2").parent().parent().find("i").css("background-position-y","bottom");

}

// function activeSideNav(lv0, lv1, lv2) {

//     var lvCount0 = $(".sideNav .lv0").length;
    
//     for (var i = 0; i < lvCount0; i++) {
//         $(".sideNav .lv0").eq(lv0).find("a").css()
//     };
// }

////////////////////////////////////////////
// foot
////////////////////////////////////////////

function foot() {
    
    for (var i = 0; i < 6; i++) {
        if ($(".footMid li").eq(i).find("i").text().length > 4) {
            $(".footMid li").eq(i).find("a").css("margin-left", "4px");
        } else {
            $(".footMid li").eq(i).find("a").css("margin-left", "12px");
        }
    };

}

////////////////////////////////////////////
// contactTable
////////////////////////////////////////////

function contactTable() {

    $(".tableTab").click(function() {
        if ($(this).find("table:first").is(":hidden")) {
            $(this).find("em").text("-");
            $(this).find("table:first").show();
        } else {
            $(this).find("em").text("+");
            $(this).find("table:first").hide();
        };
    })

}

////////////////////////////////////////////
// resume
////////////////////////////////////////////

function resume() {

    $(".foldIcon").click(function() {
        if ($(this).parent().parent().next("div:first").is(":hidden")) {
            $(this).css("background-position-y", "bottom");
            $(this).parent().parent().next("div:first").slideDown(200);
        } else {
            $(this).css("background-position-y", "40px");
            $(this).parent().parent().next("div:first").slideUp(200);
        };
    })

}

// Dropdown Menu
var dropdown = document.querySelectorAll('.dropdown');
var dropdownArray = Array.prototype.slice.call(dropdown,0);
dropdownArray.forEach(function(el){
    var button = el.querySelector('a[data-toggle="dropdown"]'),
            menu = el.querySelector('.dropdown-menu'),
            arrow = button.querySelector('i.icon-arrow');

    button.onclick = function(event) {
        if(!menu.hasClass('show')) {
            menu.classList.add('show');
            menu.classList.remove('hide');
            arrow.classList.add('open');
            arrow.classList.remove('close');
            event.preventDefault();
        }
        else {
            menu.classList.remove('show');
            menu.classList.add('hide');
            arrow.classList.remove('open');
            arrow.classList.add('close');
            event.preventDefault();
        }
    };
})

Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};