package com.example.demo.Services;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import com.example.demo.dao.PetDao;
import com.example.demo.model.Pet;
import com.example.demo.model.Users;

@Service
public class PetServices {
	@Autowired
	PetDao petDao;

	public Pet getById(int petId)
	{
	
		return petDao.findById(petId).orElse(new Pet());
	}
	
	public List<Pet> getListOfPetsByPetId(int pid)
	{
		return petDao.findByPetidIs(pid);
	}
	
	public List<Pet> getAllPets() {
		return petDao.findAll();
	}
	public void insert(@RequestBody Pet pet) {
		petDao.save(pet);
	}
	public void remove(int id)
	{
	Pet temp= petDao.getById(id);	
	}
	
	public void updatePet(@RequestBody Pet pet)
	{
		petDao.save(pet);
	}
	
	public Pet doesPetHaveImage(int userId, byte[] img) 
	{
		Pet pet=petDao.findByUserIdAndImage(userId, img);
		return pet;
		
	}
	public List<Pet> findByUserId(int userId) 
	{
		List<Pet> petList=petDao.findByUserIdIs(userId);
		return petList;
	}

}
