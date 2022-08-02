import mongoose from "mongoose";
const {Schema} = mongoose;

const companySchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    created: {
      type: Date,
      default:Date.now,
    },
    people: [{
        type:Schema.Types.ObjectId,
        ref: 'People'
      }]
  });
  
  const Company = mongoose.model('Company', companySchema);
  
  export default Company;