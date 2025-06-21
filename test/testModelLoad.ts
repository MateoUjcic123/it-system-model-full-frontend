// test/testModelLoad.ts
import { ITSystemModel } from '../models/input_models/ITSystemModel';
import * as fs from 'fs';

const data = JSON.parse(fs.readFileSync('./data/inputs-7-1500-0.json', 'utf-8'));
const model = new ITSystemModel(data);

console.log('Loaded model with', model.data_collections.length, 'data collections.');
//data\inputs-7-1500-0.json