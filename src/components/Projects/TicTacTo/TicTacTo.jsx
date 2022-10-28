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
    const [players, setPlayers] = useState(['PLAYERONE', 'ROBOTRON'])
    const [turn, setTurn] = useState(0);
    const [winner, setWinner] = useState(null);
    const [boardMap, setBoardMap] = useState(boardInitial);
    const [threats, setThreats] = useState(threatsInitial);
    useEffect(() => {
        const {win, player} = checkWinEvent();
        if(win){
            setTurn(1);
            setWinner(player)
            setBoardMap(boardInitial);
        }
    }, [boardMap]);



    useEffect(() => {
        if(turn % 2 === 1){
            console.log('ROBO TURN');
            // const currentThreat = threatCheck();
            const {nw, n, ne, e, c, w, sw, s, se} = boardMap;
            if(turn === 1){
                console.log('ROBO FIRST MOVE');
                if(boardMap.c){
                    //todo randomize corner selection
                    writeBlock('nw')
                } else {
                    writeBlock('c')
                }
            } else if(turn === 3){
                console.log('ROBO SECOND MOVE');
                if(!threatCheck())return
                console.log('PAST THREAT');
                if(c !== 'ROBOTRON'){
                    if(s){
                        writeBlock('n')
                    }else if(e){
                        writeBlock('w')
                        setBoardMap({...boardMap, w: 'ROBOTRON'});
                    }
                }
            }else {
                console.log('hey');
                threatCheck()
            }
        }
    }, [turn]);



    const threatCheck = () => {
        const keys = Object.keys(threats);
        let currentThreat = '';
        for(let i = 0; i < keys.length; i++){
            if(threats[keys[i]] >= 2){
                currentThreat = keys[i]
            }
        }
        const {nw, n, ne, e, c, w, sw, s, se} = boardMap;
        console.log(threats);
        console.log(currentThreat);
        switch (currentThreat) {
            case 'north':
                if(!nw){
                    // setBoardMap({...boardMap, nw: 'ROBOTRON'});
                    writeBlock('nw')
                }else if(!n){
                    // setBoardMap({...boardMap, n: 'ROBOTRON'});
                    writeBlock('n')
                }else if(!ne){
                    // setBoardMap({...boardMap, ne: 'ROBOTRON'});
                    writeBlock('ne')
                }
                break;
            case 'eastToWest':
                if(!e){
                    // setBoardMap({...boardMap, e: 'ROBOTRON'});
                    writeBlock('e')
                }else if(!c){
                    // setBoardMap({...boardMap, c: 'ROBOTRON'});
                    writeBlock('c')
                }else if(!w){
                    // setBoardMap({...boardMap, w: 'ROBOTRON'});
                    writeBlock('w')
                }
                break;
            case 'south':
                if(!sw){
                    // setBoardMap({...boardMap, sw: 'ROBOTRON'});
                    writeBlock('sw')
                }else if(!s){
                    // setBoardMap({...boardMap, s: 'ROBOTRON'});
                    writeBlock('s')
                }else if(!se){
                    // setBoardMap({...boardMap, se: 'ROBOTRON'});
                    writeBlock('se')
                }
                break;
            case 'east':
                if(!ne){
                    // setBoardMap({...boardMap, ne: 'ROBOTRON'});
                    writeBlock('ne')
                }else if(!e){
                    // setBoardMap({...boardMap, e: 'ROBOTRON'});
                    writeBlock('e')
                }else if(!se){
                    // setBoardMap({...boardMap, se: 'ROBOTRON'});
                    writeBlock('se')
                }
                break;
            case 'northToSouth':
                if(!n){
                    // setBoardMap({...boardMap, n: 'ROBOTRON'});
                    writeBlock('n')
                }else if(!c){
                    // setBoardMap({...boardMap, c: 'ROBOTRON'});
                    writeBlock('c')
                }else if(!s){
                    // setBoardMap({...boardMap, s: 'ROBOTRON'});
                    writeBlock('s')
                }
                break;
            case 'west':
                if(!nw){
                    // setBoardMap({...boardMap, nw: 'ROBOTRON'});
                    writeBlock('nw')
                }else if(!w){
                    // setBoardMap({...boardMap, w: 'ROBOTRON'});
                    writeBlock('w')
                }else if(!sw){
                    // setBoardMap({...boardMap, sw: 'ROBOTRON'});
                    writeBlock('sw')
                }
                break;
            case 'northEastToSouthWest':
                if(!ne){
                    // setBoardMap({...boardMap, ne: 'ROBOTRON'});
                    writeBlock('ne')
                }else if(!c){
                    // setBoardMap({...boardMap, c: 'ROBOTRON'});
                    writeBlock('c')
                }else if(!sw){
                    // setBoardMap({...boardMap, sw: 'ROBOTRON'});
                    writeBlock('sw')
                }
                break;
            case 'northWestToSouthEast':
                if(!nw){
                    // setBoardMap({...boardMap, nw: 'ROBOTRON'});
                    writeBlock('nw')
                }else if(!c){
                    // setBoardMap({...boardMap, c: 'ROBOTRON'});
                    writeBlock('c')
                }else if(!se){
                    // setBoardMap({...boardMap, se: 'ROBOTRON'});
                    writeBlock('se')
                }
                break;
            default:
                return false
                break;
        }
    }



    const writeBlock = (space) => {
        setBoardMap({...boardMap, [space]: players[turn % 2]});
        if(turn % 2 === 0){
            console.log('PLAYER TURN');
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
                    eastToWest: threats.northToSouth + 1
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
        console.log(boardMap);
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
                    <div id='nw' onClick={e => writeBlock('nw')} className='north-west corner ttt-square'>{boardMap.nw}</div>
                    <div id='n' onClick={e => writeBlock('n')}  className='north side ttt-square'>{boardMap.n}</div>
                    <div id='ne' onClick={e => writeBlock('ne')}  className='north-east corner ttt-square'>{boardMap.ne}</div>
                </div>
                <div className='ttt-row'>
                    <div id='w' onClick={e => writeBlock('w')}  className='west side ttt-square'>{boardMap.w}</div>
                    <div id='c' onClick={e => writeBlock('c')}  className='center ttt-square'>{boardMap.c}</div>
                    <div id='e' onClick={e => writeBlock('e')}  className='east side ttt-square'>{boardMap.e}</div>
                </div>
                <div className='ttt-row'>
                    <div id='sw' onClick={e => writeBlock('sw')}  className='south-west corner ttt-square'>{boardMap.sw}</div>
                    <div id='s' onClick={e => writeBlock('s')}  className='south side ttt-square'>{boardMap.s}</div>
                    <div id='se' onClick={e => writeBlock('se')}  className='south-east corner ttt-square'>{boardMap.se}</div>
                </div>
            </div>
        </div>
    );
}

// export default TicTacTo;
