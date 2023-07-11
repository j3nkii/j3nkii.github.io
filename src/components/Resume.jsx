import { Vigenere } from './Projects/Vigenere';
import { BhuttVille } from './Projects/BhuttVille'
import { Calendar } from './Projects/Calendar/Calendar'
import { TicTacTo } from './Projects/TicTacTo/TicTacTo'


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
                            </div>
                        </div>
                    </div>
    
                    <div class="secondaryContainer">
                        <div class="secondaryHeader">
                            <h2>
                                Currently Under Construction
                            </h2>
                        </div>
                        <div class="secondaryBody">
                            Currently working on updating this site along with my resume.
                        </div>
                    </div>
    
                    {/* <div class="secondaryContainer">
                        <div class="secondaryHeader">
                            <h2>
                                Projects
                            </h2>
                        </div>
                        <div class="secondaryBody">
                            <Vigenere />
                            <div class="projectSeparator"></div>
                            <BhuttVille />
                            <div class="projectSeparator"></div>
                            <Calendar />
                            <div class="projectSeparator"></div>
                            <TicTacTo />
                        </div>
                    </div> */}
                </div>
    )
}