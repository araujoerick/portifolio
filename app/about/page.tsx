import Image from "next/image";
import Link from "next/link";

import { Button } from "../_components/ui/button";
import ButtonDownloadCv from "../_components/ui/button-cv";
import EducationCards from "./_components/education-cards";

const AboutPage = () => {
  return (
    <section className="flex justify-center">
      <div className="container space-y-16 p-8">
        <div className="grid grid-cols-2 items-center gap-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-extralight">Sobre mim</h1>
            <p className="font-light">
              Desenvolvedor Front-end com conhecimento em HTML, CSS e Tailwind
              CSS, JavaScript e TypeScript, React e Next e em constante
              aperfeiçoamento de habilidades. Graduado em Sistemas de
              Informação, possuo experiência prévia como analista de suporte
              técnico, onde desenvolvi habilidades essenciais como comunicação
              eficaz, trabalho em equipe e adaptabilidade ao enfrentar diversos
              desafios.
            </p>
            <p>
              Sou apaixonado por criar interfaces intuitivas e responsivas,
              sempre buscando as melhores práticas de acessibilidade,
              usabilidade e design. Meu objetivo é continuar evoluindo como
              desenvolvedor, aplicando minhas habilidades em projetos
              desafiadores e colaborando com equipes dinâmicas para oferecer
              experiências excepcionais aos usuários.
            </p>
            <div className="flex gap-4">
              <ButtonDownloadCv variant="outline">Download CV</ButtonDownloadCv>
              <Button variant="outline" asChild>
                <Link href="/portifolio">Portifolio</Link>
              </Button>
            </div>
          </div>
          <Image
            src="/profile-pic.png"
            alt="eu"
            width={500}
            height={500}
            className="rounded-full"
            priority
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl font-extralight">Formações</h1>
          <EducationCards />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
