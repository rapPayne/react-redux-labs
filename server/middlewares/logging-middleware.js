module.exports = (req, res, next) => {
 res.set('X-Powered-By', 'Agile Gadgets');
 console.log('*'.repeat(80))
 console.log(`_parsedUrl: `, req._parsedUrl)
 console.log('*'.repeat(80))
 next();
}
