export async function GET(request: Request) {
  const res = {
    message: "Welcome to the Codinasion API 🤗",
    routes: [
      {
        path: "/contributors",
        description: "List of all contributors",
      },
      {
        path: "/good1stissue",
        description: "List of good first issues",
      },
      {
        path: "/good1stissue/labels",
        description: "List of good first issue labels",
      },
      {
        path: "/humans.txt",
        description: "Humans.txt file",
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
    ],
  };

  return new Response(JSON.stringify(res));
}
