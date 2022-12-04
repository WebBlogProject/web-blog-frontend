import React, { useState } from "react";
import "../css/BlogHeaderSearchBar.css"

function BlogHeaderSearchBar() {
    const [query, setQuery] = useState("");

    const onSubmitSearch = (e: React.KeyboardEvent<HTMLElement>) => {
        /* TODO: Impelemnt search */

        // print query if user taps enter
        if (e.key === "Enter") {
            console.log(query)
        } 
    }

    return (
        <div className="BlogHeaderSearchBar">
            <input type="search" onChange={(e)=>setQuery(e.target.value)} onKeyPress={onSubmitSearch} value={query}/>
        </div>
    );
}

export { BlogHeaderSearchBar };