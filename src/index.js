var isArrayLike = require("is_array_like"),
    isNullOrUndefined = require("is_null_or_undefined"),
    fastBindThis = require("fast_bind_this"),
    arrayReduceRight = require("array-reduce_right"),
    objectReduceRight = require("object-reduce_right");


module.exports = reduceRight;


function reduceRight(value, callback, initialValue, thisArg) {
    callback = isNullOrUndefined(thisArg) ? callback : fastBindThis(callback, thisArg, 4);
    return isArrayLike(value) ?
        arrayReduceRight(value, callback, initialValue) :
        objectReduceRight(value, callback, initialValue);
}
