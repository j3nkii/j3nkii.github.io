import React, { useState, useEffect } from 'react';
import './TicTacTo.css';
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
};
const threatsInitial = {
    north: 0,
    eastToWest: 0,
    south: 0,
    east: 0,
    northToSouth: 0,
    west: 0,
    northWestToSouthEast: 0,
    northEastToSouthWest: 0
}

export const TicTacTo = (props) => {
    const [turn, setTurn] = useState(1);
    const [winner, setWinner] = useState(null);
    const [boardMap, setBoardMap] = useState(boardInitial);
    const [threats, setThreats] = useState(threatsInitial);
    console.log('----------------');
    console.log(turn);
    useEffect(() => {
        const {win, player} = checkWinEvent();
        if(win){
            setTurn(1);
            setWinner(player)
            setBoardMap(boardInitial);
        }
    }, [boardMap]);

    useEffect(() => {
        const currentThreat = threatCheck();
        if(turn % 2 === 0){
            console.log('ROBO TURN');
            const {nw, n, ne, e, c, w, sw, s, se} = boardMap;
            if(turn === 2){
                console.log('ROBO FIRST MOVE');
                if(boardMap.c){
                    //todo randomize corner selection
                    setBoardMap({...boardMap, nw: 'ROBOTRON'});
                    setTurn(turn + 1);
                } else {
                    setBoardMap({...boardMap, c: 'ROBOTRON'});
                }
            } else if(turn === 4){
                console.log('ROBO SECOND MOVE');
                const currentThreat = threatCheck();
                if(c !== 'ROBOTRON'){
                    if(s){
                        setBoardMap({...boardMap, n: 'ROBOTRON'});
                    }else if(e){
                        setBoardMap({...boardMap, w: 'ROBOTRON'});
                    }
                } else {

                }
            }
        }
    }, [turn]);

    const threatCheck = () => {
        console.log('############################THREATS');
        console.log(threats);
        const keys = Object.keys(threats);
        let currentThreat = '';
        for(let i = 0; i < keys.length; i++){
            console.log(`${[keys[i]]}: ${threats[keys[i]]}`);
            if(threats[keys[i]] >= 2){
                currentThreat = keys[i]
            }
        }
        console.log('CURRENT', currentThreat);
        switch (currentThreat) {
            case 'north':
                break;
            case 'eastToWest':
                break;
            case 'south':
                break;
            case 'east':
                break;
            case 'northToSouth':
                break;
            case 'west':
                break;
            case 'northEastToSouthWest':
                break;
            case 'northWestToSouthEast':
                break;
            default:
                break;
        }
        console.log('#############################');
    }

    const writeBlock = (space) => {
        console.log('#############################WRITE BLOCK');
        console.log(space.target.id);
        const markSpace = space.target.id
        //todo fix to accept a space, not an elemtn
        setBoardMap({...boardMap, [space.target.id]: 'PLAYERONE'});
        const newThreats = {...threats}
        if(markSpace === 'nw'){
            setThreats({...threats,
                north: threats.north + 1,
                west: threats.west + 1,
                northWestToSouthEast: threats.northWestToSouthEast +1
            });
        }
        if(markSpace === 'n'){
            setThreats({...threats,
                north: threats.north + 1,
                northToSouth: threats.northToSouth + 1,
            });
        }
        if(markSpace === 'ne'){
            setThreats({...threats,
                north: threats.north + 1,
                east: threats.east + 1,
                northEastToSouthWest: threats.northEastToSouthWest + 1,
            });
        }
        if(markSpace === 'w'){
            setThreats({...threats,
                west: threats.west + 1,
                eastToWest: threats.eastToWest + 1,
            });
        }
        if(markSpace === 'c'){
            setThreats({...threats,
                northToSouth: threats.northToSouth + 1,
                eastToWest: threats.eastToWest + 1,
                northEastToSouthWest: threats.northEastToSouthWest + 1,
                northWestToSouthEast: threats.northWestToSouthEast + 1,
            });
        }
        if(markSpace === 'e'){
            setThreats({...threats,
                east: threats.east + 1,
                eastToWest: threats.northToSouth + 1,
            });
        }
        if(markSpace === 'sw'){
            setThreats({...threats,
                west: threats.west + 1,
                south: threats.south + 1,
                northEastToSouthWest: threats.northEastToSouthWest + 1,
            });
        }
        if(markSpace === 's'){
            setThreats({...threats,
                south: threats.south + 1,
                northToSouth: threats.northToSouth + 1,
            });
        }
        if(markSpace === 'se'){
            setThreats({...threats,
                east: threats.east + 1,
                south: threats.south + 1,
                northWestToSouthEast: threats.northWestToSouthEast + 1,
            });
        }




        switch (space.target.id) {
            case 'nw' || 'n' || 'ne':
                setThreats({...threats, north: threats.north + 1});
                break;
            case 'w' || 'c' || 'e':
                setThreats({...threats, eastToWest: threats.eastToWest + 1});
                break;
            case 'sw' || 's' || 'se':
                setThreats({...threats, south: threats.south + 1});
                break;
            case 'nw' || 'w' || 'sw':
                setThreats({...threats, west: threats.west + 1});
                break;
            case 'n' || 'c' || 's':
                setThreats({...threats, northToSouth: threats.northToSouth + 1});
                break;
            case 'ne' || 'e' || 'se':
                setThreats({...threats, east: threats.east + 1});
                break;
            case 'nw' || 'c' || 'se':
                setThreats({...threats, northWestToSouthEast: threats.northWestToSouthEast + 1});
                break;
            case 'ne' || 'c' || 'sw':
                setThreats({...threats, northEastToSouthWest: threats.northEastToSouthWest + 1});
                break;
            default:
                break;
        }
        setTurn(turn + 1);
        console.log('#############################');
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
