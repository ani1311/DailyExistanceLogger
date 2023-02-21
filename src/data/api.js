import { Buffer } from 'buffer';

export const API_CONTENTS_URL = 'https://api.github.com/repos/ani1311/dailyExistanceLogger/contents';

// api key
const API_KEY = "Z2l0aHViX3BhdF8xMUFIUFBSQVEwVFVYMmh4enlzWkg2X1dMblZkbTZqVUlXNFp5MmlMVUxuV25jbHg0QmtMUVJQbmpxTmRxUTA3cXdVSkdENVFOWW15WGJKVkIx"

function getApiKey() {
    return Buffer.from(API_KEY, 'base64').toString('utf8');
}

export { getApiKey };
