"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = (function fetchUser() {
    return {
        status: 200,
        payload: { id: 1, username: "Mohamed" },
    };
})();
const company = (function fetchCompany() {
    return {
        status: 200,
        payload: { id: 1, name: "Almdrasa", numberOfCourses: 100 },
    };
})();
const response = user;
const response2 = company;
console.log(response.payload.username);
console.log(response2.payload.name);
//# sourceMappingURL=challenge2.js.map