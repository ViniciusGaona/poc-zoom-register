import request  from 'request-promise'
import { getConfig } from '../setup.config';

const authentication = async () => {
    const config = getConfig()

    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + Buffer.from(`${config.zoomClientId}:${config.zoomClientSecret}`).toString('base64')
    }
    
    const options = {
        url: `${config.zoomAuthUrl}?grant_type=account_credentials&account_id=${config.zoomAccountId}`,
        headers: headers,
        method: 'POST',
    }

    const response = await request(options)
    const { access_token } = JSON.parse(response)
    return access_token
}

export default authentication 
