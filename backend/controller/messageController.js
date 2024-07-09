import {Message }from '../models/messageSchema.js';

export const sendMessage = async(req, res)=>{

  try {
    const {name, email, message,subject} = req.body;
    if(!name ||!email || !message || !subject){
      return res.status(400).json({
        success: false,
        message: "Please fill all the fields!"
      });
    }
    await Message.create({name, email, message,subject});
    res.status(200).json({
      success:true,
      message:"Message sent succesfully",
  
    });
    
  } catch (error) {
    if(error.name=== "ValidationError"){
      let errorMessage = "";
      if(error.errors.name){
        errorMessage += error.errors.name.message + " ";
      }
      if(error.errors.email){
        errorMessage += error.errors.email.message + " ";
      }
      if(error.errors.subject){
        errorMessage += error.errors.subject.message + " ";
      }
      if(error.errors.message){
        errorMessage += error.errors.message.message + " ";
      }
      return res.status(400).json({
        success: false,
        message: errorMessage
      })
    } 


    return res.status(500).json({
      success:false,
      message: "unknown error"
    })
    
  }








}