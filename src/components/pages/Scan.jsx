import React, {useState, useRef, useEffect} from 'react';
import {Button, Box} from '@mui/joy';
import Scanner from '../modules/scanners/Scanner';
import Result from '../modules/scanners/Result';

const Sacn = () => {
  const [scanning, setScanning] = useState(false);
  const [results, setResults] = useState([]);
  const [screenSize, setScreenSize] = useState({});
  const scannerRef = useRef(null);

  useEffect(() => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  console.log(results)

  return (
    <>
      <Button onClick={() => setScanning(!scanning)} style={{
        position: 'fixed',
        bottom: '10px',
        right: '10px',
        zIndex: 1,
      }}>{scanning ? 'Stop' : 'Start'}</Button>
      <div ref={scannerRef} style={{
        position: 'relative',
        border: '4px solid red',
        boxSizing: 'border-box',
      }}>
        {/* <video style={{ width: window.innerWidth, height: 480, border: '3px solid orange' }}/> */}
        <canvas className="drawingBuffer" style={{
          position: 'absolute',
          top: '0px',
          // left: '0px',
          // height: '100%',
          // width: '100%',
          border: '4px solid green',
          boxSizing: 'border-box',
        }} width={window.innerWidth} height={window.innerHeight}/>
        {
          scanning ?
            <Scanner constraints={screenSize}
                     scannerRef={scannerRef}
                     onDetected={
                       (result) => setResults([...results, result])
                     }/> : null
        }
      </div>
      <ul className="results">
        {results.map((result) => (result.codeResult && <Result key={result.codeResult.code} result={result}/>))}
      </ul>
    </>
  );
};

export default Sacn;