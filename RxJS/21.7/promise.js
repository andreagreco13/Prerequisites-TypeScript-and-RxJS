const apiurl = 'https://jsonplaceholder.typicode.com/albums';
import { from } from 'rxjs';
import fetch from 'node-fetch';

const promise = fetch(apiurl)
    .then(body => body.json())
    .then(res => console.log(res)); 