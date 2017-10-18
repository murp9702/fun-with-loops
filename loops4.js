var months = [{
    name: 'January',
    days: 31
},{
    name: 'February',
    days: 28
},{
    name: 'March',
    days: 31
},{
    name: 'April',
    days: 30
},{
    name: 'May',
    days: 31
},{
    name: 'June',
    days: 30
},{
    name: 'July',
    days: 31
},{
    name: 'August',
    days: 31
},{
    name: 'September',
    days: 30
},{
    name: 'October',
    days: 31
},{
    name: 'November',
    days: 30
},{
    name: 'December',
    days: 31
}];
//
// 1. Write a set of loops that will print out each day of each month in the following format:

// for (var i=0; i < months.length; i++) {
//   for (var k=1; k <= months[i].days; k++) {
//     console.log(months[i].name + " " + k);
//   }
// }

// 2. Write a set of loops that will print out each second of each hour in a day (in 24 hour clock format).
//
// For example, your output should look like the following:
//
// <pre>
// 0:0:0
// 0:0:1
// ...
// 0:0:58
// 0:0:59
// 0:1:0
// 0:1:1
// ...
// 0:1:58
// 0:1:59
// ...
// 23:0:0
// 23:0:1
// ...
// 23:59:58
// 23:59:59
// </pre>
//
// There should be 24 * 60 * 60 = 82,800 print statements.
//
// BONUS
// ----------
//
// 3. Write a set of loops that will print out each second of each hour in a day (in 12 hour clock format).
//
// For example, your output should look like the following:
//
// <pre>
// 1:0:0 AM
// ...
// 1:59:59 AM
// 2:0:0 AM
// ...
// 2:59:59 AM
// ...
// 11:59:59 AM
// 12:00:00 PM
// ...
// 12:59:59 PM
// 1:0:0 PM
// ...
// 1:59:59 PM
// 2:0:0 PM
// ...
// 11:59:59 PM
// 12:0:0 AM
// ...
// 12:59:59 AM
// </pre>
//
// Now, write a function that turns all single digit numbers into their respective two digit format. For example, 1 should be 01 and 9 should be 09. Then use this function to format your output from part 3, so it will now look like the following:
//
// <pre>
// 01:00:00 AM
// ...
// 12:00:00 PM
// ...
// 01:00:00 PM
// ...
// 12:00:00 AM
// </pre>
