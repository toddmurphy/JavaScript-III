/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
The four principles for the "this" key word are:
* 1.  Global or window binding - the global window lives in the brower as the main "window" of javascript. When you type in 'this' and run it, you can see a huge list of all the prototypes that live on the window object.
* 2.  Implicit binding - when a function is called with the dot (.) to the left. For example person.dog would have this refer to the person object.
* 3.  Explicit binding - is when you can use .call .bind. .apply to explicity or invoke or call a function or connect that function to an object and connect 'this' to the funciton.
* 4.  New binding - we use constructor functions to create or return an object. We call or use the 'new' word to create an object such as a person, cat, dog, company,etc.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayHello(name) {
    console.log(this)
    return name
}
sayHello('Todd')

// Principle 2

// code example for Implicit Binding
const team = {
    team: 'Toronto Maple Leafs',
    coach: 'Homer Simpson',
    arena: 'Maple Leaf Gardens',
    concessions: 'Beer',
    eat: function() {
        console.log(
            `${this.coach} went to see the ${this.team} at ${this.arena} and had 15 ${this.concessions} which cost him $1,000!`
        )
    } //this closes the 'eat' method
}
team.eat()

// Principle 3

// code example for New Binding
//STEP 1: the animal function constructor i will create to use the 'new' binding on will have 'attributes': breed, color, weight, location.

function Animal(attributes) {
    ;(this.newBreed = attributes.breed),
        (this.color = attributes.color),
        (this.weight = attributes.weight),
        (this.location = attributes.location),
        console.log(this)
}

//STEP 2: create an 'animal' OBJECT with the attributes we can pass the attributes into the constructor function
const bear = new Animal({
    breed: 'Black Bear',
    color: 'Black',
    weight: 400,
    location: 'Banff, Alberta'
})

console.log(bear)

// Principle 4

// code example for Explicit Binding

/*.call example for explict binding*/
//step 1: create a function to explict bind .call (pick properties to bind .call)
function personLocation() {
    console.log(this.location) //this will 'connect' or bind to person.location in the person object
}

//step 2: create an object with some properties
const person = {
    first_name: 'Todd',
    last_name: 'Murphy',
    address: '123 Main St',
    age: 94,
    nickname: 'joker coder',
    location: 'Halifax',
    province: 'Nova Scotia'
}

//step 3: pass the object back into the example.call() function
personLocation.call(person)
