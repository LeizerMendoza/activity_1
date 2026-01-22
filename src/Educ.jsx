function EducationalBackground({ elementary, elementaryYear, juniorHigh, juniorHighYear, seniorHigh, seniorHighYear, college, collegeYear }) {
  return (
    <div className="card">
      <h1 className="card-title green">Educational Background</h1>
      <hr className="line green" />

      <div className="educ-item">
        <span className="icon">🎒</span>
        <div>
          <h3>Elementary</h3>
          <p>{elementary}</p>
          <small>{elementaryYear}</small>
        </div>
      </div>

      <div className="educ-item">
        <span className="icon">📚</span>
        <div>
          <h3>Junior High School</h3>
          <p>{juniorHigh}</p>
          <small>{juniorHighYear}</small>
        </div>
      </div>

      <div className="educ-item">
        <span className="icon">🎓</span>
        <div>
          <h3>Senior High School</h3>
          <p>{seniorHigh}</p>
          <small>{seniorHighYear}</small>
        </div>
      </div>

      <div className="educ-item">
        <span className="icon">🏛️</span>
        <div>
          <h3>College</h3>
          <p>{college}</p>
          <small>{collegeYear}</small>
        </div>
      </div>
    </div>
  );
}

export default EducationalBackground;
