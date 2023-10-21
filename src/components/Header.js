import React from "react";

function Header(props) {

    const renderGame1 = () => {
        props.gameHandler("TicTacToe")
    }

    const renderGame2 = () => {
        props.gameHandler("Hangman")
    }

    return (
        <div className="header">
            <h2>Pulparindo Games</h2>
            <div className="buttons">
                <button onClick={renderGame1}>Tic-Tac-Toe</button>
                <button onClick={renderGame2}>Hangman</button>
            </div>
        </div>
    )
}

export default Header;