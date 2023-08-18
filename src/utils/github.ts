const gitHubApiUrl = "https://api.github.com/repos/";

export async function getRepoData(owner: string, repo: string) {
  return fetch(gitHubApiUrl + owner + "/" + repo, {
    headers: {
      Authorization: `Bearer ${import.meta.env.GITHUB_TOKEN}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  })
}
