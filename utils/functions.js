import { API } from "./constants"

export const fetcher = async (...args) => {
    const res = await fetch(...args, {
        headers: {
            // "Access-Control-Allow-Origin": "*"
        }
    })
    return await res.json()
}

export const shuffle = ( arr ) => {
    
    const array = [...arr]

    let currentIndex = array.length,  randomIndex
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]]
    }
  
    return array

}

export const array_column = (array, column) => array.map(item => item[column])


export const getAPIurl = path => API + path

export const getAPIthumb = slug => getAPIurl(`/thumb/${slug}`)
export const getAPImedia = slug => getAPIurl(`/media/${slug}`)
export const getAPIstream = slug => getAPIurl(`/stream/${slug}`)

export const getImageUrl = slug => {

    const [ type, id ] = slug.split(":")

    return type == "m" ? getAPImedia(id) : getAPIthumb(id)

}