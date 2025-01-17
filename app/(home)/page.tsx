import ParticlesBackground from "../_components/particles-background";

export default function Home() {
  return (
    <>
      <main className="relative flex h-screen flex-col items-center justify-center">
        <div className="fixed left-1/2 top-0 w-full -translate-x-1/2">
          <ParticlesBackground />
        </div>
        <div className="px-8">
          <h1 className="max-w-[30ch] space-y-2 text-center text-5xl text-neutral-700">
            <p>Olá, meu nome é Erick Araújo</p>
            <p className="text-pear-600 mix-blend-difference">
              Desenvolvedor Front-End
            </p>
          </h1>
        </div>
      </main>
    </>
  );
}
