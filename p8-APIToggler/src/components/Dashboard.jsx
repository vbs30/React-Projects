import React, { useState } from "react";

const Dashboard = () => {
    const [active, setActive] = useState("Home");

    const menuItems = [
        "Home",
        "Stock-list",
        "Indices",
        "Futures",
        "US Market",
        "Crypto",
    ];

    return (
        <div className="min-h-screen p-4 bg-gray-100 dark:bg-gray-900">
            {/* Logo */}
            <div className="text-3xl font-bold text-blue-500 dark:text-blue-400 mb-32">
                VBS30
            </div>

            {/* Navigation Menu */}
            <nav className="space-y-2">
                {menuItems.map((item) => (
                    <div
                        key={item}
                        onClick={() => setActive(item)}
                        className={`cursor-pointer pl-4 py-2 border-l-4 text-base font-medium
            ${active === item
                                ? "border-blue-500 text-blue-500 dark:text-blue-400 dark:border-blue-400"
                                : "border-transparent text-gray-700 dark:text-gray-300"
                            }
            hover:border-blue-400 hover:text-blue-400`}
                    >
                        {item}
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default Dashboard;
