/**
 * The area in which the plants are contained is circular, with a radius of 5 meters.
The formula for calculating the area of a circle is PI multiplied by the radius, squared:
const PI = 3.1415;
const area = PI * radius * radius;

Each plant requires a minimum space of 0.8 square meters.
The area is starting with 20 plants.
The plants double in number every week.

Using this information, your objectives are to:
Predict the plant growth after a specific number of weeks.

Implement control flow to make decisions on whether the plants should be:
Pruned, to stop them from exceeding the capacity of the garden.
This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
Monitored, if they are growing at an acceptable rate.
This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
Planted, if there is room to plant more plants.
This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.
Within your submission, include the results for 1, 2, and 3 weeks of growth as inputs.
 */

//this is the equation for the area you have to plant in 
const radius = 5
const PI = 3.1415
const area = PI * radius * radius
console.log(area)
//Each plant requires a minimum of 0.8 square meters
const minSpace = .8
 
//The area is starting with 20 plants
const plant =  20

//The plants double in number every week
const growthWeek1= 20
const growthWeek2 = growthWeek1 * 2
const growthWeek3= growthWeek2 * 2
console.log(growthWeek1)
console.log(growthWeek2)
console.log(growthWeek3)
