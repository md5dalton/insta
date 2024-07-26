export default ({ children, className, ...props }) => (
    <button className={`py-4 ${className}`} {...props}>
        {children}
    </button>
)