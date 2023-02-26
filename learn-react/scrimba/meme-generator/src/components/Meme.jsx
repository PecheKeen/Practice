import memesData from "../memesData.js";
import React from "react";

function Meme() {

    const [isImportant, setIsImportant] = React.useState('hello');
    function getMemeImage() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url;
        console.log(url)

    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text" 
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    onClick={getMemeImage} 
                    className="form--button"
                >
                    Get a new meme image 🖼
                </button>
            </div>
        </main>
    )
}

export default Meme