function Card({view})
{
    return(<>
    <div className="card">
        <p>{}</p>
        <img src={view.p} alt="HTML" />
      <center>  <button> <h>{view.h}</h></button></center>
      
    </div>
    </>
    )
}
export default Card;