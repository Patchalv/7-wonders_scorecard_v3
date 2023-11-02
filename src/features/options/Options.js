import React, { useState } from "react";
import './Options.css';

const Options = () => {
    const [count, setCount] = useState(4)

    function decrementCount() {
        //setCount(count - 1)
        setCount(prevCount => prevCount - 1)
    }

    function incremenentCount() {
        //setCount(count - 1)
        setCount(prevCount => prevCount + 1)
    }

    return (
        <div class="gameOptions">
            <div>
                <button onClick={decrementCount}>-</button>
                <span>{count}</span>
                <button onClick={incremenentCount}>+</button>
            </div>
            
            <label for="playerSelect">Players:</label>

            <select name="playerSelect" id="playerSelect">
                <option value="3">3</option>
                <option value="4" selected>4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
            </select>

            <fieldset>
                <legend>Expansions:</legend>

                <div>
                    <input type="checkbox" id="leadersExpansion" name="leadersExpansion" checked />
                    <label for="leadersExpansion">Leaders</label>
                </div>

                <div>
                    <input type="checkbox" id="citiesExpansion" name="citiesExpansion" checked />
                    <label for="citiesExpansion">Cities</label>
                </div>
            </fieldset>
        </div>
    )
};

export default Options;
