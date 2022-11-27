package com.example.demo.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="petadoption")
public class PetAdoption implements Serializable{
	@Id
	private int petid;
	private int adopted;

	public PetAdoption() {}

	public PetAdoption(int petid, int adopted) {
		super();
		this.petid = petid;
		this.adopted = adopted;
	}

	public int getPetid() {
		return petid;
	}

	public void setPetid(int petid) {
		this.petid = petid;
	}

	public int isAdopted() {
		return adopted;
	}

	public void setAdopted(int adopted) {
		this.adopted = adopted;
	}
	
}
