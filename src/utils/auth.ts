export const loginUser = async (email: string, password: string) => {
  try {
    const res = await fetch("https://test.monkey.slashifytech.in/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) throw new Error("login failed");

    const data: { token: string; } = await res.json();
    return data.token;
  } catch (error) {
    console.error(error);
    return null;
  }
};
