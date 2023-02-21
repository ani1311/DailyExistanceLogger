import { API_CONTENTS_URL } from '../data/api.js';
import { getGithubFile, commitGithubFile, getGithubFileSha } from './githubApiUtils.js';

async function updateHabit(habit, note) {

    let completeDate = new Date();

    // get date of format YYYY-MM-DD
    let date = completeDate.toISOString().split('T')[0];

    // get current time
    let time = String(completeDate.getHours()) + ":" + String(completeDate.getMinutes());


    // split date of format YYYY-MM-DD and store result in a variable of format YYYY/MM
    // get YYYY/MM
    let dateArray = date.split('-');
    let datePath = dateArray.slice(0, 2).join('/');
    let filePath = "logs/" + datePath + '/habits.json';

    // get file from API
    let url = API_CONTENTS_URL + '/' + filePath + '?ref=logs';
    // url = "https://api.github.com/repos/ani1311/dailyExistanceLogger/contents/logs/2022/12/26/100:200.json?ref=logs";

    let contents = await getGithubFile(url);
    if (contents !== "") {
        contents = JSON.parse(contents);
    }


    // file is of format:
    // {
    //      "date": {
    //                  "habit1": "time1",
    //              },
    // }

    if (contents === "") {
        contents = {};
    }
    if (contents[date] === undefined) {
        contents[date] = {};
    }
    if (contents[date][habit] === undefined) {
        contents[date][habit] = {
            "time": time,
            "note": note
        };
    }

    contents = JSON.stringify(contents, null, '\t');
    let sha = await getGithubFileSha(url);
    commitGithubFile(url, contents, "Updated habit " + habit + " for date " + date, sha);
}

export { updateHabit };
