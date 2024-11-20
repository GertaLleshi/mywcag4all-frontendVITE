import * as React from "react";
import Badge from "react-bootstrap/Badge";

export default function WcagLevels(props) {
      if(props.metAAA === 38 && props.metAA === 34 && props.metA === 72 ){ 
        return (
          <Badge pill bg="info">
            <abbr title="livello WCAG corrispondente"> AAA </abbr> 
          </Badge>); 
      }
      else if(props.metAA === 34 && props.metA ===72){
        return (
          <Badge pill bg="info">
            <abbr title="livello WCAG "> AA </abbr> 
          </Badge>); }
      else if(props.metA === 72){
        return (
          <Badge pill bg="info">
            <abbr title="livello WCAG corrispondente"> A </abbr>
          </Badge>);  }
      else{
        return (
          <Badge pill bg="info">
            <abbr title="livello WCAG "> N.A. </abbr>
          </Badge>);  }
    
}
