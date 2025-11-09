import Button from "../components/Button";

export default function Contact() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
            <h1 className="text-3xl font-bold mb-4 text-red-600">Contact Page</h1>
            <p className="text-gray-600 mb-6">Welcome to the BookStore React app!</p>
            <Button to="/" color="blue">Go to Home</Button>
        </div>
    );
}
