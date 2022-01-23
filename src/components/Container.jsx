export default function Container({ children, withPadding = true, props }) {
    return (
        <div {...props} className={`w-full sm:max-w-4xl mx-auto px-2${withPadding ? ' sm:px-5 py-8' : ' '}`} >
            {children}
        </div >
    );
}