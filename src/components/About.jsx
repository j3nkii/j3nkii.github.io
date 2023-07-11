import profilePic from '../assets/profilePic.JPG';
import gmLogo from '../assets/Logos/GmailLogo.png';
import gitLogo from '../assets/Logos/GitHubLogo.png';
import liLogo from '../assets/Logos/LinkedInLogo.png';

export const About = () => {

    return (
        <div class = "container" id="left">
            <div id="nameTitle">
                <h1>Jacob Larson</h1>
                <p>Software Engineer</p>
            </div>
                <div id="profilePicContainer">
                    <img id="profilePic" src={profilePic} />
                </div>
                <div class="primaryContainer">
                    <div class="primaryHeader">
                        <h2>Contacting Jacob</h2>
                    </div>
                    <div id="contactInfo">
                        <div class="contactLinks">
                            <img id="linkedinLogo" src={liLogo} />
                            <a href="https://www.linkedin.com/in/jacob-larson-b9b486228/">
                                Linkden
                            </a>
                        </div>
                        <div class="contactLinks">
                            <img id="githubLogo" src={gitLogo} />
                            <a href="https://github.com/j3nkii">
                                Github
                            </a>
                        </div>
                        <div class="contactLinks">
                            <img id="GmailLogo" src={gmLogo} />
                            <a href="mailto: jacob.larson55112@gmail.com">
                                jacob.larson55112
                            </a>
                        </div>
                    </div>
                </div>
                <iframe
                    src="https://open.spotify.com/embed/track/21qnJAMtzC6S5SESuqQLEK"
                    width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media">
                </iframe>
                <div class="primaryContainer">
                    <div class="primaryHeader">
                        <h2>Interests</h2>
                    </div>
                    <table>
                        <tr>
                            <td><p>General</p></td>
                            <td><p>Coding • BIKES! • Hiking • Discovering New Food • Overlanding • Table Top Games</p></td>
                        </tr>
                        <tr>
                            <td><p>Music</p></td>
                            <td><p>
                                Chris Stapleton • Eyedea & Abilities • Bonobo 
                            </p></td>
                        </tr>
                        <tr>
                            <td><p>Movies</p></td>
                            <td><p>Wes Anderson films • Gladiator • Anything Ghibli</p></td>
                        </tr>
                        <tr>
                            <td><p>Binge Shows</p></td>
                            <td><p>The Office • Parks and Rec • Malcolm in the Middle</p></td>
                        </tr>
                        <tr>
                            <td><p>Favorite Rides</p></td>
                            <td><p>Spencer Trails, MT • Copper Harbor, MI • Elm Creek, MN</p></td>
                        </tr>
                    </table>
                </div>
        </div>
    )
}