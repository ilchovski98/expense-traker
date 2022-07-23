package com.expensetracker.client;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping(path = "api/v1/clients")
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ClientController {
    private final ClientService clientService;

    @Autowired
    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @GetMapping
    List<Client> getCustomers() {
        return clientService.findAll();
    }

    @GetMapping(path = "{clientId}")
    Client getCustomer(@PathVariable("clientId") Long id) {
        return clientService.getUser(id);
    }

    @PostMapping("/create")
    Client createUser(@RequestBody Client user) {
        return clientService.createUser(user);
    }

    @PutMapping
    void updateCustomer(@RequestBody Client user) {
        System.out.println("UPDATE REQUEST...");
        System.out.println(user);
    }

    @DeleteMapping(path = "{email}")
    long deleteCustomer(@PathVariable("email") String email) {
        return clientService.deleteClientByEmail(email);
    }
}
