import React from 'react';
import { Button, Card, CardBody, CardText, CardSubtitle, Container, Col ,Row} from 'reactstrap';
import base_url from "./../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Course=( {Coursex,update} )=>{

    const deleteCourse=(id)=>{

        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{
                    
                    toast.success("Course deleted");
                    update(id);
    
            },
           (error)=>{
               console.log(error);
               toast.error("Server problem!! Error ");
    
           }
        );
    };

    const UpdateCourse=(id)=>{

        axios.put(`${base_url}/update`).then(
            (response)=>{
                    
                    toast.success("Course Update");
                    update(id);
    
            },
           (error)=>{
               console.log(error);
               toast.error("Server problem!! Error ");
    
           }
        );
    };
    return(
        <div>

            <Card className="text-center" body outline color="danger">
                    <CardSubtitle className="font-weight-bold"><h4>{Coursex.title}</h4></CardSubtitle>
                    <CardText>{Coursex.description}</CardText>
                <Container className="text-center">
                    
                    <Button color="danger ml-3"
                            onClick={()=>{
                                deleteCourse(Coursex.id)
                            }}
                    >Delete</Button>
                </Container>
            </Card>
            
        </div>
    )
}

export default Course;