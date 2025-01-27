import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col">
            <header className="title">ABOUT ME</header>
            <p className="about-para">
              I am passionate about creating seamless digital experiences
              through innovative frontend development. As a Master's in Computer
              Applications student specializing in frontend technologies, I have
              refined my skills in HTML, CSS, and React Js to craft visually
              appealing and user-friendly interfaces. My mission is to deliver
              high-quality code that not only meets but exceeds user
              expectations. I believe in the power of technology to transform
              ideas into reality, and I am committed to leveraging my expertise
              to contribute to dynamic software projects. My dedication to
              continuous learning and adaptability ensures that I stay at the
              forefront of industry trends and best practices. Whether you're a
              startup looking to establish a strong online presence or an
              established business seeking to enhance your user experience, I am
              ready to collaborate and bring your vision to life.
            </p>
          </div>
          <div className="col">
            <header className="title">EDUCATION</header>
            <div className="contents">
              <div className="box">
                <h4>2019-2022</h4>
                <h3>Bachelor's in Computer Application</h3>
                <p>The Heritage Academy, Kolkata</p>
              </div>

              <div className="box">
                <h4>2023-2025</h4>
                <h3>Masters's in Computer Application</h3>
                <p>KIIT, Bhubaneswar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About