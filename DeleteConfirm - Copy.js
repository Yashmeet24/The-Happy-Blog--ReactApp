import {useParams , useHistory} from 'react-router-dom';
import useFetch from './hooks/useFetch';


const DeleteConfirm = ({setOpenModal}) => {
    const {id} = useParams();
    const {data:blog} = useFetch(' http://localhost:8000/blogs/'+id)
    const history = useHistory();

    const handleClick = ()=>{
        fetch('http://localhost:8000/blogs/'+ blog.id , {
            method: 'DELETE'
        }).then(()=>{
            history.push('/');
        })
    }

    return ( 
        <div className="modal-bg">
            <div className="modal-content">
                <div className="close">
                    <button onClick={()=>{setOpenModal(false)}}>
                        X
                    </button>
                </div>
                <div className="modal-header">
                    <h4 className="modal-title">
                        Are you sure you want to delete the blog ?
                    </h4>
                </div>
                <div className="modal-footer">
                      <button onClick={handleClick}>Delete Blog</button>
                </div>
            </div>
        </div>
     );
}
 
export default DeleteConfirm;