import { useState, useEffect } from 'react';

const Modal = ({handleModal}) => {
    return (
        <div onClick={handleModal} className='modal-background'>
            <div className='modal-content'>
                <iframe frameBorder={0} id='bhuttville' src="https://morning-plateau-54243.herokuapp.com/game.html">
                </iframe>
            </div>
        </div>
    )
}

export const BhuttVille = () => {
    const [open, setOpen] = useState(false);
    const handleModal = (e) => {
        console.log(e.target.classList.contains('modal-background'));
        setOpen(!open);
    }
    return (
        <div class="projectContainer">
            <h3>BhutVille</h3>
            <p>
                Here's my solo project while at Prime Academy. I decided to make a game since I knew I was going to get a more hands on 
                with the tradition full stack content during client projects. This was a great way to delve into object oriented programming, 
                and the concept of finite state machines.
            </p>
            <button onClick={handleModal}>Play Game</button>
            <p class="projectLink"><a href="https://github.com/j3nkii/BhutVille">GitHubRepo</a></p>
            <p class="projectLink"><a href="https://morning-plateau-54243.herokuapp.com/#/home">Deployment</a></p>
        {open && <Modal handleModal={handleModal} />}
        </div>
    )
}