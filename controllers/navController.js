// Homepage route
exports.home = async function (req, res) {
    res.render('index', {
        title: 'Home Page!'
    })
}

//About
exports.about = async function (req, res) {
    res.render('about', {
        title: 'About Page!'
    })
}

//Portfolio
exports.portfolio = async function (req, res) {
    res.render('portfolio', {
        title: 'Portfolio'
    })
}

//Contact
exports.contact = async function (req, res) {
    res.render('contact', {
        title: 'Contact'
    })
}


//Terms
exports.terms = async function (req, res) {
    res.render('terms', {
        title: 'Terms 22'
    })
}