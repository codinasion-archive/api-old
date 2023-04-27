type GithubUserResponseType = {
  id: number;
  login: string;
};

type GithubUserListResponseType = {
  user: GithubUserResponseType;
  role: string;
};

export type { GithubUserListResponseType, GithubUserResponseType };
