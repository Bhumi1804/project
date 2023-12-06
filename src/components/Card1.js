// import Luxury from "./Luxury";
// import Link from 'react-router-dom';
function Card1({lux})
{
    return(<>
    <div className="card">
        <p>{}</p>
        <img src={lux.p} alt="luxury" />
       <button> <h>{lux.h}</h></button>
      
    </div>
    </>
    )
}
export default Card1;