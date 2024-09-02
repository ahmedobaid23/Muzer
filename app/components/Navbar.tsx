"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const Navbar = () => {
  const session = useSession();
  return (
    <div>
      <div className="flex justify-between">
        <div>Muzi</div>

        <div>
          {session.data?.user ? (
            <div>
              Signed In as <b>{session.data.user.email}</b>
              <button onClick={() => signOut()} className="m-2 p-2 bg-blue-400">
                Sign Out
              </button>
            </div>
          ) : (
            <button onClick={() => signIn()} className="m-2 p-2 bg-blue-400">
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
