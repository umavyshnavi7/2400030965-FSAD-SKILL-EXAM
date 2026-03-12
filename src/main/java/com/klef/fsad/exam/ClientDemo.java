package com.klef.fsad.exam;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import java.util.Date;

public class ClientDemo {
    public static void main(String[] args) {
        Configuration cfg = new Configuration().configure().addAnnotatedClass(Vehicle.class);
        SessionFactory sf = cfg.buildSessionFactory();
        
        // I. Insert a new record
        insertVehicle(sf);
        
        // II. Update fields based on ID
        updateVehicle(sf, 1, "Updated Vehicle", "Active");
        
        sf.close();
    }
    
    public static void insertVehicle(SessionFactory sf) {
        Session session = sf.openSession();
        Transaction tx = session.beginTransaction();
        
        Vehicle vehicle = new Vehicle();
        vehicle.setName("Toyota Camry");
        vehicle.setDescription("Sedan car with excellent features");
        vehicle.setDate(new Date());
        vehicle.setStatus("Available");
        
        session.save(vehicle);
        tx.commit();
        session.close();
        
        System.out.println("Vehicle inserted successfully with ID: " + vehicle.getId());
    }
    
    public static void updateVehicle(SessionFactory sf, int id, String name, String status) {
        Session session = sf.openSession();
        Transaction tx = session.beginTransaction();
        
        Vehicle vehicle = session.get(Vehicle.class, id);
        if (vehicle != null) {
            vehicle.setName(name);
            vehicle.setStatus(status);
            session.update(vehicle);
            System.out.println("Vehicle updated successfully");
        } else {
            System.out.println("Vehicle not found with ID: " + id);
        }
        
        tx.commit();
        session.close();
    }
}
