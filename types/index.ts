type RouteType = {
  path: string;
  description: string;
};

type GreetType = {
  message: string;
  routes: RouteType[];
};

export type { GreetType, RouteType };
