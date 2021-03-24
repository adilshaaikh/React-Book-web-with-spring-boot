package com.adil.db.Springbootmysqlserver.services;

import com.adil.db.Springbootmysqlserver.Dao.CourseDao;
import com.adil.db.Springbootmysqlserver.Entity.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseServiceimpl implements CourseServices {

    @Autowired
    public CourseDao courseDao;
   // List<Course> list;
    public CourseServiceimpl(){
//        list=new ArrayList<>();
        //list.add(new Course(145,"java","Java beginner"));
      //  list.add(new Course(123,"Android","Android beginner"));

    }
    @Override
    public List<Course> getCourse() {
        return courseDao.findAll();
    }

    @Override
    public Course getcourses(int courseId) {
//        Course c=null;
//        for (Course course:list){
//            if (course.getId()==courseId){
//                c=course;
//                break;
//            }
//        }
        return courseDao.getOne(courseId);
    }

    @Override
    public Course addcourse(Course course) {
        courseDao.save(course);
//        list.add(course);
        return course;
    }

    @Override
    public Course updateCourse(Course course) {
//        list.forEach(e->{
//            if(e.getId()==course.getId()){
//                e.setTitle(course.getTitle());
//                e.setDescription(course.getDescription());
//            }
//        });
        courseDao.save(course);
        return course;
    }

    @Override
    public void deleteCourse(int id) {
      //  list=this.list.stream().filter(e->e.getId()!=id).collect(Collectors.toList());
Course course=courseDao.getOne(id);
courseDao.delete(course);

    }


}
