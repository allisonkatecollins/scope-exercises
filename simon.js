//There are two separate scoping issues in this code. 
//Remember, for and if are their own block scopes 
//and if something is declared with let or const then that variable only exists in that scope.

const locations = [[1.1], [1,2], [1,3], [2,1], [2,2], [2,3]]

//need to define invalidLocation
//needs to be any number greater than 2
//let invalidLocation = 

for (let k = 0; k < locations.length; k++) {
    const currentLocation = locations[k]

    //is this adding the values within the ordered pairs?
    if (currentLocation[0] > 2) {
        invalidLocation = true;
    }
    
    if (invalidLocation) {
      console.log("This location is invalid");
    }

    //could invalidLocation work within the braces?
    console.log(`There were ${invalidLocation} invalid locations`);
};

//so far every console.log says that all 6 locations are invalid

/*
    Since k is used as the loop counter, it will be the
    total number of locations, not the invalid ones. You
    need to fix this somehow.
*/


