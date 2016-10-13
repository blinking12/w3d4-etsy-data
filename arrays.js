//Standard way
var invites = ['Matt', 'Jessica', 'John', 'Susan']

var tasks = new Array(3)
tasks[0] = 'Buy Food'
tasks[1] = 'Feed Pets'
tasks[2] = 'Cook food'

var inbox = new Array('water bill', 'pay check', 'greating card')

inbox[3] = 'You have a rich uncle that wants to give you money.'

// end
tasks.push('Do homework')
tasks.pop()

//beginning
tasks.unshift('Watch Netflix')
var thingIGotRifOf = tasks.shift()



// tasks[0] = 'Watch Hulu'
//console.log(tasks)

var payCheck = inbox.slice(1,3)
// var payCheck = []
// payCheck[0] = inbox[1]
// payCheck[1] = inbox[2]

//console.log(payCheck)

inbox.splice(1, 0, 'You are hired', 'Job offer')
// delete inbox[0] // leaves a gap
// delete inbox // look into this
//console.log(inbox)

inbox[inbox.length] = 'Invite to Spotify'
// console.log(inbox.length)
// console.log(inbox)

var hasJobOffer = inbox.includes('Job offer')
//console.log(hasJobOffer)

// var JobOfferIndex = inbox.indexOf('Job offer')
// var JobOfferIndex = inbox.indexOf('Job salary')
// console.log(JobOfferIndex)

//inbox.push('Job Salary')

// if (inbox.indexOf('Job Salary') === -1) {
//     console.log('No salary yet')
// }
// else {
//     console.log('It iss finally here!')
// }

//console.log(inbox)

function checkForJob(item) {
    return item.includes('Job')
}

//var matches = inbox.filter(checkForJob)
// var matches.filter(function(item) {
//     return item.includes('Job')
// })

//['Job Offer', 'Job Salary']

//console.log(matches)
// var matches = []
// for (var i = 0; i < inbox.length; i++) {
//     //console.log(i + '. ' + inbox[i])
//     var hasJob = checkForJob(inbox[i])
//     if (hasJob) {
//         matches.push(inbox[i])
//     }
// }
//console.log(matches)

//inbox = inbox.reverse()

var fruit = ['Apple', 'Banana', 'Cherry', 'Watermelon']

fruit.forEach(function(item, i) {
    // console.log(item.toUpperCase())
})
// map transforms an array of items, one item at a time
// fruit = fruit.map(function(item, i) {
//     if (i === 2){
//     return `<section>${item.toUpperCase()}</section>`
// }
// // else {
// //     return `<div>${item}</div>`
// // })

// console.log(fruit)

var prices = [
    {price: 7.98},
    {price: 14.99},
    {price: 2.30},
    {price: 12.80},
]

var total = prices.reduce(function(previous, current) {
    return {price: previous.price + current.price}
}, {price: 0})

console.log(total)

var avgPrice = total.price / prices.length

console.log(avgPrice)


//console.log(inbox)


// Finds the first one as a string
// var matches = inbox.find(function(item) {
//     return item.includes('Job')
// })
// // Finds all the matches as an array
// var matches = inbox.filter(function(item) {
//     return item.includes('Job')
// })
//
// console.log(matches)
