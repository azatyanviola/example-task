'use strict';

import express from 'express';
import controllers from '../controllers/company-ctr.js';


const router = express.Router();


router.get('/company', controllers.getUsers);
router.get('/company/:_id', controllers.getOne);
router.post('/company',controllers.addUser);



export default router;
