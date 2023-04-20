import React from "react";
import Navbar from "./components/Navbar";
import Screen from "./components/Screen";

export default function App() {
    
    return (
        <div class="w-full flex h-[1024px]">
            <Navbar/>
            <Screen/>
        </div>
    );
}