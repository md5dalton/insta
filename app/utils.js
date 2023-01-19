const API = process.env.API

export const fetchAPI = async (path) => {

    try {
        const res = await fetch(API + path, {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        })

        return res.ok ? { data: await res.json() } : { error: res.statusText }

    } catch (err) {

        return { 
            error: err
        }
        
    }

}