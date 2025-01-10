import Header from "../_components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <h1 className="text-4xl">
          Olá, meu nome é Erick Araújo{" "}
          <span className="text-pear">Desenvolvedor Front-End</span>
        </h1>
      </main>
    </>
  );
}
