import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../_components/ui/card";
import TechCards from "./_components/techs-cards";

const PortifolioPage = () => {
  return (
    <section className="flex justify-center">
      <div className="container space-y-8 p-8">
        <div className="space-y-4">
          <h1 className="text-5xl font-extralight">Habilidades</h1>

          <div className="flex flex-col gap-4">
            <TechCards />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl font-extralight">Projetos</h1>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
            <Card>
              <CardHeader>
                <CardTitle>
                  <h2 className="text-3xl font-extralight">Linguagens</h2>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>TypeScript</p>
                <p>JavaScript</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  <h2 className="text-3xl font-extralight">Linguagens</h2>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>TypeScript</p>
                <p>JavaScript</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  <h2 className="text-3xl font-extralight">Linguagens</h2>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>TypeScript</p>

                <p>JavaScript</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortifolioPage;
