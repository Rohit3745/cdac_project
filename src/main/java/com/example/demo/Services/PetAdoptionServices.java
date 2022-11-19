package com.example.demo.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.dao.PetAdoptionDao;
import com.example.demo.model.Pet;
import com.example.demo.model.PetAdoption;

@Service
public class PetAdoptionServices {
    @Autowired
	PetAdoptionDao petAdoptionDao;
    
    public List<PetAdoption> availablePets(int val)
    {
    	
    	return petAdoptionDao.findByAdoptedIs(val);
    }
//    public void insert(@RequestBody Pet pet) {
//    	petAdoptionDao.save(pet);
//	}
}
