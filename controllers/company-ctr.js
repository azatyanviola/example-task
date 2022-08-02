'use strict';


import Company from '../schema/company.js';
import People from '../schema/people.js';



async function getUsers(req, res){
  const{limit = 10, offset = 0} = req.query;
  const users = await Company
                        .find()
                        .skip(offset)
                        .limit(limit);

    return res
    .send({
      data:users,
    });
  } 


  async function getOne(req, res){
    const {_id} = req.params;
    const users = await Company.find({_id}).populate('people');
  
      return res
      .send({
        data: users[0],
      });
    } 

  async function addUser(req, res){
    const {name, people} = req.body;

    const savedPeople = await People.create({name: people.name, position: people.position, url: people.url});
       await Company.create({name, people:savedPeople} );

      return res
            .status(201)
            .send({ message: 'Company created.' });

  }

 


  export default {getUsers, getOne, addUser };