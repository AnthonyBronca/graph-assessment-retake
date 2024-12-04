/*

Set Up:

1. In your terminal, at the root of this project, run `npm install`
2. To test your code, run `mocha` or `mocha -b` in the terminal
3. You can also test your code using the local examples provided


Submission:
1. Delete the `node_modules` folder when you are done
2. compress/zip this project
3. Send the compressed version of this assessment to your instructor by the due date/time



Instuctions:

You will have to write 2 functions.

- The first function is responsible for finding valid neighbors when given a matrix and a node
- The 2nd function is responsible for finding a valid path to an ending node




Getting Neighbors: This function will return an array of all valid neighbors. A valid neighbor is a positive 1.
A 0 is considered invalid.

ONLY LOOK FOR TOP, BOTTOM, RIGHT, AND LEFT

Example:

const matrix = [
    [ 1, 0, 1, 0],
    [ 0, 0, 1, 0],
    [ 0, 0, 1, 0],
    [ 1, 1, 1, 0]
]

// if starting point is [0, 2] -> you can find a path to the ending node [3, 0]
// if starting point is [0, 0] ->  you can not find any valid paths



Finding a path: A function that will take in a matrix, starting node, and ending node

- Build a data structure that will keep track of our paths
- Build out paths with nodes inside of it to see if we can get from a starting point to an ending point
- Your function should return the array of valid paths if an ending is found, or false if there is no valid path
- HINT: You will need to use the findNeighbors function as a helper to solve this




Test instructions:

- You are not allowed to use any AI or external resources outside of App Academy content or Instuctor notes
- You may reference the walk through videos if you need
- This assessment should be completed within 2 hours
- You may ask for help by sending your instructor a DM on discord (make sure to ask a good question)
- If you are not passing, that is fine as long as you can get far and explain the code that you do have and how you did it
  or where you started getting stuck

- cheating will result in a deferal

*/

const matrix = [
    [1, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [1, 1, 1, 0]
]

const findNeighbors = (matrix, startingNode) => {
    // Your Code Here
};


// Comment this in for testing
console.log(findNeighbors(matrix, [0,0])); // [] -> empty array because there are no valid neighbors
console.log(findNeighbors(matrix, [0,2])); // [ [1,2] ] -> only one valid neighbor going down a row



/*

POLYA's:

- destructure variables from startingNode
- Make a queue/stack instantiated with a path as an inner array
- Add the startingNode as the first element inside that inner array path
- use a data structure to handle unique values and pass in string version of the starting node
- while we have items in the queue do the following:
    - remove a path from the queue
    - check the last node from the removed path
    - check if we are at the target -> If we are, return the current path
    - if we are not at the target, get all the neighbors of the current node
        - check if we have visited that neighbor before (hint: remember to account for strings)
        - if we have not visited it before, add it to your visited structure
        - Also, if we have not visited it before, make a new path with the old path elements and the new neighbor
            (hint: you may want to use the spread operator to do this)
        - add the new path to the queue
- after our while loop is done, if we never hit a return inside it. Return false

*/


const findPath = (matrix, startingNode, endingNode) => {
    // Your Code Here

};


console.log(findPath(matrix, [0,0], [3, 0])); // false -> There is no valid path
console.log(findPath(matrix, [0, 2], [3, 0]));
// [ [0, 2], [1, 2], [2, 2], [3, 2], [3, 1], [3, 0]  ]

// -------- DO NOT MODIFY ANYTHING BELOW THIS LINE ------------



module.exports = {
    findNeighbors,
    findPath
}
