const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const minionRouter = require('./server/routes/minions');
const ideaRouter = require('./server/routes/ideas');
const meetingRouter = require('./server/routes/meetings');


module.exports = app;

/* Do not change the following line! It is required for testing and allowing
*  the frontend application to interact as planned with the api server
*/
const PORT = process.env.PORT || 4001;

// Add middleware for handling CORS requests from index.html
app.use(cors());

// Add middware for parsing request bodies here:
app.use(bodyParser.json());

// Mount your existing apiRouter below at the '/api' path.
const apiRouter = require('./server/api');
app.use('/api', apiRouter);
app.use('/api/minions', minionRouter);
app.use('/api/ideas', ideaRouter);
app.use('/api/meetings', meetingRouter);



// This conditional is here for testing purposes:
if (!module.parent) { 
  // Add your code to start the server listening at PORT below:
  app.listen(PORT, () => {
    console.log(`Server is listening on Port: ${PORT}`);
  });
}
