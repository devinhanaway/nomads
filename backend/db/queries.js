const knex = require('./connection');



function getAllUsers() {
    console.log("something");
    return knex('users').select();
}


function findOrAddUser(profile){
  console.log("profile");
  console.log(profile);
  knex('users').select().where('email', profile.email).then(data =>{
    if(!data.length){
      let obj = {
        title: profile.title,
        password: profile.password,
        passwordConfirmation: profile.passwordConfirmation,
        email: profile.email,
        location: profile.location,
        image: profile.image,
      }
      console.log("I'm in the findOrAddUser Quer");
      console.log(obj);
      knex('users').insert(obj)
      .then(users=>{
      }, (err, result)=> {
        if(err){
          res.status(500).json({errors: {global: "something went wrong"}})
        } else{
          res.json({user: result.ops[0]})
        }
      })
      .catch(err=>console.log(err))
    }
  })
}



module.exports = {
  getAllUsers,
  findOrAddUser
}
