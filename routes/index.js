/**
* @Author: Justin Schieck
* @Date:   2017-02-06T21:15:00-05:00
* @Email:  schieck91@gmail.com
* @Last modified by:   Justin Schieck
* @Last modified time: 2017-02-10T15:59:50-05:00
*/



var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Portfolio',
  message: 'Some Message Here' });
});

/* GET ABOUT */
router.get('/about', function(req, res, next){
  /*load the register*/
  res.render('About');
});

/* GET CONTACT */
router.get('/contact', function(req, res, next){
  /*load the CONTACT page*/
  res.render('Contact');
});

/* GET Projects */
router.get('/projects', function(req, res, next){
  /*load the projects page*/
  res.render('Projects');
});

/* GET Services */
router.get('/services', function(req, res, next){
  /*load the services page*/
  res.render('Services');
});

module.exports = router;
