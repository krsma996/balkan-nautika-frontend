// import type {UserLoginModel,UserLoginResponse} from "./UserLoginModel";

// const API_URL = "http://localhost:8081";

// export const loginUser = async (
//   loginData: UserLoginModel
// ): Promise<UserLoginResponse> => {

//   const response = await fetch(`${API_URL}/auth/login`, {
//     method: "POST",

//     headers: {
//       "Content-Type": "application/json",
//     },

//     body: JSON.stringify(loginData),
//   });

//   if (!response.ok) {
//     throw new Error("Neuspešna prijava.");
//   }

//   return response.json();
// };