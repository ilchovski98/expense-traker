package com.expensetracker.Client;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
@Component
public class ClientService {
    private final ClientRepository clientRepository;

    @Autowired
    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    List<Client> findAll() {
        return clientRepository.findAll();
    }

    Client getUser(Long id) {
        return clientRepository.findAll()
                .stream()
                .filter(client -> client.getId().equals(id))
                .findFirst()
                .orElseThrow(() -> new IllegalStateException("User not found"));
    }

    Client createUser(Client client) {
        return clientRepository.save(client);
    }
}
