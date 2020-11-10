const tUnixTime = new Date("2020", "11", "9").getTime();
const date = new Date("2020", "11", "10");

const CASES = [
  {
    title: "Passing `undefined` to function.",
    arg: [undefined, undefined],
  },
  {
    title: "Passing a timestamp to function.",
    arg: [tUnixTime, tUnixTime],
  },
  {
    title: "Passing a Date object to function.",
    arg: [date, date],
  },
];

export default CASES;
