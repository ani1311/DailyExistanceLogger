import { Buffer } from 'buffer';

// base url
const BASE_URL = 'https://api.github.com/repos/ani1311/dailyExistanceLogger/contents';

// api key
const API_KEY = "Z2l0aHViX3BhdF8xMUFIUFBSQVEwVFVYMmh4enlzWkg2X1dMblZkbTZqVUlXNFp5MmlMVUxuV25jbHg0QmtMUVJQbmpxTmRxUTA3cXdVSkdENVFOWW15WGJKVkIx"

function commitNewLog(log) {
    let date = log['date'];

    console.log(date);

    // split date of format YYYY-MM-DD and store result in a variable of format YYYY/MM/DD
    let dateArray = date.split('-');
    let datePath = dateArray.join('/');
    let fileName = log['startTime'] + "00:" + log['endTime'] + '00.json';
    datePath = "logs/" + datePath;

    let url = BASE_URL + '/' + datePath + '/' + fileName;
    let fileContent = Buffer.from(JSON.stringify(log)).toString('base64')

    let api_key = Buffer.from(API_KEY, 'base64').toString('utf8');

    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + api_key,
        },
        body: JSON.stringify({
            message: 'New log for date ' + date + ' and time ' + log['startTime'] + '00 to ' + log['endTime'] + '00',
            content: fileContent,
            branch: 'logs'
        }),
    }).then((response) => response.json()).catch((error) => console.error(error));




}

export { commitNewLog };
