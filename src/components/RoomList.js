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
            <span>
                <h2 className="room">ADD A NEW ROOM</h2>
                <form>
                    <input className="room" type="text"/>
                    <button>Add Room</button>
                </form>
            </span>
        </div>

    )
}

export default RoomList; 