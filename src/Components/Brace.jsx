const containerStyle = {
  padding: '20px',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
};

const Brace = () => {
  return (
    <div style={containerStyle}>
      {bracelets.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Brace;
