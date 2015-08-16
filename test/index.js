var tape = require("tape"),
    reduceRight = require("..");


tape("reduceRight(object, callback[, initialValue[, thisArg]]) applies a function against an accumulator and each value of the object (from right-to-left) has to reduce it to a single value", function(assert) {
    assert.equals(
        reduceRight([0, 1, 2, 3, 4], function(currentValue, value) {
            return currentValue + value;
        }),
        10
    );
    assert.equals(
        reduceRight([0, 1, 2, 3, 4], function(currentValue, value) {
            return currentValue + value;
        }),
        10
    );
    assert.end();
});
