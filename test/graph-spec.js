const chai = require("chai");
const expect = chai.expect;

const {findNeighbors, findPath} = require("../graph");

describe("Graph Problem", ()=> {

    const matrix = [
        [1, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [1, 1, 1, 0]
    ]


    it("Can find valid neighbors", ()=> {
        const test1 = findNeighbors(matrix, [0, 0]); // [] -> empty array because there are no valid neighbors
        const test2 = findNeighbors(matrix, [0, 2]); // [ [1,2] ] -> only one valid neighbor going down a row

        expect(test1).to.eql([]);
        expect(test2).to.eql([[1, 2]]);
    });

    it("Returns correctly when no valid path is found", ()=> {

        const badPath = findPath(matrix, [0, 0], [3, 0]);
        expect(badPath).to.be.false;
    });

    it("Returns a valid path when there is one", ()=> {
        const goodPath = findPath(matrix, [0, 2], [3, 0]);
        const res = [ [0, 2], [1, 2], [2, 2], [3, 2], [3, 1], [3, 0]  ];
        expect(goodPath).to.eql(res);
    })

})
