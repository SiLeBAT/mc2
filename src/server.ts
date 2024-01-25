import express from 'express';
import ParseDashboard from 'parse-dashboard';
import { AppConfigCollection } from './types';

const app = express();

function createServer(configs: AppConfigCollection) {
    const dashboard = new ParseDashboard(configs);
    app.use('/', dashboard);
    app.listen(process.env.port || 3003);
    console.log('Web Server is listening at port ' + (process.env.port || 3003));
}



export {
    createServer
};




