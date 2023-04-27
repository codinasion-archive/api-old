type ProgramListResponseType = {
  id: number;
  slug: string;
  track_id: 4544;
  last_updated: string;
  languages: string[];
  contributors: string[];
};

type LanguageResponseType = {
  name: string;
  extension: string;
  naming_convention: string;
  prismTag: string;
  logo: string;
};

type ProgramResponseType = {
  id: number;
  slug: string;
  description: string;
  track_id: number;
  last_updated: string;
  languages: string[];
  contributors: string[];
  codes: {
    language: LanguageResponseType;
    code: string;
  }[];
};

export type {
  ProgramListResponseType,
  ProgramResponseType,
  LanguageResponseType,
};
