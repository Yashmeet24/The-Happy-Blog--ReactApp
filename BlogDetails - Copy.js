import {useParams , useHistory} from 'react-router-dom';
import useFetch from './hooks/useFetch';
import DeleteConfirm from './DeleteConfirm';
import { useState } from 'react';
import {Link} from 'react-router-dom';

const BlogDetails = () => {
const {id} = useParams();
const {data:blog , error , isLoading} = useFetch(' http://localhost:8000/blogs/'+id);

const [openModal , setOpenModal] = useState(false);
// const history = useHistory();
// const handleClick = ()=>{
//     fetch('http://localhost:8000/blogs/'+ blog.id , {
//         method: 'DELETE'
//     }).then(()=>{
//         history.push('/');
//     })
// }



    return ( 
        <div className="blog-details">
            {isLoading && <div className='loading'>Loading...</div>}
            {error && <div className='errormsg'>{error}</div>}
            {blog && (
                <article>
                    <div >
                        <img id="blog-image-details" src={blog.imageLink} alt="The blog image goes here" />
                    </div>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div className='body-details'>{blog.body}</div>
                    {/* <button onClick={handleClick}>Delete Blog</button> */}
                    <div className="detailsBtn">
                       
                            <Link to={`/editPage/${blog.id}`}>
                            <button  className="editBtn">
                                Edit Blog
                            </button>
                            </Link>
                            
                       
                            <button  className="delBtn" onClick={()=>{setOpenModal(true);}}>
                                Delete Blog
                            </button>
                            {openModal && <DeleteConfirm setOpenModal={setOpenModal}/>}
                      
                    </div>

                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;