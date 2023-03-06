import React from "react";

function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    });
    const [memeImages, setMemeImages] = React.useState([]);

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setMemeImages(data.data.memes))
    }, []);

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * memeImages.length)
        const url = memeImages[randomNumber].url;
        setMeme((prevState) => {
            return {
                ...prevState,
                randomImage: url,
            }
        })
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setMeme((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    name="topText"
                    className="form--input"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    placeholder="Bottom text"
                    name="bottomText"
                    className="form--input"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    onClick={getMemeImage} 
                    className="form--button"
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} alt="Random Meme" className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>        
        </main>
    )
}

export default Meme