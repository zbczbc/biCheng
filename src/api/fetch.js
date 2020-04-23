import axios from "axios"

import mork from "./mork"
import { isArray } from "common/js/util"

axios.defaults.headers.post['Content-Type'] = 'application/json';

export let isDev = process.env.NODE_ENV == 'development'

export let baseUrl = isDev ? '/api' : "/admin"


export function fetchData( path , opts ) {
    return async (params) => {

        let ret = {}, n_path = path,  url=`${baseUrl}/portal/${path}`;

        if(/{id}/.test(path)) {
            url = url.replace('/{id}', '')
            n_path = path.replace('/{id}', '')
            url = url+'/'+params
        }
        let method = opts && opts.method || 'get'

        let temp = {
            method,
            url,
            params: params,
        }

        if(method == 'post') {
            delete temp.params
            temp.data = params
        }
        await axios(temp).then(res => {
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

export const http = axios.create({
    timeout: 1000 * 30,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
})

export function submitData( path ) {

    return (params) => {
        let formData = new FormData()
        for(let key in params) {
            formData.append(key, params[key])
        }

        return http.post(`${baseUrl}/portal/${path}`,
                    formData,
                        { headers: {'Content-Type': 'application/x-www-form-urlencoded'} })
    }

}
