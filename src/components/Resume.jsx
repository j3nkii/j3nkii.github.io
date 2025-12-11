import { Vigenere } from './Projects/Vigenere';
import { BhuttVille } from './Projects/BhuttVille'
import { Calendar } from './Projects/Calendar/Calendar'
import { TicTacTo } from './Projects/TicTacTo/TicTacTo'



const CardWrapper = ({ header, children }) => {
    return (
        <div className="secondaryContainer">
            <div className="secondaryHeader">
                <h2>
                    {header}
                </h2>
            </div>
            {children}
        </div>
    )
}



const CardSection = ({ children }) => {
    return (
        <div className="secondaryBody">
            {children}
        </div>
    )
}




const ExperienceCard = ({ children, header, footer }) => {
  return (
    <div className="secondaryBody exp-card">
      <h3>{header}</h3>
      {children}
      <p className="exp-card-footer">{footer}</p>
    </div>
  )
}




export const Resume = () => {
  return (
    <div className="container" id="right">
      <CardWrapper header={'ABOUT ME'}>
        <CardSection>
          <h3>Technical:</h3>
          <p>
            Software Engineer since attending Prime Digital Academy's accelerated program in 2022.
            My specialties lie in work order management systems, including inventory tracking, scheduling, reporting, and complex pricing solutions.
            I love exploring new technologies through side projects—ask me about my current experiments and past favorites!
          </p>
        </CardSection>
        <CardSection>
          <h3>Personal:</h3>
          <p>
            I'm a natural-born adventurer who feels most alive behind the wheel—whether cruising through open landscapes, navigating winding mountain passes, or testing my car's limits on rocky dirt roads.
            When I'm not driving, you'll find me biking around the city, strategizing over board games, or exploring Minneapolis' incredible restaurant scene.
          </p>
        </CardSection>
      </CardWrapper>

      <CardWrapper header={'EXPERIENCE'}>
        <ExperienceCard header={"Conductive Digital (May 2022 - Present)"} footer={'React • TypeScript • Node.js • Kendo UI • MySQL • AWS'}>
          <ul>
            <li>
              Built CSV-based availability management system with tenant configuration, allowing non-technical staff to upload and manage appointment schedules
            </li>
            <li>
              Developed availability engine integrating multiple data sources to power standalone customer booking interface
            </li>
            <li>
              Modernized legacy React codebase by refactoring class components to functional components with hooks, improving code maintainability and allowing the use of modern React tools
            </li>
          </ul>
        </ExperienceCard>
        <ExperienceCard header={"EazieBook (April 2022 - March 2023)"} footer={'React • Node.js • Express • PostgreSQL • Stripe API'}>
          <ul>
            <li>
              Integrated Stripe Connect API for multi-tenant marketplace, managing vendor onboarding, split payments, customer storage, and refund processing across connected accounts
            </li>
            <li>
              Built dynamic pricing calculator supporting seasonal rates, tiered discounts, add-ons, tax calculations, and automated fee reconciliation across bookings
            </li>
            <li>
              Implemented automated payment processing via CRON jobs, collecting scheduled final payments 48 hours before booking dates and expiring stale pending approvals
            </li>
          </ul>
        </ExperienceCard>
      </CardWrapper>
                    {/* <div className="secondaryContainer">
                        <div className="secondaryHeader">
                            <h2>
                                Projects
                            </h2>
                        </div>
                        <div className="secondaryBody">
                            <Vigenere />
                            <div className="projectSeparator"></div>
                            <BhuttVille />
                            <div className="projectSeparator"></div>
                            <Calendar />
                            <div className="projectSeparator"></div>
                            <TicTacTo />
                        </div>
                    </div> */}
                </div>
    )
}