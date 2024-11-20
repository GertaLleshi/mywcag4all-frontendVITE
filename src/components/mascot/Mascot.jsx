import { useState } from 'react';
import Card from "react-bootstrap/Card";

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";


export default function Mascot() { 
    const [mood, setMood] = useState('happy');

    const changeMood = () => {
        const moods = ['happy', 'sad', 'excited', 'angry'];
        const randomMood = moods[Math.floor(Math.random() * moods.length)];
        setMood(randomMood);
    };

    const getMascotImage = () => {
        switch (mood) {
            case 'happy':
                return "/accessibility-dev/src/img/image.jpg";
            case 'sad':
                return "/accessibility-dev/src/img/image.jpg";
            case 'excited':
                return "/accessibility-dev/src/img/image.jpg";
            case 'angry':
                return "/accessibility-dev/src/img/image.jpg";                
            default: 
                return '';
        }

    };


    return (
    
    
    
    /*<Card className="text-center" //style={{width: '18rem'}}
    >
    */
    <Container>      
      <Image variant="top"
        src="/accessibility-dev/src/img/IMG_6178.jpg"
        alt="Mascot picture "
        width={100}
        height={100}
        roundedCircle/>
          <div>Ciao sono Gery in bocca al lupo con i test!</div>
    </Container>
    //<Card.Body>
      //<Card.Title>Ciao sono Gery in bocca al lupo con i test!</Card.Title> 
//
  //  </Card.Body>
  //</Card>
     

    );
  };
  
