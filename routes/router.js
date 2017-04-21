const express = require('express');
const router = express.Router();
const app = express();

router.get('/', function(req, res) {
  res.render('index');
});

// router.get('/oauth', funciton(request, response) {
//   rp({
//     uri: '',
//     qs: {
//       client_id:
//       client_secret:
//       code:
//       redirect_uri:
//     }
//   })
//   .then(function (data) {
//     data = JSON.parse(data);
//     request.app.accessToken = data.acces_token;
//     res.redirect(oauth);
//   });
// });

module.exports = router;
