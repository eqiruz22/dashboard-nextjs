import { User } from "./models";
import { connectionDB } from "./utils";

export const fetchUser = async (search, page) => {
  const regex = new RegExp(search, "i");
  const itemPage = 10;
  try {
    connectionDB();
    const count = await User.find({
      username: { $regex: regex },
    }).countDocuments();
    const users = await User.find({ username: { $regex: regex } })
      .limit(itemPage)
      .skip(itemPage * (page - 1));
    return { count, users };
  } catch (error) {
    console.log(error);
  }
};

export const fetchUserById = async (id) => {
  try {
    connectionDB();
    const user = await User.findById(id);
    console.log(user);
    return user;
  } catch (error) {
    console.log(error);
  }
};
