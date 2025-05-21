"use client";

import { handleOAuthSignIn } from "@/lib/auth";
import { useState } from "react";
import Image from "next/image";

export default function OAuthButtons() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<
    "google" | "apple" | "facebook" | null
  >(null);

  const handleSignIn = async (provider: "google" | "apple" | "facebook") => {
    setIsLoading(provider);
    setError(null);
    try {
      await handleOAuthSignIn(provider);
    } catch (err) {
      setError("Failed to sign in with" + { err } + ". " + "Please try again.");
    } finally {
      setIsLoading(null);
    }
  };

  return (
    <>
      {error && (
        <div className="text-red-500 text-sm text-center mb-4">{error}</div>
      )}
      <div className="space-y-4">
        <button
          type="button"
          onClick={() => handleSignIn("google")}
          disabled={!!isLoading}
          className="w-full flex items-center justify-center px-6 py-5 border border-[#E5E5E5] rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 transition-colors duration-200"
        >
          {isLoading === "google" ? (
            "Signing in..."
          ) : (
            <>
              <Image
                src="/oauth1.svg"
                width={16}
                height={16}
                alt="Google authentication"
                className="mr-3"
                priority
              />
              <p className="font-bold text-base">Continue with Google</p>
            </>
          )}
        </button>
        <button
          type="button"
          onClick={() => handleSignIn("apple")}
          disabled={!!isLoading}
          className="w-full flex items-center rounded-[14px] justify-center px-6 py-5 border border-[#E5E5E5] shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 transition-colors duration-200"
        >
          {isLoading === "apple" ? (
            "Signing in..."
          ) : (
            <>
              <Image
                src="/oauth2.svg"
                width={16}
                height={16}
                alt="Apple authentication"
                className="mr-2"
                priority
              />
              <p className="font-bold text-base">Continue with Apple</p>
            </>
          )}
        </button>
        <button
          type="button"
          onClick={() => handleSignIn("facebook")}
          disabled={!!isLoading}
          className="w-full flex items-center rounded-[14px] justify-center px-6 py-5 border border-[#E5E5E5] shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 transition-colors duration-200"
        >
          {isLoading === "facebook" ? (
            "Signing in..."
          ) : (
            <>
              <Image
                src="/oauth3.svg"
                width={16}
                height={16}
                alt="Facebook authentication"
                className="mr-2"
                priority
              />
              <p className="font-bold text-base">Continue with Facebook</p>
            </>
          )}
        </button>
      </div>
    </>
  );
}
