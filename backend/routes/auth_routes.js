const User = require('../users')
const router = require('express').Router()
const bcrypt = require('bcryptjs')
const passport = require('passport')

router.post('/register', (req, res) => {
    //check if that user already exists or not
    User.findOne({username: req.body.username}, async (err, doc) => {
        //if there's an err we throw it
        if(err) throw err;
        //if we find someone we log that we have one and do nothing
        if(doc){
            console.log("User already exists")
            res.send("User already exists")
        }
        //if it's a new username we add them to our database
        if(!doc){
            //we hash the password first
            const hashedPassword = await bcrypt.hash(req.body.password, 10)
            
            const newUser = new User({
                username: req.body.username,
                password: hashedPassword
            })
            await newUser.save()
            res.send("User has been created...")
            // res.redirect('http://localhost:3000/registr/')
        }
    })
})

router.post('/login', (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if(err) throw err
        if(!user) {
            const data = {user: req.user, message:"User doesn't exist"}
            res.send(data)
        }else{
            req.logIn(user, (err) => {
                if(err) throw err 
                // res.send("User Authenticated")
                const data = {user: req.user, message:"User Authenticated"}
                res.send(data)
                console.log(req.user)
            })
            
        }
    })(req, res, next)

})

router.get('/is-logged-in', (req, res) => {
    if(req.user){
        res.send("true")
    }else{
        res.send("false")
    }
})

router.get('/logout', (req, res) => {
    req.logOut();
    res.send("Logged out!")
    // res.redirect('/'); 
});

router.get('/user', (req, res) => {
    res.send(req.user)
})

module.exports = router