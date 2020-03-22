module.exports = (req, res, next) => {
 console.log('yup hit');
 console.log('*'.repeat(80))
 console.log(`RAPS url:${req.url}`)
 console.log(`RAPS originalUrl:${req.originalUrl}`)
 console.log(`RAPS _parsedUrl: `, req._parsedUrl)
 //console.log(req);
 console.log('*'.repeat(80))
 next();
}