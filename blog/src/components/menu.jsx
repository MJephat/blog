import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Menu = ({cat}) => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            try{
                const res = await axios.get(`/posts/?cat=${cat}`);
                setPosts(res.data);
            }catch (err){
                console.log(err);
            }
        };
        fetchData();
    }, [cat]);
    // const posts =[
    //     {
    //         id: 1,
    //         title: "Lorem ipsum dolor.",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    //         img:"https://images.unsplash.com/photo-1623855244183-52fd8d3ce2f7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8MzU1NDQ2Nnx8ZW58MHx8fHx8"
    //     },
    //     {
    //         id: 2,
    //         title: "Lorem ipsum dolor.",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    //         img:"https://images.unsplash.com/photo-1541348263662-e068662d82af?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzODAyMjcyfHxlbnwwfHx8fHw%3D"
    //     },
    //     {
    //         id: 3,
    //         title: "Lorem ipsum dolor sit.",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    //         img:"https://media.istockphoto.com/id/1440495095/photo/laboratory-investigations-concerning-test-and-medicine-against-covid.jpg?s=612x612&w=is&k=20&c=AA1AEXvAVK20Fg9qKLW0JolKeunKqzA2mlJUx7NnY2s="
    //     },  
    //     {
    //         id: 4,
    //         title: "Lorem ipsum dolor sit.",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    //         img:"https://images.unsplash.com/photo-1608403890614-ec62cb35b46e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw1NTk1Mjd8fGVufDB8fHx8fA%3D%3D"
    //     }, 
    //     {
    //         id: 5,
    //         title: "Lorem ipsum dolor.",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    //         img:"https://images.unsplash.com/flagged/photo-1615733616826-9f14b6f1eff2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXx1djJ4eDk1LWdpY3x8ZW58MHx8fHx8"
    //     },
    //     {
    //         id: 6,
    //         title: "Lorem ipsum dolor.",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    //         img:"https://images.unsplash.com/photo-1684182413379-7f1ee71b021b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NzE5NzkzNXx8ZW58MHx8fHx8"
    //     },
    // ];
  return (
    <div className="menu">
        <h1>Other posts you may like</h1>
        {posts.map((post)=>(
            <div className="post" key={post.id}>
                <img src={`../upload/${post?.img}`} alt="" />
                <h2>{post.title}</h2>
                <button>Raed more</button>

            </div>
        ))}
    </div>
  )
}

export default Menu