export default ({ items, itemHandler, ...props }) => (
    <ul {...props}>
        {items.length ? items.map(item => itemHandler(item)) : ""}
    </ul>
)
