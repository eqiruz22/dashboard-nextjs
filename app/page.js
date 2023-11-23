"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const Homepage = () => {
  useEffect(() => {
    return redirect("http://localhost:3000/dashboard");
  }, []);
};

export default Homepage;
