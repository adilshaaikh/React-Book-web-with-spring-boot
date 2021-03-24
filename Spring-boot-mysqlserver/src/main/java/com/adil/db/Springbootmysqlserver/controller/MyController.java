package com.adil.db.Springbootmysqlserver.controller;

import com.adil.db.Springbootmysqlserver.Entity.Course;
import com.adil.db.Springbootmysqlserver.services.CourseServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class MyController {

    @Autowired
    private CourseServices courseServices;

    @GetMapping("/")
    public String home(){
        return "Welcome to the course Application";
    }

    @GetMapping("/courses")
    public List<Course> getCourse(){
            return this.courseServices.getCourse();
    }

    @GetMapping("/courses/{courseId}")
    public Course getcourses(@PathVariable int courseId){
        return this.courseServices.getcourses(courseId);
    }

    @PostMapping("/courses")
    public Course addCourse(@RequestBody Course course){
            return this.courseServices.addcourse(course);
    }

    @PutMapping("/update")
    public Course updatecourse(@RequestBody Course course) {
        return this.courseServices.updateCourse(course);
    }

    @DeleteMapping("/courses/{id}")
    public void deleteCourse(@PathVariable int id) {
         this.courseServices.deleteCourse(id);
    }
}
