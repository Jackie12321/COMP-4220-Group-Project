import { NavLink } from "react-router-dom";
import { TablerShoppingCart } from "../icons/Cart";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
    const base = "px-3 py-1 rounded hover:bg-slate-100";
    const active = ({ isActive }: { isActive: boolean }) =>
        `${base} ${isActive ? "bg-slate-200 font-semibold" : ""}`;

    return (
        <header className="w-full border-b bg-white">
            <div className="max-w-5xl mx-auto flex items-center justify-between p-3 gap-4">
                <NavLink to="/" className="text-xl font-bold text-blue-700">
                    BookStore
                </NavLink>
                <div className="flex items-center gap-3">
                    <nav className="flex gap-2">
                        <NavLink to="/" end className={active}>
                            Home
                        </NavLink>
                        <NavLink to="/profile" className={active}>
                            Profile
                        </NavLink>
                        <NavLink to="/contact" className={active}>
                            Contact
                        </NavLink>
                    </nav>
                    <ThemeToggle />
                    <NavLink
                        to="/cart"
                        className="p-2 rounded hover:bg-slate-100"
                        aria-label="Shopping cart"
                    >
                        <TablerShoppingCart className="w-5 h-5" />
                    </NavLink>
                </div>
            </div>
        </header>
    );
}
