package com.expensetracker.Client;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface ClientRepository extends JpaRepository<Client, Long> {
    @Query("SELECT s FROM Client s WHERE s.email = ?1")
    Optional<Client> findClientByEmail(String email);

    @Query("SELECT s FROM Client s WHERE s.email = ?1")
    Optional<Client> findClientById(Long id);
}
