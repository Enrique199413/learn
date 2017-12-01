describe('Some test in codeFigths', function () {
  var input = {
    0: [2, 3, 3, 1, 5, 2],
    1: [10, 6, 8, 4, 9, 1, 7, 2, 5, 3],
    2: [2, 3, 3]
  };
  var output = {
    0: 3,
    1: -1,
    2: 3
  };
  
  function testArray(input, output) {
    it('should test input for ' + input + ' and output ' + output, function () {
      expect(firstDuplicate(input)).toEqual(output)
    });
  }
  
  for (var x = 0; x < Object.keys(input).length; x++) {
    testArray(input[x], output[x]);
  }
});