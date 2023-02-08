const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 14,
    },
  ];

const underFifteen = () => {
    return team.every(person => person.age < 15)
    // false if anybody is older that fifteen
}

console.log(underFifteen());