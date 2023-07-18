import {Link} from 'react-router-dom';
import LikeIcon from './LikeIcon';

const BlogList = ({blogs , title , handleDelete}) => {
    
    return (    
     <div className="blogList"> 
     <h2>{title}</h2> 
            {blogs.map((blog)=>(
            <div className="blog-preview" key={blog.id}>
               <Link to={`/blogs/${blog.id}`}>
                <div className="blog-image">
                    <img src={blog.imageLink} alt="The blog image goes here" />
                </div>
                <div className="icon-list">
                    <LikeIcon/>
                </div>
                <div className='titlenauthor'>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                </div>
               </Link>
            </div>
        ))} 
     </div>   
);

}
 
export default BlogList;