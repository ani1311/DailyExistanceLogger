
import { Buffer } from 'buffer';
import { getApiKey } from '../data/api';

async function getGithubFile(url) {
    let api_key = getApiKey();

    return await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + api_key,
        },
    }).then((response) => {
        if (!response.ok) {
            console.log("Error in fetching file from github")
            return "";
        }
        return response.json();
    }).then((data) => {
        if (data === "") {
            return "";
        }
        return Buffer.from(data['content'], 'base64').toString('utf8');
    }).catch((error) => {
        console.log(error);
        return "";
    });
}

async function getGithubFileSha(url) {
    let api_key = getApiKey();

    return await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + api_key,
        },
    }).then((response) => {
        if (!response.ok) {
            console.log("Error in fetching file from github")
            return "";
        }
        return response.json();
    }).then((data) => {
        if (data === "") {
            return "";
        }
        return data['sha'];
    }).catch((error) => {
        console.log(error);
        return "";
    });
}


async function commitGithubFile(url, fileContent, message, sha) {
    let api_key = getApiKey();

    let fileContentb64 = Buffer.from(fileContent).toString('base64')

    let body = {
        message: message,
        content: fileContentb64,
        branch: 'logs',
    }
    if (sha !== "") {
        body['sha'] = sha;
    }

    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + api_key,
        },
        body: JSON.stringify(body),
    }).then((response) => {
        if (!response.ok) {
            // log response body
            return response.body
        }
    }).then(async (data) => {
        // read data
        let text = await new Response(data).text();
        console.log(text);
    }).catch((error) => console.error(error));


}

export { getGithubFile, commitGithubFile, getGithubFileSha };
