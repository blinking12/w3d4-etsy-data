var pizza = new Object()
pizza.meat = 'Sausage'
pizza.cheese = 'Cheddar'
pizza.veggies = 'Olives'

var pizza = {
    meat: 'Sausage',
    cheese: 'Cheddar',
    veggies: 'Olives',
}

pizza.meat = 'Pepperoni'

//console.log(pizza.meat)
var topping = 'cheese'
//console.log(pizza.topping)

var props = Object.keys(pizza)

props.forEach(function(prop) {
    //console.log(pizza[prop])
})

//console.log(props)
var movies = [
    {
    title: 'Star Wars',
    genre: 'Sci Fi',
    year: 1977,
    directors: [
        {
            name: 'George Lucas'
        },
        {
            name: 'No Way'
        }
    ]
},
{
    title: 'Forest Gump',
    genre: 'drama',
    year: 1995,
    directors: [
        {
            name: 'Robert Zemeckis'
        }
    ]
}
]

movies.forEach(function(movie) {

    var directors = movie.directors.map(function(director) {
        return director.name
    })

directors = directors.join(', ')

    console.log(movie.title + '-' + movie.genre + ' (' + movie.year + ') - Directed by' + directors) //movie.directors[0].name)
})




// var movie1 = {
//     title: 'Star Wars'
//     genre: 'Sci Fi'
//     year: 1977
// }
//
// var movie2 = {
//     title: 'Forrest Gump'
//     genre: 'drama'
//     year: 1995
// }
//
// var title = 'Star Wars'
// var genre = 'Sci Fi'
// var year = 1977
