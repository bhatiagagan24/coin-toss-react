import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from '@material-ui/core';
import Box from '@material-ui/core/Box';

// import './index.css';


<meta
  name="viewport"
  content="minimum-scale=1, initial-scale=1, width=device-width"
/>

function headsOrTails() {
  var temp1 = Math.random() > 0.5 ? 'heads' : 'tails';
  return temp1;
}


var jsx1 = 
(
<Box textAlign='center'>
<div>
<p>Press the button below to Toss a Coin</p>
<Button variant="contained" color="primary" onClick={newJsx}>Toss the Coin</Button>
</div>
</Box>
);

function reset() {
jsx1 = 
(
<Box textAlign='center'>
<div>
<p>Press the button below to Toss a Coin</p>
<Button variant="contained" color="primary" onClick={newJsx}>Toss the Coin</Button>
</div>
</Box>
);
ReactDOM.render(jsx1, document.getElementById('root'));
}

var heads = 0;
var tails = 0;

function newJsx(e) {
  var newC = headsOrTails();
  if(newC === 'heads') {
    heads += 1;
  } else {
    tails += 1;
  }
  jsx1 = (
  <Box textAlign='center'>
  <div>
  <p>You got {newC}</p>
  <p>Heads : -  {heads}</p>
  <p>Tails : -  {tails}</p>
  <Button variant="outlined" color="primary" onClick={newJsx}>Toss the coin again</Button> <br /><br />
  <Button variant="outlined" color="secondary" onClick={reset}>Reset the Score</Button>
  </div>
  </Box>
  );
ReactDOM.render(jsx1, document.getElementById('root'));
}

ReactDOM.render(jsx1, document.getElementById('root'));