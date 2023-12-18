

const Container = {
  height: '30px',
  backgroundColor: '#731704',
  textAlign: 'center',
  fontSize: '150%',
  color: '#ffd98d',
  fontWeight: 'bold',
};

const Announcement = () => {
  return (
    <div>
      <div style={Container}>Free Shipping on Orders above 500$ </div>
    </div>
  );
};

export default Announcement;
