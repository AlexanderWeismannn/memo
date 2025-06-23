import { PlusIcon } from "lucide-react";
import { useEffect } from "react";
import {Link} from "react-router";
import { useState } from "react";

const sayings = [
  "Capture your thoughts ✍️",
  "Your second brain 🧠",
  "Write it before you forget 🗒️",
  "Organize the chaos 🧩",
  "What was i supposed to forget again...?",
  "Ideas live here 💡",
  "Memory unlocked 🔓",
  "Memo-rable thoughts only 🧠",
  "CTRL+S your brain 💾",
  "Don't forget to drink more water",
  "Notes so fresh they still have typos ✏️",
  "For when sticky notes just aren’t enough 🧻",
  "Your future self will thank you 🕰️",
  "It's late somwehere 🌍",
  "Don't forget to remember :]",
  "Plotting world domination... one note at a time 🐱‍👓",
  "Did i leave the stove running?",
  "Dowloading more RAM... ⏬"
];

const Navbar = () =>{
    const [sayingIndex,setSayingIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSayingIndex((prev) => (prev+1) % sayings.length);
        },10000);

        return () => clearInterval(interval);
    },[]);

    return (
        <header className=" bg-base-100 border-b border-base-content/10">
            <div className="mx-auto max-w-6xl p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-4xl font-bold text-neutral font-mono tracking-tighter">Memo...</h1>
                    <p className=" font-bold font-mono tracking-tighter animate-bounce-slow">{sayings[sayingIndex]}</p>
                    <div className="flex items-center gap-4">
                        <Link to={"/create"} className="btn btn-outline">
                        <PlusIcon className="size-5"/>
                        <span>New Note</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );

};

export default Navbar;