import axios from "axios"
import {
  BCNCONNECTOR_USERNAME,
  BCNCONNECTOR_PASSWORD
} from "react-native-dotenv"
const bcnconnector = axios.create({
  baseURL: "https://devstringx.com",
  auth: { username: BCNCONNECTOR_USERNAME, password: BCNCONNECTOR_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
