import EducationCard from "./education-card";

const educationData = [
  {
    type: "GRADUAÇÃO",
    education: "Bacharel em Sistemas de Informação",
    organization: "Faculdade Santíssimo Sacramento",
    startDate: "Janeiro de 2016",
    endDate: "Dezembro de 2019",
  },
  {
    education: "React com TypeScript",
    organization: "Origamid",
    startDate: "Dezembro de 2024",
    endDate: "Janeiro de 2025",
    buttonHref: "https://www.origamid.com/certificate/25ad45b1",
  },
  {
    education: "React Completo",
    organization: "Origamid",
    startDate: "Maio de 2024",
    endDate: "Agosto de 2024",
    buttonHref: "https://www.origamid.com/certificate/17f07bf7",
  },
  {
    education: "JavaScript ES6+",
    organization: "Origamid",
    startDate: "Janeiro de 2024",
    endDate: "Abril de 2024",
    buttonHref: "https://www.origamid.com/certificate/ce69d931",
  },
  {
    education: "HTML e CSS",
    organization: "Origamid",
    startDate: "Outubro de 2023",
    endDate: "Dezembro de 2023",
    buttonHref: "https://www.origamid.com/certificate/2a8249ae",
  },
];

const remainder = educationData.length % 3;
const emptyCards = remainder === 0 ? 0 : 3 - remainder;

const EducationCards = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(330px,1fr))] gap-5">
      {educationData.map((education) => (
        <EducationCard key={education.education} {...education} />
      ))}

      {Array.from({ length: emptyCards }).map((_, index) => (
        <EducationCard
          key={`empty-${index}`}
          education="Em breve..."
          type=""
          organization=""
          startDate=""
          endDate=""
        />
      ))}
    </div>
  );
};

export default EducationCards;
