import { useState } from 'react';
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';

const LikeIcon = () => {

    const {id} = useParams();

    const [likeCount , setLikeCount] = useState(0);
    const [openEditPage , setOpenEditPage] = useState(false);

    const handleClick = (event , {likeCount}) =>{
        event.preventDefault();
        setLikeCount(likeCount+1);
    }

    const handleClickEdit=(event , {id})=>{
        event.preventDefault();
        setOpenEditPage(true);
        {openEditPage && <Link to={`/editPage/${id}`}></Link>};
    }

    return ( 
        <div className='icons'>

        
        <div className="mulIcons">
            <div className="bookmark">
            <button className='icon button2'>
            <img className = "icon" src={require('./images/bookmark7.png')} alt="bookmark icon" />
            </button>
            </div>
        </div>

        <div className="mulIcons">
            <div className="like-icon">
                <button className='button1' onClick={event => handleClick(event , {likeCount})} >
                <div className="icon">
                    <img className="heartIcon" src={require('./images/heartIcon.png')} alt="like icon" />
                </div>
                <p className="icon">Like</p>
                <p className="likeCount icon">{likeCount}</p>
                </button>
            </div>
        </div>

        <div className="mulIcons">
            <button className='button3' onClick={event => handleClickEdit(event , {id})}>
            <div className="edit-icon">
                <img className="iconimg"src={require("./images/edit.png")} alt="edit icon" />
            </div>
            </button>
        </div>

        </div>

);
}
 
export default LikeIcon;


