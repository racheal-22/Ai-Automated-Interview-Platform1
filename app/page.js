// pages/index.js
import CardContainer from '../components/CardContainer';
import VideoContainer from '../components/VideoContainer';
import '../app/globals.css';

export default function Home() {
  return (
    <div>
      {/* Main Content */}
      <div className="main-container">
        {/* Central Column */}
        <div className="central-column">
          {/* Main Heading */}
          <h1 className="heading">AI Automated Interview Platform</h1>

          {/* Subheading */}
          <p className="subheading">
            An Adaptive Conversation Agent For Technical Interview &<br />
            Real-Time Code Evaluation
          </p>

          {/* Video Section */}
          <VideoContainer />

          {/* Additional Subheading Below Video */}
          <p className="subheading">
            AI-powered voice-based coding interview platform transforms
            technical interview preparation by providing a natural, interactive,
            and efficient experience. Combining real-time feedback and advanced
            NLP, it helps candidates perform better and gain confidence during
            interviews.
          </p>

          {/* Features Section */}
          <h2 className="heading">Features</h2>
          <div className="features">
            {/* Feature 1 */}
            <CardContainer 
              image="/images/voice-interview.jpg" 
              title="Voice Based Interview" 
              description="Simulate a real-life interview experience with voice interaction, allowing candidates to respond naturally and comfortably."
            />
            {/* Feature 2 */}
            <CardContainer 
              image="/images/code-evaluation.jpg" 
              title="Real-Time Code Evaluation" 
              description="Execute code in a sandbox environment and receive instant feedback to improve coding skills during the interview."
            />
            {/* Feature 3 */}
            <CardContainer 
              image="/images/detailed-feedback.jpg" 
              title="Feedback" 
              description="Get personalized, AI-driven feedback on coding solutions and problem-solving approaches to help candidates adapt and improve."
            />
            {/* Feature 4 */}
            <CardContainer 
              image="/images/adaptive-interview.jpg" 
              title="Adaptive Interviewing System" 
              description="AI adjusts the interview difficulty in real-time based on the candidate's performance, ensuring a personalized challenge."
            />
          </div>

          {/* Sign-Up Section */}
          <div className="sign-up-section">
            <button className="sign-up-button-large">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
