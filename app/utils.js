const API = process.env.API

export const fetchAPI = async (path) => {

    try {
        const res = await fetch(API + path)

        return res.ok ? { data: await res.json() } : { error: res.statusText }

    } catch (err) {

        return { 
            error: err
        }
        
    }

}