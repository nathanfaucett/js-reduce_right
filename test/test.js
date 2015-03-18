var assert = require("assert"),
    reduceRight = require("../src/index");


describe("reduceRight(object, callback, accumulator, thisArg)", function() {
    it("should loop over array or object from the right and accumulator the result", function() {
        var array = [0, 1, 2],
            object = {
                0: 0,
                1: 1,
                2: 2
            },
            value;

        value = reduceRight(array, function(accumulator, value) {
            return accumulator + value;
        });
        assert.equal(value, 4);

        value = reduceRight(object, function(accumulator, value) {
            return accumulator + value;
        });
        assert.equal(value, 4);
    });
});
