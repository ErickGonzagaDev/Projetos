const countDate = new Date('Dec 8 2023').getTime()
var x = setInterval(function () {
    let now = new Date().getTime()

    let distance = countDate - now

    let d = Math.floor(distance / (1000 * 60 * 60 * 24))
    let hrs = Math.floor((distance % (1000 * 60 * 60 * 24))/(1000 * 60 * 60))
    let min = Math.floor((distance % (1000 * 60)) / (1000*60))
    let sec = Math.floor((distance % (1000 * 60))/ 1000)

    document.querySelector('p').innerHTML = d +'d ' + hrs + 'h ' + min + 'm ' + sec +'s'

})
