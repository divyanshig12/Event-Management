package com.eventzen.event_management.service;

import com.eventzen.event_management.entity.Venue;
import com.eventzen.event_management.repository.VenueRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VenueService {

    private final VenueRepository venueRepository;

    public VenueService(VenueRepository venueRepository) {
        this.venueRepository = venueRepository;
    }

    // ✅ Fetch all venues
    public List<Venue> getAllVenues() {
        return venueRepository.findAll();
    }

    // ✅ Fetch a venue by ID
    public Venue getVenueById(Long id) {
        return venueRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Venue with ID " + id + " not found."));
    }

    // ✅ Create a new venue with validation
    public Venue createVenue(Venue venue) {
        if (venue.getName() == null || venue.getName().trim().isEmpty()) {
            throw new IllegalArgumentException("Venue name cannot be empty");
        }
        if (venue.getLocation() == null || venue.getLocation().trim().isEmpty()) {
            throw new IllegalArgumentException("Venue location cannot be empty");
        }

        return venueRepository.save(venue);
    }

    // ✅ Update an existing venue
    public Venue updateVenue(Long id, Venue venueDetails) {
        Venue venue = venueRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Venue with ID " + id + " not found."));

        venue.setName(venueDetails.getName());
        venue.setLocation(venueDetails.getLocation());

        return venueRepository.save(venue);
    }

    // ✅ Delete a venue with error handling
    public void deleteVenue(Long id) {
        Venue venue = venueRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Venue with ID " + id + " not found."));

        venueRepository.delete(venue);
    }
}
