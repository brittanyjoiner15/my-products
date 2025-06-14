const AboutMe = ({ image }) => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image-container">
          <img src={image} alt="Brittany Joiner" className="about-image" />
        </div>
        <div className="about-content">
          <h2 className="about-title">Hi, I'm Brittany! 👋</h2>
          <p className="about-text">
            Brittany Joiner is a Trello power user and productivity expert who’s spent over a decade creating systems that help people get organized fast. With experience in marketing, software engineering, and project management, she knows how to build Trello workflows that actually work.
          </p>
          <p className="about-text">
            She's aims to bring together the community of Trello users, experts, and developers to turn <i>(some of) </i>the world's chaos into calm.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
