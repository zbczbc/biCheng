import axios from "axios"

import mork from "./mork"
import { isArray } from "common/js/util"

axios.defaults.headers.post['Content-Type'] = 'application/json';


let isDev = process.env.NODE_ENV == 'development'

export let baseUrl = isDev ? '/api' : "/admin"


export function fetchData( path , opts ) {
    return async (params) => {

        let ret = {}, n_path = path,  url=`${baseUrl}/portal/${path}`;

        if(/{id}/.test(path)) {
            url = url.replace('/{id}', '')
            n_path = path.replace('/{id}', '')
            url = url+'/'+params
        }

        await axios({
            method: opts && opts.method || 'get',
            url,
            //cache:false,
            params: params,
        }).then(res => {
            let data = res.data
            if(data.code == 0) {
                ret = data.data
                
            }
            //ret = mork[n_path]
        }).catch(err => {
            ret = mork[url]
        })
        
        return ret
    }
    // return 
}