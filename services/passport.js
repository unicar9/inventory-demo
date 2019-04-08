const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const keys = require('../config/index')
const MockStrategy = require('passport-mock-strategy')

const User = mongoose.model('User')

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user)
        })
})

if (process.env.NODE_ENV === 'test') {
    passport.use(new MockStrategy({}, async (user, done) => {
        // Perform actions on user, call done once finished

        let fakeUser = await new User({ googleId: "000000000", email:"fakeemail@fa.ke" }).save()
        done(null, fakeUser)
    }))

} else {
    passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, 
    async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ googleId: profile.id })
        
        if (existingUser) {
            return done(null, existingUser)
        } 
                    
        const user = await new User({ googleId: profile.id, email: profile.emails[0].value }).save()
        done(null, user)
    }))
}


