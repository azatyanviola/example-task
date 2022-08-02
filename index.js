'use strict';

import express from 'express';
const app = express();

import bodyParser from 'body-parser';
import dotenv from "dotenv";
dotenv.config();


import http from 'http';
const server = http.createServer(app);
import mongoose from 'mongoose';

import router from './routes/company-rt.js';
import peopleRouter from './routes/people-rt.js';
import Company from './schema/company.js';

const port = process.env.PORT || 3001;



app.use(bodyParser.json());


app.use('/', router);

app.use('/', peopleRouter);

const db = {
  url: `${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
};

(async () => await mongoose.connect(db.url))()
    .catch(err => logger.error({ err }));


app.get('/:name', async (req, res) => {
  const {name} = req.params;
  const users = await Company.find({name}).populate('people');

    return res
    
    .send({
      data: users[0],
    });
  })



server.listen(port, () => console.log(`Server is running on ${port}`));