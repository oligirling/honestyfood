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
