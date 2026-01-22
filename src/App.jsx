import { useState, useEffect } from 'react'
import Input from './components/Input'
import CharacterCardContainer from './components/CharacterCardContainer'
import './App.css'
import CharacterCard from './components/CharacterCard'

function App() {
    let [chars, setChars] = useState([])
    async function ambilData(url) {
        const raw = await fetch(url)
        const data = await raw.json()
        return data
    }

    const resource = "https://rickandmortyapi.com/api/character/"
    useEffect(
        () => {
            ambilData(resource).then(
                (data) => {
                    const { results } = data
                    setChars(results)
                }
            )
        }, []
    )

    function search(e) {
        const resource = "https://rickandmortyapi.com/api/character/?name="
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())
        ambilData(resource + data.search).then(
            (data) => {
                const { results } = data
                console.log(results)
                if(Array.isArray(results)){
                    setChars(results)
                }else{
                    setChars([{name: "No character found", image: "nothin"}])
                }
            }
        )
    }
    return (
        <div className="flex flex-col justify-center items-center gap-4">
            <form onSubmit={search}>
                <Input />
                <CharacterCardContainer>
                    {
                        chars.map(
                            char => {
                                return <CharacterCard charName={char.name} charImg={char.image} />
                            }
                        )
                    }
                </CharacterCardContainer>
            </form>
        </div>
    )
}

export default App
