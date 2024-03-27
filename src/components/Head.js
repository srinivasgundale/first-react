
const Header = () => {
    return (
      <nav className="navbar navbar-expand-md navbar-light mb-4"  style={{'background-color': "#e3f2fd"}}>
      <a class="navbar-brand" href="#">
    <img src="https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
    
  </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          
        </ul>
        
      </div>
    </nav>
    );
  };
  export default Header;