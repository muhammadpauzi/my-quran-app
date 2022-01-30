import Container from "./Container";

export default function Footer() {
    return (
        <div className="text-center py-6 px-5 bg-white shadow-lg shadow-slate-100">
            <Container withPadding={false}>
                <p className="text-gray-800">Created by <a href="" className="text-green-500 font-bold">Muhammad Pauzi.</a></p>
            </Container>
        </div>
    )
}