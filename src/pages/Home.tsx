import HomeImages from "../components/HomeImages";

const Home = () => {
  return (
    <main className="home">
      <section className="home__intro">
        <h1>Bienvenue chez [Nom du Peintre]</h1>
        <p>
          Professionnel en peinture et rénovation, avec plus de 10 ans
          d'expérience dans la transformation d'intérieurs et d'extérieurs.
        </p>
        <p>
          Nous offrons des services de qualité pour redonner vie à vos espaces
          grâce à des techniques de peinture innovantes et des finitions
          impeccables.
        </p>
      </section>
      <section>
        <HomeImages />
      </section>
    </main>
  );
};

export default Home;
