import Str from './Support/Str.js';
import Request from './Request.js';
import Response from './Response.js';

export default async () => {
    global.Str = Str;
    global.Request = Request;
    global.Response = Response;
};
