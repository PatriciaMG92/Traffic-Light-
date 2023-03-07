import React, {useState} from "react";



const isRedActivated="activated";
const isYellowActivated="activated";
const isGreenActivated="activated";


const TrafficBody = () =>{
    
    const [redGlow, setRedGlow] = useState("");
    
    const changeLightToRed = () =>{
        setYellowGlow('');
        setGreenGlow('');
        setRedGlow(isRedActivated);
    }

    const [yellowGlow, setYellowGlow] = useState("");
    
    const changeLightToYellow = () =>{
        setRedGlow('');
        setGreenGlow('');
        setYellowGlow(isYellowActivated);
    }

    const [greenGlow, setGreenGlow] = useState("");
    
    const changeLightToGreen = () =>{
        setRedGlow('');
        setYellowGlow('');
        setGreenGlow(isGreenActivated);
    }

    const authomaticRedToYellow = () =>{
        changeLightToRed(),
        setInterval(authomaticYellowToGreen, 3000);
    }

    const authomaticYellowToGreen = () =>{
        changeLightToYellow();
        setInterval(authomaticGreenToRed,3000);
    }
    const authomaticGreenToRed = () =>{
        changeLightToGreen();
        setInterval(authomaticRedToYellow,3000);
    }

    const automathicTrafficLight= ()=>{
        authomaticRedToYellow();
        
    }
    return(
        <>
        <div id="trafficBody">
            <div id="red" className={"red light "+ redGlow} onClick={()=>changeLightToRed()}></div>
            <div id="yellow" className={"yellow light "+ yellowGlow} onClick={()=>changeLightToYellow()}></div>
            <div id="green" className={"green light "+ greenGlow} onClick={()=>changeLightToGreen()}></div>
        </div>
        <div className="text-center mt-5">
            <button className="btn btn-warning"onClick={()=>{automathicTrafficLight()}}>Semáforo automático</button>
        </div>
        </>
    )
}

export default TrafficBody;