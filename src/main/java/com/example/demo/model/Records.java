package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "records")
public class Records {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int rid;
	int petid;
	int userid;

	public Records() {
	}

	public Records(int did, int petid, int userid) {
		super();
		this.rid = did;
		this.petid = petid;
		this.userid = userid;
	}

	public int getDid() {
		return rid;
	}

	public void setDid(int did) {
		this.rid = did;
	}

	public int getPetid() {
		return petid;
	}

	public void setPetid(int petid) {
		this.petid = petid;
	}

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

}
