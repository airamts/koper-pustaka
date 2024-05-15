import Card from 'react-bootstrap/Card';

function TitleAlamat() {
  return (
    <Card  style={{ width: '30rem', border: 'none' }}>
      <Card.Body>
        <h5 className='fw-bolder'> Lengkapi alamat</h5>
        <Card.Text className='fw-normal'>
        Ayo lengkapi alamat domisili kamu dan jelajahi setiap fitur yang tersedia di Aplikasi Koper Pustaka!
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TitleAlamat;