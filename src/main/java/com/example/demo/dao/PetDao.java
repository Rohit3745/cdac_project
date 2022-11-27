package com.example.demo.dao;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.Pet;
import com.example.demo.model.Users;
public interface PetDao extends JpaRepository<Pet, Integer> 
{
	public Pet findByUserIdAndImage (int ui,byte[] img);
	public List<Pet> findByUserIdIs(int userid);
	public List<Pet> findByPetidIs(int pid);

}
