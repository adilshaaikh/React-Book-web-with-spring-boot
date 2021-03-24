import React from "react";
import { Card,CardBody } from "reactstrap";


function Myheader(){
    return(
            <div  >
                <Card className=" my-2 bg-warning">
                    <CardBody>
                    <h1 className="text-center my-2 " >Welcome to the Course Application</h1>

                    </CardBody>
                </Card>
            </div>
    );
}

export default Myheader;
