import Button from "../components/Button";

export default function Login() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
            <h1 className="text-3xl font-bold mb-4 text-green-600">Login Page</h1>
            <p className="text-gray-600 mb-6">This is a placeholder login screen.</p>
            <Button to="/" color="green">Back Home</Button>
        </div>
    );
}
