require("dotenv").config({path: "./config/.env"});
const express = require('express');
const connectDB = require("./config/connectDB");
const user = require("./routes/user");
const order = require('./routes/order');
const admin = require("./routes/admin");
const posts = require("./routes/posts");
const cors = require("cors");
const cookieSession = require("cookie-session");
const passport = require("passport");
const app = express();

// Parse data
app.use(express.json());

// Data base connection
connectDB();


// Cookie Session
app.use(cookieSession(
    {
        name:"session",
        keys:[process.env.secretOrPrivateKey],
        maxAge: 24 * 60 * 60 * 1000,
    }
));

// Passport initialize
app.use(passport.initialize());

// Passport session
app.use(passport.session());

// Cors
app.use(cors({
    origin:"http://localhost:3000",
    methods:"GET,POST,PUT,DELETE",
    credentials: true,
}))

// app.get('/', (req, res)=>{
//     res.send('<a href="/auth/google"> Authenticate with Google</a>')
// })

// app.get('/auth/google',
//   passport.authenticate('google', { scope: ['email', 'profile']})
// )


app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

// Routes
app.use("/api/user", user);
app.use("/api/order", order);
app.use("/api/admin", admin);
app.use("/api/post", posts);


// Define port
const PORT = process.env.PORT;


// Server connection
app.listen(PORT, (err)=>{
    err ? console.log("Server connection failed", err) : console.log(`server connected successfully on PORT ${PORT}`);
});




