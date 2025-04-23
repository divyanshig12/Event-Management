package com.eventzen.event_management.controller;

import com.eventzen.event_management.entity.Venue;
import com.eventzen.event_management.repository.VenueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/venues")
public class VenueController {

    @Autowired
    private VenueRepository venueRepository;

    // Get all venues
    @GetMapping
    public List<Venue> getAllVenues() {
        return venueRepository.findAll();
    }

    // Get a single venue by ID
    @GetMapping("/{id}")
    public Venue getVenueById(@PathVariable Long id) {
        return venueRepository.findById(id).orElseThrow(() -> new RuntimeException("Venue not found"));
    }

    // Add a new venue (POST method)
    @PostMapping
    public Venue createVenue(@RequestBody Venue venue) {
        return venueRepository.save(venue);
    }

    // Update an existing venue (PUT method)
    @PutMapping("/{id}")
    public Venue updateVenue(@PathVariable Long id, @RequestBody Venue updatedVenue) {
        Optional<Venue> existingVenue = venueRepository.findById(id);

        if (existingVenue.isPresent()) {
            Venue venue = existingVenue.get();
            venue.setName(updatedVenue.getName());
            venue.setLocation(updatedVenue.getLocation());
            return venueRepository.save(venue);
        } else {
            throw new RuntimeException("Venue not found");
        }
    }

    // Delete a venue by ID (DELETE method)
    @DeleteMapping("/{id}")
    public String deleteVenue(@PathVariable Long id) {
        if (venueRepository.existsById(id)) {
            venueRepository.deleteById(id);
            return "Venue deleted successfully";
        } else {
            throw new RuntimeException("Venue not found");
        }
    }
}
