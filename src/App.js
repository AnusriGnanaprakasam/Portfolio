import React, { useState } from 'react';
import './App.css';
import arizonaSchoolLogo from './images/kirks_studio_for_the_performing_arts_logo.jpeg';
import workBasedLearningLogo from './images/work-based-learning-alliance-logo.jpeg';
import cupbopLogo from './images/cupbop-logo.jpeg';
import Anusri from './images/Anusri.jpeg';
import fseImage1 from './images/fse.png';
import Epics from './images/Epics.png';

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
          <p>Sophomore @ Barrett ASU studying Computer Science (Cybersecurity)</p>
          <nav>
            <ul>
              <li><a href="https://www.linkedin.com/in/anusri-gnanaprakasam-330a21284/">LinkedIn</a></li>
              
              <li><a href="https://github.com/AnusriGnanaprakasam">Github</a></li>
              <li><a href="mailto:agnanapr@asu.edu">Contact</a></li>

              <li><button onClick={() => handleSectionChange('experience')}>Experience</button></li>
              <li><button onClick={() => handleSectionChange('education')}>Education</button></li>
              <li>
              <a
                href="#reflection"
                onClick={(e) => {
                  e.preventDefault();
                  handleSectionChange('reflection');
                }}
              >
                FSE150 Reflection
              </a>
              </li>
              <li>
              <a
                href="#servicelearning"
                onClick={(e) => {
                  e.preventDefault();
                  handleSectionChange('Service Learning');
                }}
              >
                Service Learning
              </a>
              </li>
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
              Challenges Scholar. In the future, I hope to do work around forensics or network security.
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

        {visibleSection === 'reflection' && (
        <section id="reflection">
          <h2>FSE150 Course Reflection</h2>
         <p>&emsp;&emsp;When I first joined GCSP over the summer, I was not sure of what to expect from the program. All I knew was that there were a lot of research faculty within GCSP and that it would help you make connections with motivated students. The first week was spent talking about how GCSP can help contribute to your college experience and the major grand challenges that exist in society. One of the challenges, securing cyberspace, is what I would like to focus on in my career. In the next few weeks, two other projects were also introduced in the class: The GCSP Theme Project and the Future Solutions project. These projects seemed daunting and did take a lot of effort, however, I liked how the Future Solutions project was grouped into deliverables. I decided to choose the theme Security for my GCSP Theme projects and chose articles about Phishing, Artificial Intelligence and VPNs. All of these topics are relevant to keeping the internet architecture of society secured. After discussing these topics, the course moved onto discussing the four major theme areas: Health, Sustainability, Joy of Living and Security.</p>

          <p>&emsp;&emsp;The first of these theme areas to be discussed was health. When talking about health, the environment also seemed to play a major role. One of the activities involved watching a video on the dangers of indoor air pollution. When thinking about pollution, my first thought is the pollution that is faced outdoors. I did not know that indoor pollution was a prevalent problem in underdeveloped nations. The health debate in class was also interesting because of how passionate people were about different positions. My team was assigned to prosthetics and essentially had to argue against technological development, which was definitely difficult to do in a university that values innovation.</p>

          <p>&emsp;&emsp;The next theme area discussed was sustainability. The major topic I learned about related to sustainability was life cycle analysis, which is used to measure the environmental impact of a technology. Everything from sourcing the material to repurposing the material has been taken into consideration. I also found the science fiction prototyping activity interesting and learned that science fiction reflects the human desire to bring about new advancements. The guest lecture by Dr. Deniz Karakoc was especially interesting because of how she used data science to show how agriculture is being sourced and transported. I was surprised that there is not more data about the amount of food actually being used. I also met with some GCSP faculty during the GCSP faculty dinner this semester. One faculty member I found particularly interesting was Rakibul Hasan because of his ongoing research about data privacy and the various interesting ways data is being abused. One of the most shocking was data being used to identify potential disabilities to insurance companies.</p>

          <p>&emsp;&emsp;During the security theme area, there were discussions on how security can be thought of in various ways. The GCSP program thinks about security in the sense of scope it covers. There is also physical security versus cybersecurity. I liked the guest lecture that Dr. Chenkai Wang presented that went into cryptography and zero knowledge proofs. I have thought that it was interesting how zero knowledge proofs just verified that a user knows the password rather than the password itself. The concept is hard to wrap one’s mind around, but is very interesting. I may want to look more into this topic in the future and possibly do research related to it.</p>

          <p>&emsp;&emsp;The last theme area that was discussed is Joy of Living, as a person who has had a lot of mental health struggles, I think that this area is something that society in general needs to focus more on. More people than ever are feeling isolated and stressed because of the pressures of society. I found it interesting how technological development can contribute to making people feel happier. Overall, I have learned a lot about each of these theme areas and how to manage projects this semester in the GCSP program.</p>

          <p>Below is my Future Solutions Project:</p>
          <div>
            <img src={fseImage1} alt="Future Solutions" style={{maxWidth: '100%', marginBottom: '15px'}} />
          </div>
          <p>
          </p>
        </section>
        )}
        {visibleSection === 'Service Learning' && (
          <section id="Service Learning">
            <h2>Service Learning</h2>
            <p>&emsp;&emsp;For my service learning, I am planning on completing FSE 104 and 404 while participating in the Engineering Projects in Community Service(EPICS) organization. So far, I have completed one semester in this program, and I am in the process of completing another semester through FSE 404. At the start of EPICS, I was not sure of what I could expect to accomplish through the program. I heard about how the program can be useful in getting experience for engineers of all majors, but I was unsure of what projects I would be able to participate in. I took note of what skills I would like to learn during my time at EPICS while I was waiting to see what project I was placed in. Later, I was placed on Aqua Guard, which was one of my first choices because it involved learning about IoT development, putting together hardware and software knowledge to create a complete water quality monitoring device. During my time that semester, I learned more about hardware and cloud technology. Since my GCSP theme is Security, having an understanding of these topics could help me design secure systems that involve these pieces. The device will ultimately be deployed to shrimp farms in India so that farmers can have a more consistent way of testing the quality of water in vast ponds. So far, the device has been able to pump water for testing and can connect to Google Cloud Services. I am hoping to continue with the rapid development of this project with my team. </p>
            <p>Below is my Epics Project:</p>
            <div> 
          <img src={Epics} alt="Device" style={{maxWidth: '100%', marginBottom: '15px'}} />
          </div>
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

