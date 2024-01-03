import React, { useState, useEffect, useContext } from 'react'
import {Link, useLocation} from 'react-router-dom'
import Edit from '../image/edit.png'
import Del from '../image/delete.png'
import Menu from '../components/menu'
import moment from 'moment'
import axios from 'axios'
import { AuthContext } from '../context/authContext'

export const Single = () => {
  const [post,setPost] = useState({});

  const location = useLocation()

  const postId = location.pathname.split("/")[2]

  const {currentUser} = useContext(AuthContext)

  useEffect(()=>{
      const fetchData =  async () =>{
          try{
              const res = await axios.get(`/posts/${postId}`);
              setPost(res.data);
          }catch(err){
              console.log(err);
          }
      };
      fetchData();
  }, [postId]);

  return (
    <div className="single">
      <div className="content">
        <img src={post?.img} alt=''/>
      <div className="user">
        <img src='https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D' alt=''/>
      <div className="info">
        <span>{post.username}</span>
        <p>Posted {moment(post.date).fromNow()}</p>
      </div>
      {currentUser.username === post.username && (
      <div className="edit">
        <Link to={`/write?edit=2`}>
          <img src={Edit} alt=''/>
        </Link>
        <img src={Del} alt=''/>
      </div>)}
      </div>
      <h1>{post.title}</h1>
      {/* <p> */}
        {post.description}
      {/* </p> */}
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  )
}
