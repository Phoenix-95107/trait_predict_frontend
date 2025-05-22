import { signIn } from "next-auth/react";

export const handleOAuthSignIn = (
  provider: "google" | "apple" | "facebook"
) => {
  signIn(provider, {
    callbackUrl: "/step_1", // Change this to your desired redirect URL
  });
};
