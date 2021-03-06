//Question 1
//After reading the the documentation on My Path and looking at the notes from class I used the reduced function.  The notes from class were pretty close to what I needed so I used those.  I had some issues with making what appeared in the console be the same as what appeared in the homework.  James showed me how to use .toFixed().
var total = items.reduce(function(previous, current) {
    return {price: previous.price + current.price}
}, {price: 0})

var avgPrice = total.price / items.length

console.log('The average price is ' + '$' + avgPrice.toFixed(2))

//Question 2
//Used filter function.  Was able use >= and <= for the price ranges.  I was trying to make my console answer look exactly like the homework but was not able to.  I believe that I do have the correct information though.
var titles = items.filter(function(item) {
    return item.price >= 14 && item.price <= 18
})

console.log('Items that cost between $14.00 USD and $18.00 USD: ', titles)


//Question 3
//My thinking was that this question was similar to the last one.  I used the filter function and needed to define that we need the currency code from GBP.  Using the array [0] was how I got the 1 GBP title.

var pounds = items.filter(function(item) {
    return item.currency_code === "GBP"
})

console.log(pounds[0].title + ' £' + pounds[0].price)

//Question 4
//While starting this question it seemed to me that filter needed to be used here.  Since wood was the only material that I was looking for using includes, after looking in the class notes, felt like the best way to go.  I did have issues with the console.log at the end.  I saw that I did need to use [] to get the answer, but had a hard time wrapping my head around the fact that I needed to do it 4 times.  James, with using the last question, helped me to understand why I needed the 4 [].

var compo = items.filter(function(item) {
    return item.materials.includes('wood')
})

console.log(compo[0].title + compo[1].title + compo[2].title + compo[3].title + compo[4].title)

//Question 5
//I filtered the array and used an annonymous function to go through the materials section of items.js and used > 7 to find everything in materials that had 8 or more materials used.  Then I used forEach and made another function, and with that I included the console.log. Within the console.log I asked for two different things from what the previous array found, I asked for both title and materials.

var matamount = items.filter(function(item) {
    return item.materials.length > 7
})
matamount.forEach(function(newitem) {
    console.log(newitem.title, newitem.materials)
})

// console.log(matamount[0].title + matamount[1].title)

//Question 6
//  I feel like I may have used filter too much in this assignment, even though I think I have been getting the right answer.  On this one I started with the filter function again, and filter items.js.  I then returned for the section "who.made" and used includes for 'i_did'.  I received an answer that was almost correct right away, but I was not getting 18 "objects" and not the number 18.  I then used .length in console and that converted the 18 "objects" into the number 18.

var maker = items.filter(function(item) {
    return item.who_made.includes('i_did')
})

console.log(maker.length + ' were made by their sellers.')
