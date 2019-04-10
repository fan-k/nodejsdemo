

const activity = require('../controllers/activityController')
const router = require('express').Router()

router.post('/register',activity.register)
router.post('/index',activity.index)
router.get('/index',activity.index)
router.post('/userinfo',activity.userinfo)
router.post('/event',activity.event)
router.post('/prizelist',activity.prizelist)

module.exports = router;