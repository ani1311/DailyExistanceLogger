import { API_CONTENTS_URL } from '../data/api.js';
import { commitGithubFile, getGithubFileSha } from './githubApiUtils.js';

function commitNewLog(log) {
    let date = log['date'];

    console.log(date);

    // split date of format YYYY-MM-DD and store result in a variable of format YYYY/MM/DD
    let dateArray = date.split('-');
    let datePath = dateArray.join('/');
    let fileName = log['startTime'] + "00:" + log['endTime'] + '00.json';
    datePath = "logs/" + datePath;

    let url = API_CONTENTS_URL + '/' + datePath + '/' + fileName;
    let fileContent = JSON.stringify(log);

    let sha = getGithubFileSha(url);

    commitGithubFile(url, fileContent, 'New log for date ' + date + ' and time ' + log['startTime'] + '00 to ' + log['endTime'] + '00', sha);

    // let api_key = getApiKey();

    // fetch(url, {
    //     method: 'PUT',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Bearer ' + api_key,
    //     },
    //     body: JSON.stringify({
    //         message: 'New log for date ' + date + ' and time ' + log['startTime'] + '00 to ' + log['endTime'] + '00',
    //         content: fileContent,
    //         branch: 'logs'
    //     }),
    // }).then((response) => {
    // }).catch((error) => console.error(error));

}

export { commitNewLog };
