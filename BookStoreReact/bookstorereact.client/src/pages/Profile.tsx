import Button from "../components/Button";

export default function Profile() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
            <h1 className="text-3xl font-bold mb-4 text-blue-600">Profile</h1>
            <p className="text-gray-600 mb-6">Welcome to the BookStore React app!</p>
            <Button to="/home" color="blue">Go to Login</Button>
        </div>
    );
}
