import React, { useState } from 'react';
import './App.css';
import arizonaSchoolLogo from './images/kirks_studio_for_the_performing_arts_logo.jpeg';
import workBasedLearningLogo from './images/work-based-learning-alliance-logo.jpeg';
import cupbopLogo from './images/cupbop-logo.jpeg';
import Anusri from './images/Anusri.jpeg';

function App() {
  const [visibleSection, setVisibleSection] = useState('about');

  const handleSectionChange = (section) => {
    setVisibleSection(section);
  };

  return (
    <div className="App">
      <header className="header-container">
        <div className="profile-container">
          <img src={Anusri} alt="Anusri Gnanaprakasam" className="profile-image" />
        </div>
        <div className="about-container">
          <h1>Anusri Gnanaprakasam</h1>
          <p>Freshman @ Barrett ASU studying Computer Science (Cybersecurity)</p>
          <nav>
            <ul>
              <li><a href="https://www.linkedin.com/in/anusri-gnanaprakasam-330a21284/">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/coloredpencilart_person/">Instagram</a></li>
              <li><a href="https://github.com/AnusriGnanaprakasam">Github</a></li>
              <li><a href="mailto:agnanapr@asu.edu">Contact</a></li>

              <li><button onClick={() => handleSectionChange('experience')}>Experience</button></li>
              <li><button onClick={() => handleSectionChange('education')}>Education</button></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        {visibleSection === 'about' && (
          <section id="about">
            <h2>About Me</h2>
            <p>
              &emsp;&emsp;Hi! My name is Anusri Gnanaprakasam, and I am a Computer Science major and Grand Challenges Scholar pursuing a degree at Arizona State University.
              I can be found in clubs and organizations on campus including the Next Generation Service Core, EPICS, and WiCs. 
              I am currently interested in exploring topics related to data privacy, data engineering, AI and digital forensics.
              I have learned a few programming languages such as Java, C++, C and Python alongside Cloud technologies within
              AWS and GCP. In my free time, I enjoy activities such as playing violin and drawing. My theme interest within
              the Grand Challenges Scholars Program is Security. I was introduced to this field of study by particpating in 
              Cybersecurity Bootcamps hosted by AZCyber, a nonprofit organization. This website documents my journey becoming a certified Grand
              Challenges Scholar.
           </p>
          </section>
        )}
        {visibleSection === 'experience' && (
          <section id="experience">
            <h2>Experience</h2>
            <ul className="experience-list">
              <li>
                <img src={arizonaSchoolLogo} alt="Arizona School of Music Logo" className="company-logo" />
                <div>
                  <strong>Private Lessons Teacher</strong> at Arizona School of Music (Sep 2023 - Present)
                  <p>Scottsdale, Arizona, United States · On-site</p>
                </div>
              </li>
              <li>
                <img src={workBasedLearningLogo} alt="Work-Based Learning Alliance Logo" className="company-logo" />
                <div>
                  <strong>Project Lead Intern</strong> at Work-Based Learning Alliance (Jul 2024)
                  <p>
                    As a high school student passionate about my professional development, I completed a virtual internship with the Work-Based Learning Alliance. I worked in a team to complete a project for the Colorado Plateau Center for Health Professions, gaining valuable experience in AI tools and teamwork.
                  </p>
                </div>
              </li>
              <li>
                <img src={cupbopLogo} alt="Cupbop Logo" className="company-logo" />
                <div>
                  <strong>Crew Member</strong> at Cupbop (Feb 2024 - Jul 2024)
                  <p>Phoenix, Arizona, United States · On-site</p>
                </div>
              </li>
            </ul>
          </section>
        )}
        {visibleSection === 'education' && (
          <section id="education">
            <h2>Education</h2>
            <ul>
              <li><strong> Ongoing Computer Science degree at Arizona State University</strong> </li>
            </ul>
          </section>
        )}
        {visibleSection === 'contact' && (
          <section id="contact">
            <h2>Contact</h2>
            <p>Email: <a href="mailto:agnanapr@asu.edu">agnanapr@asu.edu</a></p>
          </section>
        )}
      </main>
      <footer>
        <p>© 2023 Anusri Gnanaprakasam</p>
      </footer>
    </div>
  );
}

export default App;

