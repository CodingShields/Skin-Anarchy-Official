import React from "react";
import { Route, Outlet, Navigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

export default function ProtectedRoute() {
	const { user } = UserAuth();

	if (!user) {
	
		return <Navigate to='/SignUp' />;
	}
	return <Navigate to='/' />;
}
#set a new remote

git remote add my_awesome_new_remote_repo git@git.assembla.com:portfolio/space.space_name.git


#Verify new remote

git remote -v