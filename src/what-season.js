module.exports = function getSeason(date) {
  // throw 'Not implemented';
  // remove line with error and write your code here
    var str = '';
    if (!date || date === undefined) {
        str = 'Unable to determine the time of year!';
    } else {
        if (date.length>=7) {
            throw error();
        } else {
            var res = date.getMonth();

            if (!res) {
                return false;
            } else if (res <= 1 || res == 11) {
                str = 'winter';

            } else if (res > 1 && res <= 4) {
                str = 'spring';

            } else if (res > 4 && res <= 7) {
                str = 'summer';

            } else if (res > 7 && res <= 10) {
                str = 'autumn';

            }
            return str;
        }

    }
};
