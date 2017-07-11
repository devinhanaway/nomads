exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
            id: '1',
            title: 'devin',
            password: 'password',
            passwordConfirmation: 'password',
            email:'devin@gamil.com',
            location: "Denver, Co",
            image: "http://www.devinhanaway.com/home_profile_pic_circle.png",
        },
        {
            id: '2',
            title: 'Tristan',
            password: 'password',
            passwordConfirmation: 'password',
            email:'tristan@gamil.com',
            location: "Denver, Co",
            image: "http://www.devinhanaway.com/home_profile_pic_circle.png",
        },
        {
            id: '3',
            title: 'Katrina',
            password: 'password',
            passwordConfirmation: 'password',
            email:'katrina@gamil.com',
            location: "Denver, Co",
            image: "http://www.devinhanaway.com/home_profile_pic_circle.png",
        },



      ]);

    });
};
