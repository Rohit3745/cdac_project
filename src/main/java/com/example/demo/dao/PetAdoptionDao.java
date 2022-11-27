 package com.example.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Pet;
import com.example.demo.model.PetAdoption;

public interface PetAdoptionDao extends JpaRepository<PetAdoption,Integer> {

	public List<PetAdoption> findByAdoptedIs(int bool);

	//public void save(Pet pet);
}
