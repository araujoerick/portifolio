import ParticlesBackground from "../_components/particles-background";
import { ButtonThemeToggle } from "../_components/ui/button-theme-toggle";
import HomeTitle from "./_components/home-title";

export default function Home() {
  return (
    <>
      <main className="relative flex h-[calc(100vh-120px)] flex-col items-center justify-center">
        <div className="fixed left-1/2 top-0 -z-20 w-full -translate-x-1/2">
          <ParticlesBackground />
        </div>
        <div className="px-8">
          <h1 className="max-w-[30ch] space-y-4 text-center text-5xl">
            <HomeTitle />
          </h1>
        </div>
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2">
          <ButtonThemeToggle />
        </div>
      </main>
    </>
  );
}
