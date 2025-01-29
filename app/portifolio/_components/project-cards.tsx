import React from "react";

import ProjectCard from "./project-card";

const projects = [
  {
    title: "Finance Ai",
    description:
      "Um gerenciador de finanças pessoais com inteligência artificial. Essa é uma aplicação no modelo SaaS voltada para gestão financeira, oferecendo ferramentas úteis para que o usuário possa registrar e acompanhar a evolução de suas finanças, além de receber insights da Gemini AI baseado em suas entradas.",
    imageSrc: "/projects/financeai.png",
    techs: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "Zod",
      "PostgreSQL",
      "Shadcn",
      "Stripe",
      "Clerk",
    ],
    githubLink: "https://github.com/araujoerick/financeai",
    deployLink: "https://financeai-lime.vercel.app/login",
  },
  {
    title: "Portifólio",
    description:
      "Meu portifólio pessoal desenvolvido com Next 15 e React 19 para explorar as novidades dessas ferramentas. Além de explorar Server Side Rendering (SSR) e Static Site Generation (SSG) para garantir performance e eficiência. Utiilizei á nível de estudo também GSAP e Framer Motion para criar animações e efeitos dinâmicos.",
    imageSrc: "/projects/portifolio.png",
    techs: [
      "Next 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Motion",
      "GSAP",
      "Shadcn",
      "Git Hooks",
      "Husky",
    ],
    githubLink: "https://github.com/araujoerick/portifolio",
    deployLink: "##",
  },
  {
    title: "Task Manager",
    description:
      "Organize sua rotina de forma prática com funcionalidades intuitivas: registre, edite e exclua tarefas facilmente em qualquer dispositivo. Filtre tarefas por status e organize-as por períodos do dia. Monitoramento de Hidratação: Acompanhe seu consumo diário de água para uma rotina mais saudável.",
    imageSrc: "/projects/task-manager.png",
    techs: [
      "React",
      "Vite",
      "Tailwind CSS",
      "React Query",
      "React Hook Form",
      "Zod",
      "Axios",
      "Node",
      "Prisma",
      "PostgreSQL",
      "Cron Jobs",
    ],
    githubLink: "https://github.com/araujoerick/task-manager",
    deployLink: "https://task-manager-araujo.vercel.app/",
  },
  {
    title: "Dogs - Rede Social",
    description:
      "Compartilhe momentos únicos do seu cãozinho em uma plataforma interativa! Poste fotos, comente e curta publicações em um feed com scroll infinito para nunca perder nada. Crie sua conta, faça login e acompanhe seu feed exclusivo. Além disso, confira estatísticas sobre os acessos às suas fotos.",
    imageSrc: "/projects/dogs-social.png",
    techs: [
      "React",
      "Vite",
      "JavaScript",
      "React Router",
      "CSS Modules",
      "Custom Hooks",
      "JWT",
    ],
    githubLink: "https://github.com/araujoerick/dogs",
    deployLink: "https://dogs-mu-neon.vercel.app",
  },
  {
    title: "Animais Fantásticos",
    description:
      "Projeto desenvolvido com HTML, CSS e JavaScript puro e com funcionalidades como scroll suave, menu mobile para dispositivos menores e experiência interativa de um modal para login. Além de um slide dinâmico criado sem bibliotecas externas.",
    imageSrc: "/projects/animais-fant.png",
    techs: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/araujoerick/animais-fantasticos",
    deployLink: "https://animais-fantasticos-kappa.vercel.app/",
  },
  {
    title: "BikCraft",
    description:
      "Descubra o charme das bicicletas artesanais em um site fictício criado com HTML e CSS. Este projeto foca no design elegante e na apresentação impecável de produtos, oferecendo uma experiência visual atraente e funcional. Ideal para explorar conceitos de layout e estilo responsivo.",
    imageSrc: "/projects/bikcraft.png",
    techs: ["HTML", "CSS"],
    githubLink: "https://github.com/araujoerick/bikcraft",
    deployLink: "https://bikcraft-erickaraujo.vercel.app/",
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
