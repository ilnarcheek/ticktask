import toast from "react-hot-toast";
import supabase from "./supabase";

export async function signInUser(email: string, password: string) {
  const { data: userData, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    toast.error("Не удалось найти пользователя с таким логином и паролем");
    return;
  }

  const { data: profileData } = await supabase
    .from("profiles")
    .select("id, username, avatar")
    .eq("user_id", userData.user.id);

  if (profileData) {
    const finalUserData = {
      userId: userData.user.id,
      profileId: profileData[0].id,
      avatar: profileData[0].avatar,
      username: profileData[0].username,
    };

    localStorage.setItem("user", JSON.stringify(finalUserData));
    return finalUserData;
  } else {
    return {
      userId: "",
      profileId: "",
      avatar: "",
      username: "",
    };
  }
}

export async function signOutUser() {
  localStorage.removeItem("user");
  return await supabase.auth.signOut();
}
