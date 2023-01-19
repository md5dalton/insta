export default ({ items, itemHandler, empty, ...props }) => (
    <ul {...props} role="list">
        {
            !items.length ? empty :
            items.map((item, index) => (
                <li key={index}>{itemHandler(item)}</li>
            ))
        }
    </ul>
)
