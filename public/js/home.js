$(document).ready(function() {
    $("#user-barcode").focus();
});


$( "form#pay" ).submit(function( event ) {
    event.preventDefault();

    $.post(
        "ajax/pay.php", { barcode: $('#user-barcode').val()}
    ).done( function(data) {
        let mainText = $("h2.main-text");
        updateText(mainText, data);
        removeForm();
        animateBeer();
        reshowText(mainText);
        refreshPage(8000);
    });
});

$(".modal-toggle").on( "click", function(e) {
    e.preventDefault();
    $('.modal').toggleClass('is-visible');
});

$('#showInputSubmit').on('change', function() {
    $('.dev-element').toggleClass('hidden');
});
$('#showGenerateButton').on('change', function() {
    toggleGenerateButton();
});

$("#generate-btn").on( "click", function(e) {
    submitTestBarcode();
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
            gender: $('select[name="gender"]').val(),
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


function refreshPage(delay)
{
    setTimeout(function() {
        location.reload();
    }, delay);
}

function submitTestBarcode()
{
    $("#user-barcode").val('038678561129');
    $("form#pay").submit();
    toggleGenerateButton();
}

function toggleGenerateButton()
{
    $('.generate-button').toggleClass('hidden');
}

function removeForm()
{
    $('form#pay').remove();
}

function animateBeer()
{
    $('.pour').animate({height: '360px'}, 1500).delay(1600).slideUp(500);
    $('#liquid').delay(1400).animate({height: '170px'}, 2500);
    $('.beer-foam').delay(1400).animate({bottom: '200px'}, 2500);
}

function updateText(mainText, data)
{
    let dataObj = JSON.parse(data);
    let text = 'Something went wrong - ' + dataObj.message;
    if (dataObj.status === 'success') {
        text = 'Thank you ' + dataObj.firstName + '. You are currently number ' + dataObj.leaderboard + ' in the leaderboard.';
    }

    mainText.fadeTo( "slow" , 0, function () {
        mainText.text(text);
    });
}

function reshowText(mainText)
{
    mainText.delay(1400).fadeTo( "slow" , 1);
}
