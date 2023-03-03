import { Link } from "react-router-dom";


const PnotF = () =>{
    return(
        <div>
            <img src="/errorimg.jpg" alt="Error 404" width="500px"/>
            <button>
                <Link to="/home">Back to Home</Link>
            </button>
        </div>
    )
}

export default PnotF;