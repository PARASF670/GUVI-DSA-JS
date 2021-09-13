var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies);
    let farray = candies.map((candy) => { return ((candy + extraCandies) >= max) });
    let p = farray.forEach(element => {
        return element.trim();
       
    });
    console.log(p);
 };
 kidsWithCandies([2,3,5,1,3],3);