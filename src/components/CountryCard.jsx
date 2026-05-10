function CountryCard({ country }) {
  return (
    <article className="country-card">
      {/* FLAG Display View*/}

      <img
        className="flag-image"
        src={country.flags.png}
        alt={country.name.common}
      />

      {/* CONTENT View*/}

      <div className="card-content">
        <h2 className="country-name">
          {country.name.common}
        </h2>

        <p>
          <strong>Population:</strong>{" "}
          {country.population.toLocaleString()}
        </p>

        <p>
          <strong>Region:</strong>{" "}
          {country.region}
        </p>

        <p>
          <strong>Capital:</strong>{" "}
          {country.capital?.[0]}
        </p>
      </div>
    </article>
  );
}

export default CountryCard;