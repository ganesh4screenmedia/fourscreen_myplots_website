import jwtDecode from "jwt-decode";
import { getAdminJwtToken } from "../api/AdminLoginAPiCall";

export const validateEmail = (email) =>
  String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

export const tokenValidation = () => {
  const currentToken = localStorage.getItem("token");
  const tokenDecoded = jwtDecode(currentToken);
  const expiryTime = tokenDecoded?.exp;
  const a = new Date(expiryTime * 1000);
  const b = new Date();

  return new Promise((resolve, reject) => {
    if (a.getTime() <= b.getTime()) {
      getAdminJwtToken(currentToken)
        .then((res) => resolve(res))
        .catch((err) => reject(err))
    } else {
      resolve(currentToken);
    }
  })
}