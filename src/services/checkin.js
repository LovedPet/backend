const create = async (payload) => {

}

module.exports = {
  create,
}


const creche = {
  "name": "LovedPet",
  "address": "Rua chico x y z",
  "settings": {
    "opening_hours": "* * * * *", // Cronjob
    "value_per_hour": 100,
    "interval_of_hours": 3, // Funciona de 8 as 17h, com blocos de agendamento por 3 horas
    "limit_pet_per_unit": 1,
  }

}

const client = {
  "pet_owner": {
    "name": "Chico luis",
    "age": 123,
  },
  "pet":{
    "name": "Galega",
    "age": 23,
  } 
}