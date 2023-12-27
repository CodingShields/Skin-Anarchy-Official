// ProtectedLayout.jsx

import React from "react";
import { Route } from "react-router-dom";
import ProtectedRoute from "../components/protectedRoute";

function ProtectedLayout() {
  return (
    <ProtectedRoute>
      <HomeLayout></HomeLayout>
    </ProtectedRoute>
  );
}

export default ProtectedLayout;
