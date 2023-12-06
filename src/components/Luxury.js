import Card1 from "./Card1";
// import Luxury from "./Luxury";
import "../css/Luxury.css";
// import html from "../images/html.jpg";
// import css from "../images/luxury.jpg";
// import javascript from "../images/affordable.jpg";
import lux1 from "../images/lux1.jpg";
import lux2 from "../images/lux2.jpg";
import lux3 from "../images/lux3.jpg";
import lux4 from "../images/lux4.jpg";
import lux5 from "../images/lux5.jpg";
function Luxury() {
  
  const LuxP = [
    {
      id: 1,
      p:lux1,
      h:"001"
    },
    {
      id: 2,
      // h: css,
      p:lux2,
      h:"002"
    },
    {
      id: 3,
      // h: javascript,
      p:lux3,
      h: "003"
    },
    {
        id: 4,
        p:lux4,
        h:"004"
    },
    {
        id:5,
        p:lux5,
        h:"005"

    },
  ];
  return (
  <>   
  <h2>Luxury Rooms</h2>
  {/* <div className="bg-image"> */}
      <div className="luxury">
        {
        LuxP.map((item)=>(
            <Card1 lux={item} />
        ))
      }
    </div>
    {/* </div> */}
</>
  );

    }
export default Luxury;
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
