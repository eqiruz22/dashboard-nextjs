import { User } from "./models";
import { connectionDB } from "./utils";

export const fetchUser = async (search, page) => {
  const regex = new RegExp(search, "i");
  const itemPage = 2;
  try {
    connectionDB();
    const count = await User.find({
      username: { $regex: regex },
    }).countDocuments();
    const users = await User.find({ username: { $regex: regex } })
      .limit(itemPage)
      .skip(itemPage * (page - 1));
    console.log(users);
    return { count, users };
  } catch (error) {
    console.log(error);
  }
};
