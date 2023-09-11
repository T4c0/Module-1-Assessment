///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
totalAcres=0 //Create variables for each of the acres and a variable for the total acres, set them to equal one because they have no value yet.
totalFujiAcres=0
totalGalaAcres=0
totalPinkAcres=0
for(let i=0; i<fujiAcres.length;i++){   //This for loop starts at 0 and ends until the full length of fujiAcres array. It will take each number in the array and added it to the totalFujiAcres variable.
    totalFujiAcres += fujiAcres[i];
}
for(let i=0; i<galaAcres.length;i++){   //This for loop starts at 0 and ends until the full length of galaAcres array. It will take each number in the array and added it to the totalGalaAcres variable.
    totalGalaAcres += galaAcres[i];
}
for(let i=0; i<pinkAcres.length;i++){   //This for loop starts at 0 and ends until the full length of pinkAcres array. It will take each number in the array and added it to the totalPinkAcres variable.
    totalPinkAcres += pinkAcres[i];
}
totalAcres = totalFujiAcres+totalGalaAcres+totalPinkAcres //This takes the variables totalPinkAcres, totalGalaAcres, totalFujiAcres and adds them together in variable totalAcres   
console.log('Total acres picked for the week: '+totalAcres) // console log totalAcres




// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
let averageDailyAcres = totalAcres / 7; // This takes the totalAcres and divides it by 7 and stores it in variable averageDailyAcres.
console.log('acres picked daily: '+averageDailyAcres)





// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE
while(acresLeft > 0) {  // This while loop continues as long as acres is greater than zero, for each loop it adds one to variable days. The acresLeft variable subtract your daily average from the number of acres left  
    days ++;
    acresLeft = acresLeft-averageDailyAcres;

}
console.log('Days: '+days)




// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

 let fujiTons = [] // These three variables store arrays for fujiTons, galaTons, and pinkTons. They are empty for now.
 let galaTons = []
 let pinkTons = []
 
 function appleTons(orchard,orchardArray) { // This function applTons takes two parameters: orchard and orchardArray. orchard is the place holder for the arrays: fujiAcres, galaAcres, pinkAcres. orchardArray is the place holder for the empty arrays fujiTons, galaTons, pinkTons.
    for(let i =0; i < orchard.length;i++){  // This for loop, loops through the orchard array multiplies each acre by 6.5 and pushes it to the aorchardArray array.
        orchardArray.push(orchard[i]*6.5) 
    }
    console.log(orchardArray)   //consol.log the orchardArray array
 }  
 appleTons(fujiAcres,fujiTons)  //Call the appleTons function with arguments fujiAcres and jujiTons
 appleTons(galaAcres,galaTons)  //Call the appleTons function with arguments galaAcres and galaTons
 appleTons(pinkAcres,pinkTons)  //Call the appleTons function with arguments pinkAcres and pinkTons






// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

 let fujiPounds = 0 // Three variables to store the total number of pounds picked for each orchard
 let galaPounds = 0
 let pinkPounds = 0

 function orchardPounds(appleTons,appplePounds) { // function with parameters for the orchard in pounds and in tons
    for (let i = 0; i < appleTons.length; i++){ // forloop loops through appleTons array and then multiplies each index by 2000 and adds that number to applePounds array 
        appplePounds += appleTons[i] * 2000
    }
    console.log(appplePounds)   //console log applePounds variable
 }
orchardPounds(fujiTons,fujiPounds)  //call function orchardPounds with arguments fujiTons and fujiPounds.
orchardPounds(galaTons, galaPounds) //call function orchardPounds with arguments galaTons and galaPounds. 
orchardPounds(pinkTons, pinkPounds) //call function orchardPounds with arguments pinkTons and pinkPounds.





// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

 let fujiProfit = 0 // These three variables will hold the profits for each of the orchards.
 let galaProfit = 0
 let pinkProfit = 0

 function orchardProfit(orchardPounds,orchardPrices,orchardProfit,name) { // This function takes parameters for the pounds of each orchard, the price per pound, the profit made at the orchard, and the name of the orchard
    orchardProfit = orchardPounds * orchardPrices   //orchardProfit is the pound multiplied by the price per pound
    console.log(name +': $'+orchardProfit)  // console log the profit
 }
 orchardProfit(195000,.89,fujiProfit,'Fuji')
 orchardProfit(338000,.64,galaProfit, 'Gala')
 orchardProfit(286000,.55,pinkProfit,'pink')



// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

let totalProfit = 173550 + 216320 + 157300  // totalProfit is the profit of all orchards combined.
console.log('Total profit: $' +totalProfit)
