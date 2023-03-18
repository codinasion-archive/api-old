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
`;

  const res = await fetch(`${process.env.BACKEND_URL}/github/contributors`, {
    next: { revalidate: 60 },
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${process.env.BACKEND_ACCESS_TOKEN}`,
    },
  });
  const contributorsData = await res.json();

  // get maximum length of login and name
  let max_login_length = 0;
  let max_name_length = 0;

  for (const data of contributorsData) {
    if (data.contributor.login.length > max_login_length) {
      max_login_length = data.contributor.login.length;
    }
    if (data.contributor.name !== null) {
      if (data.contributor.name.length > max_name_length) {
        max_name_length = data.contributor.name.length;
      }
    }
  }

  // sort contributors by login
  contributorsData.sort((a: any, b: any) => {
    if (a.contributor.login < b.contributor.login) {
      return -1;
    }
    if (a.contributor.login > b.contributor.login) {
      return 1;
    }
    return 0;
  });

  // Filter maintainers
  const maintainers = contributorsData.filter(
    (contributor: any) => contributor.maintainer === true
  );

  // Filter team members
  const team_members = contributorsData.filter(
    (contributor: any) =>
      contributor.maintainer === false && contributor.team_member === true
  );

  // Filter contributors
  const contributors = contributorsData.filter(
    (contributor: any) =>
      contributor.maintainer === false && contributor.team_member === false
  );

  // add maintainers to text_header with proper spacing
  for (const data of maintainers) {
    let maintainer_row =
      "https://github.com/" +
      data.contributor.login.padEnd(max_login_length + 1) +
      "\t";
    if (data.contributor.name !== null) {
      maintainer_row += data.contributor.name.padEnd(max_name_length + 1);
    } else {
      maintainer_row += " ".padEnd(max_name_length + 1);
    }
    maintainer_row += "\tMaintainer\n";
    text_header += maintainer_row;
  }

  // add team members to text_header with proper spacing
  for (const data of team_members) {
    let team_member_row =
      "https://github.com/" +
      data.contributor.login.padEnd(max_login_length + 1) +
      "\t";
    if (data.contributor.name !== null) {
      team_member_row += data.contributor.name.padEnd(max_name_length + 1);
    } else {
      team_member_row += " ".padEnd(max_name_length + 1);
    }
    team_member_row += "\tTeam Member\n";
    text_header += team_member_row;
  }

  text_header += `
/* CONTRIBUTORS */
`;

  // add contributors to text_header with proper spacing
  for (const data of contributors) {
    let contributor_row =
      "https://github.com/" +
      data.contributor.login.padEnd(max_login_length + 1) +
      "\t";
    if (data.contributor.name !== null) {
      contributor_row += data.contributor.name.padEnd(max_name_length + 1);
    } else {
      contributor_row += " ".padEnd(max_name_length + 1);
    }
    contributor_row += "\tContributor\n";
    text_header += contributor_row;
  }

  text_header += `
& growing...

/* THANKS */
`;

  return new Response(text_header);
}
