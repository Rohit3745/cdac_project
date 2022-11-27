package com.example.demo.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.dao.UsersDao;
import com.example.demo.model.Users;

@Service
public class UsersServices {
	@Autowired
	UsersDao usersDao;

	public List<Users> login(String phone, String password) {
		long contact = Long.parseLong(phone);

		return usersDao.findByContactnoAndPassword(contact, password);

	}

	public List<Users> getAllUsers() {
		return usersDao.findAll();

	}

	public void addUsers(@RequestBody Users user) {
		usersDao.save(user);
	}

	public void delete(int id) {
		usersDao.deleteById(id);
	}
	// user will be not deleted

	public void update(Users user) {

		usersDao.save(user);
	}

	public Users getUserByUserId(int userId) {
		return usersDao.findByUseridIs(userId);
	}

	public Users getUserId(Long contact)// changed
	{
		Users user = usersDao.findByContactnoIs(contact);

		return user;
	}
}
