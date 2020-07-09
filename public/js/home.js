$( "form#scan-user" ).submit(function( event ) {
    event.preventDefault();
    $('.person-box').fadeTo( "slow" , 0, function () {
        $('#scan-arrow-person').remove()
        $.post(
            "ajax/get-user.php", { barcode: $('#user-barcode').val()}
        ).done( function(data) {
            let mainText = $('.person-box h2');
            let dataObj = JSON.parse(data);
            if (dataObj.status !== 'success') {
                mainText.text('Something went wrong - ' + dataObj.message + '. Let me refresh.');
                $('.person-box').fadeTo( "slow" , 1, function () {
                    refreshPage(3000);
                    return false;
                });
            } else {
                mainText.text(dataObj.firstName + ' is gagging for a ....');
            }
            $('.person-box').fadeTo( "slow" , 1, function () {
                setTimeout(function() {
                    $('.food-box').fadeTo( "slow" , 1);
                    pulse($('#scan-arrow-food'));
                }, 300);
            });
            $("#food-barcode").focus();

        });
    });
});

$( "form#scan-food" ).submit(function( event ) {
    event.preventDefault();

    $('.food-box').fadeTo( "slow" , 0, function () {
        $('#scan-arrow-food').remove()
        $.post(
            "ajax/pay.php", {
                barcode: $('#user-barcode').val(),
                foodbarcode: $('#food-barcode').val()
            }
        ).done( function(data) {
            $( "form#scan-food" ).remove();
            let mainText = $('.food-box h2');
            let dataObj = JSON.parse(data);
            if (dataObj.status !== 'success') {
                mainText.text('Something went wrong - ' + dataObj.message + '. Let me refresh.');
                $('.food-box').fadeTo( "slow" , 1, function () {
                    refreshPage(3000);
                    return false;
                });
            } else {
                mainText.text(dataObj.food + '!!!');
            }
            $('.food-box').fadeTo( "slow" , 1, function () {
                animateFood(dataObj.food)
                refreshPage(8000);
            });
        });
    });
});

$( "#reset-consumption" ).on( "click", function(e) {
    e.preventDefault();
    $( "#reset-consumption" ).hide();
    $( "#reset-consumption-yes" ).show();
});

$( "#reset-consumption-yes" ).on( "click", function(e) {
    e.preventDefault();
    $.get(
        "ajax/reset-consumption.php",
    ).done( function(data) {
        let dataObj = JSON.parse(data);
        if(dataObj.status === 'failed') {
            $( "#reset-consumption-yes" ).text(data.message)
        } else {
            $( "#reset-consumption-yes" ).text('Done. Refreshing')
            refreshPage(2000);
        }
    });
});

$(".modal-toggle").on( "click", function(e) {
    e.preventDefault();
    $('.modal').toggleClass('is-visible');
});

$('#showInputSubmit').on('change', function() {
    $('.user-barcode').toggleClass('trans');
    $('.food-barcode').toggleClass('trans');
    $('.dev-element').toggleClass('hidden');
});

$('#showGenerateButton').on('change', function() {
    toggleGenerateButton();
});

$("#generate-btn-user").on( "click", function(e) {
    submitTestBarcodeUser();
});

$("#generate-btn-food").on( "click", function(e) {
    submitTestBarcodeFood();
});

$("#add-human").on( "click", function(e) {
    $('.add-human').toggleClass('hidden');
});

$("#refresh-page").on( "click", function(e) {
    refreshPage(0);
});


$("#add-human-form").submit(function(e) {
    e.preventDefault();
    $.post(
        "ajax/add-human.php", {
            fname: $('input[name="f-name"]').val(),
            lname: $('input[name="l-name"]').val(),
        }
    ).done( function(data) {
        let dataObj = JSON.parse(data);
        if(dataObj.status === 'failed') {
            $('.add-begin').text(data.message)
        } else {
            $('.add-begin').text('Added: Barcode is ' + dataObj.barcode)
        }

    });
})



function pulse(ctrl) {

    for (var i = 0; i < 100; i++ ) {
        ctrl.fadeIn(800);
        ctrl.fadeOut(800);
    }
}

function refreshPage(delay)
{
    setTimeout(function() {
        location.reload();
    }, delay);
}

function submitTestBarcodeUser()
{
    $("#user-barcode").val('038678561129');
    $("form#scan-user").submit();
    //toggleGenerateButton();
}

function submitTestBarcodeFood()
{
    $("#food-barcode").val('038678561129');
    $("form#scan-food").submit();
    //toggleGenerateButton();
}

function toggleGenerateButton()
{
    $('.generate-button').toggleClass('hidden');
}

function removeForm()
{
    $('form#pay').remove();
}

function animateFood(food)
{
    food = food.toLowerCase().replace(/ /g, '')
    if (food === 'guachead') {
        animateAvo()
    } else if (food === 'donger') {
        animateDonger()
    } else if (food === 'doubledonger') {
        animateDoubleDonger()
    }
}

function animateDonger()
{
    $('#hotdoggy .bread').css({"background-color": "#ef9b26"});
    $('#hotdoggy .bread.left').css({"border-left": "8px solid #e88e11"});
    $('#hotdoggy .bread.right').css({"border-right": "8px solid #e88e11"});
    $('#hotdoggy .hotdog').css({"background-color": "#f35548", "border-left": "solid 8px #f13a2a"});
    $('#hotdoggy .mustard, #hotdoggy .mustard').addClass('change');

    $('#hotdoggy .hotdog-unit').css({
        "webkit-animation": "floating 2s ease infinite",
        "animation": "floating 2s ease infinite"
    })
}

function animateDoubleDonger()
{
    $('#double-hotdoggy .bread').css({"background-color": "#ef9b26"});
    $('#double-hotdoggy .bread.left').css({"border-left": "8px solid #e88e11"});
    $('#double-hotdoggy .bread.right').css({"border-right": "8px solid #e88e11"});
    $('#double-hotdoggy .hotdog').css({"background-color": "#f35548", "border-left": "solid 8px #f13a2a"});
    $('#double-hotdoggy .mustard, #double-hotdoggy .mustard').addClass('change');

    $('#double-hotdoggy .hotdog-unit').css({
        "webkit-animation": "floating 2s ease infinite",
        "animation": "floating 2s ease infinite"
    })
}

function animateAvo()
{
    $('#avo-svg-shell').css({fill: "#524237"});
    $('#avo-svg-inner').css({fill: "#c5f288"});
    $('#avo-svg-inner-inner').css({fill: "#e7f7a2"});
    $('#avo-svg-pip-outer').css({fill: "#c8d388"});
    $('#pit').css({fill: "#a07b3a"});
    $('#arms').css({fill: "#e6f6a2"});
    $('.avo-faces').css({fill: "#171603"});
    $('#face-other').css({stroke: "#171603"});

    tl.to('svg', 3, {
        rotation: 5,
        repeat: -1,
        yoyo: true,
        ease: Bounce.easeOut
    }, 'start')
    tl.to('#lg-face circle', 0.05, {
        scaleY: 0.1,
        transformOrigin: '50% 70%',
        repeat: -1,
        repeatDelay: 0.5,
        yoyo: true,
        ease: Sine.easeOut
    }, 'start')
    tl.to('#sm-face circle', 0.1, {
        scaleY: 0.1,
        transformOrigin: '50% 70%',
        repeat: -1,
        repeatDelay: 0.5,
        yoyo: true,
        ease: CustomEase.create("custom", "M0,0 C0.14,0 0.242,0.438 0.272,0.561 0.313,0.728 0.354,0.963 0.362,1 0.37,0.985 0.414,0.752 0.42,0.678 0.432,0.522 0.537,0.047 0.55,0.056 0.626,0.106 0.719,0.981 0.726,0.998 0.788,0.914 0.84,0.936 0.859,0.95 0.878,0.964 0.897,0.985 0.911,0.998 0.922,0.994 0.939,0.984 0.954,0.984 0.969,0.984 1,1 1,1")
    }, 'start+=0.5')
    tl.to('#lg-face path', 0.3, {
        scaleY: 0.7,
        transformOrigin: '50% 70%',
        repeat: -1,
        repeatDelay: 0.5,
        yoyo: true,
        ease: Back.easeInOut
    }, 'start+=1')
    tl.to('#sm-face path', 1, {
        attr: {
            d: `M 272 427 s 10 4 19 0`
        },
        repeat: -1,
        repeatDelay: 0.5,
        yoyo: true,
        ease: Elastic.easeOut
    }, 'start+=1')
    tl.to('#arm-l', 1, {
        bezier: {
            type: "soft",
            values:[
                {x:-85, y:-75},
                {x:-60, y:-70},
                {x:-85, y:-60},
                {x:-90, y:-70}
            ]
        },
        repeat: -1,
        ease: Linear.easeNone
    }, 'start')
    tl.to('#arm-r', 1, {
        bezier: {
            type: "soft",
            values:[
                {x:-95, y:-75},
                {x:-100, y:-70},
                {x:-95, y:-60},
                {x:-90, y:-70}
            ]
        },
        repeat: -1,
        ease: Linear.easeNone
    }, 'start')
}

