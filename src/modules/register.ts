require('dotenv').config();
import request  from 'request-promise'
import authentication from './auth'
import { getConfig } from '../setup.config';

const register = async () => {
    const token = await authentication()
    const config = getConfig();

    const body = {
        first_name: config.registerFirstName,
        last_name: config.registerLastName,
        email: config.registerEmail,
        org: config.registerOrg
    }

    const headers = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
    }
    const options = {
        url: `${config.zoomUrl}/${config.webinarId}/registrants`,
        headers: headers,
        method: 'POST',
        body: JSON.stringify(body)
    }

    const response = await request(options)
    console.log(JSON.parse(response))
}

try {
    register()
} catch (error) {
    console.log(error)
}
