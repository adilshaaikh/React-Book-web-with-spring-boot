import React, {useEffect } from "react";
import { Jumbotron, Container, Button } from "reactstrap";
function Home() {
    useEffect(()=>{
        document.title="Home"  
          },[]);
    return (

        
        <div>

            <Jumbotron className="text-center">
                <h1>React Application</h1>
                <p>
                    This is learn from React Js. Backend is spring boot and
                    frontend is react Js.
                </p>
                <Container>
                    <Button color="primary" outline>Start Using</Button>

                </Container>
            </Jumbotron>
        </div>
    )
}

export default Home;