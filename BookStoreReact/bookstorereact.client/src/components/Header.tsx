import { NavLink } from "react-router-dom";

export default function Header() {
    const base = "px-3 py-1 rounded hover:bg-slate-100";
    const active = ({ isActive }: { isActive: boolean }) =>
        `${base} ${isActive ? "bg-slate-200 font-semibold" : ""}`;

    return (
        <header className="w-full border-b bg-white">
            <div className="max-w-5xl mx-auto flex items-center justify-between p-3">
                <NavLink to="/" className="text-xl font-bold text-blue-700"></NavLink>
                <nav className="flex gap-2">
                    <NavLink to="/" className={active}>Home</NavLink>
                </nav>
            </div>
        </header>
    );
}
