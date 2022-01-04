beforeAll(() => console.log('1 - beforeAll')); // 1
afterAll(() => console.log('2 - afterAll')); // 2
beforeEach(() => console.log('3 - beforeEach')); // 3
afterEach(() => console.log('4 - afterEach')); // 4
test('', () => console.log('5 - test')); // 5
describe('Scoped / Nested block', () => {
  beforeAll(() => console.log('6 - beforeAll')); // 6
  afterAll(() => console.log('7 - afterAll')); // 7
  beforeEach(() => console.log('8 - beforeEach'));// 8
  afterEach(() => console.log('9 - afterEach'));// 9
  test('', () => console.log('10 - test'));// 10
});

// 执行顺序：1、3、5、4、6、3、8、10、9、4、7、2