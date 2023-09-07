import { useState } from "react"

export default function Team(){

    const [team, setTeam] = useState(11);

    const handleAddPlayer = () =>{
        const newTeam = team + 1;
        setTeam(newTeam);
    }

    const handleRemovePlayer = () =>{
        setTeam(team - 1);
    }
    const teamStyle = {
        border: '2px solid purple',
        margin: '15 px',
        padding: '15px',
        borderRadius: '15px'
    }



    return (
        <div style={teamStyle}>
            <h3>Player: {team}</h3>
            <button onClick={handleAddPlayer}>AddPlayer</button>
            <button onClick={handleRemovePlayer}>Remove Player</button>
        </div>
    )
}