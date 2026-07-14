type User = {
  status: number;
  payload: {
    id: number;
    username: string;
  };
};

type Company = {
  status: number;
  payload: {
    id: number;
    name: string;
    numberOfCourses: number;
  };
};

// const user: User = (function fetchUser(): User {
//   return {
//     status: 200,
//     payload: { id: 1, username: "Mohamed" },
//   };
// })();

// const company: Company = (function fetchCompany(): Company {
//   return {
//     status: 200,
//     payload: { id: 1, name: "Almdrasa", numberOfCourses: 100 },
//   };
// })();

// const response = user;
// const response2 = company;

type Id = { id: number };
type apiResponse<T> = () => {
  status: number;
  payload: T & Id;
};

const fetchUser: apiResponse<{ username: string }> = function () {
  return {
    status: 200,
    payload: { id: 1, username: "Mohamed" },
  };
};

const fetchCompany: apiResponse<{
  name: string;
  numberOfCourses: number;
}> = function () {
  return {
    status: 200,
    payload: { id: 1, name: "Almdrasa", numberOfCourses: 100 },
  };
};

const response = fetchUser();
const response2 = fetchCompany();

console.log(response.payload.username);
console.log(response2.payload.name);
