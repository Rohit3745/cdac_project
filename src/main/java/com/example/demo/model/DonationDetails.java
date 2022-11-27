package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Entity
@Table(name="donationdetails")


public class DonationDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private int did;
    private int userId;
    private String details; 
    
   public DonationDetails() {}

	public DonationDetails(int did, int userId, String details) {
		super();
		this.did = did;
		this.userId = userId;
		this.details = details;
	}

	public int getDid() {
		return did;
	}

	public void setDid(int did) {
		this.did = did;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}
}
