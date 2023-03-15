export async function GET(request: Request) {
  let text_header = `

   __
  /  )          /                _  
 /      _    __/  - __    _    /_   -  _   __
(___/  (_)  (_/  /  / (  (_(_  _/  /  (_)  / (


The humans.txt file explains the team, technology, and assets 
behind this site.

_______________________________________________________________________________


/* PROJECT */
Site Name:   Codinasion
Site URL:    https://codinasion.org
Created:     2022-01-26
Web Design:  Harsh Raj @ Codinasion


/* META */
Title:       Codinasion
Description: Collaborate, Create, Innovate : Together with Open Source ❤️ . Codinasion is an Open Source community, dedicated to Open Source projects.
Built with:  Nextjs, Github API, Giscus, and many more.
Powered by:  Vercel


/* SOCIAL */
Website:     https://codinasion.org
Github:      https://github.com/codinasion
Twitter:     https://twitter.com/codinasion


/* TEAM */
https://github.com/harshraj8843         Harsh Raj             Maintainer
https://github.com/0ME9A                Baliram Singh         Maintainer
https://github.com/victoriacheng15      Victoria Cheng        Maintainer
https://github.com/joao-vitor-souza     João Vitor            Team Member
https://github.com/anandfresh           Anandha Krishnan S    Team Member
https://github.com/tanishq-singh-2407   Tanishq Singh         Team Member
https://github.com/grraghav120          RAGHAV GARG           Team Member
https://github.com/PaoloFer             Paolo Ferrari         Team Member
https://github.com/SpirosArk            Spiros Arkoudelis     Team Member
https://github.com/PrajwalBorkar        Prajwal               Team Member
https://github.com/vedantpople4         Vedant Pople          Team Member
https://github.com/brundabharadwaj      Brunda M Bharadwaj    Team Member
https://github.com/TechnicalAmanjeet    Amanjeet Kumar        Team Member
https://github.com/MadhuS-1605          Madhu S Gowda         Team Member
https://github.com/hi-Kartik2004        Kartikeya Saini       Team Member
https://github.com/PraaneshSelvaraj     Praanesh S            Team Member


/* CONTRIBUTORS */
`;

  const res = await fetch(`${process.env.BACKEND_URL}/github/contributors`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${process.env.BACKEND_ACCESS_TOKEN}`,
    },
  });
  const contributors = await res.json();

  // get maximum length of login and name
  let max_login_length = 0;
  let max_name_length = 0;

  for (const contributor of contributors) {
    if (contributor.login.length > max_login_length) {
      max_login_length = contributor.login.length;
    }
    if (contributor.name !== null) {
      if (contributor.name.length > max_name_length) {
        max_name_length = contributor.name.length;
      }
    }
  }

  // sort contributors by login
  contributors.sort((a: any, b: any) => {
    if (a.login < b.login) {
      return -1;
    }
    if (a.login > b.login) {
      return 1;
    }
    return 0;
  });

  // add contributors to text_header with proper spacing
  for (const contributor of contributors) {
    let contributor_row =
      "https://github.com/" +
      contributor.login.padEnd(max_login_length + 1) +
      "\t";
    if (contributor.name !== null) {
      contributor_row += contributor.name.padEnd(max_name_length + 1);
    } else {
      contributor_row += " ".padEnd(max_name_length + 1);
    }
    contributor_row += "\tContributor\n";
    text_header += contributor_row;
  }

  return new Response(text_header);
}
