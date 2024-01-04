import React from "react";
import { auth } from "../firebase";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const user = auth.currentUser;

  // 유저 정보가 없으면 login 페이지 이동
  if (user === null) {
    return <Navigate to="/login" />;
  }

  return children;
}
