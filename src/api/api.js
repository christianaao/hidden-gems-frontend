import axios from "axios";
const hiddenGemsApi = axios.create({
  baseURL: "https://hidden-gems-cd0h.onrender.com/api",
});