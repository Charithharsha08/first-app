import { Link, Slot, usePathname } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import "./../global.css"; // Importing the global CSS file for styles
import FooterNav from "@/Components/FooterNav";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthProvider } from "@/context/AuthContext";

const RootLayout = () => {
   const pathName = usePathname();
   console.log(pathName);

   const hideFooter = ["/login"].includes(pathName);
  return (
    <AuthProvider>
      <SafeAreaView className="flex-1 bg-gray-900 w-100">
        {/* Page Content */}
        <Slot />
        {hideFooter ? null : <FooterNav />}
      </SafeAreaView>
    </AuthProvider>
  );
};

export default RootLayout;
