import { useEffect, useState } from 'react'
import './friends.css'
import Friend from './friend';

export default function Friends (){
    const [friends, setFriends] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    }, [])

    return (
        <div className='box'>
            <h3>Friends: {friends.length} </h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}

/*
* state to hold data
* use effect with dependency array
* use fecth to copy data
* set loaded data to state
* display data on the component
*/