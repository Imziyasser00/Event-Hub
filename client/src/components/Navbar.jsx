import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { BsTicketPerforatedFill } from "react-icons/bs";



const Navbar = () => {



  return (
    <div className="w-full h-16 py-6">
      <div className="flex justify-between items-center  px-5">
        <div className="text-3xl font-bold">
        <a href="/">
        Event <span className="text-primary">Hub</span>
        </a>
        </div>
        <div>
          <SignedOut>
            <div className=" text-white bg-primary rounded-lg hover:bg-darkPrimary transition-all">
                <SignInButton className="py-2 px-6"/>
            </div>
          </SignedOut>
          <SignedIn>
          <div className="flex justify-between items-center">
            <div className="pr-8">
              <a href="/tickets" className="text-primary font-bold flex items-center gap-2">
              <BsTicketPerforatedFill />
                My Tickets
              </a>
            </div>
            <UserButton />
          </div>
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
