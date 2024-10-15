import React from 'react';

const companies = [
  { name: 'Nestlé', logo: '/src/nestle-logo.png' },
  { name: 'Apple', logo: '/src/apple-logo-transparent.png' },
  { name: 'BECO', logo: '/src/hund-von-eden-logo-becopets.jpg' },
  { name: 'Amazon', logo: '/src/amazon-logo-black-transparent.png' },
  { name: 'Google', logo: '/src/google-logo-black-transparent.png' },
  { name: 'Walmart', logo: '/src/images.jpg' },
];

const CompanyLogos = () => {
  const containerStyle = {
    maxWidth: '1200px',
    margin: '40px auto',
    padding: '20px',
  };

  const logoContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  };

  const logoStyle = {
    maxWidth: '100px',
    height: 'auto',
    margin: '10px',
    filter: 'grayscale(100%)',
  };

  return (
    <div style={containerStyle}>
      <div style={logoContainerStyle}>
        {companies.map((company, index) => (
          <img
            key={index}
            src={company.logo}
            alt={`${company.name} logo`}
            style={logoStyle}
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyLogos;