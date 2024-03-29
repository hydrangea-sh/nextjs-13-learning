import React, { Suspense } from "react";
import TodosList from "./(user)/todos/TodosList";

function Home() {
    return (
        <div>
            <Suspense fallback={<p className="text-red-500">Loading the Todos...</p>}>
                <div className="flex space-2-x">
                    {/* @ts-ignore */}
                    <TodosList />
                </div>
            </Suspense>

            <Suspense fallback={<p className="text-blue-500">Loading the Shopping Cart...</p>}>
                <div className="flex space-2-x">
                    {/* @ts-ignore */}
                    <TodosList />
                    </div>
            </Suspense>
        </div>
    );
}

export default Home;