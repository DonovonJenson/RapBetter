const axios = require('axios');



/*


In order to fetch videos from your playlist directly, we have to properly set up OAuth2.0 which requires a few steps.

  1. We have to set up an OAuth profile, the process of which can be found here:

          https://developers.google.com/youtube/v3/docs/


  2. You will have to grant permission to the application (a.k.a your OAuth profile created in step 1) in order for the API to allow us to grab videos directly from your playlists.  Not exactly sure how to do this, but I will experiment on my own channel to see what happens.

  3. We will have to build a multi-step auth process that involves following this guide:

    https://developers.google.com/youtube/v3/quickstart/nodejs

*/