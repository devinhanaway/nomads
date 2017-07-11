import User from './model'
// import validateSignup from "./validateSignup"



export default function validateSignup(data){
  let errors = {}
  if(data.title === "") errors.title = "Please Provide a Title"
  if(data.email === "") errors.email = "Please Provide a Email"
  if(data.password === "") errors.password = "Please Provide a Password"
  if(data.image === "") errors.image = "Please Provide an Image URL"
  if(data.location === "") errors.location = "Please Provide some location for your post"
  const isValid = Object.keys(errors).length === 0
  return {errors, isValid};
}


 export const signup = async (req, res)=>{

  const {errors, isValid } = validateSignup(req.body);
  const { title, email, password, image, location} = req.body
    if (isValid){

      const newUser = new User({title, email, password, image, location})

      try{
        console.log("something");
        return res.status(200).json({user: await newUser.save()})
      }
      catch (err){
        return res.status(err.status).json({error: true, message:"There was an error"})
      }
    }else{
        res.status(400).json({errors})
      }
  }

export const getUsers = async (req, res)=>{
  try {
    return res.status(200).json({user: await User.find({})})
  }
  catch (err){
    return res.status(err.status).json({error: true, message:"There was an error"})
  }
}
