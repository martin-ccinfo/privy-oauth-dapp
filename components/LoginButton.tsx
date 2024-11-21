'use client';

import React from "react";
import { useRouter } from "next/navigation";
import { useLogin } from "@privy-io/react-auth";

const LoginButton = () => {
  const router = useRouter();
  const { login } = useLogin({
    onComplete: () => router.push("/dashboard"),
  });

  return (
    <button
      className="bg-violet-600 hover:bg-violet-700 py-3 px-6 text-white rounded-lg"
      onClick={login}
    >
      Log in
    </button>
  );
};

export default LoginButton;
