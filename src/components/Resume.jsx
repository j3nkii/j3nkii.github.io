import { Vigenere } from './Projects/Vigenere';
import { BhuttVille } from './Projects/BhuttVille'


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
                                Full Stack Developer specializing in Javscript and CSS.
                                My main jam is React married with Node and Postgres, although I have an ept for learning on the fly and can easily learn new things. 
                                I truly enjoy making things from scratch, as it really helps me get a better understanding of the langues and how they work under the hood. 
                                
                            </p>
    
                            {/* <h3></h3>
                            <p>
                            </p> */}
    
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
                            <Vigenere />
    
                            <div class="projectSeparator"></div>
                            
                            <BhuttVille />
    
                            {/* <!-- <div class="projectSeparator"></div>
    
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