package com.adil.db.Springbootmysqlserver.services;

import com.adil.db.Springbootmysqlserver.Entity.Course;

import java.util.List;

public interface CourseServices {
    public List<Course> getCourse();
    public  Course getcourses(int courseId);

    public Course addcourse(Course course);

    Course updateCourse(Course course);

    void deleteCourse(int id);
}
