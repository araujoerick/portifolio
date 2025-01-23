import EducationCard from "./education-card";

const EducationCards = () => {
  return (
    <>
      <EducationCard
        education="Graduação em Sistemas de Informação"
        organization="Faculdade Santíssimo Sacramento"
        startDate="Janeiro de 2016"
        endDate="Dezembro de 2019"
      />

      <EducationCard
        education="React com TypeScript"
        organization="Origamid"
        startDate="Dezembro de 2024"
        endDate="Janeiro de 2025"
        buttonHref="#"
      />
      <EducationCard
        education="React Completo"
        organization="Origamid"
        startDate="Maio de 2024"
        endDate="Agosto de 2025"
        buttonHref="#"
      />
      <EducationCard
        education="JavaScript Completo ES6+"
        organization="Origamid"
        startDate="Janeiro de 2024"
        endDate="Abril de 2024"
        buttonHref="#"
      />
      <EducationCard
        education="UI Design"
        organization="Origamid"
        startDate="Setembro de 2023"
        endDate="Novembro de 2023"
        buttonHref="#"
      />
    </>
  );
};

export default EducationCards;
