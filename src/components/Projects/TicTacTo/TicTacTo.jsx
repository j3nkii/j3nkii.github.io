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
const victoriesInitial = {
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
    const [players, setPlayers] = useState(['X', 'O'])
    const [turn, setTurn] = useState(0);
    const [winner, setWinner] = useState(null);
    const [boardMap, setBoardMap] = useState(boardInitial);

    const [threats, setThreats] = useState(threatsInitial);
    const [victories, setVictories] =useState(victoriesInitial);

    useEffect(() => {
        const {win, player} = checkWinEvent();
        if(win){
            setWinner(player)
        }
    }, [boardMap]);



    useEffect(() => {
        if(turn % 2 === 1){
            // const currentThreat = threatCheck();
            const {nw, n, ne, e, c, w, sw, s, se} = boardMap;
            if(turn === 1){
                if(boardMap.c){
                    //todo randomize corner selection
                    writeBlock('nw')
                } else {
                    writeBlock('c')
                }
            } else if(turn === 3){
                if(victoryCheck())return
                if(threatCheck())return
                if(c !== 'O'){
                    if(se){
                        takeCorner();
                    } else {
                        takeSide();
                    }
                } else {
                    if(e && n){
                        writeBlock('ne');
                    } else if(n && w){
                        writeBlock('nw');
                    } else if(s && w){
                        writeBlock('sw');
                    } else if(s && e){
                        writeBlock('se');
                    } else {
                        takeSide();
                    }
                }
            } else {
                if(victoryCheck())return
                if(threatCheck())return
                takeRandom();
            }
        }
    }, [turn]);


    const reset = () => {
        setTurn(0);
        setWinner('')
        setBoardMap(boardInitial);
        setThreats(threatsInitial);
        setVictories(victoriesInitial);
    }



    const threatCheck = () => {
        const keys = Object.keys(threats);
        let currentThreat = '';
        for(let i = 0; i < keys.length; i++){
            if(threats[keys[i]] >= 2){
                currentThreat = keys[i]
            }
        }
        const {nw, n, ne, e, c, w, sw, s, se} = boardMap;
        switch (currentThreat) {
            case 'north':
                if(!nw){
                    writeBlock('nw')
                }else if(!n){
                    writeBlock('n')
                }else if(!ne){
                    writeBlock('ne')
                }
                break;
            case 'eastToWest':
                if(!e){
                    writeBlock('e')
                }else if(!c){
                    writeBlock('c')
                }else if(!w){
                    writeBlock('w')
                }
                break;
            case 'south':
                if(!sw){
                    writeBlock('sw')
                }else if(!s){
                    writeBlock('s')
                }else if(!se){
                    writeBlock('se')
                }
                break;
            case 'east':
                if(!ne){
                    writeBlock('ne')
                }else if(!e){
                    writeBlock('e')
                }else if(!se){
                    writeBlock('se')
                }
                break;
            case 'northToSouth':
                if(!n){
                    writeBlock('n')
                }else if(!c){
                    writeBlock('c')
                }else if(!s){
                    writeBlock('s')
                }
                break;
            case 'west':
                if(!nw){
                    writeBlock('nw')
                }else if(!w){
                    writeBlock('w')
                }else if(!sw){
                    writeBlock('sw')
                }
                break;
            case 'northEastToSouthWest':
                if(!ne){
                    writeBlock('ne')
                }else if(!c){
                    writeBlock('c')
                }else if(!sw){
                    writeBlock('sw')
                }
                break;
            case 'northWestToSouthEast':
                if(!nw){
                    writeBlock('nw')
                }else if(!c){
                    writeBlock('c')
                }else if(!se){
                    writeBlock('se')
                }
                break;
            default:
                return false
                break;
        }
        return true;
    }




    const victoryCheck = () => {
        const keys = Object.keys(victories);
        let currentVictory = '';
        for(let i = 0; i < keys.length; i++){
            if(victories[keys[i]] >= 2){
                currentVictory = keys[i]
            }
        }
        const {nw, n, ne, e, c, w, sw, s, se} = boardMap;
        switch (currentVictory) {
            case 'north':
                if(!nw){
                    writeBlock('nw')
                }else if(!n){
                    writeBlock('n')
                }else if(!ne){
                    writeBlock('ne')
                }
                break;
            case 'eastToWest':
                if(!e){
                    writeBlock('e')
                }else if(!c){
                    writeBlock('c')
                }else if(!w){
                    writeBlock('w')
                }
                break;
            case 'south':
                if(!sw){
                    writeBlock('sw')
                }else if(!s){
                    writeBlock('s')
                }else if(!se){
                    writeBlock('se')
                }
                break;
            case 'east':
                if(!ne){
                    writeBlock('ne')
                }else if(!e){
                    writeBlock('e')
                }else if(!se){
                    writeBlock('se')
                }
                break;
            case 'northToSouth':
                if(!n){
                    writeBlock('n')
                }else if(!c){
                    writeBlock('c')
                }else if(!s){
                    writeBlock('s')
                }
                break;
            case 'west':
                if(!nw){
                    writeBlock('nw')
                }else if(!w){
                    writeBlock('w')
                }else if(!sw){
                    writeBlock('sw')
                }
                break;
            case 'northEastToSouthWest':
                if(!ne){
                    writeBlock('ne')
                }else if(!c){
                    writeBlock('c')
                }else if(!sw){
                    writeBlock('sw')
                }
                break;
            case 'northWestToSouthEast':
                if(!nw){
                    writeBlock('nw')
                }else if(!c){
                    writeBlock('c')
                }else if(!se){
                    writeBlock('se')
                }
                break;
            default:
                return false
                break;
        }
        return true;
    }



    const victoryHandler = (space) => {
        if(turn % 2 === 1){
            if(space === 'nw'){
                setVictories({...victories,
                    north: victories.north + 1,
                    west: victories.west + 1,
                    northWestToSouthEast: victories.northWestToSouthEast + 1
                });
            }
            if(space === 'n'){
                setVictories({...victories,
                    north: victories.north + 1,
                    northToSouth: victories.northToSouth + 1
                });
            }
            if(space === 'ne'){
                setVictories({...victories,
                    north: victories.north + 1,
                    east: victories.east + 1,
                    northEastToSouthWest: victories.northEastToSouthWest + 1,
                });
            }
            if(space === 'w'){
                setVictories({...victories,
                    west: victories.west + 1,
                    eastToWest: victories.eastToWest + 1
                });
            }
            if(space === 'c'){
                setVictories({...victories,
                    northToSouth: victories.northToSouth + 1,
                    eastToWest: victories.eastToWest + 1,
                    northEastToSouthWest: victories.northEastToSouthWest + 1,
                    northWestToSouthEast: victories.northWestToSouthEast + 1,
                });
            }
            if(space === 'e'){
                setVictories({...victories,
                    east: victories.east + 1,
                    eastToWest: victories.eastToWest + 1
                });
            }
            if(space === 'sw'){
                setVictories({...victories,
                    west: victories.west + 1,
                    south: victories.south + 1,
                    northEastToSouthWest: victories.northEastToSouthWest + 1,
                });
            }
            if(space === 's'){
                setVictories({...victories,
                    south: victories.south + 1,
                    northToSouth: victories.northToSouth + 1,
                });
            }
            if(space === 'se'){
                setVictories({...victories,
                    east: victories.east + 1,
                    south: victories.south + 1,
                    northWestToSouthEast: victories.northWestToSouthEast + 1,
                });
            }
        } else {
            if(space === 'nw'){
                setVictories({...victories,
                    north: false,
                    west: false,
                    northWestToSouthEast: false,
                });
            }
            if(space === 'n'){
                setVictories({...victories,
                    north: false,
                    northToSouth: false,
                });
            }
            if(space === 'ne'){
                setVictories({...victories,
                    north: false,
                    east: false,
                    northEastToSouthWest: false,
                });
            }
            if(space === 'w'){
                setVictories({...victories,
                    west: false,
                    eastToWest: false,
                });
            }
            if(space === 'c'){
                setVictories({...victories,
                    northToSouth: false,
                    eastToWest: false,
                    northEastToSouthWest: false,
                    northWestToSouthEast: false,
                });
            }
            if(space === 'e'){
                setVictories({...victories,
                    east: false,
                    eastToWest: false,
                });
            }
            if(space === 'sw'){
                setVictories({...victories,
                    west: false,
                    south: false,
                    northEastToSouthWest: false,
                });
            }
            if(space === 's'){
                setVictories({...victories,
                    south: false,
                    northToSouth: false,
                });
            }
            if(space === 'se'){
                setVictories({...victories,
                    east: false,
                    south: false,
                    northWestToSouthEast: false,
                });
            }
        }
    }



    const takeSide = () => {
        const { n, e, s, w } = boardMap;
        if(!n){
            writeBlock('n')
        }
        if(!e){
            writeBlock('e')
        }
        if(!s){
            writeBlock('s')
        }
        if(!w){
            writeBlock('w')
        }
    }
    const takeCorner = () => {
        const { nw, ne, se, sw} = boardMap;
        if(!nw){
            writeBlock('nw')
        }
        if(!ne){
            writeBlock('ne')
        }
        if(!se){
            writeBlock('se')
        }
        if(!sw){
            writeBlock('sw')
        }
    }
    const takeRandom = () => {
        const keys = Object.keys(boardMap);
        for(let i = 0; i < keys.length; i++){
            if(!boardMap[keys[i]]){
                writeBlock(keys[i])
            }
        }
    }



    const writeBlock = (space) => {
        if(boardMap[space]){
            console.log('###SPACE TAKEN BUD');
            return
        }
        setBoardMap({...boardMap, [space]: players[turn % 2]});
        victoryHandler(space);
        if(turn % 2 === 0){
            if(space === 'nw'){
                setThreats({...threats,
                    north:threats.north + 1,
                    west: threats.west + 1,
                    northWestToSouthEast: threats.northWestToSouthEast + 1
                });
            }
            if(space === 'n'){
                setThreats({...threats,
                    north: threats.north + 1,
                    northToSouth: threats.northToSouth + 1
                });
            }
            if(space === 'ne'){
                setThreats({...threats,
                    north: threats.north + 1,
                    east: threats.east + 1,
                    northEastToSouthWest: threats.northEastToSouthWest + 1,
                });
            }
            if(space === 'w'){
                setThreats({...threats,
                    west: threats.west + 1,
                    eastToWest: threats.eastToWest + 1
                });
            }
            if(space === 'c'){
                setThreats({...threats,
                    northToSouth: threats.northToSouth + 1,
                    eastToWest: threats.eastToWest + 1,
                    northEastToSouthWest: threats.northEastToSouthWest + 1,
                    northWestToSouthEast: threats.northWestToSouthEast + 1,
                });
            }
            if(space === 'e'){
                setThreats({...threats,
                    east: threats.east + 1,
                    eastToWest: threats.eastToWest + 1
                });
            }
            if(space === 'sw'){
                setThreats({...threats,
                    west: threats.west + 1,
                    south: threats.south + 1,
                    northEastToSouthWest: threats.northEastToSouthWest + 1,
                });
            }
            if(space === 's'){
                setThreats({...threats,
                    south: threats.south + 1,
                    northToSouth: threats.northToSouth + 1,
                });
            }
            if(space === 'se'){
                setThreats({...threats,
                    east: threats.east + 1,
                    south: threats.south + 1,
                    northWestToSouthEast: threats.northWestToSouthEast + 1,
                });
            }
        } else {
            if(space === 'nw'){
                setThreats({...threats,
                    north: false,
                    west: false,
                    northWestToSouthEast: false,
                });
            }
            if(space === 'n'){
                setThreats({...threats,
                    north: false,
                    northToSouth: false,
                });
            }
            if(space === 'ne'){
                setThreats({...threats,
                    north: false,
                    east: false,
                    northEastToSouthWest: false,
                });
            }
            if(space === 'w'){
                setThreats({...threats,
                    west: false,
                    eastToWest: false,
                });
            }
            if(space === 'c'){
                setThreats({...threats,
                    northToSouth: false,
                    eastToWest: false,
                    northEastToSouthWest: false,
                    northWestToSouthEast: false,
                });
            }
            if(space === 'e'){
                setThreats({...threats,
                    east: false,
                    eastToWest: false,
                });
            }
            if(space === 'sw'){
                setThreats({...threats,
                    west: false,
                    south: false,
                    northEastToSouthWest: false,
                });
            }
            if(space === 's'){
                setThreats({...threats,
                    south: false,
                    northToSouth: false,
                });
            }
            if(space === 'se'){
                setThreats({...threats,
                    east: false,
                    south: false,
                    northWestToSouthEast: false,
                });
            }
        }
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
            <h3>Tic Tac To</h3>
            {winner === 'X' && 'WINNER!!!'}
            {winner === 'O' && 'LOSER!!!'}
            <button onClick={reset}>RESET</button>
            <div>
                <div className='ttt-row'>
                    <div id='nw' onClick={e => writeBlock('nw')} className='north-west corner ttt-square'><p>{boardMap.nw}</p></div>
                    <div id='n' onClick={e => writeBlock('n')}  className='north side ttt-square'><p>{boardMap.n}</p></div>
                    <div id='ne' onClick={e => writeBlock('ne')}  className='north-east corner ttt-square'><p>{boardMap.ne}</p></div>
                </div>
                <div className='ttt-row'>
                    <div id='w' onClick={e => writeBlock('w')}  className='west side ttt-square'><p>{boardMap.w}</p></div>
                    <div id='c' onClick={e => writeBlock('c')}  className='center ttt-square'><p>{boardMap.c}</p></div>
                    <div id='e' onClick={e => writeBlock('e')}  className='east side ttt-square'><p>{boardMap.e}</p></div>
                </div>
                <div className='ttt-row'>
                    <div id='sw' onClick={e => writeBlock('sw')}  className='south-west corner ttt-square'><p>{boardMap.sw}</p></div>
                    <div id='s' onClick={e => writeBlock('s')}  className='south side ttt-square'><p>{boardMap.s}</p></div>
                    <div id='se' onClick={e => writeBlock('se')}  className='south-east corner ttt-square'><p>{boardMap.se}</p></div>
                </div>
            </div>
        </div>
    );
}

// export default TicTacTo;
