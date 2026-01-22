function PersonalInformation({ firstName, lastName, middleName, address, birthdate }) {
  return (
    <div className="card">
      <h1 className="card-title blue">Personal Information</h1>
      <hr className="line blue" />

      <div className="info">
        <span>FIRST NAME</span>
        <p>{firstName}</p>

        <span>MIDDLE NAME</span>
        <p>{middleName}</p>

        <span>LAST NAME</span>
        <p>{lastName}</p>

        <span>ADDRESS</span>
        <p>{address}</p>

        <span>BIRTHDATE</span>
        <p>{birthdate}</p>
      </div>
    </div>
  );
}

export default PersonalInformation;
