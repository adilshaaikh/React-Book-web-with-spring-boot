import React, { Fragment,useEffect,useState } from "react";
import { FormGroup, Label ,Form, Input, Container, Button} from "reactstrap";
import base_url from "./../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const AddCourse=()=>{
    useEffect(()=>{
        document.title="Add Courses"  
          },[]);

          const[courses,setCourses]=useState({});
          const handleForm=(e)=>{
              console.log(courses.data);
              postdataserver(courses);
              toast.success( "Course has Added Successful");

              e.preventdefault();
          }
          

          const postdataserver=(data)=>{

            axios.post(`${base_url}/courses`,data).then(
                (response)=>{
                        console.log(response);
                        console.log("success");
                },
               (error)=>{
                   console.log(error);
                   console.log("error");
                   toast.error("error");
        
               }
            );
          };
        
    return(
        <Fragment>
            <h1 className="text-center my-3">Fill Course Detail</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <Label for="userId"><h4>Course ID</h4></Label>
                    <Input type="number" placeholder="Enter here" name="userId"
                    id="userId" required
                    onChange={(e)=>{
                        setCourses({...courses,id: e.target.value})
                    }}
                    
                    >

                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="title"><h4>Course Title</h4></Label>
                    <Input type="text" placeholder="Enter title here" name="title"
                     id="title" required
                     onChange={(e)=>{
                        setCourses({...courses,title: e.target.value })
                    }}
                     ></Input>
                </FormGroup>
                
                <FormGroup>
        <Label for="Description"><h4>Course Description</h4></Label>
        <Input type="textarea" name="description" placeholder="Enter Description here" id="description"
        
        style={{height:150}} 
        onChange={(e)=>{
            setCourses({...courses,description: e.target.value })
        }}
        />
      </FormGroup>

                <Container className="text-center">
                    <Button type="submit" color="success"
                    
                    >Add Course</Button>
                    <Button 
                    type="reset"
                    color="warning ml-3"
                    onClick={()=>{
                        setCourses({});
                    }}
                    >Clear</Button>

                </Container>
            </Form>
        </Fragment>
    )
}

export default AddCourse;