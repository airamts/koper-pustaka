import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

function ProgressDeskripsiAl() {
  return (
    <Stack className='mt-2 col-12' direction="horizontal" gap={0} style={{ fontSize: '100%' }}>
      <Badge className='col-4' bg="light" text="dark"> DATA DIRI</Badge>
      <Badge className='col-4' bg="light" text="dark">ALAMAT</Badge>
      <Badge className='col-4' bg="light" text="dark">IDENTITAS</Badge>
    </Stack>
  );
}

export default ProgressDeskripsiAl;
