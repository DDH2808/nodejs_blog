const Course = require('../models/Course');

class SiteController {

    // [GET] /
    async index(req, res) {
        await Course.find({})
            .then((courses) => res.json(courses))
            .catch((err) => res.status(400).json({ error: 'ERROR!!!' }))
        // res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }

}

module.exports = new SiteController;