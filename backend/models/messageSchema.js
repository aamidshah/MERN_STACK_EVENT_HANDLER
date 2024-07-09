import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, "Name Required" ],
    minLength:[3, "Name must be atleast 3 charachters"]
  },

  email:{
    type: String,
    required: [true, "Email Required" ],
    validate:[validator.isEmail, "please provide valid email"]
  },

  subject:{
    type: String,
    required: [true, "Subject Required" ],
    minLength:[5, "Subject must be atleast 5 charachters"]
  },

  message:{
    type: String,
    required: [true, "Message Required" ],
    minLength:[10, "Message must be atleast 10 charachters"]
  }

})

export const Message = mongoose.model("Message", messageSchema)