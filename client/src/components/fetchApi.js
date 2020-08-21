import { axiosWithAuth } from '../axiosWithAuth'

export function fetchApi() {
    return axiosWithAuth()
    .get('/colors')
    .then(res => {
        // console.log(res)
        return res
    })
    .catch(err => {
        console.log(err)
    
    })
}
