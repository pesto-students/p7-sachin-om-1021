import "../App.css";
const Header=()=>{
    return(
        <div className="header">
            <h1>Shortify</h1>
            <nav>
                <a href="#"className="red"><div className="circle red" style={{backgroundColor:"red"}} ></div>Home</a>
                <a href="#"className="green"><div className="circle green" style={{backgroundColor:"lightGreen"}}></div>About us</a>
                <a href="#"className="blue"><div className="circle blue" style={{backgroundColor:"turquoise"}}></div>Contact</a>
                <a href="#"className="orange"><div className="circle yellow" style={{backgroundColor:"orange"}}></div>Pricing</a>
                <a href="#"className="violet"><div className="circle violet" style={{backgroundColor:"violet"}}></div>Features</a>
            </nav>
            <button>Click</button>
        </div>
    )
}
export default Header;