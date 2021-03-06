import mongoose, { PromiseProvider } from 'mongoose';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import passport from 'passport';
import passportLocal from 'passport-local';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import bcrypt from 'bcryptjs';
import User from './User'
import dotenv from 'dotenv';
import { UserInterface, DatabaseUserInterface} from './Interfaces/UserInterface';
const GoogleStrategy = require('passport-google-oauth20').Strategy;
//h

const LocalStrategy = passportLocal.Strategy

dotenv.config();

mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@db1.0y7tr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) throw err;
    console.log("Connected To Mongo")
  });

//normal login
  // Middleware
const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }))
app.set("trust proxy", 1);
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
    cookie: {
      sameSite: "none",
      secure: true,
      maxAge: 1000 * 60 * 60 * 24 * 7 // One Week
    }
  }))
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());


//passport
passport.use(new LocalStrategy((username: string, password: string, done) => {
  User.findOne({ username }, (err: any, user : DatabaseUserInterface) => {
    if (err) throw err;
    if (!user) return done(null, false);
    bcrypt.compare(password, user.password, (err, result : boolean) => {
      if (err) throw err;
      if (result === true) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  });
})
);

//normal login gammelt virker kun med normal login

// passport.serializeUser((user: DatabaseUserInterface, cb) => {
//   cb(null, user._id);
// });

// passport.deserializeUser((id: string, cb) => {
//   User.findOne({ _id: id }, (err: any, user: DatabaseUserInterface) => {
//     const userInformation : UserInterface = {
//       name: user.name,
//       lastname: user.lastname,
//       username: user.username,
//       isAdmin: user.isAdmin,
//       id: user._id
//     };
//     cb(err, userInformation);
//   });
// });
//normal login

//andet login
passport.serializeUser((user: DatabaseUserInterface, done: any) => {
  return done(null, user);
});
passport.deserializeUser((user: any, done: any) => {
  return done(null, user);
});


//google
passport.use(new GoogleStrategy({
  clientID: `${process.env.GOOGLE_CLIENT_ID}`,
  clientSecret:`${process.env.GOOGLE_CLIENT_SECRET}`,
  callbackURL: "http://localhost:4000/auth/google/callback"
},
  function (accestoken: any, refreshToken: any, profile: any, cb: any) {
    User.findOne({googleid: profile.id}, async(err: Error, doc: DatabaseUserInterface)=>{
     if(err){
       return cb(err,null);
     }
      if(!doc){
        const newUser = new User({
          googleId: profile.id,
          username: profile.name.givenName
        });
        await newUser.save();
      }
    });
    console.log(profile);
    cb(null, profile);

  }));
//google login

//normal login
//routes
app.post('/register', async(req, res)=> {
    //username, password
const {username, password, name, lastname}=req?.body;
if (!username || !password || typeof username !== "string" || typeof password !== "string" ) {
  
  res.send("Improper Values");
    return;
  
  }
  User.findOne({username}, async(err: any , doc : DatabaseUserInterface) => {
    if (err) throw err;
    if(doc) res.send("User Already Exist");
    if(!doc){
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      lastname,
      username,
      password: hashedPassword,
      isAdmin: false,
    });
    await newUser.save();
    res.send("success")
      }
    })
  });


  //middelware is admin or not
  const isAdministratorMiddleware = (req: Request, res: Response, next: NextFunction) =>{
    const { user }: any = req;
  if (user) {
    User.findOne({ username: user.username }, (err: any, doc: DatabaseUserInterface) => {
      if (err) throw err;
      if (doc?.isAdmin) {
        next();
      }
      else {
        res.send("Sorry, only admin's can perform this.")
      }
    })
  }
  else {
    res.send("Sorry, you arent logged in.")
  }
  }
  //normal login


//google login
//get
  app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));
//callback
  app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
      res.redirect('http://localhost:3000');
    });
//google login

//normal login
  app.post('/login', passport.authenticate("local"), (req, res) =>{
    res.send("succes")
  });

  app.get("/user", (req, res) => {
    res.send(req.user);
  });


  app.get("/logout", (req, res) => {
    req.logout();
    res.send("success")
  });

  app.post("/deleteuser", async(req, res) => {
    const {id} = req?.body;
    await User.findByIdAndDelete(req.body.id)  
    res.send("Success");
    if(!res){
    ("Failure")
    }
  })
  
  app.get("/getallusers", async(req, res) => {
   await User.find({}, (err, data : DatabaseUserInterface[]) =>{
      if(err) throw err;
      const filteredUsers: UserInterface[] = [];
    data.forEach((item: DatabaseUserInterface) => {
      const userInformation = {
        id: item._id,
        name: item.name,
        lastname: item.lastname,
        username: item.username,
        isAdmin: item.isAdmin
      }
      filteredUsers.push(userInformation);
    });
    res.send(filteredUsers);
    })
  })
  //andet login

  //andet login
  app.listen(4000, () => {
      console.log("Server started");
  })
//normal login