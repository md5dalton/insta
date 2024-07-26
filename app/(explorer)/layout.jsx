import Searchbar from "./Searchbar"

export default function ({ children }) {
    
    return (
        <div className="expore">
            <Searchbar />
            <div className="search-body">{children}</div>
        </div>
    )
}