import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title , setTitle]= useState('');
    const [body , setBody]= useState('');
    const [author , setAuthor]=useState('');
    const [imageLink , setImageLink]=useState('');
    const [isLoading , setIsLoading]=useState(false);
    const history = useHistory();

    const handleSubmit = e =>{
        e.preventDefault();
        const blog = {imageLink ,title , body , author};
        setIsLoading(true);
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added');
            setIsLoading(false);
            // history.go(-1);
            history.push('/');
        })
    }

    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Image Link:</label>
                <input type="text"
                value={imageLink}
                onChange={(e)=>setImageLink(e.target.value)}
                 />
                <label>Blog title:</label>
                <input 
                type="text" 
                required 
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea 
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <input 
                type="text" 
                required 
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                />
                {!isLoading &&<button>Add Blog</button>}
                {isLoading &&<button disabled>Adding Blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;