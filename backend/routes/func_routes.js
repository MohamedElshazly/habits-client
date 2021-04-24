const router = require('express').Router()
const Habit = require('../habits')


router.post('/create-habit', async (req, res) => {
    //create a habit instance
    const newHabit = new Habit({
        content : req.body.habit, 
        streak : 0,
        user : req.user.username
    })
    await newHabit.save()
    res.send({habit:newHabit , msg:"habit created!!"})

})

router.get('/list-habits', (req, res) => {
    Habit.find({user : req.user.username}).then((habits) => {
        res.send(habits)
    })
})

router.post('/update-habit',  (req, res) => {
    Habit.findOneAndUpdate({_id: req.body.id}, {streak: req.body.streak}, {new : true}).then((habit) => {
        res.send(habit)
    })
})


module.exports = router;