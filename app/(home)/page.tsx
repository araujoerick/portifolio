import ParticlesBackground from "../_components/particles-background";
import { ButtonThemeToggle } from "../_components/ui/button-theme-toggle";

export default function Home() {
  return (
    <>
      <main className="relative flex h-screen flex-col items-center justify-center">
        <div className="fixed left-1/2 top-0 -z-20 w-full -translate-x-1/2">
          <ParticlesBackground />
        </div>
        <div className="px-8">
          <h1 className="max-w-[30ch] space-y-2 text-center text-5xl">
            <p>Olá, meu nome é Erick Araujo</p>
            <p className="text-pear-600">Desenvolvedor Front-End</p>
          </h1>
        </div>
        <div className="fixed bottom-4 -translate-x-1/2">
          <ButtonThemeToggle />
        </div>
      </main>
    </>
  );
}
