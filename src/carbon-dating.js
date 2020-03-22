const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  //throw 'Not implemented';
  // remove line with error and write your code here
    if (!sampleActivity || typeof sampleActivity != 'string') {
        return false;
    } else {
        var res = sampleActivity/HALF_LIFE_PERIOD*MODERN_ACTIVITY;
        return res;
    }
};
