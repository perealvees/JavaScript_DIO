var uniqueProducts = array.filter(function(elem, i, array) {
    return array.indexOf( elem) === i;
});