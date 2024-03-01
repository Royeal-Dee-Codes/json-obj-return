// 1st Challenge

// Create a mock user json object. It should include the following:

// At least 3 (three) users
// User objects should include the following data:
// Id
// Name
// Email
// Password
// Use an array method to log a templated user greeting for each user
// Here is an example output your program should create:

// 'Hello, ryan, your email is ryan@ryan.com'

const mockUsers = [
  {
    id: 1,
    name: "Person One",
    email: "person.one@email.com",
    password: "Person.One123!",
  },
  {
    id: 2,
    name: "Person Two",
    email: "person.two@email.com",
    password: "Person.Two123!",
  },
  {
    id: 3,
    name: "Person Three",
    email: "person.three@email.com",
    password: "Person.Three123!",
  },
];

mockUsers.forEach((user) => {
  console.log("Challenge 1 Answer");
  console.log(`Hello, ${user.name}, your email is ${user.email}`);
});

// 2nd Challenge

// In class we built an xmlhttprequest function. In this exercise you will "promisfy" the xmlhttprequest function (which means it will return a promise).

// You promisified function will do the following:
// Appropriately resolve and reject that promise
// Store the promise in a variable
// Catch any errors
// Contain at least 2 (two) then statements
// 1st then statement will log the data
// 2nd then statement will log a specific data point
// Fetch data from the SWAPI API https://swapi.tech. (Documentation found at https://swapi.tech./documentation)
// Make the "promisfy" using dynamic features including:
// Alerts
// Prompts
// And any other dynamic feature we either covered or not covered in class.

function fetchSwapi(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject("Error fetching data");
        }
      }
    };
    xhr.send();
  });
}

const swapiUrl = "https://swapi.tech/api/planets/22";
const promise = fetchSwapi(swapiUrl);

promise
  .then((data) => {
    console.log("Challenge 2 Answer");
    alert("Swapi Data fetched successfully");
    console.log("Data:", data);
    return data.name;
  })
  .then((name) => {
    console.log("Name:", name);
  })
  .catch((error) => {
    alert(`Error fetching Swapi data: ${error}`);
    console.error("Error:", error);
  });
