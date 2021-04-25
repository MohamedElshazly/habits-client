const router = require('express').Router()
const Habit = require('../habits')
const Journal = require('../journal')


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
    Habit.findOneAndUpdate({_id: req.body.id}, {streak: req.body.streak}, {new : true, useFindAndModify:false}).then((habit) => {
        res.send(habit)
    })
})


router.post('/create-journal-entry', async (req, res) => {
    console.log(req.body.entry.title)
    const newEntry = new Journal({
        title : req.body.entry.title,
        content : req.body.entry.content, 
        user : req.user.username
    })
    await newEntry.save()
    res.send({entry : newEntry, msg : "new Journal entry added!"})
})

router.get('/list-journal-entries', (req, res) => {
    Journal.find({user : req.user.username}).then((entries) => {
        res.send(entries)
    })
})

router.get('/journal-entry/:id', (req, res) => {
    Journal.findOne({_id : req.params.id}).then((entry) => {
        res.send(entry)
    })
})

router.delete('/delete-journal-entry/:id', (req, res) => {
    Journal.findOneAndDelete({_id : req.params.id}, {useFindAndModify:false}).then(() => {
        res.send("Entry deleted...")
    })
})
module.exports = router;