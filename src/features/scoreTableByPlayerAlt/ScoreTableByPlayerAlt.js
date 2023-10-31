import React from "react";
import { useState } from "react";
import DataByPlayer from "../../data/DataByPlayer";
import "./ScoreTableByPlayerAlt.css";

const ScoreTableByPlayerAlt = () => {
    const [playerScore, setPlayerScore] = useState(DataByPlayer);

    const onChangeInput = (e, playerId) => {
        const { name, value } = e.target
        console.log('name', name)
        console.log('value', value)
        console.log('playerId', playerId)
    
        const editData = DataByPlayer.map((item) =>
          item.playerId === playerId && name ? { ...item, [name]: value } : item
        )
    
        console.log('editData', editData)
    
        setPlayerScore(editData)
    };
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Military</th>
                        <th>Armada</th>
                        <th>Coins</th>
                        <th>Wonders</th>
                        <th>Blue</th>
                        <th>Yellow</th>
                        <th>Green</th>
                        <th>Purple</th>
                        <th>Boats</th>
                        <th>Leaders</th>
                        <th>Black</th>
                        <th>Total</th>
                    </tr>
                </thead>

                <tbody>
                </tbody>
            </table>
        </div>
    )
};

export default ScoreTableByPlayerAlt;