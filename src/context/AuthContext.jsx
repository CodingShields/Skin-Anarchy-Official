import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "../fireBase/firebaseConfig";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useUserStoreActions } from "../stateStore/userStore";
import { useUserStore } from "../stateStore/userStore";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const birthday = useUserStore((state) => state.birthday);
  const podcastNotification = useUserStore(
    (state) => state.podcastNotification,
  );
  const upComingNotifications = useUserStore(
    (state) => state.upComingNotifications,
  );
  const blogNotification = useUserStore((state) => state.blogNotification);
  const weeklyNewsletterNotification = useUserStore(
    (state) => state.weeklyNewsletterNotification,
  );
  const { resetForm } = useUserStoreActions((actions) => actions);
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const createUser = async ({
    firstName,
    lastName,
    email,
    phone,
    password,
  }) => {
    try {
      const authUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      await updateProfile(authUser.user, {
        displayName: `${firstName}`,
        phoneNumber: phone,
      });
      const userDocRef = doc(db, "users", authUser.user.uid);
      await setDoc(userDocRef, {
        profile: {
          first: firstName,
          last: lastName,
          email: email,
          phone: phone,
          signUpDate: new Date(),
          uid: authUser.user.uid,
          birthday: birthday,
          podcastNotification: podcastNotification,
          upComingNotifications: upComingNotifications,
          blogNotification: blogNotification,
          weeklyNewsletterNotification: weeklyNewsletterNotification,
          adminAccess: false,
          lastLogin:null
        },
      });
      resetForm();
      console.log("User document added successfully");
    } catch (error) {
      throw error;
    }
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    console.log("working");
    resetForm();
    navigate("/");
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // User is authenticated
      if (currentUser) {
        setUser(currentUser);
        console.log("current", currentUser);
      } else {
        // User is not authenticated
        setUser(null);
        console.log("logged out", currentUser);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ createUser, user, logout, signIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
