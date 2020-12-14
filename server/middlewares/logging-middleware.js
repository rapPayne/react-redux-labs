module.exports = (req, res, next) => {
 res.set('X-Powered-By', 'Agile Gadgets');
 console.log('*'.repeat(80))
//  console.log(req.path)
//  console.log(req.route)
//  console.log('*'.repeat(80))
 next();
}
