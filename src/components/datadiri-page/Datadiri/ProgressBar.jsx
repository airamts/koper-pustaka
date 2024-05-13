import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressBarDd() {
  return(
      <ProgressBar>
        <ProgressBar striped variant="warning" animated now={33} key={1} label={``} />
        <ProgressBar striped variant="light" animated now={33} key={2} label={``} />
        <ProgressBar striped variant="light" animated now={34} key={3} label={``} />
      </ProgressBar>
  );
}

export default ProgressBarDd;