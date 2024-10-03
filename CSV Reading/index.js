import { parse } from "csv-parse";
import fs from 'node:fs'


const resultArray = []

let kepler_data = fs.createReadStream('3.1 kepler_data.csv')
    .pipe(parse({
        comment: '#',
        columns: true
    }))




kepler_data

    .on('data', (data) => { resultArray.push(data) })
    .on('error', (error) => console.log(error))
    .on('end', () => console.log(resultArray, ' this is the end'))



// csv file reading
// console.log(resultArray)