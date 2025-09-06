// src/Reflection.jsx
import myImage1 from "./assets/fse150-1.jpg";
import myImage2 from "./assets/fse150-2.jpg";

export default function Reflection() {
  const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
  };

  const titleStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const imageStyle = {
    maxWidth: "100%",
    borderRadius: "15px",
    marginBottom: "15px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>FSE150 Course Reflection</h1>

      <p>
        Taking FSE150 has been an incredible learning experience. 
        I developed skills in teamwork, problem-solving, and project management 
        while working on hands-on design challenges. One of the key takeaways 
        was understanding the engineering design process and how to iterate 
        effectively on a solution.
      </p>

      <p>Below are some images from my project work during the course:</p>

      <img src={myImage1} alt="Project work 1" style={imageStyle} />
      <img src={myImage2} alt="Project work 2" style={imageStyle} />

      <p>
        Overall, this course taught me the importance of collaboration, 
        clear communication, and the ability to adapt when facing unexpected challenges. 
        These lessons will stay with me as I move forward in my academic and professional journey.
      </p>
    </div>
  );
}
