// src/api/index.js
import { useMutation } from "@tanstack/react-query";
import http from "./http";

// Login
export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (payload) => http.post("/auth/login", payload),
  });
};