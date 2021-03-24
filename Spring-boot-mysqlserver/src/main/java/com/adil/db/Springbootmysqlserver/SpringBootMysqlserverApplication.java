package com.adil.db.Springbootmysqlserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication

public class SpringBootMysqlserverApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootMysqlserverApplication.class, args);
	}

}
