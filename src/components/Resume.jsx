export const Resume = () => {

    return (
        <div class="container" id="right">
                    <div class="secondaryContainer">
                        <div class="secondaryHeader">
                            <h2>
                                About Me
                            </h2>
                        </div>
                        <div class="secondaryBody">
                            
    
                            <h3>Specialties:</h3>
                            <p>
                                {/* <!-- When faced with the ultimatum between a sweet bike, or an okay car, I took the bike. 
                                This sparked a passion and career for myself. After 4 years in the bike industry, I realized it’s no different than the Tech Industry. 
                                Problem Solving? Check. Google skills? Check. Copious amounts of coffee with coworkers? Easy. 
                                Just need some pants that don’t have grease stains and I’m ready to goo! -->
                                Full Stack Developer, specializing in React for front end, and Postgresql and Node for the back.
                                I truly enjoy making things from scratch, as it really helps me get a better understanding of the langues and how they work under the hood. */}
                                
                            </p>
    
                            <h3>Hobbies:</h3>
                            <p>
                                In my person life, I enjoy just about any activity that avoids pavement. 
                                Hiking, mountain biking, and wheelin in the woods are pretty much my favorite things.
                                Always down to talk about cool trails, restaurants, and breweries! I'm all about discovery!
                            </p>
    
                        </div>
                    </div>
    
                    <div class="secondaryContainer">
                        <div class="secondaryHeader">
                            <h2>
                                Skills
                            </h2>
                            <div id ="skillsContainer" class="secondaryBody">
                                <h3>Technologies:</h3>
                                <p class="skillsList">
                                    Node.js • JavaScript • CSS • BootStrap • Material UI • HTML5 • React • Redux 
                                    • Sagas • SQL • PostgreSQL • jQuery • RegExp • Stripe • Kendo 
                                </p>
    
                                {/* <!-- <h3>Soft Skills:</h3>
                                <p class="skillsList">
                                    Problem Solving • Ability to read technical documents 
                                    • Conflict resolution • Rapid learning techniques
                                    <br>
                                    • Shredding Gnar •
                                </p> --> */}
                            </div>
                        </div>
                    </div>
    
                    <div class="secondaryContainer">
                        <div class="secondaryHeader">
                            <h2>
                                Projects
                            </h2>
                        </div>
                        <div class="secondaryBody">
    
    
                            <div class="projectContainer">
                                <h3>Vigenere Cipher</h3>
                                <p id="ceasarMessage">
                                </p>
                                <form id="cipher">
                                    <textarea id="ceasarInput" type="textarea" cols="40" rows="5"></textarea>
                                    <button id="ceasarCipher">E N C R Y P T</button>
                                    <button id="ceasarReset">R E S E T</button>
                                </form>
                                <p class="projectLink"><a href="https://github.com/j3nkii/ceasarCipher">GitHubRepo</a></p>
                                <p class="projectLink"><a href="https://j3nkii.github.io/ceasarCipher/">Deployment</a></p>
                            </div>
    
                            {/* <!-- <div class="projectSeparator"></div>
    
                            <div class="projectContainer">
                                <h3>BhutVille</h3>
                                <p>
                                    Here's my solo project while at Prime Academy. I decided to make a game since I knew I was going to get a more hands on 
                                    with the tradition full stack content during client projects. This was a great way to delve into object oriented programming, 
                                    and the concept of finite state machines.
                                </p>
                                <p class="projectLink"><a href="https://github.com/j3nkii/BhutVille">GitHubRepo</a></p>
                                <p class="projectLink"><a href="https://morning-plateau-54243.herokuapp.com/#/home">Deployment</a></p>
                            </div> -->
    
                            <!-- <div class="projectSeparator"></div>
    
                            <div class="projectContainer">
                                <h3>Salary Calculator</h3>
                                <p>
                                    This was my first big project with a server. It was pretty cool to see, and learn all the things it takes to set them up.
                                    Realizing that it's not as simple as just passing along data.
                                </p>
                                <p class="projectLink"><a href="https://github.com/j3nkii/weekend-jquery-salary-calculator">GitHubRepo</a></p>
                                <p class="projectLink"><a href="https://j3nkii.github.io/weekend-jquery-salary-calculator/">Deployment</a></p>
                            </div> -->
    
                            <!-- <div class="projectSeparator"></div>
    
                            <div class="projectContainer">
                                <h3>calCulator 3000</h3>
                                <p>
                                    This one was pretty fun, I got to explore array mutation, recursion, and RegExp. Simple Calculator, that follows the order of operations, minus 
                                    parentheses and exponents.... I'm still working on it... :D
                                </p>
                                <form id="calcForm">
                                    <input id="calcInput" value="7*7*7">
                                    <button id="calcSub">=</button>
                                </form>
                                <p class="projectLink"><a href="https://github.com/j3nkii/weekend-jquery-server-calculator">GitHubRepo</a></p>
                            </div> --> */}
    
                        </div>
                    </div>
                </div>
    )
}