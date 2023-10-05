const homelist = (req, res) => {
    res.render('index', {title: 'Meak Dash',});
};
const rest1 = (req, res) => {
    res.render('rest1', {title: 'Rest1',});
};

const signup = (req, res) => {
    res.render('signup', {title: 'SignUp',});
};
const help = (req, res) => {
    res.render('help', {title: 'Help',});
};

module.exports = {
    homelist,
    rest1,
    signup,
    help
};