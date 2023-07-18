import BlogList from "./BlogList";
import useFetch from "./hooks/useFetch";

const Home = () => {

   const {data:blogs , isLoading , error} = useFetch(('http://localhost:8000/blogs'));

    return ( 
        <div className="home">
            {error && <div className="error-msg">{error}</div>}
            {isLoading && <div className="loading">Loading...</div>  }
            <div className="main-header">
            {blogs && <BlogList blogs={blogs}  title="All Blogs :"/>}
            </div>
        </div>
     );
}
 
export default Home;