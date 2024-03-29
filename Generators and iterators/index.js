
// const arr = [0,3,4,6];

// const it = arr[Symbol.iterator]();
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

// const map = new Map()
// map.set('key1', 'value 1')
// map.set('key2', 'value 2')

// const mapIterator = map[Symbol.iterator]();
// console.log(mapIterator.next().value)
// console.log(mapIterator.next().value)

// for (const [key, value] of map ){
//     console.log(`${key} and ${value}`);
// }

// const mySet = new Set();
// mySet.add('uno')
// mySet.add('dos')

// const setIterator = mySet[Symbol.iterator]()
// console.log(setIterator.next())
// console.log(setIterator.next())

// for(const value of mySet) {
// console.log(value)
// }

// function myIterator(start, finish){
//     let index = start;
//     let count = 0;

//     return {
//         next() {
//             let result;
//             if(index <finish) {
//                 result = { value: index, done: false};
//                 index +=1;
//                 count++;
//                 return result;
//             }
//             return {
//                 value: count,
//                 done: true
            
//             }
//         }
//     }
// }
// const it2 = myIterator(0,10);

// for(let val, result; (result = it2.next()) && !result.done; ) {
//     val = result .value;
//     console.log(val);
// }
const axios = require('axios');
const { time } = require('console');
const readline = require('readline').createInterface({
    input:  process.stdin,
    output: process.stdout,
    prompt: 'enter command> '
});

readline.prompt();
readline.on('line', async line => {
    switch (line.trim()) {
        case 'list vegan foods':
            {
              const { data } = await axios.get(`http://localhost:3001/food`);
              function* listVeganFoods() {
                let idx = 0;
                const veganOnly = data.filter(food => 
               food.dietary_preferences.includes('vegan'),
                );
                while(veganOnly[idx]) {
                    yield veganOnly[idx];
                    idx++;
                }
              }
             
             
              for (let val of listVeganFoods()) {
                console.log(val.name)
              }
              readline.prompt();
        
        }
            break;
        case 'log':
            const {data} = await axios.get(`http://localhost:3001/food`);
            const it = data[Symbol.iterator]();
            let actionIt;

            function* actionGenerator() {
                const food = yield;
                const servingSize = yield askForServingSize();
                yield displayCalories(servingSize, food);
            }

            function askForServingSize() {
                readline.question(
                    `How many servings did you eat? (as a decimal: 1, 0.5, 1.25, etc..)`,
                servingSize => {
                    if (servingSize === 'nevermind' || servingSize === 'n') {
                        actionIt.return()
                    } else {
                    actionIt.next(servingSize);
                    }
                },
                );
            }

            async function displayCalories(servingSize = 1, food) {
             const calories = food.calories;   
             console.log(`${food.name} with a seving size of ${servingSize} has a ${Number.parseFloat(calories * parseInt(servingSize, 10),).toFixed()} calories.`,);
             
             const {data} = await axios.get(`http://localhost:3001/users/1`);
             const usersLog = data.log || [];
             const putBody ={
                ...data,
                log: [
                    ...usersLog,
                    {
                        [Date.now()]: {
                          food: food.name,
                          servingSize,
                          calories: Number.parseFloat(calories * parseInt(servingSize, 10),
                          )
                        }
                    }
                ]

             }

             await axios.put(`http://localhost:3001/users/1`, putBody, {
                headers: {
                    'content-Type': 'application/json'
                }
             }  )


             actionIt.next();
             readline.prompt();
        }
            readline.question(`What would you like to log today?`, async (item) => {
                let position = it.next();
                while(!position.done) {
                    const food= position.value.name;
                    if(food === item) {
                        console.log(`${item} has ${position.value.calories} calories`);
                        actionIt = actionGenerator();
                        actionIt.next();
                        actionIt.next(position.value);
                    }
                    position = it.next();
                }
                readline.prompt();
            });
            break;
            case `today's log`:
                readline.question('Email: ', async emailAddress => {
                  const { data } = await axios.get(
                    `http://localhost:3001/users?email=${emailAddress}`
                  );
                  const foodLog = data[0].log || [];
                  let totalCalories = 0;

                  function* getFoodLog() {
                    yield* foodLog;
                  }

                  for(const entry of getFoodLog()) {
                    const timestamp = object.keys(entry)[0];
                    if(isToday(new Date(Number(timestamp)))) {
                        console.log(
                            `${entry[timestamp].food}, ${entry[timestamp].servingSize} serving(s)`,
                        );
                        totalCalories += entry[timestamp].claories;

                  }
                }
                console.log('-----------');
                console.log(`Total Calories: ${totalCalories}`);
                readline.prompt();
                });
                
            break;
        }
        readline.prompt();
    });

    function isToday(timestamp) {
        const today = new Date();
        return (
            timestamp.getDate() === today.getDate() &&
            timestamp.getMonth() === today.getMonth() &&
            timestamp.getFullYear() === today.getFullYear()
        );
    }


