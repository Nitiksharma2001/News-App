import { Link } from 'react-router-dom';

function ColorSchemesExample() {
  return (
    <div className="navbar">
          <div className="logo"><Link style={{color: '#fff', textDecoration:'none'}} to="/">Home</Link></div>
           <ul className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/signin">Sign in</Link>
              <Link to="/favourites">Favourite News</Link>
              <Link to="/signup">Sign Up</Link>
              <Link to="/shop">Sign Out</Link>
           </ul>
        </div>
  );
}

export default ColorSchemesExample;