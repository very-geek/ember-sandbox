import Route from 'ember-route'
import inject from 'ember-service/inject'

function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default Route.extend({
  ajax: inject(),

  model() {
    // return this.get('ajax').request('/users')

    return [
      {x: new Date(2017, 0, 1), y: generateRandomInteger(0, 100)},
      {x: new Date(2017, 0, 2), y: generateRandomInteger(0, 100)},
      {x: new Date(2017, 0, 3), y: generateRandomInteger(0, 100)},
      {x: new Date(2017, 0, 4), y: generateRandomInteger(0, 100)},
      {x: new Date(2017, 0, 5), y: generateRandomInteger(0, 100)},
      {x: new Date(2017, 0, 6), y: generateRandomInteger(0, 100)},
      {x: new Date(2017, 0, 7), y: generateRandomInteger(0, 100)},
    ]

    // return [
    //   {x: 'Alice', y: generateRandomInteger(0, 100)},
    //   {x: 'Billy', y: generateRandomInteger(0, 100)},
    //   {x: 'Cindy', y: generateRandomInteger(0, 100)},
    //   {x: 'David', y: generateRandomInteger(0, 100)},
    //   {x: 'Emily', y: generateRandomInteger(0, 100)},
    //   {x: 'Fayez', y: generateRandomInteger(0, 100)},
    //   {x: 'Grace', y: generateRandomInteger(0, 100)},
    // ]
  }
})
