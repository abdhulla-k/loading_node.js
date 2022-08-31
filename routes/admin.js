const express = require( "express" );

const router = express.Router();

// this is how we can use routing with express
router.get( '/add-product', ( req, res, next ) => {

    // use res.send() method to send a response
    res.send( '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Submit</button></form>' );
});

// use post() insted of using use() to filter post method.( we can use other functions like these );
router.post( '/product', ( req, res, next ) => {
    console.log( req.body );

    // // use res.send() method to send a response
    // res.send( "<h1>Hello! home</h1>" );

    // use redirect() function to redirect like below
    res.redirect( '/' );
});


module.exports = router;