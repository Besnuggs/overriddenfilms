require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      session = require('express-session')
      bodyParser = require('body-parser'),
      ctrl = require('./controller')

      const app = express();
      app.use(bodyParser.json())

      // Destructuring from dotenv file
  const {
    PORT,
    SESSION_SECRET,
    REACT_APP_DOMAIN,
    REACT_APP_CLIENT_ID,
    CLIENT_SECRET,
    DB_CONNECTION,
    ENVIRONMENT
  } = process.env

  app.use((req,res,next) => {
    if (ENVIRONMENT === 'dev') {
        req.app.get('db').set_data().then(userData => {
            req.session.user = userData[0]
            next();
        })
    } else {
        next();
    }
})

app.get(`/auth/callback`, async (req,res) => {
    //code ---> req.query.code
    let payload = {
        client_id: REACT_APP_CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: `http://${req.headers.host}/auth/callback`
    }
    //post request with code for token
   let tokenRes = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload);
   //use token to get user data
   let userRes = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${tokenRes.data.access_token}`)
   console.log()

    const db = req.app.get('db');
    const {email, name, picture, sub} = userRes.data;

    let foundUser = await db.find_user([sub])
    if (foundUser[0]) {
        req.session.user = foundUser[0];
    } else {
       let createdUser = await db.create_user([ name, email, picture, sub ]);
       // [ {name, email, picture, auth_id }]
       req.session.user = createdUser[0]
    }
    res.redirect('/#/private');


})

app.get(`/api/user-data`, (req,res) => {
    if (req.session.user) {
        res.status(200).send(req.session.user);
    } else {
        res.status(401).send('Go log in.')
    }
})

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('http://localhost:3000/')
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})


massive(DB_CONNECTION).then(db=>app.set('db',db));

app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized:true
}))

//endpoints
app.get('/api/products/', ctrl.getProducts)


//endpoints Auth0


