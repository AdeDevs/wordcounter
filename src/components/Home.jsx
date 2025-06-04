import { use, useState } from "react"
export default function HomePage() {
    const [val, setVal] = useState('')
    const [word, setWord] = useState(0)
    const [sentence, setSentence] = useState('0')
    const [theme, setTheme] = useState(false)
    function toggleTheme() {
        setTheme(!theme)
    }

    function handleText(e) {
        const value = e.target.value
        const words = value.trim().split(/\s+/).filter(word => word.length > 0)
        setWord(words.length)

        const sentences = value.trim().split(/[.!?]+/).map(s => s.trim()).filter(s => s.length > 0)
        setSentence(sentences.length)
        setVal(value)
        console.log(val)
    }

    return (
        <div className={`home-page ${theme ? "active" : ""}`}>
            <nav className={`${theme ? "active" : ""}`}>
                <h1>CC</h1>
                <button className={`toggle ${theme ? "active" : ""}`} onClick={toggleTheme}><ion-icon name="toggle"></ion-icon></button>
            </nav>
            <main>
                <h1>Analyze your text <br /> in real-time</h1>
                <textarea className={`${theme ? "active" : ""}`} placeholder="Start typing here... (Or paste your text here)" value={val} onChange={e => handleText(e)} />

                <section className="stats">
                    <h2 className="chr">{val.length} <span className="small">Total Characters</span></h2>
                    <h2 className="word">{word} <span className="small">Total Words</span></h2>
                    <h2 className="snt">{sentence} <span className="small">Total Sentences</span></h2>
                </section>
            </main>

            {/* <button onClick={HandleStuff()}>submit</button> */}
        </div>
    )
}