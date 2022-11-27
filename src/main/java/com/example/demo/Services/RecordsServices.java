package com.example.demo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import com.example.demo.dao.RecordsDao;
import com.example.demo.model.Records;

@Service
public class RecordsServices {
	@Autowired
	RecordsDao recordDao;

	public void addRecord(@RequestBody Records obj) {

		recordDao.save(obj);
	}
}
