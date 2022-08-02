'use strict';

import express from 'express';
import peopleControllers from '../controllers/people-ctr.js';

const peopleRouter = express.Router();

peopleRouter.get('/people', peopleControllers.getPeople);
peopleRouter.post('/people', peopleControllers.addPeople);


export default peopleRouter;