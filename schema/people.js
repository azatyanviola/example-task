import mongoose from "mongoose";
const {Schema} = mongoose;

const peopleSchema = new Schema({
    name: {
      type: Array,
      required: false,
    },
    position: {
      type: String,
      required: false,
    },
    url: {
      type: String,
      required: false,
    },
   
     
   
  });
  
  const People = mongoose.model('People', peopleSchema);
  
  export default People;