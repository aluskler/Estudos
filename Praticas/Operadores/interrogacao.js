const user = {
  name: "John Doe",
  email: "doejohn@email.com",
  friends: [
    {
      name: "Mary",
      address: {
        street: "Some Street",
        number: 89,
      },
    },
  ],
  age: 42,
  phone: {
    countryCode: "+55",
    ddd: "22",
    number: "998765432",
  },
};

// console.log(user.friends[0].phone.ddd)
console.log(user.friends[0].phone?.ddd);
console.log(user?.brothers?.length);

console.log(user.brothers?.[5].name);

// operador ?? ||

let a = 0;

let b = a || 42;

console.log({ a, b });

b = a ?? 42;

console.log({ a, b });

let c = false ?? 42;

console.log({ c });
