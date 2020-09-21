import { authHeader } from "../_helpers";
import axios from "axios";

const login = async (username, password) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/todoapp-a550d/us-central1/api/login`,
      {
        email: username,
        password,
      }
    );

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const userService = { login };
