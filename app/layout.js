// app/layout.js
import '../app/globals.css';

export const metadata = {
  title: "AI Automated Interview Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <div className="nav-title">Interview Platform</div>
          <button className="sign-up-button">Sign Up</button>
        </nav>
        {children} {/* This renders the content of the page (like Home) */}
      </body>
    </html>
  );
}
