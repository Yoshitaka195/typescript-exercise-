// 1-1.
function isPositive1(num: number): boolean {
  return num >= 0;
}
isPositive1(3);

// 1-2.
type User = {
  name: string,
  age: number,
  private: boolean
}
showUserInfo({
  name: 'John Smith',
  age: 16,
  private: false,
});


function showUserInfo(user: User) {}

// 1-3.
type IsPositiveFunc = (num: number) => boolean;
const isPositive2: IsPositiveFunc = num => num >= 0;
isPositive2(5);

// 1-4.
function sumOfPos(arr: [num: number, num2: number, num3: number, num: number]) {
  return arr.filter(num => num >= 0).reduce((acc, num) => acc + num, 0);
}

const sum: number = sumOfPos([1, 3, -2, 0]);
