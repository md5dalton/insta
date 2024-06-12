import { Fragment } from "react"

export default ({ items, itemHandler, page }) => items.map((item, index) => (
    <li key={page+item.id+index}>{itemHandler(item)}</li>
))