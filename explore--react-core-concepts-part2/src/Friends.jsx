import { useEffect, useState } from 'react';
import './Friends.css';
import Friend from './Friend';

export default function Friends() {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const fetchFriends = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json(); 
           setFriends(data); 
        };
        fetchFriends();

    }, []);

    return (
        <div className='box'>
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    );
}
