package com.example.demo.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;
import com.example.demo.Services.DoantionServices;
import com.example.demo.Services.PetAdoptionServices;
import com.example.demo.Services.PetServices;
import com.example.demo.Services.RecordsServices;
import com.example.demo.Services.UsersServices;
import com.example.demo.model.DonationDetails;
import com.example.demo.model.Pet;
import com.example.demo.model.PetAdoption;
import com.example.demo.model.Records;
import com.example.demo.model.Users;

@RestController
@CrossOrigin
public class RestControllerHaven {

	@Autowired(required = true)
	PetServices petService;
	@Autowired(required = true)
	UsersServices userService;
	@Autowired(required = true)
	DoantionServices donationService;
	@Autowired(required = true)
	PetAdoptionServices petAdoptionService;
	@Autowired(required = true)
	RecordsServices recordService;

	// Returns All Pets
	@GetMapping
	public List<Pet> getAllPets() {

		return petService.getAllPets();
	}

	// Validation for login
	// takes contact number and password for user validation
	// returns Bad request(400) when validation fails
	
	@RequestMapping("/login")
	@PostMapping
	public String login(@RequestBody String[] a) throws Exception {
		String phone = a[0];
		String password = a[1];
		List<Users> users = userService.login(phone, password);
		if (users.isEmpty()) {

			throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
		}
		return "success";
	}

	// takes Pet object as argument and adds it to database
	
	@RequestMapping("/pet/save")
	@PostMapping
	public String addPet(@RequestBody Pet pet) {

		try {
			petService.insert(pet);
			
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
		}
		return "success";
	}

// updates pet present in the database
	
	@PutMapping
	public void updatePet(@RequestBody Pet pet) {
		petService.updatePet(pet);
	}

	// returns list of all users
	@RequestMapping("/user")
	@GetMapping
	public List<Users> getUsers() {

		return userService.getAllUsers();
	}

	// add user to database
	// takes Users object as argument
	@RequestMapping("/user/save")
	@PostMapping
	public void addUser(@RequestBody Users user) {
		try {
			userService.addUsers(user);
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST);

		}
	}

	// updates user present in database
	@RequestMapping("/user/save/edit")
	@PutMapping
	public void updateUser(@RequestBody Users user) {
		userService.update(user);
	}

	// returns Users object
	// takes userId as argument
	@RequestMapping("/getfoster/{id}")
	@GetMapping
	public Users getFoster(@PathVariable("id") int userId) {
		return userService.getUserByUserId(userId);
	}

	// updates pet by adding image(long blob)
	// takes petId and MultipartFile as argument
	@RequestMapping(value = "/addimage/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	@PostMapping
	public void saveImage(@PathVariable("id") int petId, @RequestParam("image") MultipartFile file) throws IOException {

		byte[] imageData = file.getBytes();
		Pet pet = petService.getById(petId);
		pet.setImage(imageData);
		petService.insert(pet);

	}

	// displaying image by calling Mapping
	@RequestMapping("/showimage/{id}")
	@GetMapping
	public void showImage(@PathVariable("id") int petId, HttpServletResponse response)
			throws ServletException, IOException {
		Pet pet = petService.getById(petId);
		response.setContentType("image/jpeg, image/jpg, image/png, image/gif");
		response.getOutputStream().write(pet.getImage());
		response.getOutputStream().close();
	}

	// returns User object
	// takes contact number as argument
	@RequestMapping("/getUserid/{c}")
	@GetMapping
	public Users getUserId(@PathVariable("c") long contact) {

		return userService.getUserId(contact);
	}

	// returns users object
	// takes UserId as argument
	@RequestMapping("/getUcid/{c}")
	@GetMapping
	public Users getUcid(@PathVariable("c") int userId) {
		Users user = userService.getUserByUserId(userId);
		return user;
	}

	// adds donation details
	@RequestMapping("/doantiondetails")
	@PostMapping
	public void addDonationDetails(@RequestBody DonationDetails details) {
		donationService.addDetails(details);
	}

	// returns petId , where image is to be added
	// takes userId of that respective User, and image itself[checks if it is NULL]
	@RequestMapping("/whereToInsertImage/{c}")
	@GetMapping
	public int getPetId(@PathVariable("c") int userId, byte[] img) {

		Pet pet = petService.doesPetHaveImage(userId, null);
		return pet.getPetid();
	}

	// returns all pets of that respective user
	// takes userId as argument
	@RequestMapping("/findYourPets/{c}")
	@GetMapping
	public List<Pet> findYourPets(@PathVariable("c") String userId) 
	{
		List<Pet> output = new ArrayList<>();
    try {
		int id = Integer.parseInt(userId);
   
		List<Pet> pets = petService.findByUserId(id);
		List<PetAdoption> tmp = petAdoptionService.availablePets(0);
		
		for (PetAdoption obj : tmp) {
			for (Pet pet : pets) {
				if (obj.getPetid() == pet.getPetid()) {
					output.add(pet);
				}
			}
		}
		return output;
	}
	
	 
    catch (NumberFormatException nfe) {
    
    	return output;
    	}
	}

	// returns all pets of all users which are not yet ADOPTED ***
	@RequestMapping("/onlyavailblePets")
	@GetMapping
	public List<Pet> availablePets() {
		List<Pet> output = new ArrayList<Pet>();
		try {

			List<PetAdoption> tmp = petAdoptionService.availablePets(0);
			for (PetAdoption obj : tmp) {

				output.add(petService.getById(obj.getPetid()));
			}
		} catch (NullPointerException e) {
		}

		return output;
	}

	// adds logs of adoption
	// takes object of Records as argument
	@RequestMapping("/addRecords")
	@PostMapping
	public void insertRecord(@RequestBody Records obj) {
		recordService.addRecord(obj);
	}

	// verifies if number is already is used or not
	// takes contact as argument
	// returns BAD request[400] if already used
	@RequestMapping("/verifynumber/{number}")
	@PostMapping
	public void verifyNumber(@PathVariable("number") Long number) {

		Users user = userService.getUserId(number);
		List<Users> list = new ArrayList<>();
		if (user != null) {
			list.add(user);
		}
		if (list.isEmpty()) {
		} else {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
		}
	}

	// checks if user is present , having particular User Id
	// takes values entered for validation
	@RequestMapping("/verifyuserid/{number}")
	@PostMapping
	public void verifyUserId(@PathVariable("number") int userId) {
		Users temp = userService.getUserByUserId(userId);
		List<Users> list = new ArrayList<>();
		if (temp != null) {
			list.add(temp);
		}
		if (list.isEmpty()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
		}
	}

	// returns all DoantionDeatils objects
	@RequestMapping("/viewdonationdetails")
	@GetMapping
	public List<DonationDetails> displayDonationDetails() {
		return donationService.allDonationDetails();
	}

}
