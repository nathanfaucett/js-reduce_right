var keys = require("keys"),
    isNullOrUndefined = require("is_null_or_undefined"),
    fastBindThis = require("fast_bind_this"),
    isArrayLike = require("is_array_like");


module.exports = reduceRight;


function reduceRight(object, callback, accumulator, thisArg) {
    callback = isNullOrUndefined(thisArg) ? callback : fastBindThis(callback, thisArg, 3);
    return isArrayLike(object) ?
        reduceRightArray(object, callback, arguments.length < 3) :
        reduceRightObject(object, callback, arguments.length < 3);
}

function reduceRightArray(array, callback, accumulator, initFromArray) {
    var length = array.length,
        i = length;

    if (initFromArray && length) {
        accumulator = array[--i];
    }

    while (i--) {
        accumulator = callback(accumulator, array[i], i);
    }

    return accumulator;
}

function reduceRightObject(object, callback, accumulator, initFromArray) {
    var objectKeys = keys(object),
        length = objectKeys.length,
        i = length,
        key;

    if (initFromArray && length) {
        accumulator = object[objectKeys[--i]];
    }

    while (i--) {
        key = objectKeys[i];
        accumulator = callback(accumulator, object[key], key);
    }

    return accumulator;
}
