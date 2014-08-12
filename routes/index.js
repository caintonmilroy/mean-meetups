
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Garden Code', author: 'Cainton M' });
};