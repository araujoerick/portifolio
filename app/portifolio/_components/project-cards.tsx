import React from "react";

import ProjectCard from "./project-card";

const projects = [
  {
    title: "Finance Ai",
    description:
      "A Finance Ai é uma plataforma simplificar a gestão financeira pessoal e empresarial. Com uma dashboard intuitiva, e combina diversas tecnologias para oferecer uma experiência prática e eficiente. Entre suas principais funcionalidades, a plataforma utiliza o Clerk para autenticação de usuários, integra o Stripe para gerenciamento de planos de assinatura e integra o ChatGPT para criar relatórios personalizados.",
    imageSrc: "/projects/financeai.png",
    techs: ["Next.js", "React", "TailwindCSS", "Sass"],
    githubLink: "https://github.com/erickaraujo/finance-ai",
    deployLink: "https://finance-ai.vercel.app/",
  },
  {
    title: "Portifólio",
    description:
      "O Portifólio é uma plataforma desenvolvida para atender às necessidades específicas de redes de barbearias. O sistema foi projetado com foco na usabilidade em dispositivos móveis, permitindo que os usuários encontrem facilmente barbearias próximas, visualizem serviços disponíveis e façam reservas com poucos cliques.",
    imageSrc: "/projects/portifolio.png",
    techs: ["Next.js", "React", "TailwindCSS", "Sass"],
    githubLink: "https://github.com/erickaraujo/dogs",
    deployLink: "https://dogs.vercel.app/",
  },
  {
    title: "Task Manager",
    description:
      "Este é o espaço onde compartilho um pouco sobre minha trajetória, habilidades e projetos. Criado com atenção aos detalhes e utilizando tecnologias modernas, este site foi desenvolvido para ser mais do que um simples portfólio — é uma extensão do meu trabalho e da minha criatividade. Explore, descubra mais sobre o que faço e sinta-se à vontade para entrar em contato.",
    imageSrc: "/projects/task-manager.png",
    techs: ["React", "TailwindCSS", "Sass"],
    githubLink: "https://github.com/erickaraujo/task-manager",
    deployLink: "https://task-manager.vercel.app/",
  },
  {
    title: "Dogs - Rede Social",
    description:
      "O FSW Barber é uma plataforma desenvolvida para atender às necessidades específicas de redes de barbearias. O sistema foi projetado com foco na usabilidade em dispositivos móveis, permitindo que os usuários encontrem facilmente barbearias próximas, visualizem serviços disponíveis e façam reservas com poucos cliques.",
    imageSrc: "/projects/dogs-social.png",
    techs: ["Next.js", "React", "TailwindCSS", "Sass"],
    githubLink: "https://github.com/erickaraujo/dogs",
    deployLink: "https://dogs.vercel.app/",
  },
  {
    title: "Animais Fantásticos",
    description:
      "A Finance Ai é uma plataforma simplificar a gestão financeira pessoal e empresarial. Com uma dashboard intuitiva, e combina diversas tecnologias para oferecer uma experiência prática e eficiente. Entre suas principais funcionalidades, a plataforma utiliza o Clerk para autenticação de usuários, integra o Stripe para gerenciamento de planos de assinatura e integra o ChatGPT para criar relatórios personalizados.",
    imageSrc: "/projects/animais-fant.png",
    techs: ["Next.js", "React", "TailwindCSS", "Sass"],
    githubLink: "https://github.com/erickaraujo/animais-fantasticos",
    deployLink: "https://animais-fantasticos.vercel.app/",
  },
  {
    title: "BikCraft",
    description:
      "O FSW Barber é uma plataforma desenvolvida para atender às necessidades específicas de redes de barbearias. O sistema foi projetado com foco na usabilidade em dispositivos móveis, permitindo que os usuários encontrem facilmente barbearias próximas, visualizem serviços disponíveis e façam reservas com poucos cliques.",
    imageSrc: "/projects/bikcraft.png",
    techs: ["Next.js", "React", "TailwindCSS", "Sass"],
    githubLink: "https://github.com/erickaraujo/bikcraft",
    deployLink: "https://bikcraft.vercel.app/",
  },
];

const ProjectCards = () => {
  return (
    <>
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </>
  );
};

export default ProjectCards;
