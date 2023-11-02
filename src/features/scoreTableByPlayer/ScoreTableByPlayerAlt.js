import React, {useReducer} from "react";
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


const ScoreTableByPlayerAlt = () => {

    const [ player1State, dispatch ] = useReducer(
        (player1State, action) => ({
            ...player1State,
            ...action,
        }),
        {
            name: 'Player 1',
            military: 100,
            armada: 0,
            coins: 0,
            wonders: 0,
            blue: 0,
            yellow: 0,
            green: 0,
            purple: 0,
            boats: 0,
            leaders: 0,
            black: 0,
            total: 0,
        }
    );

    const [ player2State, player2Dispatch ] = useReducer(
        (player2State, action) => ({
            ...player2State,
            ...action,
        }),
        {
            name: 'Player 2',
            military: 75,
            armada: 0,
            coins: 0,
            wonders: 0,
            blue: 0,
            yellow: 0,
            green: 0,
            purple: 0,
            boats: 0,
            leaders: 0,
            black: 0,
            total: 0,
        }
    );



    const calculatePlayerTotalScore = (whichPlayer) => {
        return Number(whichPlayer.military) + Number(whichPlayer.armada) + Number(whichPlayer.coins) + Number(whichPlayer.wonders) + Number(whichPlayer.blue) + Number(whichPlayer.yellow) + Number(whichPlayer.green) + Number(whichPlayer.purple) + Number(whichPlayer.boats) + Number(whichPlayer.leaders) + Number(whichPlayer.black);
    }

    let player1TotalScore = calculatePlayerTotalScore(player1State);
    
 

    const Player1 = DataByPlayer[0];
    const Player2 = DataByPlayer[1];
    const Player3 = DataByPlayer[2];
    const Player4 = DataByPlayer[3];
    const Player5 = DataByPlayer[4];
    const Player6 = DataByPlayer[5];
    const Player7 = DataByPlayer[6];
    
    const calculatePlayerScore = (index) => {
        return DataByPlayer[index].military + DataByPlayer[index].armada + DataByPlayer[index].coins + DataByPlayer[index].wonders + DataByPlayer[index].blue + DataByPlayer[index].yellow + DataByPlayer[index].green + DataByPlayer[index].purple + DataByPlayer[index].boats + DataByPlayer[index].leaders + DataByPlayer[index].black;
       
    };

    return (
        <div class="tableFixHead">
            <table>
                <thead>
                    <tr>
                        <th id="firstCell"></th>
                        <th>
                            <input
                            name="Player1.name"
                            value={player1State.name}
                            type="text"
                            onChange={(e) => dispatch({name: e.target.value})}
                            />
                        </th>
                        <th>
                            <input
                            name="Player2.name"
                            value={player2State.name}
                            type="text"
                            onChange={(e) => player2Dispatch({name: e.target.value})}
                            />
                        </th>
                        <th>
                            <input
                            name="name"
                            type="text"
                            placeholder="Player3"
                            />
                        </th>
                        <th>
                            <input
                            name="name"
                            type="text"
                            placeholder="Player4"
                            />
                        </th>
                        <th>
                            <input
                            name="name"
                            type="text"
                            placeholder="Player5"
                            />
                        </th>
                        <th>
                            <input
                            name="name"
                            type="text"
                            placeholder="Player6"
                            />
                        </th>
                        <th>
                            <input
                            name="name"
                            type="text"
                            placeholder="Player7"
                            />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="militaryRow">
                        <th class="leftColumn militaryRow">
                            <img class="wondersIcon" 
                                src={icon_military} 
                                alt="military icon" 
                            /> 
                            <span class="categoryHeading">Military</span>
                        </th>
                        <td><input
                            name="Player1.military"
                            value={player1State.military}
                            type="number"
                            onChange={(e) => dispatch({military: e.target.value})}
                        />
                        </td>
                        <td><input
                            name="Player2.military"
                            value={player2State.military}
                            type="number"
                            onChange={(e) => player2Dispatch({military: e.target.value})}     
                        />
                        </td>
                        <td><input
                            name="Player3.military"
                            value={Player3.military}
                            type="number"            
                        />
                        </td>
                        <td><input
                            name="Player4.military"
                            value={Player4.military}
                            type="number"            
                        />
                        </td>
                        <td><input
                            name="Player5.military"
                            value={Player5.military}
                            type="number"            
                        />
                        </td>
                        <td><input
                            name="Player6.military"
                            value={Player6.military}
                            type="number"            
                        />
                        </td>
                        <td><input
                            name="Player7.military"
                            value={Player7.military}
                            type="number"            
                        />
                        </td>
                    </tr>
                    <tr class="armadaRow">
                        <th class="leftColumn armadaRow">
                            <img class="wondersIcon" 
                                src={icon_armada} 
                                alt="armada icon" /> 
                            <span class="categoryHeading">Armada</span>
                        </th>
                        <td><input
                            class="player1 armada"
                            value={player1State.armada}
                            type="number"
                            onChange={(e) => dispatch({armada: e.target.value})}               
                        /></td>
                        <td><input
                            class="player2 armada"
                            value={Player2.armada}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player3 armada"
                            value={Player3.armada}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player4 armada"
                            value={Player4.armada}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player5 armada"
                            value={Player5.armada}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player6 armada"
                            value={Player6.armada}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player7 armada"
                            value={Player7.armada}
                            type="number"                     
                        /></td>
                    </tr>
                    <tr class="coinsRow">
                        <th class="leftColumn coinsRow">
                            <img class="wondersIcon" 
                                src={icon_coins} 
                                alt="coins icon" /> 
                            <span class="categoryHeading">Coins & Minus Points</span>
                        </th>
                        <td><input
                            class="player1 coins"
                            value={player1State.coins}
                            type="number" 
                            onChange={(e) => dispatch({coins: e.target.value})}                    
                        /></td>
                        <td><input
                            class="player2 coins"
                            value={Player2.coins}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player3 coins"
                            value={Player3.coins}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player4 coins"
                            value={Player4.coins}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player5 coins"
                            value={Player5.coins}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player6 coins"
                            value={Player6.coins}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player7 coins"
                            value={Player7.coins}
                            type="number"                     
                        /></td>
                    </tr>
                    <tr class="wondersRow">
                        <th class="leftColumn wondersRow">
                            <img class="wondersIcon" 
                                src={icon_wonders} 
                                alt="wonders icon" /> 
                            <span class="categoryHeading">Wonders Board</span>
                        </th>
                        <td><input
                            class="player1 armada"
                            value={player1State.wonders}
                            type="number"
                            onChange={(e) => dispatch({wonders: e.target.value})}      
                        /></td>
                        <td><input
                            class="player2 wonders"
                            value={Player2.wonders}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player3 wonders"
                            value={Player3.wonders}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player4 wonders"
                            value={Player4.wonders}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player5 wonders"
                            value={Player5.wonders}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player6 wonders"
                            value={Player6.wonders}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player7 wonders"
                            value={Player7.wonders}
                            type="number"                     
                        /></td>

                    </tr>
                    <tr class="civicRow">
                        <th class="leftColumn civicRow">
                            <img class="wondersIcon" 
                                src={icon_blue} 
                                alt="civic icon" /> 
                            <span class="categoryHeading">Civic Cards</span>
                        </th>
                        <td><input
                            class="player1 blue"
                            value={player1State.blue}
                            type="number"
                            onChange={(e) => dispatch({blue: e.target.value})}                              /></td>
                        <td><input
                            class="player2 blue"
                            value={Player2.blue}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player3 blue"
                            value={Player3.blue}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player4 blue"
                            value={Player4.blue}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player5 blue"
                            value={Player5.blue}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player6 blue"
                            value={Player6.blue}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player7 blue"
                            value={Player7.blue}
                            type="number"                     
                        /></td>
                    </tr>
                    <tr class="commercialRow">
                        <th class="leftColumn commercialRow">
                            <img class="wondersIcon" 
                                src={icon_yellow} 
                                alt="commerical icon" /> 
                            <span class="categoryHeading">Commerical Cards</span>
                        </th>
                        <td><input
                            class="player1 yellow"
                            value={player1State.yellow}
                            type="number"
                            onChange={(e) => dispatch({yellow: e.target.value})}                              /></td>
                        <td><input
                            class="player2 yellow"
                            value={Player2.yellow}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player3 yellow"
                            value={Player3.yellow}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player4 yellow"
                            value={Player4.yellow}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player5 yellow"
                            value={Player5.yellow}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player6 yellow"
                            value={Player6.yellow}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player7 yellow"
                            value={Player7.yellow}
                            type="number"                     
                        /></td>
                    </tr>
                    <tr class="scientificRow">
                        <th class="leftColumn scientificRow">
                            <img class="wondersIcon" 
                                src={icon_green} 
                                alt="scientific icon" /> 
                            <span class="categoryHeading">Scientific Points</span>
                        </th>
                        <td><input
                            class="player1 green"
                            value={player1State.green}
                            type="number"
                            onChange={(e) => dispatch({green: e.target.value})}                              /></td>
                        <td><input
                            class="player2 green"
                            value={Player2.green}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player3 green"
                            value={Player3.green}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player4 green"
                            value={Player4.green}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player5 green"
                            value={Player5.green}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player6 green"
                            value={Player6.green}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player7 green"
                            value={Player7.green}
                            type="number"                     
                        /></td>
                    </tr>
                    <tr class="guildRow">
                        <th class="leftColumn guildRow">
                            <img class="wondersIcon" 
                                src={icon_purple} 
                                alt="guild icon" /> 
                            <span class="categoryHeading">Guild Cards</span>
                        </th>
                        <td><input
                            class="player1 purple"
                            value={player1State.purple}
                            type="number"
                            onChange={(e) => dispatch({purple: e.target.value})}                
                        /></td>
                        <td><input
                            class="player2 purple"
                            value={Player2.purple}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player3 purple"
                            value={Player3.purple}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player4 purple"
                            value={Player4.purple}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player5 purple"
                            value={Player5.purple}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player6 purple"
                            value={Player6.purple}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player7 purple"
                            value={Player7.purple}
                            type="number"                     
                        /></td>
                    </tr>
                    <tr class="boatRow">
                        <th class="leftColumn boatRow">
                            <img class="wondersIcon" 
                                src={icon_boats} 
                                alt="boats icon" /> 
                            <span class="categoryHeading">Boats & Islands</span>
                        </th>
                        <td><input
                            class="player1 boats"
                            value={player1State.boats}
                            type="number"
                            onChange={(e) => dispatch({boats: e.target.value})}             
                        /></td>
                        <td><input
                            class="player2 boats"
                            value={Player2.boats}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player3 boats"
                            value={Player3.boats}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player4 boats"
                            value={Player4.boats}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player5 boats"
                            value={Player5.boats}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player6 boats"
                            value={Player6.boats}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player7 boats"
                            value={Player7.boats}
                            type="number"                     
                        /></td>
                    </tr>
                    <tr class="leaderRow">
                        <th class="leftColumn leaderRow">
                            <img class="wondersIcon" 
                                src={icon_leaders} 
                                alt="leaders icon" /> 
                            <span class="categoryHeading">Leader Cards</span>
                        </th>
                        <td><input
                            class="player1 leaders"
                            value={player1State.leaders}
                            type="number"
                            onChange={(e) => dispatch({leaders: e.target.value})}              
                        /></td>
                        <td><input
                            class="player2 leaders"
                            value={Player2.leaders}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player3 leaders"
                            value={Player3.leaders}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player4 leaders"
                            value={Player4.leaders}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player5 leaders"
                            value={Player5.leaders}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player6 leaders"
                            value={Player6.leaders}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player7 leaders"
                            value={Player7.leaders}
                            type="number"                     
                        /></td>
                    </tr>
                    <tr class="citiesRow">
                        <th class="leftColumn citiesRow">
                            <img class="wondersIcon" 
                                src={icon_black} 
                                alt="cities icon" /> 
                            <span class="categoryHeading">Cities Cards</span>
                        </th>
                        <td><input
                            class="player1 black"
                            value={player1State.black}
                            type="number"
                            onChange={(e) => dispatch({black: e.target.value})}                 
                        /></td>
                        <td><input
                            class="player2 black"
                            value={Player2.black}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player3 black"
                            value={Player3.black}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player4 black"
                            value={Player4.black}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player5 black"
                            value={Player5.black}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player6 black"
                            value={Player6.black}
                            type="number"                     
                        /></td>
                        <td><input
                            class="player7 black"
                            value={Player7.black}
                            type="number"                     
                        /></td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th class="leftColumn totalHeadingCell"><span class="totalHeading">Total</span></th>
                        <td>{player1TotalScore}</td>
                        <td>{calculatePlayerScore(1)}</td>
                        <td>{calculatePlayerScore(2)}</td>
                        <td>{calculatePlayerScore(3)}</td>
                        <td>{calculatePlayerScore(4)}</td>
                        <td>{calculatePlayerScore(5)}</td>
                        <td>{calculatePlayerScore(6)}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
};

export default ScoreTableByPlayerAlt;