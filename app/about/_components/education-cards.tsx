import EducationCard from "./education-card";

const EducationCards = () => {
  return (
    <>
      <EducationCard
        education="Bacharel em Sistemas de Informação"
        organization="Faculdade Santíssimo Sacramento"
        startDate="Janeiro de 2016"
        endDate="Dezembro de 2019"
      />

      <EducationCard
        education="React com TypeScript"
        organization="Origamid"
        startDate="Dezembro de 2024"
        endDate="Janeiro de 2025"
        buttonHref="https://www.origamid.com/certificate/25ad45b1"
      />
      <EducationCard
        education="React Completo"
        organization="Origamid"
        startDate="Maio de 2024"
        endDate="Agosto de 2025"
        buttonHref="https://www.origamid.com/certificate/17f07bf7"
      />
      <EducationCard
        education="JavaScript Completo ES6+"
        organization="Origamid"
        startDate="Janeiro de 2024"
        endDate="Abril de 2024"
        buttonHref="https://www.origamid.com/certificate/ce69d931"
      />
      <EducationCard
        education="HTML e CSS"
        organization="Origamid"
        startDate="Outubro de 2023"
        endDate="Dezembro de 2023"
        buttonHref="https://www.origamid.com/certificate/2a8249ae"
      />
    </>
  );
};

export default EducationCards;
