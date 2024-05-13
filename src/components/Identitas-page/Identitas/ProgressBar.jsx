import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressBarIdentitas() {
  return(
    <ProgressBar>
      <ProgressBar striped variant="success" animated now={0} key={1} label={``} />
      <ProgressBar striped variant="success" animated now={66} key={2} label={``} />
      <ProgressBar striped variant="warning" animated now={34} key={3} label={``} />
    </ProgressBar> 
  );
}

export default ProgressBarIdentitas;