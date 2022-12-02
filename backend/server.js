import express from "express";
const app = express();
const port = 3000;
import { auth, requiredScopes } from 'express-oauth2-jwt-bearer';
import axios from "axios";




const options = {
  method: 'GET',
  url: 'http://localhost:3000/api/',
  headers: {authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkpWb3UyYWNQWmRGdnNlU25SM3k5dCJ9.eyJpc3MiOiJodHRwczovL2Rldi1jaDR2dWx0ZjJqY3MwbXc3LnVrLmF1dGgwLmNvbS8iLCJzdWIiOiJYZTF4M05iNHo2ZUQ3THNwTFBWdTRGRU9TWjdiWkpLMkBjbGllbnRzIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDozMDAwIiwiaWF0IjoxNjY5OTgzMTYxLCJleHAiOjE2NzAwNjk1NjEsImF6cCI6IlhlMXgzTmI0ejZlRDdMc3BMUFZ1NEZFT1NaN2JaSksyIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.rCQOjmEkjUs7cZ7G5LrEZrSzyksqiV4XYaHANbVr2ZnuoNYafw1t-JrvD1ZWj3mdmSKT2ml-ow4OezH1Jlm7ruHpUQUhBN6WjsC17o6px9tyKnOsSSiFxjM4xb2ocHo_fEucCcqrqsrfG-gY1Ep5zbpaZ56AyHQV75u9G4fVYunGjihj7ZH_x0L00iT7R9yomGHdRZmzmfEBcEIU_KMC9MwWmVJZiGo1D47fJIzk6D8iXARRWPfJE0ct2psM1-doIKyXL85xRJ_7wRla7DWnm-_rbSgaSRXx9-qDyEOtwsypNszetcI6KI6KId652rs20L_9upSikXxZTZRUio0Jzw"}
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});


// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
  audience: 'http://localhost:3000/api/',
  issuerBaseURL: `https://dev-ch4vultf2jcs0mw7.uk.auth0.com/`,
});

// This route doesn't need authentication
app.get('/', function(req, res) {
  res.json({
    message: 'Hello from a public endpoint! You don\'t need to be authenticated to see this.'
  });
});

// This route needs authentication
app.get('/profilePage', checkJwt, function(req, res) {
  res.json({
    message: 'Hello from a private endpoint! You need to be authenticated to see this.'
  });
});

const checkScopes = requiredScopes('read:messages');

app.get('/api/private-scoped', checkJwt, checkScopes, function(req, res) {
  res.json({
    message: 'Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.'
  });
});


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});




