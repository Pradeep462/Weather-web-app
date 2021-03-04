import React from 'react';
import { Container, Form , Button} from 'react-bootstrap';

const CityInput = ({city, setCity, fetchCityWeather}) => {

  
  const [error , setError] = React.useState("");

  const handleInput =(event) =>{
     
       setCity(event.target.value);
     // console.log(city);

  }

  const handleClick = (event) =>{

     if(!city){
         setError("City field is Empty");
     }
     else{
         setError("");
         fetchCityWeather();
     }

  }

    return (
        <div>
          <Container>
            <Form className="p-3">
             <Form.Group controlId="formBasicEmail">
                   <Form.Label>City</Form.Label>
                   <Form.Control 
                   value={city}
                   type="text" 
                   placeholder="Enter City" 
                   onChange={handleInput}/>
                   <p className="text-danger">{error}</p>
                   
                </Form.Group>

                  <Button variant="primary"  onClick={handleClick}>
                     Submit
                 </Button>
          </Form>
          </Container>
        </div>
    );
};

export default CityInput;