package com.example.demo.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.DonationDetailsDao;
import com.example.demo.model.DonationDetails;

@Service
public class DoantionServices {
     @Autowired
	DonationDetailsDao donationDao;
     
     
     public void addDetails(DonationDetails details) 
     {
    	 
    	 donationDao.save(details);
    	 
     }
     
     public  List<DonationDetails> allDonationDetails()
     {
    	 return donationDao.findAll();
     }
}
