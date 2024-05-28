import Card from 'react-bootstrap/Card';

function TitleIdentitas() {
  return (
    <Card style={{ width: '30rem', border: 'none' }}>
      <Card.Body>
        <h5 className='fw-bolder'> Lengkapi identitas</h5>
        <Card.Text className='fw-normal'>
        Ayo lengkapi identitas kamu dengan upload KTP dan jelajahi setiap fitur yang tersedia di Aplikasi Koper Pustaka!
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TitleIdentitas;