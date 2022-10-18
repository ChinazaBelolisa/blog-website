import React from 'react'
import { Link } from 'react-router-dom';
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import Menu from '../components/Menu';

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuub1qqprhrAi5nC5Yol6grcv1y4xblegZKA&usqp=CAU" alt="" />
        <div className="user">
          <img src="https://www.pngkey.com/png/detail/52-523516_empty-profile-picture-circle.png" alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>           
            <img src={Delete} alt="" />
          </div>
        </div>  
        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>      
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, aperiam eveniet expedita, eos illum debitis, 
          ipsam amet rem laboriosam nesciunt ducimus! Pariatur laborum accusamus, 
          ratione ex provident aperiam beatae expedita. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet deserunt 
          dolore blanditiis ab, iusto eos molestiae error ratione, maxime dignissimos perferendis nostrum 
          repudiandae nesciunt aspernatur non impedit, laudantium rem a! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Quam, praesentium architecto. Officia, exercitationem fugiat.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, 
          officia perferendis quasi quos et nulla atque unde sequi aut quae qui 
          dolore quia vel voluptate expedita, totam voluptatibus ea. Vel. Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. Dolorum iure vero 
          voluptas eveniet ad excepturi sed iste, placeat recusandae error, 
          corrupti tempore explicabo dicta architecto veniam illo fugit soluta enim. Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Iste dignissimos nihil reiciendis saepe asperiores 
          optio beatae ducimus assumenda nam laboriosam repellendus magni 
          fugiat animi minus, soluta quo! Libero, consequatur magnam!
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, 
          officia perferendis quasi quos et nulla atque unde sequi aut quae qui 
          dolore quia vel voluptate expedita, totam voluptatibus ea. Vel. Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. Dolorum iure vero 
          voluptas eveniet ad excepturi sed iste, placeat recusandae error, 
          corrupti tempore explicabo dicta architecto veniam illo fugit soluta enim. Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Iste dignissimos nihil reiciendis saepe asperiores.
        </p>
      </div>      
      <Menu/>
    </div>
  );
};

export default Single