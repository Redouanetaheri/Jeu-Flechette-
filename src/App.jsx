import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import InputGroup from "react-bootstrap/InputGroup";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ScoreIndicator from './Components/ScoreIndicator';
import { useState } from 'react';




function App() {

const [scoreToReach, setScoreToReach] = useState(501);
const [score, setScore] = useState(501);
const [multiplicator, setMultiplicator] = useState(1);



  const handleChange =(number) =>{
    if (number == 25 && multiplicator == 3) {
      alert("Tricheur !!!!");
      setMultiplicator(1);
    }else if((score - (number * multiplicator)) < 0){
      alert('Tour terminé !!');
      setMultiplicator(1);
    }else if((score - (number * multiplicator)) == 0){
      setScore(score - (number * multiplicator));
    setMultiplicator(1);
     alert('Victoire !!');
   }else{
    setScore(score - (number * multiplicator));
    setMultiplicator(1);
  }
}


return (
 <>
      
      <h1 className='d-flex justify-content-center mb-5'>Jeu Flechette</h1>

      


      <ScoreIndicator maxValue={scoreToReach} value={score} />
      

    <div className='d-flex flex-column align-items-center mt-5'>
      <div className=" col-3 d-flex justify-content-center flex wrap">
      <Button variant="danger" className="col-3" onClick={() => {handleChange(0)}}>0</Button>
      <Button variant="danger" className="col-3" onClick={() => {handleChange(1)}}>1</Button>
      <Button variant="outline-secondary" className="col-3" onClick={() => {handleChange(2)}} >2</Button>
      <Button variant="outline-secondary" className="col-3" onClick={() => {handleChange(3)}}>3</Button>
      </div>
      <div className="col-3 d-flex justify-content-center flex-wrap ">
      <Button variant="outline-secondary" className="col-3" onClick={() => {handleChange(4)}}>4</Button>
      <Button variant="outline-secondary" className="col-3" onClick={() => {handleChange(5)}}>5</Button>
      <Button variant="outline-secondary" className="col-3" onClick={() => {handleChange(6)}}>6</Button>
      <Button variant="primary" className="col-3" onClick={() => {handleChange(7)}}>7</Button>
      </div>
      <div className="col-3 d-flex justify-content-center flex-wrap ">
      <Button variant="outline-secondary" className="col-3" onClick={() => {handleChange(8)}}>8</Button>
      <Button variant="outline-secondary" className="col-3" onClick={() => {handleChange(9)}}>9</Button>
      <Button variant="outline-secondary" className="col-3" onClick={() => {handleChange(10)}}>10</Button>
      <Button variant="primary" className="col-3" onClick={() => {handleChange(11)}}>11</Button>
      </div>
      <div className="col-3 d-flex justify-content-center flex-wrap ">
      <Button variant="outline-secondary" className="col-3" onClick={() => {handleChange(12)}}>12</Button>
      <Button variant="outline-secondary" className="col-3" onClick={() => {handleChange(13)}}>13</Button>
      <Button variant="outline-secondary" className="col-3" onClick={() => {handleChange(14)}}>14</Button>
      <Button variant="primary" className="col-3" onClick={() => {handleChange(15)}}>15</Button>
      </div>
      <div className="col-3 d-flex justify-content-center flex-wrap ">
      <Button variant="outline-secondary" className="col-3" onClick={() => {handleChange(16)}}>16</Button>
      <Button variant="outline-secondary" className="col-3" onClick={() => {handleChange(17)}}>17</Button>
      <Button variant="danger" className="col-3" onClick={() => {handleChange(18)}}>18</Button>
      <Button variant="success" className="col-3" onClick={() => {handleChange(19)}}>19</Button>
      <Button variant="success" className="col-3" onClick={() => {handleChange(20)}}>20</Button>
      <Button variant="success" className="col-3" onClick={() => {handleChange(25)}}>25</Button>
      <Button variant="success" className="col-3" onClick={() => {setMultiplicator(2)}}>DOUBLE</Button>
      <Button variant="success" className="col-3" onClick={() => {setMultiplicator(3)}}>TRIPLE</Button>
      </div>
      </div>
  
  </>
);
}

export default App;
