import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, dolores ducimus dolorum dignissimos, recusandae pariatur deserunt eius neque ad odio suscipit libero modi velit nulla, esse veritatis totam fugit blanditiis.",
      img: "https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, dolores ducimus dolorum dignissimos, recusandae pariatur deserunt eius neque ad odio suscipit libero modi velit nulla, esse veritatis totam fugit blanditiis.",
      img: "https://www.emergingedtech.com/wp/wp-content/uploads/2018/04/blogging.jpg",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, dolores ducimus dolorum dignissimos, recusandae pariatur deserunt eius neque ad odio suscipit libero modi velit nulla, esse veritatis totam fugit blanditiis.",
      img: "https://cdn.searchenginejournal.com/wp-content/uploads/2020/08/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e-1280x720.png",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, dolores ducimus dolorum dignissimos, recusandae pariatur deserunt eius neque ad odio suscipit libero modi velit nulla, esse veritatis totam fugit blanditiis.",
      img: "https://neilpatel.com/wp-content/uploads/2017/08/blog.jpg",
    },
  ];


  return (
    <div className='home'>
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home