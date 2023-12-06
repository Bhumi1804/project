import Card from "./Card";
// import Link from 'react-router-dom';
// import beauty from "../images/beauty.jpg"
import "../css/Rooms.css";
// import html from "../images/html.jpg";
import css from "../images/luxury.jpg";
import javascript from "../images/affordable.jpg";
// import Luxury from "./Luxury";
// import Luxury from "./Luxury";
// import {Link} from 'react-router-dom';
function Rooms() {
  
  const ViewP = [
    // {
    //   id: 1,
    //   p:html
    // },
    {
      id: 2,
      // h: css,
      p:css,
      h: "Luxury",
      link:"/Luxury"
    
    },
    {
      id: 3,
      // h: javascript,
      p:javascript,
      h: "Affordable"
    }
  ];
  return (
  <div className="bg-image">   
   {/* <Link to={"/Luxury"} > </Link> */}
  {/* <img src={beauty} alt="beautiful"/> */}
  {/* <h2>Rooms</h2> */}
  {/* <div className="bg-image"> */}
      <div className="rooms">
      {/* <img src={beauty} alt="beautiful"/> */}
        {
        ViewP.map((item)=>(
            <Card view={item} />
            
        ))
      }
    </div>
   
    {/* </div> */}
</div>
  );

    }
export default Rooms;
// import Card from "./Card";
// import "../css/Rooms.css";
// import css from "../images/luxury.jpg";
// import javascript from "../images/affordable.jpg";

// function Rooms() {
//   const ViewP = [
//     {
//       id: 2,
//       p: css,
//       h: "LUXURY ROOMS",
//     },
//     {
//       id: 3,
//       p: javascript,
//       h: "AFFORDABLE ROOMS",
//     },
//   ];

//   return (
//     <>
//       <div className="bg-image">
//         <div className="blur-background"></div>
//         <h2>Rooms</h2>
//         <div className="rooms">
//           {ViewP.map((item) => (
//             <Card view={item} key={item.id} />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Rooms;
