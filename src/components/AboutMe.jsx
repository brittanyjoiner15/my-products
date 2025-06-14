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
            And I'm obsessed with Trello.I've been using it for over a decade to create systems that help people get organized fast. With experience in marketing, software engineering, and project management, I know how to build Trello workflows that actually work, and I've met some awesome folks along the way that help us all Trello together.
          </p>
          <p className="about-text">
            My goal is to bring together the community of Trello users, experts, and developers to turn <i>(some of) </i>the world's chaos into calm.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
