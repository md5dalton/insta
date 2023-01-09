export default ({ items, itemHandler, ...props }) => (
    <ul {...props} role="list">
        {items.map(itemHandler)}
    </ul>
)
