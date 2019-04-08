const passport = require('passport')

module.exports = (app) => {
    app.get(
        '/auth/google', 
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    )
    
    app.get(
        '/auth/google/callback', 
        passport.authenticate('google'), 
        (req, res) => {
            if (req.headers.host === 'localhost:3000') {
                res.redirect('/malls')
            } else {
                res.redirect('/api/malls')
            }
            
        }
    )

    app.get('/api/logout', (req, res) => {
        req.logout()
        if (req.headers.host === 'localhost:3000') {
            res.redirect('/')
        } else {
            res.redirect('/api/')
        }
       
    })

    app.get('/api/current_user', (req, res) => {
        res.send(req.user)
    })
}