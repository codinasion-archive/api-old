import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const res = {
    message: "Welcome to the Codinasion API 🤗",
    routes: [
      {
        path: "/contributors",
        description: "List of all contributors",
      },
      {
        path: "/good-1st-issue",
        description: "List of good first issues",
      },
      {
        path: "/good-1st-issue/labels",
        description: "List of good first issue labels",
      },
      {
        path: "/good-1st-issue/labels/[label]",
        description: "List of good first issues with a specific label",
      },
      {
        path: "/humans.txt",
        description: "Humans.txt file",
      },
      {
        path: "/og?path=[path]",
        description: "Open Graph images of Codinasion",
      },
      {
        path: "/program",
        description: "List of programs",
      },
      {
        path: "/program/[slug]",
        description: "Detail of a program",
      },
      {
        path: "/program/tags",
        description: "List of program tags",
      },
      {
        path: "/program/tags/[tag]",
        description: "List of programs with a specific tag",
      },
      {
        path: "/tools",
        description: "List of @codinasion/tools",
      },
      {
        path: "/tools/[slug]",
        description: "Detail of a tool",
      },
      {
        path: "/tools/tags",
        description: "List of tool tags",
      },
      {
        path: "/tools/tags/[tag]",
        description: "List of tools with a specific tag",
      },
    ],
  };

  return NextResponse.json(res);
}
