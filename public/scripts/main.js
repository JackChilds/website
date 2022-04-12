/*
* Jack Childs 2022
* MIT License
*/

// decode the encoded emails now
(function (params) {

    const els = document.querySelectorAll('[data-emailaddress]');

    const decodeEmail = (e) => {
        const ascii = e.split('-')
        let res = String.fromCharCode(...ascii)
        return atob(res)
    }

    window.setTimeout(() => {
        els.forEach (e => {
            const decoded = decodeEmail(e.getAttribute('data-emailaddress'))
            e.innerHTML = decoded
            e.href = 'mailto:' + decoded + '?subject=' + e.getAttribute('data-subject')
        })
    }, params.delay)

})({
    // set a delay before the email is decoded
    // might be useful in the war against bots
    delay: 3000
})