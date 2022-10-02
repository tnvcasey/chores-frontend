import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";

function RoomList(){

    const [rooms, setRooms] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/rooms")
            .then(res => res.json())
            .then((rooms) => setRooms(rooms))
    }, [])

    return (
        <div>
            <ul>
                {rooms.map((room) => (
                    <RoomCard room={room}/>
                ))}
            </ul>
        </div>
    )
}

export default RoomList; 