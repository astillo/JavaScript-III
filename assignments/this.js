/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1
function birthday(when){
    console.log(when);
    return this;
}
birthday("082997");
// code example for Window Binding

// Principle 2
const getBirthday ={
    birthday: '082997',
    birth: function(time){
        console.log(`${birthday} is mine yours is ${time}`)
        console.log(this)
    }
}
getBirthday.birth('20')

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding