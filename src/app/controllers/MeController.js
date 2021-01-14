class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res) {
        res.render('me/stored-courses');
    }
}

module.exports = new MeController();
