// 2-1.
function myFilter<T>(arr: T[], predicate: (param: T) => boolean) {
  const result = [];
  for (const elm of arr) {
    if (predicate(elm)) {
      result.push(elm);
    }
  }
  return result;
}

const res = myFilter([1, 2, 3, 4, 5], num => num % 2 === 0);
const res2 = myFilter(['foo', 'hoge', 'bar'], str => str.length >= 4);

// 2-2.
type Speed = "slow" | "medium" | "fast";

function getSpeed(speed: Speed): number {
  switch (speed) {
    case "slow":
      return 10;
    case "medium":
      return 50;
    case "fast":
      return 200;
  }
}

const slowSpeed = getSpeed("slow");
const mediumSpeed = getSpeed("medium");
const fastSpeed = getSpeed("fast");

// 2-3.
interface AddEventListenerOptionsObject {
  capture?: boolean;
  once?: boolean;
  passive?: boolean;
}

declare function addEventListener(
  elm1: string,
  elm2: () => {},
  elm3: boolean | AddEventListenerOptionsObject
): void;

addEventListener("foobar", () => {});
addEventListener("event", () => {}, true);
addEventListener("event2", () => {}, {});
addEventListener("event3", () => {}, {
  capture: true,
  once: false
});

// 2-4.
function giveId<T>(obj: T): T & { id: string }{
  const id = "本当はランダムがいいけどここではただの文字列";
  return {
    ...obj,
    id
  };
}

// 使用例
const obj1: {
  id: string;
  foo: number;
} = giveId({ foo: 123 });

const obj2: {
  id: string;
  num: number;
  hoge: boolean;
} = giveId({
  num: 0,
  hoge: true
});
