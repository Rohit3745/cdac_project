package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user")
public class Users {
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private int userid;
private int ucid;
private String fullname;
private String password;
private long contactno;
private String mail;
private String address;
private String city;
private String state;
private int pincode;

public Users() {}

public Users(int userid, int ucid, String fullname, String password, long contactno, String mail, String address,
		String city, String state, int pincode) {
	super();
	this.userid = userid;
	this.ucid = ucid;
	this.fullname = fullname;
	this.password = password;
	this.contactno = contactno;
	this.mail = mail;
	this.address = address;
	this.city = city;
	this.state = state;
	this.pincode = pincode;
}

public int getUserid() {
	return userid;
}

public void setUserid(int userid) {
	this.userid = userid;
}

public int getUcid() {
	return ucid;
}

public void setUcid(int ucid) {
	this.ucid = ucid;
}

public String getFullname() {
	return fullname;
}

public void setFullname(String fullname) {
	this.fullname = fullname;
}

public String getPassword() {
	return password;
}

public void setPassword(String password) {
	this.password = password;
}

public long getContactno() {
	return contactno;
}

public void setContactno(long contactno) {
	this.contactno = contactno;
}

public String getMail() {
	return mail;
}

public void setMail(String mail) {
	this.mail = mail;
}

public String getAddress() {
	return address;
}

public void setAddress(String address) {
	this.address = address;
}

public String getCity() {
	return city;
}

public void setCity(String city) {
	this.city = city;
}

public String getState() {
	return state;
}

public void setState(String state) {
	this.state = state;
}

public int getPincode() {
	return pincode;
}

public void setPincode(int pincode) {
	this.pincode = pincode;
}


}
