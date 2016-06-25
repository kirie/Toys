function buildList(list) {
    var result = [];
    for (var i = 0; i < list.length; i++) {
    	// let j = i to solve this issue and change list[i] and i to list[j] and j
        var item = 'item' + i;
        result.push( function() {console.log(item + ' ' + list[i])} );
    }
    return result;
}

// should return 'item2 undefined' 3 times

function testList() {
    var fnlist = buildList([1,2,3]);
    for (var j = 0; j < fnlist.length; j++) {
        fnlist[j]();
    }
}
testList()