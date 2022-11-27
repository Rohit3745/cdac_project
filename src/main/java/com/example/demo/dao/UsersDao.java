package com.example.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.model.Users;

public interface UsersDao  extends JpaRepository <Users,Integer>{
	//@Query("Select u from users u  where u.contactno= : c and u.password= : p")
	
	public List<Users> findByContactnoAndPassword(long phone,String pass);
	
	public Users findByUseridIs(int id);
	public Users findByContactnoIs(long c);
	

}
