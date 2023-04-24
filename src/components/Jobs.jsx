import Job from "./Job";

const Jobs = () => {
  return (
    <div className="jobs">
      <Job
        className={"red"}
        title={"Full Time Sales Associate - Sydney Boutique"}
        contractType={"CDI - "}
        country={"Australie - "}
        city={"Sydney"}
      />
      <Job
        title={"Agent de Sécurité - Pantin"}
        contractType={"CDI - "}
        country={"France - "}
        city={"Pantin"}
      />
      <Job
        title={"Responsable d'Atelier (H/F)"}
        contractType={"CDD - "}
        country={"France - "}
        city={"Paris"}
      />
      <Job
        title={"Chef de Projets"}
        contractType={"CDD - "}
        country={"France - "}
        city={"Paris"}
      />
      <Job
        title={"Développeur React.js"}
        contractType={"CDI - "}
        country={"France - "}
        city={"Paris"}
      />
      <Job
        title={"Sales Associate Stockholm"}
        contractType={"CDI - "}
        country={"Suède - "}
        city={"Stockholm"}
      />
      <Job
        title={"Vendeur/se - Crans Montana"}
        contractType={"CDI - "}
        country={"Suisse - "}
        city={"Crans-Montana"}
      />
      <Job
        title={"CRM & Data Quality Analyst"}
        contractType={"CDI - "}
        country={"USA - "}
        city={"New York"}
      />
      <Job
        title={"Infirmier (H/F)"}
        contractType={"CDI - "}
        country={"France - "}
        city={"Pantin"}
      />
    </div>
  );
};

export default Jobs;
