import React, {useState} from "react";
import DataByPlayer from "../../data/DataByPlayer";
import "./ScoreTableByPlayer.css";
import icon_military from '../../img/icon_military.png';
import icon_armada from '../../img/icon_armada.png';
import icon_black from '../../img/icon_black.png';
import icon_blue from '../../img/icon_blue.png';
import icon_boats from '../../img/icon_boats.png';
import icon_coins from '../../img/icon_coins.png';
import icon_green from '../../img/icon_green.png';
import icon_leaders from '../../img/icon_leaders.png';
import icon_purple from '../../img/icon_purple.png';
import icon_wonders from '../../img/icon_wonders.png';
import icon_yellow from '../../img/icon_yellow.png';


const ScoreTableByPlayer = () => {

    const handleTotalScore = (Arr, index) => {
        Arr[index].total = Number(Arr[index].military) + Number(Arr[index].armada) + Number(Arr[index].coins) + Number(Arr[index].wonders) + Number(Arr[index].blue) + Number(Arr[index].yellow) + Number(Arr[index].green) + Number(Arr[index].purple) + Number(Arr[index].boats) + Number(Arr[index].leaders) + Number(Arr[index].black)
    };

    const [state, setState] = useState(DataByPlayer);
    
    const handleNameChange = (index) => (e) => {
        let newArr = [...state];
        newArr[index].name = e.target.value;
        setState(newArr);
    };

    const handleMilitaryScore = (index) => (e) => {
      let newArr = [...state];
      newArr[index].military = e.target.value;
      handleTotalScore(newArr, index);
      setState(newArr);
    };

    const handleArmadaScore = (index) => (e) => {
        let newArr = [...state];
        newArr[index].armada = e.target.value;
        handleTotalScore(newArr, index);
        setState(newArr);
    };

    const handleCoinsScore = (index) => (e) => {
        let newArr = [...state];
        newArr[index].coins = e.target.value;
        handleTotalScore(newArr, index);
        setState(newArr);
    };

    const handleWondersScore = (index) => (e) => {
        let newArr = [...state];
        newArr[index].wonders = e.target.value;
        handleTotalScore(newArr, index);
        setState(newArr);
    };

    const handleCivicScore = (index) => (e) => {
        let newArr = [...state];
        newArr[index].blue = e.target.value;
        handleTotalScore(newArr, index);
        setState(newArr);
    };

    const handleCommercialScore = (index) => (e) => {
        let newArr = [...state];
        newArr[index].yellow = e.target.value;
        handleTotalScore(newArr, index);
        setState(newArr);
    };

    const handleScientificScore = (index) => (e) => {
        let newArr = [...state];
        newArr[index].green = e.target.value;
        handleTotalScore(newArr, index);
        setState(newArr);
    };

    const handleGuildScore = (index) => (e) => {
        let newArr = [...state];
        newArr[index].purple = e.target.value;
        handleTotalScore(newArr, index);
        setState(newArr);
    };

    const handleBoatScore = (index) => (e) => {
        let newArr = [...state];
        newArr[index].boats = e.target.value;
        handleTotalScore(newArr, index);
        setState(newArr);
    };

    const handleLeaderScore = (index) => (e) => {
        let newArr = [...state];
        newArr[index].leaders = e.target.value;
        handleTotalScore(newArr, index);
        setState(newArr);
    };

    const handleBlackScore = (index) => (e) => {
        let newArr = [...state];
        newArr[index].black = e.target.value;
        handleTotalScore(newArr, index);
        setState(newArr);
    };

    const Player1 = state[0];
    const Player2 = state[1];
    const Player3 = state[2];
    const Player4 = state[3];
    const Player5 = state[4];
    const Player6 = state[5];
    const Player7 = state[6];

    const [playerNumber, setPlayerNumber] = useState(4);

    function decrementCount() {
        if (playerNumber > 0){
        setPlayerNumber(prevPlayerNumber => prevPlayerNumber - 1);
        }
    }

    function incremenentCount() {
        if (playerNumber < 7){
            setPlayerNumber(prevPlayerNumber => prevPlayerNumber + 1);
        }
    }

    const [citiesVisible, setCitiesVisible] = useState(true);
    const clickCities = () => setCitiesVisible(!citiesVisible);

    const [leadersVisible, setLeadersVisible] = useState(true);
    const clickLeaders = () => setLeadersVisible(!leadersVisible);
    
    const [armadaVisible, setArmadaVisible] = useState(true);
    const clickArmada = () => setArmadaVisible(!armadaVisible);

    return (
        <div className="tableFixHead">
            <table>
                <thead>
                    <tr>
                        <th id="firstCell">
                            <span> s</span>
                        </th>
                        <th>
                            <input
                            name="name"
                            type="text"
                            value={Player1.name}
                            onChange={handleNameChange(0)}
                            />
                        </th>
                        <th>
                            <input
                            name="name"
                            type="text"
                            value={Player2.name}
                            onChange={handleNameChange(1)}
                            />
                        </th>
                        <th>
                            <input
                            name="name"
                            type="text"
                            value={Player3.name}
                            onChange={handleNameChange(2)}
                            />
                        </th>
                        {playerNumber > 3 ? (
                        <th>
                            <input
                            name="name"
                            type="text"
                            value={Player4.name}
                            onChange={handleNameChange(3)}
                            />
                        </th>): null}
                        {playerNumber > 4 ? (
                        <th>
                            <input
                            name="name"
                            type="text"
                            value={Player5.name}
                            onChange={handleNameChange(4)}
                            />
                        </th>): null}
                        {playerNumber > 5 ? (
                        <th>
                            <input
                            name="name"
                            type="text"
                            value={Player6.name}
                            onChange={handleNameChange(5)}
                            />
                        </th>): null}
                        {playerNumber > 6 ? (
                        <th>
                            <input
                            name="name"
                            type="text"
                            value={Player7.name}
                            onChange={handleNameChange(6)}
                            />
                        </th>): null}
                    </tr>
                </thead>
                <tbody>
                    <tr className="militaryRow">
                        <th className="leftColumn militaryRow">
                            <img className="wondersIcon" 
                                src={icon_military} 
                                alt="military icon" 
                            /> 
                            <span className="categoryHeading">Military</span>
                        </th>
                        <td><input
                            name="Player1.military"
                            value={Player1.military}
                            type="number"
                            onChange={handleMilitaryScore(0)}
                        />
                        </td>
                        <td><input
                            name="Player2.military"
                            value={Player2.military}
                            type="number"
                            onChange={handleMilitaryScore(1)}            
                        />
                        </td>
                        <td><input
                            name="Player3.military"
                            value={Player3.military}
                            type="number"   
                            onChange={handleMilitaryScore(2)}         
                        />
                        </td>
                        {playerNumber > 3 ? (
                        <td><input
                            name="Player4.military"
                            value={Player4.military}
                            type="number"  
                            onChange={handleMilitaryScore(3)}          
                            />
                        </td>
                        ): null}
                        {playerNumber > 4 ? (
                        <td><input
                            name="Player5.military"
                            value={Player5.military}
                            type="number"   
                            onChange={handleMilitaryScore(4)}         
                        />
                        </td>
                        ): null}
                        {playerNumber > 5 ? (
                        <td><input
                            name="Player6.military"
                            value={Player6.military}
                            type="number"  
                            onChange={handleMilitaryScore(5)}          
                        />
                        </td>
                        ): null}
                        {playerNumber > 6 ? (
                        <td><input
                            name="Player7.military"
                            value={Player7.military}
                            type="number"    
                            onChange={handleMilitaryScore(6)}        
                        />
                        </td>
                        ): null}
                    </tr>
                    {armadaVisible ? (
                    <tr className="armadaRow">
                        <th className="leftColumn armadaRow">
                            <img className="wondersIcon" 
                                src={icon_armada} 
                                alt="armada icon" /> 
                            <span className="categoryHeading">Armada</span>
                        </th>
                        <td><input
                            className="player1 armada"
                            value={Player1.armada}
                            type="number"
                            onChange={handleArmadaScore(0)}                          
                        /></td>
                        <td><input
                            className="player2 armada"
                            value={Player2.armada}
                            type="number" 
                            onChange={handleArmadaScore(1)}                       
                        /></td>
                        <td><input
                            className="player3 armada"
                            value={Player3.armada}
                            type="number"     
                            onChange={handleArmadaScore(2)}                   
                        /></td>
                        {playerNumber > 3 ? (
                        <td>
                            <input
                                className="player4 armada"
                                value={Player4.armada}
                                type="number"      
                                onChange={handleArmadaScore(3)}                 
                            />
                        </td>): null }
                        {playerNumber > 4 ? (
                        <td><input
                            className="player5 armada"
                            value={Player5.armada}
                            type="number"  
                            onChange={handleArmadaScore(4)}                      
                        /></td>) :null}
                        {playerNumber > 5 ? (
                        <td><input
                            className="player6 armada"
                            value={Player6.armada}
                            type="number"       
                            onChange={handleArmadaScore(5)}                 
                        /></td>) : null}
                        {playerNumber > 6 ? (
                        <td><input
                            value={Player7.armada}
                            type="number"         
                            onChange={handleArmadaScore(6)}               
                        /></td>) : null}
                    </tr>) : null}
                    <tr className="coinsRow">
                        <th className="leftColumn coinsRow">
                            <img className="wondersIcon" 
                                src={icon_coins} 
                                alt="coins icon" /> 
                            <span className="categoryHeading">Coins & Minus Points</span>
                        </th>
                        <td><input
                            className="player1 coins"
                            value={Player1.coins}
                            type="number"    
                            onChange={handleCoinsScore(0)}                    
                        /></td>
                        <td><input
                            className="player2 coins"
                            value={Player2.coins}
                            type="number"           
                            onChange={handleCoinsScore(1)}               
                        /></td>
                        <td><input
                            className="player3 coins"
                            value={Player3.coins}
                            type="number"     
                            onChange={handleCoinsScore(2)}                     
                        /></td>
                        {playerNumber > 3 ? (
                        <td>
                            <input
                                className="player4 coins"
                                value={Player4.coins}
                                type="number"      
                                onChange={handleCoinsScore(3)}                    
                            />
                        </td>) : null}
                        {playerNumber > 4 ? (
                        <td><input
                            className="player5 coins"
                            value={Player5.coins}
                            type="number"     
                            onChange={handleCoinsScore(4)}                     
                        /></td>) : null}
                        {playerNumber > 5 ? (
                        <td><input
                            className="player6 coins"
                            value={Player6.coins}
                            type="number"      
                            onChange={handleCoinsScore(5)}                    
                        /></td>) : null}
                        {playerNumber > 6 ? (
                        <td><input
                            className="player7 coins"
                            value={Player7.coins}
                            type="number"       
                            onChange={handleCoinsScore(6)}                  
                        /></td>) : null}
                    </tr>
                    <tr className="wondersRow">
                        <th className="leftColumn wondersRow">
                            <img className="wondersIcon" 
                                src={icon_wonders} 
                                alt="wonders icon" /> 
                            <span className="categoryHeading">Wonders Board</span>
                        </th>
                        <td><input
                            className="player1 wonders"
                            value={Player1.wonders}
                            type="number"  
                            onChange={handleWondersScore(0)}                        
                        /></td>
                        <td><input
                            className="player2 wonders"
                            value={Player2.wonders}
                            type="number"          
                            onChange={handleWondersScore(1)}            
                        /></td>
                        <td><input
                            className="player3 wonders"
                            value={Player3.wonders}
                            type="number"  
                            onChange={handleWondersScore(2)}                    
                        /></td>
                        {playerNumber > 3 ? (
                        <td>
                            <input
                                className="player4 wonders"
                                value={Player4.wonders}
                                type="number" 
                                onChange={handleWondersScore(3)}                     
                            />
                        </td>): null}
                        {playerNumber > 4 ? (
                        <td ><input
                            className="player5 wonders"
                            value={Player5.wonders}
                            type="number"    
                            onChange={handleWondersScore(4)}                  
                        /></td>): null}
                        {playerNumber > 5 ? (
                        <td ><input
                            className="player6 wonders"
                            value={Player6.wonders}
                            type="number"      
                            onChange={handleWondersScore(5)}                
                        /></td>): null}
                        {playerNumber > 6 ? (
                        <td ><input
                            className="player7 wonders"
                            value={Player7.wonders}
                            type="number"         
                            onChange={handleWondersScore(6)}             
                        /></td>): null}

                    </tr>
                    <tr className="civicRow">
                        <th className="leftColumn civicRow">
                            <img className="wondersIcon" 
                                src={icon_blue} 
                                alt="civic icon" /> 
                            <span className="categoryHeading">Civic Cards</span>
                        </th>
                        <td><input
                            className="player1 blue"
                            value={Player1.blue}
                            type="number"   
                            onChange={handleCivicScore(0)}                   
                        /></td>
                        <td><input
                            className="player2 blue"
                            value={Player2.blue}
                            type="number"   
                            onChange={handleCivicScore(1)}                     
                        /></td>
                        <td><input
                            className="player3 blue"
                            value={Player3.blue}
                            type="number"  
                            onChange={handleCivicScore(2)}                      
                        /></td>
                        {playerNumber > 3 ? (
                        <td >
                            <input
                                className="player4 blue"
                                value={Player4.blue}
                                type="number"   
                                onChange={handleCivicScore(3)}                     
                            />
                        </td>): null}
                        {playerNumber > 4 ? (
                        <td ><input
                            className="player5 blue"
                            value={Player5.blue}
                            type="number"     
                            onChange={handleCivicScore(4)}                   
                        /></td>): null}
                        {playerNumber > 5 ? (
                        <td ><input
                            className="player6 blue"
                            value={Player6.blue}
                            type="number"       
                            onChange={handleCivicScore(5)}                 
                        /></td>): null}
                        {playerNumber > 6 ? (
                        <td ><input
                            className="player7 blue"
                            value={Player7.blue}
                            type="number"       
                            onChange={handleCivicScore(6)}                 
                        /></td>): null}
                    </tr>
                    <tr className="commercialRow">
                        <th className="leftColumn commercialRow">
                            <img className="wondersIcon" 
                                src={icon_yellow} 
                                alt="commerical icon" /> 
                            <span className="categoryHeading">Commerical Cards</span>
                        </th>
                        <td><input
                            className="player1 yellow"
                            value={Player1.yellow}
                            type="number"    
                            onChange={handleCommercialScore(0)}                    
                        /></td>
                        <td><input
                            className="player2 yellow"
                            value={Player2.yellow}
                            type="number"  
                            onChange={handleCommercialScore(1)}                      
                        /></td>
                        <td><input
                            className="player3 yellow"
                            value={Player3.yellow}
                            type="number"       
                            onChange={handleCommercialScore(2)}                 
                        /></td>
                        {playerNumber > 3 ? (
                        <td >
                            <input
                                className="player4 yellow"
                                value={Player4.yellow}
                                type="number"      
                                onChange={handleCommercialScore(3)}                  
                            />
                        </td>): null}
                        {playerNumber > 4 ? (
                        <td ><input
                            className="player5 yellow"
                            value={Player5.yellow}
                            type="number"      
                            onChange={handleCommercialScore(4)}                  
                        /></td>): null}
                        {playerNumber > 5 ? (
                        <td ><input
                            className="player6 yellow"
                            value={Player6.yellow}
                            type="number"       
                            onChange={handleCommercialScore(5)}                 
                        /></td>): null}
                        {playerNumber > 6 ? (
                        <td ><input
                            className="player7 yellow"
                            value={Player7.yellow}
                            type="number"       
                            onChange={handleCommercialScore(6)}                 
                        /></td>): null}
                    </tr>
                    <tr className="scientificRow">
                        <th className="leftColumn scientificRow">
                            <img className="wondersIcon" 
                                src={icon_green} 
                                alt="scientific icon" /> 
                            <span className="categoryHeading">Scientific Points</span>
                        </th>
                        <td><input
                            className="player1 green"
                            value={Player1.green}
                            type="number"        
                            onChange={handleScientificScore(0)}                
                        /></td>
                        <td><input
                            className="player2 green"
                            value={Player2.green}
                            type="number"    
                            onChange={handleScientificScore(1)}                  
                        /></td>
                        <td><input
                            className="player3 green"
                            value={Player3.green}
                            type="number"          
                            onChange={handleScientificScore(2)}            
                        /></td>
                        {playerNumber > 3 ? (
                        <td >
                            <input
                                className="player4 green"
                                value={Player4.green}
                                type="number"    
                                onChange={handleScientificScore(3)}                  
                            />
                        </td>): null}
                        {playerNumber > 4 ? (
                        <td ><input
                            className="player5 green"
                            value={Player5.green}
                            type="number"            
                            onChange={handleScientificScore(4)}          
                        /></td>): null}
                        {playerNumber > 5 ? (
                        <td ><input
                            className="player6 green"
                            value={Player6.green}
                            type="number"           
                            onChange={handleScientificScore(5)}           
                        /></td>): null}
                        {playerNumber > 6 ? (
                        <td ><input
                            className="player7 green"
                            value={Player7.green}
                            type="number"            
                            onChange={handleScientificScore(6)}          
                        /></td>): null}
                    </tr>
                    <tr className="guildRow">
                        <th className="leftColumn guildRow">
                            <img className="wondersIcon" 
                                src={icon_purple} 
                                alt="guild icon" /> 
                            <span className="categoryHeading">Guild Cards</span>
                        </th>
                        <td><input
                            className="player1 purple"
                            value={Player1.purple}
                            type="number"      
                            onChange={handleGuildScore(0)}                
                        /></td>
                        <td><input
                            className="player2 purple"
                            value={Player2.purple}
                            type="number"        
                            onChange={handleGuildScore(1)}                 
                        /></td>
                        <td><input
                            className="player3 purple"
                            value={Player3.purple}
                            type="number"         
                            onChange={handleGuildScore(2)}                
                        /></td>
                        {playerNumber > 3 ? (
                        <td>
                            <input
                                className="player4 purple"
                                value={Player4.purple}
                                type="number"         
                                onChange={handleGuildScore(3)}                
                            />
                        </td>): null}
                        {playerNumber > 4 ? (
                        <td ><input
                            className="player5 purple"
                            value={Player5.purple}
                            type="number"          
                            onChange={handleGuildScore(4)}               
                        /></td>): null}
                        {playerNumber > 5 ? (
                        <td ><input
                            className="player6 purple"
                            value={Player6.purple}
                            type="number"           
                            onChange={handleGuildScore(5)}              
                        /></td>): null}
                        {playerNumber > 6 ? (
                        <td ><input
                            className="player7 purple"
                            value={Player7.purple}
                            type="number"           
                            onChange={handleGuildScore(6)}              
                        /></td>): null}
                    </tr>
                    {armadaVisible ? (
                    <tr className="boatRow">
                        <th className="leftColumn boatRow">
                            <img className="wondersIcon" 
                                src={icon_boats} 
                                alt="boats icon" /> 
                            <span className="categoryHeading">Boats & Islands</span>
                        </th>
                        <td><input
                            className="player1 boats"
                            value={Player1.boats}
                            type="number"         
                            onChange={handleBoatScore(0)}                
                        /></td>
                        <td><input
                            className="player2 boats"
                            value={Player2.boats}
                            type="number"   
                            onChange={handleBoatScore(1)}                   
                        /></td>
                        <td><input
                            className="player3 boats"
                            value={Player3.boats}
                            type="number"      
                            onChange={handleBoatScore(2)}                
                        /></td>
                        {playerNumber > 3 ? (
                        <td >
                            <input
                                className="player4 boats"
                                value={Player4.boats}
                                type="number"     
                                onChange={handleBoatScore(3)}                 
                            />
                        </td>): null}
                        {playerNumber > 4 ? (
                        <td ><input
                            className="player5 boats"
                            value={Player5.boats}
                            type="number"     
                            onChange={handleBoatScore(4)}                 
                        /></td>): null}
                        {playerNumber > 5 ? (
                        <td ><input
                            className="player6 boats"
                            value={Player6.boats}
                            type="number"     
                            onChange={handleBoatScore(5)}                 
                        /></td>): null}
                        {playerNumber > 6 ? (
                        <td ><input
                            className="player7 boats"
                            value={Player7.boats}
                            type="number"     
                            onChange={handleBoatScore(6)}                 
                        /></td>): null}
                    </tr>) : null }
                    {leadersVisible ? (
                    <tr className="leaderRow">
                        <th className="leftColumn leaderRow">
                            <img className="wondersIcon" 
                                src={icon_leaders} 
                                alt="leaders icon" /> 
                            <span className="categoryHeading">Leader Cards</span>
                        </th>
                        <td><input
                            className="player1 leaders"
                            value={Player1.leaders}
                            type="number" 
                            onChange={handleLeaderScore(0)}                     
                        /></td>
                        <td><input
                            className="player2 leaders"
                            value={Player2.leaders}
                            type="number"                
                            onChange={handleLeaderScore(1)}     
                        /></td>
                        <td><input
                            className="player3 leaders"
                            value={Player3.leaders}
                            type="number"          
                            onChange={handleLeaderScore(2)}           
                        /></td>
                        {playerNumber > 3 ? (
                        <td >
                            <input
                                className="player4 leaders"
                                value={Player4.leaders}
                                type="number"           
                                onChange={handleLeaderScore(3)}          
                            />
                        </td>): null}
                        {playerNumber > 4 ? (
                        <td ><input
                            className="player5 leaders"
                            value={Player5.leaders}
                            type="number"     
                            onChange={handleLeaderScore(4)}                
                        /></td>): null}
                        {playerNumber > 5 ? (
                        <td ><input
                            className="player6 leaders"
                            value={Player6.leaders}
                            type="number"       
                            onChange={handleLeaderScore(5)}              
                        /></td>): null}
                        {playerNumber > 6 ? (
                        <td ><input
                            className="player7 leaders"
                            value={Player7.leaders}
                            type="number"        
                            onChange={handleLeaderScore(6)}             
                        /></td>): null}
                    </tr>) : null }
                    {citiesVisible ? (
                    <tr className="citiesRow">
                        <th className="leftColumn citiesRow">
                            <img className="wondersIcon" 
                                src={icon_black} 
                                alt="cities icon" /> 
                            <span className="categoryHeading">Cities Cards</span>
                        </th>
                        <td><input
                            className="player1 black"
                            value={Player1.black}
                            type="number"    
                            onChange={handleBlackScore(0)}                 
                        /></td>
                        <td><input
                            className="player2 black"
                            value={Player2.black}
                            type="number"        
                            onChange={handleBlackScore(1)}              
                        /></td>
                        <td><input
                            className="player3 black"
                            value={Player3.black}
                            type="number"    
                            onChange={handleBlackScore(2)}                  
                        /></td>
                        {playerNumber > 3 ? (
                        <td >
                            <input
                                className="player4 black"
                                value={Player4.black}
                                type="number"      
                                onChange={handleBlackScore(3)}                
                            />
                        </td>): null}
                        {playerNumber > 4 ? (
                        <td ><input
                            className="player5 black"
                            value={Player5.black}
                            type="number"         
                            onChange={handleBlackScore(4)}             
                        /></td>): null}
                        {playerNumber > 5 ? (
                        <td ><input
                            className="player6 black"
                            value={Player6.black}
                            type="number"        
                            onChange={handleBlackScore(5)}              
                        /></td>): null}
                        {playerNumber > 6 ? (
                        <td ><input
                            className="player7 black"
                            value={Player7.black}
                            type="number"      
                            onChange={handleBlackScore(6)}                
                        /></td>): null}
                    </tr>) : null }
                </tbody>
                <tfoot>
                    <tr>
                        <th className="leftColumn totalHeadingCell"><span className="totalHeading">Total</span></th>
                        <td>{Player1.total}</td>
                        <td>{Player2.total}</td>
                        <td>{Player3.total}</td>
                        {playerNumber > 3 ? (<td >{Player4.total}</td>): null}
                        {playerNumber > 4 ? (<td >{Player5.total}</td>): null}
                        {playerNumber > 5 ? (<td >{Player6.total}</td>): null}
                        {playerNumber > 6 ? (<td >{Player7.total}</td>): null}
                    </tr>
                </tfoot>
            </table>
            <div className="gameOptions">
                <div className ="playerOptions">
                    <h3>Players:</h3>
                    <button className="minusBtn" onClick={decrementCount}>-</button>
                    <span className="playerNumber">{playerNumber}</span>
                    <button className="plusBtn" onClick={incremenentCount}>+</button>
                </div>
                <div className="expansionOptions">
                    <h3>Expansions:</h3>
                    <div className="expansionInputContainer">
                        <label className="container-checkbox">Leaders
                            <input type="checkbox" id="leadersExpansion" name="leadersExpansion" checked={leadersVisible} onClick={clickLeaders} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container-checkbox">Cities
                            <input type="checkbox" id="citiesExpansion" name="citiesExpansion" checked={citiesVisible} onClick={clickCities} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container-checkbox">Armada
                            <input type="checkbox" id="armadaExpansion" name="armadaExpansion" checked={armadaVisible} onClick={clickArmada} />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="author">
                    <p className="authorText">App design: <a href="https://patchalv.github.io/">Patrick Alvarez</a></p>
                </div>
                <div className="gameProducers">
                    <p className="authorText">Original game: <a href="https://www.rprod.com/en/games/7-wonders">Repos Productions</a></p>
                </div>
            </div>
        </div>
    )
};

export default ScoreTableByPlayer;