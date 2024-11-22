"use client";

import { UserNav } from "../common/user-nav";
import React from "react";

function UserAppHeader() {
  return (
    <header>
      <nav className="flex justify-between items-center m-4">
        <span className="font-extrabold">
          re<span className="font-extralight">Store</span>
        </span>
        <UserNav />
      </nav>
    </header>
  );
}

export default UserAppHeader;
