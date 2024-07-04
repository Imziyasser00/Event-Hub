import React, { useState, useEffect } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { MdEventAvailable } from "react-icons/md";
import { useUser } from "@clerk/clerk-react";
import { MdDashboard } from "react-icons/md";
import { BsTicketPerforatedFill } from "react-icons/bs";

const Navbar = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const [isAdmin, setIsAdmin] = useState(false);

  console.log(import.meta.env.VITE_ADMIN_USER_ID);

  useEffect(() => {
    if (isSignedIn) {
      const userId = user.id;
      if (userId === import.meta.env.VITE_ADMIN_USER_ID) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    }
  }, [isSignedIn, isLoaded]);

  return (
    <div className="w-full h-16 py-6">
      <div className="flex justify-between items-center px-5">
        <div className="text-4xl font-bold">
          <a href="/">
            Event <span className="text-primary">Hub</span>
          </a>
        </div>
        <div className="hidden md:block">
          <SignedOut>
            <div className=" text-white bg-primary rounded-lg hover:bg-darkPrimary transition-all">
              <SignInButton className="py-2 px-6" />
            </div>
          </SignedOut>
          <SignedIn>
            <div className="flex justify-between items-center">
              <div className="pr-8">
                <a
                  href="/dashboard"
                  className="text-primary font-bold flex items-center gap-2"
                >
                  <MdDashboard />
                  Dashboard
                </a>
              </div>
              <div className="pr-8">
                <a
                  href="/events"
                  className="text-primary font-bold flex items-center gap-2"
                >
                  <MdEventAvailable />
                  All Events
                </a>
              </div>
              <div className="pr-8">
                <a
                  href="/tickets"
                  className="text-primary font-bold flex items-center gap-2"
                >
                  <BsTicketPerforatedFill />
                  My Tickets
                </a>
              </div>
              {isAdmin && (
                <div className="pr-8">
                  <a
                    href="/dashboard"
                    className="text-primary font-bold flex items-center gap-2"
                  >
                    <MdDashboard />
                    My Dashboard
                  </a>
                </div>
              )}{" "}
              {/* Render admin button if isAdmin */}
              <UserButton />
            </div>
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
