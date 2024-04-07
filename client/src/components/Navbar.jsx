import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <div className="w-full h-full py-6">
      <div className="flex justify-between items-center  px-5">
        <div className="text-3xl font-bold">
          Event <span className="text-primary">Hub</span>
        </div>
        <div>
          <SignedOut>
            <div className=" text-white bg-primary rounded-lg hover:bg-darkPrimary transition-all">
                <SignInButton className="py-2 px-6"/>
            </div>
          </SignedOut>
          <SignedIn>
            <div className="">
              <UserButton />
            </div>
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
