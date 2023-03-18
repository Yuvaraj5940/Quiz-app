import React from 'react';

function ProgressBar({ bgcolor, progress }) {
  const Parentdiv = {

    width: '50%',
    backgroundColor: 'lightgrey',
    borderRadius: 20,
  };

  const Childdiv = {
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 20,
    textAlign: 'right',
  };

  const progresstext = {
    padding: 10,
    color: 'black',
    fontWeight: 500,
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
  );
}

export default ProgressBar;
