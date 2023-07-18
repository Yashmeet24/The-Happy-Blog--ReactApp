import { useState } from 'react';
import {Link} from 'react-router-dom';
import useScrollPosition from './hooks/useScrollPosition';

function classNames(...classes){
    return classes.filter(Boolean).join('');
}

const Navbar = () => {
    const [navText , setNavText] = useState('THE HAPPY BLOG');
    const handleTouch=()=>{
        setNavText('by yashmeet kaur');
    }
    const handleMouseLeave=()=>{
        setNavText('THE HAPPY BLOG');
    }
    const scrollPosition = useScrollPosition();
    console.log(scrollPosition);

    return ( 
        <nav className={classNames(scrollPosition>0? 'navbarNew' : 'navbar')}>
            <img className="logo" src={require('./images/diary.png')} alt="logo" />
            <h1 onMouseEnter={handleTouch} onMouseLeave={handleMouseLeave}>{navText}</h1>
            <div className="links">
                <Link to="/">Home  </Link> 
                <Link to="/bookmarks">Bookmarks</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;