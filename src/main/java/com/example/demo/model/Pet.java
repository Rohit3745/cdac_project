package com.example.demo.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;
import org.hibernate.annotations.Loader;

@Entity
@Table(name = "Pet")
public class Pet {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int petid; //petId
	private int pcid;
	private int breedid;
	private String location;
	private boolean owned;
	private int age;
	private boolean vaccination;
	private char gender;
	@Column(name = "userId")
	private int userId;
	@Lob
	private byte[] image;

	public void setImage(byte[] image) {
		this.image = image;
	}


	public Pet(int petid, int pcid, int breedid, String location, boolean owned, int age, boolean vaccination,
			char gender, int userId, byte[] image) {
		super();
		this.petid = petid;
		this.pcid = pcid;
		this.breedid = breedid;
		this.location = location;
		this.owned = owned;
		this.age = age;
		this.vaccination = vaccination;
		this.gender = gender;
		this.userId = userId;
		this.image = image;
	}

	public Pet() {
	}

	public Pet(int petid, int pcid, int breedid, String location, boolean owned, int age, boolean vaccination,
			char gender, int userId) {
		super();
		this.petid = petid;
		this.pcid = pcid;
		this.breedid = breedid;
		this.location = location;
		this.owned = owned;
		this.age = age;
		this.vaccination = vaccination;
		this.gender = gender;
		this.userId = userId;
		this.image = image;
	}

	public byte[] getImage() {
		return image;
	}

	public int getPetid() {
		return petid;
	}

	public void setPetid(int petid) {
		this.petid = petid;
	}

	public int getPcid() {
		return pcid;
	}

	public void setPcid(int pcid) {
		this.pcid = pcid;
	}

	public int getBreedid() {
		return breedid;
	}

	public void setBreedid(int breedid) {
		this.breedid = breedid;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public boolean isOwned() {
		return owned;
	}

	public void setOwned(boolean owned) {
		this.owned = owned;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public boolean isVaccination() {
		return vaccination;
	}

	public void setVaccination(boolean vaccination) {
		this.vaccination = vaccination;
	}

	public char getGender() {
		return gender;
	}

	public void setGender(char gender) {
		this.gender = gender;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

}
