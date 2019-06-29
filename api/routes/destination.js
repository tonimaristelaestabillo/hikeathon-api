module.exports = function (app) {
    var controller = require('../controllers/DestinationController');

    app.route('/destinations')
        .get(controller.list)
        .post(controller.create);


    app.route('/destinations/:id')
        .get(controller.read)
        .put(controller.update)
        .delete(controller.delete);

};