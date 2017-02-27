import Route from 'ember-route'
import inject from 'ember-service/inject'

function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default Route.extend({
  ajax: inject(),

  model() {
    // return this.get('ajax').request('/users')

    // return {
    //   series: [
    //     {x: new Date(2017, 0, 1), y: generateRandomInteger(0, 100)},
    //     {x: new Date(2017, 0, 2), y: generateRandomInteger(0, 100)},
    //     {x: new Date(2017, 0, 3), y: generateRandomInteger(0, 100)},
    //     {x: new Date(2017, 0, 4), y: generateRandomInteger(0, 100)},
    //     {x: new Date(2017, 0, 5), y: generateRandomInteger(0, 100)},
    //     {x: new Date(2017, 0, 6), y: generateRandomInteger(0, 100)},
    //     {x: new Date(2017, 0, 7), y: generateRandomInteger(0, 100)},
    //   ]
    // }

    // return {
    //   series: [
    //     {x: 'Alice', y: generateRandomInteger(0, 100)},
    //     {x: 'Billy', y: generateRandomInteger(0, 100)},
    //     {x: 'Cindy', y: generateRandomInteger(0, 100)},
    //     {x: 'David', y: generateRandomInteger(0, 100)},
    //     {x: 'Emily', y: generateRandomInteger(0, 100)},
    //     {x: 'Fayez', y: generateRandomInteger(0, 100)},
    //     {x: 'Grace', y: generateRandomInteger(0, 100)},
    //   ]
    // }

    return {
      series: [
        {x: new Date(2017, 0, 1), 'Alice': generateRandomInteger(0, 100), 'Billy': generateRandomInteger(0, 100), 'Cindy': generateRandomInteger(0, 100)},
        {x: new Date(2017, 0, 2), 'Alice': generateRandomInteger(0, 100), 'Billy': generateRandomInteger(0, 100), 'Cindy': generateRandomInteger(0, 100)},
        {x: new Date(2017, 0, 3), 'Alice': generateRandomInteger(0, 100), 'Billy': generateRandomInteger(0, 100), 'Cindy': generateRandomInteger(0, 100)},
        {x: new Date(2017, 0, 4), 'Alice': generateRandomInteger(0, 100), 'Billy': generateRandomInteger(0, 100), 'Cindy': generateRandomInteger(0, 100)},
        {x: new Date(2017, 0, 5), 'Alice': generateRandomInteger(0, 100), 'Billy': generateRandomInteger(0, 100), 'Cindy': generateRandomInteger(0, 100)},
        {x: new Date(2017, 0, 6), 'Alice': generateRandomInteger(0, 100), 'Billy': generateRandomInteger(0, 100), 'Cindy': generateRandomInteger(0, 100)},
        {x: new Date(2017, 0, 7), 'Alice': generateRandomInteger(0, 100), 'Billy': generateRandomInteger(0, 100), 'Cindy': generateRandomInteger(0, 100)},
      ],
      columns: ['Alice', 'Billy', 'Cindy']
    }
  }
})
