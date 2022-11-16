import axios from "axios";
import React, { useEffect, useState } from "react";

const Menu = ({cat}) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

    // const posts = [
    //     {
    //         id: 1,
    //         title: "Lorem ipsum dolor sit amet",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, dolores ducimus dolorum dignissimos, recusandae pariatur deserunt eius neque ad odio suscipit libero modi velit nulla, esse veritatis totam fugit blanditiis.",
    //         img: "https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg",
    //     },
    //     {
    //         id: 2,
    //         title: "Lorem ipsum dolor sit amet",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, dolores ducimus dolorum dignissimos, recusandae pariatur deserunt eius neque ad odio suscipit libero modi velit nulla, esse veritatis totam fugit blanditiis.",
    //         img: "https://www.emergingedtech.com/wp/wp-content/uploads/2018/04/blogging.jpg",
    //     },
    //     {
    //         id: 3,
    //         title: "Lorem ipsum dolor sit amet",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, dolores ducimus dolorum dignissimos, recusandae pariatur deserunt eius neque ad odio suscipit libero modi velit nulla, esse veritatis totam fugit blanditiis.",
    //         img: "https://cdn.searchenginejournal.com/wp-content/uploads/2020/08/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e-1280x720.png",
    //     },
    //     {
    //         id: 4,
    //         title: "Lorem ipsum dolor sit amet",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, dolores ducimus dolorum dignissimos, recusandae pariatur deserunt eius neque ad odio suscipit libero modi velit nulla, esse veritatis totam fugit blanditiis.",
    //         img: "https://neilpatel.com/wp-content/uploads/2017/08/blog.jpg",
    //     },
    //     ];

  return (
    <div className='menu'>
        <h1>Other posts you may like</h1>
        {posts.map((post) => (
            <div className="post" key={post.id}>
                <img src={`../upload/${post?.img}`} alt="" />                                            
                <h2>{post.title}</h2>           
                <button>Read More</button>            
            </div>
        ))}
    </div>
  )
}

export default Menu