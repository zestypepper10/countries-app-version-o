import CountryCard from "../components/CountryCard";

function Home({ countriesData }) {
  return (
    <main className="home-page">
      <section className="countries-container">
        {countriesData.map((country) => (
          <CountryCard
            key={country.name.common}
            country={country}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;