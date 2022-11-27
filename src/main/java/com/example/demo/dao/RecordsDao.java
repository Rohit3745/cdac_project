package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Records;

public interface RecordsDao extends JpaRepository<Records,Integer> {
	

}
