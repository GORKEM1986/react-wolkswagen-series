import { useState } from "react";
import Card from "react-bootstrap/Card";

const PlayerCard = ({ name, img, statistics }) => {
  const [showImage, setShowImage] = useState(true);
  // const {name, img, statistic} = props (yukarıdakide olıur buda hangisini tercih edersen)

  const handleClick = () => setShowImage(!showImage)

  return (
    <Card 
    onClick={handleClick}
    // onClick={()=>{setShowImage(!showImage)}} 
    className="rounded-3 m-auto player-card" 
    role="button">
      {showImage ? (
        <Card.Img variant="top" src={img} className="player-logo" />
      ) : (
        <ul className="m-auto">
          {statistics.map((item, index) => {
            return (
              <li key={index} className="h5 text-start list-unstyled">
                🚘 {item}
              </li>
            );
          })}
        </ul>
      )}
      <Card.Footer>
        <Card.Title> {name} </Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default PlayerCard;
