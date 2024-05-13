import Card from 'react-bootstrap/Card';

function TitleDatadiri() {
  return (
    <Card style={{ width: '30rem', border: 'none' }}> 
      <Card.Body>
        <h5 className='fw-bolder'>Lengkapi data diri</h5>
        <Card.Text className='fw-normal'>
          Ayo lengkapi data diri kamu dan jelajahi setiap fitur yang tersedia di Aplikasi Koper Pustaka!
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TitleDatadiri;
