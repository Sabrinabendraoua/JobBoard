const Job = (props) => {
  return (
    <>
      <div className="job-bloc">
        <h2>{props.title}</h2>

        <div className="contract-country-city">
          <p>{props.contractType}</p>
          <p>{props.country}</p>
          <p>{props.city}</p>
        </div>
      </div>
    </>
  );
};

export default Job;
