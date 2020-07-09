TweenMax.set('#faces', {
    transformOrigin: '50% 50%',
    rotation: 30
})

TweenMax.set('#lg-face', {
    x: -60
})

TweenMax.set('#sm-face', {
    x: 80,
    y: 20
})

const tl = new TimelineMax()

tl.add('start')

$("#avo-svg").on( "click", function(e) {
    $('#avo-svg-shell').css({fill: "#524237"});
    $('#avo-svg-inner').css({fill: "#c5f288"});
    $('#avo-svg-inner-inner').css({fill: "#e7f7a2"});
    $('#avo-svg-pip-outer').css({fill: "#c8d388"});
    $('#pit').css({fill: "#a07b3a"});
    $('#arms').css({fill: "#e6f6a2"});
    $('.avo-faces').css({fill: "#171603"});
    $('#face-other').css({stoke: "#171603"});

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
});
/*tl.to('svg', 3, {
    rotation: 5,
    repeat: -1,
    yoyo: true,
    ease: Bounce.easeOut
}, 'start')*/
/*tl.to('#lg-face circle', 0.05, {
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
}, 'start+=0.5')*/
/*tl.to('#lg-face path', 0.3, {
    scaleY: 0.7,
    transformOrigin: '50% 70%',
    repeat: -1,
    repeatDelay: 0.5,
    yoyo: true,
    ease: Back.easeInOut
}, 'start+=1')*/
/*tl.to('#sm-face path', 1, {
    attr: {
        d: `M 272 427 s 10 4 19 0`
    },
    repeat: -1,
    repeatDelay: 0.5,
    yoyo: true,
    ease: Elastic.easeOut
}, 'start+=1')*/
/*tl.to('#arm-l', 1, {
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
}, 'start')*/
