
export default class GithubApi {
    constructor() {
        this._apiBase = `https://api.github.com`;
    }

    async getResource(url) {
        try {
            let response =  await fetch(`${this._apiBase}/${url}`, {
                method: 'GET',
                headers: {
                    accept: 'application/vnd.github.v3+json',
                    Authorization: "Token d2d3c32abcc80e9049de191eb51de1856f2e6873",
                }
            });

            if(!response.ok) {
                throw new Error(`Could not fetch ${url}, ${response.status}`);
            }

            const results = await response.json();
            return results;

        } catch(error) {
            console.log(error.message);
        }
    }

    async getUsers(username) {
        return this.getResource(`repos/${username}`);
    }

    _transformUserData(data) {
        return {
            owner: data.owner.login,
            name: data.name,
            fullName: data.full_name,
            stars: data.stargazers_count,
            lastCommitData: data.updated_at,
            gitHubUrl: data.html_url,
        };
    }
}