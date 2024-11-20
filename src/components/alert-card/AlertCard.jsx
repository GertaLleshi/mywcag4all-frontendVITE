import * as React from "react";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import {useState} from "react";

export default function AlertCard(props) {
    const [show, setShow] = useState(false);

    if (show){
        return (
            <Card>
                <Alert variant="success" onClose= {() => setShow(false) } dismissible>
                    <Alert.Heading>{props.congratMessage}</Alert.Heading>
                    <p>{props.descripMessage}</p>
                    <hr /> 
                    <p className="mb-0">{ props.nextMessage}</p>
                </Alert>
            </Card>
        );
    }
   // return 
        
 //           <Button variant="success" onClick= {() => setShow(true) }> Show Alert</Button>;
}