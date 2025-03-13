"use client"
import Link from "next/link";
import React, { useState } from "react";
import Room from "./components/Room";
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* <!-- Header --> */}
      <header>
      <div className="container header-content">
        <div className="logo">
          Floor<span>Vision</span>
        </div>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          ☰
        </button>
        <nav>
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#technology">Technology</a></li>
            <li><Link href="/room" className="cta-button">Start Designing</Link></li>
          </ul>
        </nav>
      </div>
    </header>

      {/* <!-- Hero Section --> */}
      <section className="hero">
        <div className="container hero-content">
          <h1>Visualize Your Dream Home Floor</h1>
          <p>
            Experiment with different flooring options in a realistic 3D
            environment that brings your vision to life
          </p>
          <Link href="/room" className="start-designing-button">
            Start Designing
          </Link>
          {/* <div className="hero-3d-preview">
            <Room home
            />
          </div> */}
        </div>
      </section>

      {/* <!-- Experience Flow Section --> */}
      <section className="experience-flow" id="experience">
        <div className="container">
          <div className="section-title">
            <h2>The FloorVision Experience</h2>
            <p>
              Designing your perfect floor has never been this simple and
              intuitive
            </p>
          </div>
          <div className="flow-steps">
            <div className="flow-step">
              <div className="step-number">1</div>
              <h3 className="step-title">Enter 3D Room</h3>
              <p className="step-description">
                Step into an interactive 3D living room environment you can
                freely navigate
              </p>
            </div>
            <div className="flow-step">
              <div className="step-number">2</div>
              <h3 className="step-title">Select Flooring</h3>
              <p className="step-description">
                Browse our catalog of hardwood, tiles, carpet, and laminate
                options
              </p>
            </div>
            <div className="flow-step">
              <div className="step-number">3</div>
              <h3 className="step-title">Get AI Suggestions</h3>
              <p className="step-description">
                Receive personalized flooring recommendations based on your
                preferences
              </p>
            </div>
            <div className="flow-step">
              <div className="step-number">4</div>
              <h3 className="step-title">Customize More</h3>
              <p className="step-description">
                Change wall colors and explore furniture layouts to complete
                your vision
              </p>
            </div>
            <div className="flow-step">
              <div className="step-number">5</div>
              <h3 className="step-title">Save & Share</h3>
              <p className="step-description">
                Capture your design and share it with friends, family, or
                contractors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Features Section --> */}
      <section className="features" id="features">
        <div className="container">
          <div className="section-title">
            <h2>Interactive 3D Design Tools</h2>
            <p>
              Our powerful features give you complete control over your floor
              visualization experience
            </p>
          </div>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>360° Navigation</h3>
              <p>
                Freely rotate, zoom, and pan to explore every angle of your
                space with intuitive controls
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🧩</div>
              <h3>Material Catalog</h3>
              <p>
                Browse hundreds of realistic flooring options including
                hardwood, tiles, carpet, and laminate
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Real-Time Updates</h3>
              <p>
                See changes instantly as you select different flooring types
                with no rendering delay
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🧠</div>
              <h3>AI Recommendations</h3>
              <p>
                Get intelligent flooring suggestions based on your room type and
                aesthetic preferences
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Wall Color Customization</h3>
              <p>
                Change wall colors to see how different combinations work with
                your flooring choice
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛋️</div>
              <h3>Furniture Layouts</h3>
              <p>
                Toggle between various furniture settings to visualize your
                floor in different contexts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Tech Showcase Section --> */}
      <section className="tech-showcase" id="technology">
        <div className="container">
          <div className="section-title">
            <h2>Advanced Technology</h2>
            <p>
              Behind our simple interface lies cutting-edge technology that
              delivers ultra-realistic visualizations
            </p>
          </div>
          <div className="tech-categories">
            <div className="tech-category">
              <h3>
                <span>1️⃣</span> Premium Materials
              </h3>
              <ul className="tech-list">
                <li>
                  <span>✔</span> PBR Materials for accurate reflections
                </li>
                <li>
                  <span>✔</span> Normal & Displacement Maps for realistic
                  textures
                </li>
                <li>
                  <span>✔</span> Glossy & Matte Surface variations
                </li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>
                <span>2️⃣</span> Lighting & Shadows
              </h3>
              <ul className="tech-list">
                <li>
                  <span>✔</span> Global Illumination for natural lighting
                </li>
                <li>
                  <span>✔</span> Soft Shadows & Ambient Occlusion
                </li>
                <li>
                  <span>✔</span> HDR Environment Maps for reflections
                </li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>
                <span>3️⃣</span> Advanced Interactions
              </h3>
              <ul className="tech-list">
                <li>
                  <span>✔</span> Drag & Drop Flooring Placement
                </li>
                <li>
                  <span>✔</span> Screenshot Mode for sharing
                </li>
                <li>
                  <span>✔</span> Mobile & Touchscreen Optimization
                </li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>
                <span>4️⃣</span> AI-Powered Features
              </h3>
              <ul className="tech-list">
                <li>
                  <span>✔</span> AI Floor Matching recommendations
                </li>
                <li>
                  <span>✔</span> AI Color Suggestions for walls
                </li>
                <li>
                  <span>✔</span> Performance Analytics to improve experience
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- AI Features Section --> */}


      {/* <!-- CTA Section --> */}
      <section className="cta-section">
        <div className="container">
          <h2>Start Your 3D Design Journey Today</h2>
          <p>
            Join thousands of homeowners who have transformed their spaces with
            our powerful floor visualization tool.
          </p>
          <a href="#" className="start-designing-button">
            Start Designing
          </a>
        </div>
      </section>

      {/* <!-- Development Roadmap --> */}
      <section className="roadmap">
        <div className="container">
          <div className="section-title">
            <h2>Development Roadmap</h2>
            <p>
              Our vision for creating the ultimate flooring design experience
            </p>
          </div>
          <div className="timeline">
            <div className="timeline-item left">
              <div className="timeline-content">
                <h3>
                  <span>🚀</span> Phase 1: 3D Room Viewer
                </h3>
                <p>
                  Building the core 3D environment with Three.js or Babylon.js
                  that allows for intuitive navigation and basic flooring
                  visualization.
                </p>
              </div>
            </div>
            <div className="timeline-item right">
              <div className="timeline-content">
                <h3>
                  <span>🎨</span> Phase 2: Floor Customization & AI
                </h3>
                <p>
                  Implementing the flooring catalog, material rendering, and AI
                  recommendation system to enhance the user experience.
                </p>
              </div>
            </div>
            <div className="timeline-item left">
              <div className="timeline-content">
                <h3>
                  <span>📱</span> Phase 3: Mobile & VR Experience
                </h3>
                <p>
                  Optimizing the application for mobile devices and adding
                  virtual reality support for immersive design experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Footer --> */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h4>FloorVision</h4>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Product</h4>
              <ul>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Design Tips</a>
                </li>
                <li>
                  <a href="#">Tutorials</a>
                </li>
                <li>
                  <a href="#">Documentation</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Connect</h4>
              <ul>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">LinkedIn</a>
                </li>
                <li>
                  <a href="#">YouTube</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2025 FloorVision. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
