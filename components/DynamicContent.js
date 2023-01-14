export default ({ error, isLoading, children }) => (
    <>
        { error && <div>error</div> }
        { isLoading && <div>loading</div> }
        { children }
    </>
)