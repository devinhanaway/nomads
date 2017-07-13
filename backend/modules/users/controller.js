import User from './model'
// import validateSignup from "./validateSignup"



export default function validateSignup(data){
  let errors = {}
  if(data.title === "") errors.title = "Please Provide a Title"
  if(data.email === "") errors.email = "Please Provide a Email"
  if(data.password === "") errors.password = "Please Provide a Password"
  if(data.passwordConfirmation != data.password) errors.passwordConfirmation = "Password Confirmation Must match Password"
  if(data.image === "") errors.image = "Please Provide an Image URL"
  if(data.location === "") errors.location = "Please Provide some location for your post"
  const isValid = Object.keys(errors).length === 0
  return {errors, isValid};
}


export const login = async (req, res)=>{
  // const{errors, isValid} = validateLogin(req.body)
  //req.id = req.params.id
  console.log("something was here ************");
  console.log(req.params.email);
  console.log(req.params);
  // console.log(req.id);
  req.params.id
  const{email} = req.body
  if(true){
    try {
      return res.status(200).json({user: await User.findOne({'email': req.params.email})})
    }
    catch(err){
      return res.status(err.status).json({error: true, message:"User doesn't exist"})
    }
  }
}

// export const loginAuth = async (req, res)=>{
//   // const{errors, isValid} = validateLogin(req.body)
//   //req.id = req.params.id
//   console.log("something was here ************");
//   console.log(req.body);
//   console.log(req.body.email);
//   // console.log(req.id);
//   req.params.id
//   const{email} = req.body
//   if(true){
//     try {
//       return res.status(200).json({user: await User.findOne({'email': req.body.email})
//     })
//     }
//     catch(err){
//       return res.status(err.status).json({error: true, message:"User doesn't exist"})
//     }
//   }
// }
export const loginAuth = (req, res)=>{
  // const{errors, isValid} = validateLogin(req.body)
  //req.id = req.params.id
  console.log("something was here ************");
  console.log(req.body);
  console.log(req.body.email);
  // console.log(req.id);
  // req.params.id
  User.findOne({'email': req.body.email}).then(user=>{
    console.log("let's see what user data we are getting back");
    console.log(user.password);
    console.log(req.body.password);
    if (user.password === req.body.password){
      return res.status(200).json({user: user})
    }
    else{
        return res.status(err.status).json({error: true, message:"User doesn't exist"})
    }
  })
  // console.log(currentUser);
  // if(true){
  //   try {
  //     return res.status(200).json({user: await User.findOne({'email': req.body.email})
  //   })
  //   }
  //   catch(err){
  //     return res.status(err.status).json({error: true, message:"User doesn't exist"})
  //   }
  // }
}

 export const signup = async (req, res)=>{

  const {errors, isValid } = validateSignup(req.body);
  const { title, email, password, passwordConfirmation, image, location} = req.body
    if (isValid){

      const newUser = new User({title, email, password, passwordConfirmation, image, location})

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
