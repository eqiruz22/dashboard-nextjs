import { redirect } from "next/navigation";
import { User } from "./models";
import { connectionDB } from "./utils";
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt";
export const addUser = async (formData) => {
  "use server";
  const { username, password, email, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);
  try {
    connectionDB();
    const hashPassword = await bcrypt.hash(password, 10);
    const add = new User({
      username,
      password: hashPassword,
      email,
      phone,
      address,
      isAdmin,
      isActive,
    });
    await add.save();
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData) => {
  const { _id, username, password, email, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);
  try {
    connectionDB();
    const hashPassword = await bcrypt.hash(password, 10);
    const updates = new User({
      username,
      password: hashPassword,
      email,
      phone,
      address,
      isAdmin,
      isActive,
    });
    Object.keys(updates).forEach(
      (key) => (updates[key] === "" || undefined) && delete updates[key]
    );
    await User.findByIdAndUpdate(_id, updates);
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const deleteUser = async (formData) => {
  "use server";
  const { _id } = Object.fromEntries(formData);
  try {
    connectionDB();
    await User.findByIdAndDelete(_id);
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};
