
const router= require('express').Router();
const auth = require('../controllers/auth')

router.post('/signin',auth.signin)
router.post('/signup',auth.signup)
router.post('/logout',auth.Logout)



module.exports=router