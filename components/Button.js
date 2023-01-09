export default ({ children, className, ...props }) => (
    <button 
        className={`grid place-items-center border rounded-lg gap-x-4 px-6 py-2 ${className}`}
        {...props}
    >
        {children}
    </button>
)