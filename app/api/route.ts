import { NextResponse } from "next/server";

import type { GreetType } from "@/types";

export async function GET() {
  const data: GreetType = {
    message: "Welcome to the Codinasion API 🤗",
    routes: [
      {
        path: "/",
        description: "Codinasion API home",
      },
      //
      // Github routes
      {
        path: "/github/user",
        description: "Get the list of contributors, and their roles",
      },
      {
        path: "/github/user/[username]",
        description: "Get the details of a contributor",
      },
      //
      // Program routes
      {
        path: "/program",
        description: "Get the list of programs",
      },
      {
        path: "/program/[slug]",
        description: "Get the details of a program",
      },
      {
        path: "/program/language",
        description: "Get the list of languages",
      },
      {
        path: "/program/language/[slug]",
        description: "Get the list of programs, having a specific language",
      },
    ],
  };

  return NextResponse.json({ data });
}
