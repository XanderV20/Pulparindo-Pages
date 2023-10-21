import React, { useState, useEffect } from "react";
import X from "./media/Tamarindo.png";
import O from "./media/Mazapan.jpeg";

function Gameboard(props) {
    const [playing, setPlaying] = useState(true)
    let game;
    let first = true;
    let results = ["","","","","","","","",""]

    useEffect(() => {
        first = true;
        results = ["","","","","","","","",""];
        setPlaying(true) 
    }, [props.game])

    const checkState = () => {
        if (results[0] == results[1] && results[1] == results[2] && results[0] != ""){ 
            if (results[0] == "X") {
                setPlaying(false);
                document.getElementById("response").innerHTML = "Player 1 has won";
            } else if (results[0] == "O") {
                setPlaying(false);
                document.getElementById("response").innerHTML = "Player 2 has won";  
            }
        } else if (results[3] == results[4] && results[4] == results[5] && results[3] != "") {
            if (results[3] == "X") {
                setPlaying(false);
                document.getElementById("response").innerHTML = "Player 1 has won";
            } else if (results[3] == "O") {
                setPlaying(false);
                document.getElementById("response").innerHTML = "Player 2 has won";              
            }
        } else if (results[6] == results[7] && results[7] == results[8] && results[6] != "") {
            if (results[6] == "X") {
                setPlaying(false);
                document.getElementById("response").innerHTML = "Player 1 has won";                
            } else if (results[6] == "O") {
                setPlaying(false);
                document.getElementById("response").innerHTML = "Player 2 has won";                
            }
        } else if (results[0] == results[3] && results[3] == results[6] && results[0] != "") {
            if (results[0] == "X") {
                setPlaying(false);
                document.getElementById("response").innerHTML = "Player 1 has won";
            } else if (results[0] == "O") {
                setPlaying(false);
                document.getElementById("response").innerHTML = "Player 2 has won";
            }
        } else if (results[1] == results[4] && results[4] == results[7] && results[1] != "") {
            if (results[1] == "X") {
                setPlaying(false);
                document.getElementById("response").innerHTML = "Player 1 has won";
            } else if (results[1] == "O") {
                setPlaying(false);
                document.getElementById("response").innerHTML = "Player 2 has won";
            }
        } else if (results[2]== results[5] && results[5] == results[8] && results[2] != "") {
            if (results[2] == "X") {
                setPlaying(false);
                document.getElementById("response").innerHTML = "Player 1 has won";
            } else if (results[2] == "O") {
                setPlaying(false);
                document.getElementById("response").innerHTML = "Player 2 has won";
            }
        } else if (results[6]== results[4] && results[4] == results[2] && results[6] != "") {
            if (results[6] == "X") {
                setPlaying(false);
                document.getElementById("response").innerHTML = "Player 1 has won";
            } else if (results[6] == "O") {
                setPlaying(false);
                document.getElementById("response").innerHTML = "Player 2 has won";
            }
        } else if (results[0] == results[4] && results[4] == results[8] && results[0] != "") {
            if (results[0] == "X") {
                setPlaying(false);
                document.getElementById("response").innerHTML = "Player 1 has won";
            } else if (results[0] == "O") {
                setPlaying(false);
                document.getElementById("response").innerHTML = "Player 2 has won";
            }
        }
    }

    const handlePressed = (e) => {
        let { id } = e.target
        if (results[id-1] == "" && playing) {
            let img = document.createElement('img');
            if (first) {
                img.src = X
                results[id - 1] = "X"
            } else {
                img.src = O
                results[id - 1] = "O"
            }
            first = !first
            document.getElementById(id).appendChild(img)
            checkState()
        }
    }

    const reset = () => {
        setPlaying(true);
        first = true;
        for (let i = 1; i < 10;i++) {
            document.getElementById(""+i+"").innerHTML = ""
            results[i-1] = ""
        }
        document.getElementById("response").innerHTML = ""
    }

    if (props.game == "TicTacToe") {
        game = (
            <div className="game">
                <div className="tictactoe">
                    <table>
                        <tr>
                            <td onClick={handlePressed} id="1"></td>
                            <td onClick={handlePressed} id="2"></td>
                            <td onClick={handlePressed} id="3"></td>
                        </tr>
                        <tr>
                            <td onClick={handlePressed} id="4"></td>
                            <td onClick={handlePressed} id="5"></td>
                            <td onClick={handlePressed} id="6"></td>
                        </tr>
                        <tr>
                            <td onClick={handlePressed} id="7"></td>
                            <td onClick={handlePressed} id="8"></td>
                            <td onClick={handlePressed} id="9"></td>
                        </tr>
                    </table>
                </div>
                <div className="info">
                    <p id="response"></p>
                    <button onClick={reset}>Reset Game</button>
                </div>
            </div>
        )
    } else {
        game = (
            <p>Hangman</p>
        )
    }
    

    return (
        <div className="gameboard">{game}</div>
    )
}

export default Gameboard;