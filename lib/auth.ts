import { signIn } from "next-auth/react";

export const handleOAuthSignIn = (provider: "google" | "apple") => {
  signIn(provider, {
    callbackUrl: "/dashboard", // Change this to your desired redirect URL
  });
};
