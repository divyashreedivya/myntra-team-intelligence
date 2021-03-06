const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');

const User = require('../models/user');

passport.use('register', new localStrategy(
    {
        usernameField:'email',
        passwordField:'password',
        passReqToCallback:true
    },
    async(req,email,password,done)=>{
        try{
            const userExists = await User.findOne({email});
            //console.dir(userExists);
            if(userExists){
                return done(null,false,{'message':'User already exists'});
            }
            //console.dir(req.body);
            const name = req.body.name;
            const phoneno = req.body.phoneno;
            const user = await User.create({name,email,password,phoneno});
            return done(null,user);
        }
        catch(err){
            return done(err);
        }
    }
));

passport.use('login', new localStrategy({
    usernameField:'email',
    passwordField:'password'
},
    async(email,password,done)=>{
        try{
            const user = await User.findOne({email});
            if(!user){
                console.log('User not found');
                return done(null,false,{'message':'User not found'});
            }
            const validate = await user.isValidPassword(password);
            if(!validate){
                console.log('Wrong password');
                return done(null,false,{'message':'Wrong password'});
            }
            return done(null,user,{'message':'Logged in successfully'});
        }
        catch(err){
            return done(err);
        }
    }
));


passport.use(new JwtStrategy({
    secretOrKey:process.env.AUTH_SECRET,
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken()
},
    async(token,done)=>{
        try{
            return done(null,token.user);
        }
        catch(err){
            return done(err);
        }
    }
));

exports.verifyUser = passport.authenticate('jwt',{session:false});

exports.verifyAdmin = async(req,res,next)=>{
    if(req.user.admin==false){
        return res.status(400).json({'err':'You are not authorized'});
    }
    next();
}

exports.verifyToken = async(token)=>{
    try{
        const decoded = await jwt.verify(token,process.env.AUTH_SECRET);
        //console.dir(decoded);
        if(!decoded){
            return null;
        }
        //console.dir(decoded.user._id);
        return decoded.user._id;
    }
    catch(err){
        return null;
    }
}