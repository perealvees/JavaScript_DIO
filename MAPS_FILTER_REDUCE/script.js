//var uniqueProducts = array.filter(function(elem, i, array) {
    //return array.indexOf( elem) === i;
//});

const pets = [
{
    name: 'Rex',
    type: 'DOg',
    age: '10'
},
{
    name: 'Miau',
    type: 'Cat',
    age: '2'
},
{
    name: 'Gulp',
    type: 'Fish',
    age: '1'
},
]

const newPets = pets.filter((pet) => {
    return pet.age < 5
})

console.log(pets) */