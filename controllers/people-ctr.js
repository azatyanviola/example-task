'use strict';


import People from '../schema/people.js';


async function getPeople(req, res){
    const people = await People.find();
  
      return res
      .send({
        data:people,
      });
    } 


    async function addPeople(req, res){
        const userBody = req.body;
    
          const data = await People.create(userBody);
          return res
                .status(201)
                .send({
                   name: data
          });
        
      }

      export default {getPeople, addPeople};
  