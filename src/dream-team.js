module.exports = function createDreamTeam(members) {
 // throw 'Not implemented';
  // remove line with error and write your code here


    var arr = members;
    if (!arr || arr.length == 0) {return false;
    } else {

        var res = [];
        for (let i = 0; i < arr.length; i++) {
            element = arr[i];

            if (typeof element === 'string') {
                var str = element.trim();
                var upStr = str.toUpperCase();
                res.push(upStr[0]);
            } else {

            }
        }

        if (res.length == 0) {
            return false;
        } else {

            var sortRes = res.sort();

            var ress = sortRes.join('');

            // .toUpperCase().join('');
            return ress;
        }
    }
};