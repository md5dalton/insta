export default ({ items, itemHandler, empty, ...props }) => (
    <ul {...props} role="list">
        {
            !items.length ? empty :
            items.map(itemHandler)
        }
    </ul>
)
