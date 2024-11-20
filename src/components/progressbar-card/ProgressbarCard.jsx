import * as React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Card from "react-bootstrap/Card";
import {useState, useMemo} from "react";
//import WcagLevels from "../components/wcag-levels/WcagLevels";
export default function ProgressbarCard(props) {
    const [show, setShow] = useState(true);
    //const itemListResolved = useMemo(() => {
      //  if (!Array.isArray(props.websitesArray)) {
        // console.log("arraywebsites",props.websitesArray);
          //  return null; // oppure un fallback appropriato
        //}
    
    if (show){
    //    props.websitesArray.length > 0 &&
  //      props.websitesArray.map((card, indx) => {
        if(props.ismetAAA === 38){ 
            return (
                <Card>
                    <ProgressBar>
                        <ProgressBar striped variant="info" now= {50} key= {1} label= {'A'}/>
                        <ProgressBar striped variant="warning" now= {24} key= {2} label= {'AA'}/>
                        <ProgressBar striped variant="danger" now= {26} key= {3} label= {'AAA'}/>

                    </ProgressBar>
                </Card>); 
        }
        else if(props.ismetAA === 34){
            return (
                <Card>
                    <ProgressBar>
                        <ProgressBar striped variant="info" now= {50} key= {1} label= {'A'}/>
                        <ProgressBar striped variant="warning" now= {24} key= {2} label= {'AA'}/>
                        <ProgressBar striped variant="danger" now= {0} key= {3} label= {'AAA'}/>

                    </ProgressBar>
                </Card>); }
        else if(props.ismetA === 72){
            return (
                <Card>
                    <ProgressBar>
                        <ProgressBar striped variant="info" now= {50} key= {1} label= {'A'}/>
                        <ProgressBar striped variant="warning" now= {0} key= {2} label= {'AA'}/>
                        <ProgressBar striped variant="danger" now= {0} key= {3} label= {'AAA'}/>

                    </ProgressBar>
                </Card>);  }
        else{
            return (
                <Card>
                    <ProgressBar>
                        <ProgressBar striped variant="info" now= {0} key= {1} label= {'A'}/>
                        <ProgressBar striped variant="warning" now= {0} key= {2} label= {'AA'}/>
                        <ProgressBar striped variant="danger" now= {0} key= {3} label= {'AAA'}/>

                    </ProgressBar>
                </Card>);  }
        
        

 //       })
    }
//}, [props.websitesArray]);
}