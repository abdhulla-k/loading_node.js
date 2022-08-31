// the function 'require()' using to import a module or something like below
const http = require( 'http' ); // imported http module or object

// import aur callback function from routes.js file
const routes = require( './routes' );


// http module has a method called 'createServer()'. It is using to create a server like below. 
// you have to pass a callback function inside that function to handle request and response. The function you have 
// passing into the createServer() function should have two parameters to handle request and resaponse; 
// You have to save the server created and call 'listen(<port number>)' function to listen the server.
// we can use process.exit() to end the event loop. but we dont want to do that.

// eg.
const server = http.createServer( routes.handler );

// to start litening
server.listen( 3000 );