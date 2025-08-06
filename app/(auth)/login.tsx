import { Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import { useAuth } from "@/context/AuthContext";

export default function Login() {

     const [Username, setUserName] = React.useState("");
     const [Password, setPassword] = React.useState("");

    const { isLoggedIn, login, logout } = useAuth();

    const router = useRouter();

    const handleLogin = () => {
        if (Username === "admin" && Password === "admin") {
          console.log("Login successful");
          // Navigate to the profile page or perform any other action
          router.replace("/"); // Use replace to avoid going back to login on back press
          // or you can use router.push("/profile") if you want to keep the login in the history stack
          // This will navigate to the profile page
          setUserName(""); // Clear the username field
          setPassword(""); // Clear the password field
          login();
          return; // Stop further execution
        } else {
            console.log("Login failed");
            // Show an error message or handle the failed login
            alert("Invalid credentials. Please try again.");
            setUserName("");
            setPassword("");
            // Optionally, you can reset the form or redirect to another page
            // router.push("/"); // Redirect to home or another page
            // return; // If you want to stop further execution
            // or you can just return to stop further execution
            //  
            return;
        }  
    }
  return (
    <View className="flex-1 items-center justify-center px-6 bg-white">
      <Text className="text-2xl font-bold mb-6">Login</Text>

      <TextInput
        placeholder="Username"
        className="w-full border border-gray-300 rounded-md p-3 mb-4"
        value={Username}
        onChangeText={setUserName}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        className="w-full border border-gray-300 rounded-md p-3 mb-4"
        value={Password}
        onChangeText={setPassword}
      />

      {/* <Pressable></Pressable> as like touchable opacity */}

      <TouchableOpacity
        className="bg-blue-500 w-full p-3 rounded-md mb-4 "
        onPress={handleLogin}
      >
        <Text className="text-white text-center font-semibold">Login</Text>
      </TouchableOpacity>

      <Link href="/" className="text-gray-500 text-base">
        Back
      </Link>
    </View>
  );
}
