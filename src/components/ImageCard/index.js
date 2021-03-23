import React from "react";
import Card from 'react-bootstrap/Card';
import "./style.css";

// const overlayCard = {
//   width: "240px", 
//   height: "135px", 
//   borderRadius: "5px",
// };

// const imageOverlay = {
//   width: "240px",
//   height: "135px",
//   borderRadius: "5px",
//   objectFit: "cover",
//   backgroundImage:
//     "linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)), url('https://cdn.theathletic.com/app/uploads/2020/11/06165750/USATSI_13703003-1024x683.jpg')"
// }

function ImageCard() {
  
  return (
    <Card className="bg-dark text-white overlay-card" >
      <div className="gradient">
        <Card.Img className="image-overlay" src="https://cdn.theathletic.com/app/uploads/2020/11/06165750/USATSI_13703003-1024x683.jpg" alt="Card image" />
      </div>
      <Card.ImgOverlay>
        <Card.Title style={{ fontSize: "15px", textShadow: "0 0 4px rgba(0, 0, 0, 0.72), 0 0 14px rgba(0, 0, 0, 0.45)", paddingTop: "65px", maxWidth: "210px" }}>Jeremiah Owusu-Koramoah LB Notre Dame</Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImageCard;

// background: "linear-gradient(to bottom, #faf9f9 0%, #fca403 150%)"



