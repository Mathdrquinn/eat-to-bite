
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Eat-to-Bite', ngApp: 'eat-to-bite' });
};
