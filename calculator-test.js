
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount:'100000', years: '30', rate:'.05'})).toEqual('536.82')
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount:'200000', years: '30', rate:'.05'})).toEqual('1073.64')
});

/// etc
