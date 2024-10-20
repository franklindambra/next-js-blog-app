import React from "react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Form from "@/components/form";


export default async function Page() {

  return (
    <main className="text-center pt-16 items-center">
      <h1 className="text-4xl font-bold md:text-5xl mb-5">Create Post</h1>

<Form/>
      <LogoutLink className=" p-4 rounded mt-20">Log out</LogoutLink>
    </main>
  );
}
