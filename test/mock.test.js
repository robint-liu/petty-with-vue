it('mock function', () => {
  const fn = jest.fn(data => {
    console.log("data:", data)
    return data+1
  })
  fn(123)
  console.log("fn.mock.results:", fn.mock.calls); 
})