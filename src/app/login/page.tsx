"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "../../utils/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleLogin = async (): Promise<void> => {
    setError("");
    const token = await loginUser(email, password);

    if (token) {
      localStorage.setItem("authToken", token);
      router.push("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-white">
      <div className="w-full max-w-sm p-6 rounded shadow-md border border-red-600">
        <h1 className="text-2xl font-bold text-red-600 mb-4 text-center">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-red-600 rounded px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-red-600"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-red-600 rounded px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-red-600"
        />

        {error && <p className="text-red-600 mb-3 text-center">{error}</p>}

        <button
          onClick={handleLogin}
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}
