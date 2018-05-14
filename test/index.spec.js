const assert = require('chai').assert;

const bgreduce = require('../src/index');

describe('bgreduce', function() {
  it('exports a function', function() {
    assert.equal(typeof bgreduce, 'function');
  });

  it('can sum some numbers', function() {
    // given
    // a range of numbers
    const numberRange = [];
    for(let i=0; i<1000; ++i) {
      numberRange.push(i);
    }

    // and a function to reduce the collection with
    const sum = (runningTotal, n) => runningTotal + n;

    // when
    return bgreduce(numberRange, sum, 0)

      .then(result => {

        // then
        assert.equal(result, 499500);

      });
  });
});
