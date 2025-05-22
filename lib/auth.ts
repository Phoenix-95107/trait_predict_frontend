import { signIn } from "next-auth/react";

export const handleOAuthSignIn = (
  provider: "google" | "apple" | "facebook"
) => {
  signIn(provider, {
    callbackUrl: "/upload_image", // Change this to your desired redirect URL
  });
};
