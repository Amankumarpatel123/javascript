/**
 * some():Determining if at least one array Element is passed a test.
 * 
 */

 let mark = [4, 5, 6, 7, 8, 9, 10, 3];

 let lessthenFive = false;
 
 
 for (let i = 0; i < mark.length; i++) {
     if (mark[i] < 5) {
         lessthenFive = true
         break;
     }
 
 }
 console.log('lessthenFive:', lessthenFive)
 
 
 
 lessthenFive = mark.some(e => e < 5);
 console.log('lessthenFive:', lessthenFive)

 let percentage = [45, 95, 60, 72, 89, 91, 98, 33];
   let lessthenten = false;
   lessthenten = percentage.some(e=>{
    return e<30});
    console.log('Percentage Less than 30:', lessthenten)


 