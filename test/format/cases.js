const CASES = [
  {
    title: "Passing `undefined` to function.",
    arg: undefined,
  },
  {
    title: "Passing a timestamp to function.",
    arg: new Date("2020", "11", "10", "17", "30").getTime(),
  },
  {
    title: "Passing a Date object to function.",
    arg: new Date("2020", "11", "10"),
  },
];

export default CASES;
