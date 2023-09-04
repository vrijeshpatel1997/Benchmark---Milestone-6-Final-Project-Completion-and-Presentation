package com.milestone4.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // You can choose the appropriate generation strategy
    private long id;
    private String productname;
    private String proudctdescription;
    private double price;
    
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getProductname() {
		return productname;
	}
	public void setProductname(String productname) {
		this.productname = productname;
	}
	public String getProudctdescription() {
		return proudctdescription;
	}
	public void setProudctdescription(String proudctdescription) {
		this.proudctdescription = proudctdescription;
	}

}
