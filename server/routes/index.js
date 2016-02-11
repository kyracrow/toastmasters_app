/**
 * Created by kyracrowston on 2/3/16.
 */
var express = require('express');
var path = require('path');
var router = express.Router();

//get request that appends all '/' to html
//__dirname is relative to where we are now
router.get('/', function(request, response){
    response.sendFile(path.join(__dirname, '../public/views/index.html'));
});

router.get('/timer', function(request, response){
    console.log('Success on Timer');
    response.sendFile(path.join(__dirname, '../public/views/timer.html'))
});

router.get('/filler', function(request, response){
    console.log('Success on Filler Words');
    response.sendFile(path.join(__dirname, '../public/views/filler.html'))
});

router.get('grammarian', function(request, response){
    console.log('Success on Grammarian');
    response.sendFile(path.join(__dirname, '../public/views/grammarian.html'))
});

module.exports = router;