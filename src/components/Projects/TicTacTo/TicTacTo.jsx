import React, { useState, useEffect } from 'react';
import './TicTacTo.css';
const players = ['Player 1', 'Player 2'];
const boardInitial = {
    nw: null,
    n: null,
    ne: null,
    w: null,
    c: null,
    e: null,
    sw: null,
    s: null,
    se: null,
}

export const TicTacTo = (props) => {
    const [turn, setTurn] = useState(0);
    const [winner, setWinner] = useState(null);
    const [boardMap, setBoardMap] = useState(boardInitial);
    useEffect(() => {
        const {win, player} = checkWinEvent();
        console.log(win);
        if(win){
            setTurn(0);
            setWinner(player)
            setBoardMap(boardInitial);
        }
    }, [boardMap]);
    const writeBlock = (space) => {
        const currentPlayer = turn % 2
        setBoardMap({...boardMap, [space.target.id]: players[currentPlayer]});
        setTurn(turn + 1);
    }
    const checkWinEvent = () => {
        //NORTH
        if(boardMap.nw && boardMap.nw === boardMap.n && boardMap.nw === boardMap.ne){
            console.log('#######NORTH WIN');
            console.log(boardMap.nw, boardMap.n, boardMap.ne);
            return {win: true, player: boardMap.nw}
        }
        //EAST TO WEST
        if(boardMap.e && boardMap.e === boardMap.c && boardMap.e === boardMap.w){
            console.log('#######EAST WEST WIN');
            console.log(boardMap.e, boardMap.c, boardMap.w);
            return {win: true, player: boardMap.e}
        }
        //SOUTH
        if(boardMap.sw && boardMap.sw === boardMap.s && boardMap.sw === boardMap.se){
            console.log('#######SOUTH WIN');
            console.log(boardMap.sw, boardMap.s, boardMap.se);
            return {win: true, player: boardMap.sw}
        }
        //WEST
        if(boardMap.nw && boardMap.nw === boardMap.w && boardMap.nw === boardMap.sw){
            console.log('#######WEST WIN');
            console.log(boardMap.nw, boardMap.w, boardMap.sw);
            return {win: true, player: boardMap.nw}
        }
        //NORTH TO SOUTH
        if(boardMap.n && boardMap.n === boardMap.c && boardMap.n === boardMap.s){
            console.log('#######SOUTH WIN');
            console.log(boardMap.n, boardMap.c, boardMap.s);
            return {win: true, player: boardMap.n}
        }
        //EAST
        if(boardMap.ne && boardMap.ne === boardMap.e && boardMap.ne === boardMap.se){
            console.log('#######EAST WIN');
            console.log(boardMap.ne, boardMap.e, boardMap.se);
            return {win: true, player: boardMap.ne}
        }
        //NORTHEAST TO SOUTHWEST
        if(boardMap.ne && boardMap.ne === boardMap.c && boardMap.ne === boardMap.sw){
            console.log('#######NORTHEAST TO SOUTHWEST WIN');
            console.log(boardMap.ne, boardMap.c, boardMap.sw);
            return {win: true, player: boardMap.ne}
        }
        //NORTHWEST TO SOUTHEAST
        if(boardMap.nw && boardMap.nw === boardMap.c && boardMap.nw === boardMap.se){
            console.log('#######NORTHWEST TO SOUTHEAST WIN');
            console.log(boardMap.nw, boardMap.c, boardMap.se);
            return {win: true, player: boardMap.nw}
        }
        return {win: false}
    }
    return (
        <div className='projectContainer'>
            <div>
                <div>
                    WINNER {winner}
                </div>
                <div className='ttt-row'>
                    <div id='nw' onClick={e => writeBlock(e)} className='north-west corner ttt-square'>{boardMap.nw}</div>
                    <div id='n' onClick={e => writeBlock(e)}  className='north side ttt-square'>{boardMap.n}</div>
                    <div id='ne' onClick={e => writeBlock(e)}  className='north-east corner ttt-square'>{boardMap.ne}</div>
                </div>
                <div className='ttt-row'>
                    <div id='w' onClick={e => writeBlock(e)}  className='west side ttt-square'>{boardMap.w}</div>
                    <div id='c' onClick={e => writeBlock(e)}  className='center ttt-square'>{boardMap.c}</div>
                    <div id='e' onClick={e => writeBlock(e)}  className='east side ttt-square'>{boardMap.e}</div>
                </div>
                <div className='ttt-row'>
                    <div id='sw' onClick={e => writeBlock(e)}  className='south-west corner ttt-square'>{boardMap.sw}</div>
                    <div id='s' onClick={e => writeBlock(e)}  className='south side ttt-square'>{boardMap.s}</div>
                    <div id='se' onClick={e => writeBlock(e)}  className='south-east corner ttt-square'>{boardMap.se}</div>
                </div>
            </div>
        </div>
    );
}

// export default TicTacTo;
