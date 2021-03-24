package com.adil.db.Springbootmysqlserver.Dao;

import com.adil.db.Springbootmysqlserver.Entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

public interface CourseDao extends JpaRepository<Course,Integer> {

}
