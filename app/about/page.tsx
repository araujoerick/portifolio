"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Button } from "../_components/ui/button";
import ButtonDownloadCv from "../_components/ui/button-cv";
import EnterAnimation from "../_components/ui/enter-animation";
import Title from "../_components/ui/title";
import DragConstraints from "./_components/about-image";
import EducationCards from "./_components/education-cards";

const AboutPage = () => {
  return (
    <section className="flex justify-center">
      <div className="container space-y-12 p-8">
        <div className="grid grid-cols-2 items-center gap-8">
          <EnterAnimation>
            <div className="space-y-4">
              <Title>Sobre mim</Title>
              <p className="font-light">
                Desenvolvedor Front-end com conhecimento em HTML, CSS e Tailwind
                CSS, JavaScript e TypeScript, React e Next e em constante
                aperfeiçoamento de habilidades. Graduado em Sistemas de
                Informação, possuo experiência prévia como analista de suporte
                técnico, onde desenvolvi habilidades essenciais como comunicação
                eficaz, trabalho em equipe e adaptabilidade ao enfrentar
                diversos desafios.
              </p>
              <p className="font-light">
                Sou apaixonado por criar interfaces intuitivas e responsivas,
                sempre buscando as melhores práticas de acessibilidade,
                usabilidade e design. Meu objetivo é continuar evoluindo como
                desenvolvedor, aplicando minhas habilidades em projetos
                desafiadores e colaborando com equipes dinâmicas para oferecer
                experiências excepcionais aos usuários.
              </p>
              <div className="flex gap-4">
                <ButtonDownloadCv variant="outline">
                  Download CV
                </ButtonDownloadCv>
                <Button variant="outline" asChild>
                  <Link href="/portifolio">Portifolio</Link>
                </Button>
              </div>
            </div>
          </EnterAnimation>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center"
          >
            <DragConstraints />
          </motion.div>
        </div>

        <div className="space-y-4">
          <Title>Formações</Title>
          <EducationCards />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
