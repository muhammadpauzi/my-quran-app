export default function Container({ children, withPadding = true, props }) {
    return (
        <div {...props} className={`max-w-4xl mx-auto${withPadding ? ' p-5 py-8' : ''}`} >
            {children}
        </div >
    );
}