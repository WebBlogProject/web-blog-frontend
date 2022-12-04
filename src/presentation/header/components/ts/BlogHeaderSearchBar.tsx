import React, { useState } from "react";
import "../css/BlogHeaderSearchBar.css"
import loupeImage from "../../../../assets/loupe.png"

function BlogHeaderSearchBar() {
    const [query, setQuery] = useState("");

    const onSubmitSearch = (e: React.KeyboardEvent<HTMLElement>) => {
        /* TODO: Impelemnt search */

        // print query if user taps enter
        if (e.key === "Enter") {
            console.log(query)
        } 
    }

    const onClickButton = () => {
        /* TODO: Impelemnt search */
        console.log("click button")
    }

    return (
        <div className="BlogHeaderSearchBar">
            <input className="BlogHeaderSearchBar-loupe" type="image" src={loupeImage} alt={"loupeImgUrl"} onClick={onClickButton}/>
            <input className="BlogHeaderSearchBar-input" type="search" onChange={(e)=>setQuery(e.target.value)} onKeyPress={onSubmitSearch} value={query}/>
        </div>
    );
}

export { BlogHeaderSearchBar };