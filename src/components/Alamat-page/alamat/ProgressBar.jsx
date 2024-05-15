import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressBarAlamat() {
  return(
    <ProgressBar>
      <ProgressBar striped variant="success" animated now={33} key={1} label={``} />
      <ProgressBar striped variant="warning" animated now={33} key={2} label={``} />
      <ProgressBar striped variant="light" animated now={34} key={3} label={`Identitas`} />
    </ProgressBar> 
  );
}

export default ProgressBarAlamat;