import { User } from "./models";
import { connectionDB } from "./utils";

export const fetchUser = async (search) => {
  const regex = new RegExp(search, "i");
  try {
    connectionDB();
    const users = await User.find({ username: { $regex: regex } });
    console.log(users);
    return users;
  } catch (error) {
    console.log(error);
  }
};
