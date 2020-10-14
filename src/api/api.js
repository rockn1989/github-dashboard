
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
                }
            });
            if(response.ok) {
                const results = await response.json();
                return results;
            } else {
                throw new Error(`Could not fetch ${url}, ${response.status}`);
            }
        } catch(error) {
            console.log(error.message);
        }
    }

    async getUsers(username) {
        try {
            this.getResource(`${'repos/' + username}`)
        } catch(error) {
            console.log(error.message);
        }
    }
}