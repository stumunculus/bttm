import { useState } from "react";
import { useEffect } from "react";

export const AddPlayer = () => {
    const [players, setPlayers] = useState([]);    

    const stringOfPlayers = JSON.stringify({players});
    useEffect(() => {
        localStorage.setItem("players", stringOfPlayers)
    }, [stringOfPlayers]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target)
        setPlayers([...players, data.get("nameInput")])
    };

    return (
        <div className="addPlayers">
            <header className="addPlayers-header">
                <form onSubmit={handleSubmit}>
                    <label>
                        Player Name: <input name="nameInput" defaultValue="Your name here" />
                    </label>                    
                    <hr />
                        <button type="reset">Reset form</button>
                        <button type="submit">Save name</button>
                </form>
            </header>
        </div>
    )
}