import { useState } from "react";

function App() {
    const [data, setData] = useState<any>(null);

    async function checkApi() {
        try {
            const res = await fetch("http://localhost:5187/api/Health");
            const json = await res.json();
            setData(json);
        } catch (err) {
            setData({ error: "API not reachable" });
        }
    }

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-6">
                <div>
                    <h1 className="text-sm font-bold text-red-500">
                        BookStore React
                    </h1>
                </div>

                <button
                    onClick={checkApi}
                    className="w-full bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg py-2.5 text-sm font-medium transition"
                >
                    Check API health
                </button>

                {data && (
                    <pre className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-700 overflow-auto">
                        {JSON.stringify(data, null, 2)}
                    </pre>
                )}

                <p className="text-xs text-slate-400 text-center">
                    Backend http://localhost:5187/api/health
                </p>
            </div>
        </div>
    );
}

export default App;
