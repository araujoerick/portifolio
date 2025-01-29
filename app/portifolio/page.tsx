import ProjectCards from "./_components/project-cards";
import TechCards from "./_components/techs-cards";

const PortifolioPage = () => {
  return (
    <section className="flex justify-center">
      <div className="container space-y-12 p-8">
        <div className="space-y-4">
          <h1 className="text-5xl font-extralight">Habilidades</h1>

          <div className="flex flex-col gap-4">
            <TechCards />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl font-extralight">Projetos</h1>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(330px,1fr))] gap-5">
            <ProjectCards />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortifolioPage;
