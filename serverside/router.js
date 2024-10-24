import { Router } from "express";

import * as rh from './reqhandler.js'

import Auth from "./middleware/Auth.js";

const router=Router();

router.route('/add').post(rh.addMovie)
router.route('/getmovies').get(Auth,rh.getmovies)
router.route('/adduser').post(rh.adduser)
router.route('/getMovie/:id').get(rh.getMovie)
router.route('/login').post(rh.login)
// router.route('/home').get(Auth,rh.home)



export default router;