package com.eventzen.event_management.controller;

import com.eventzen.event_management.entity.Event;
import com.eventzen.event_management.entity.Venue;
import com.eventzen.event_management.repository.VenueRepository;
import com.eventzen.event_management.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/events")
public class EventController {

    @Autowired
    private EventService eventService;

    @Autowired
    private VenueRepository venueRepository;

    @PostMapping
    public ResponseEntity<?> createEvent(@RequestBody Event event) {
        if (event.getVenue() == null || event.getVenue().getId() == null) {
            return ResponseEntity.badRequest().body("{\"error\": \"Venue ID is required.\"}");
        }

        // Fetch the existing venue from DB
        Optional<Venue> existingVenue = venueRepository.findById(event.getVenue().getId());
        if (!existingVenue.isPresent()) {
            return ResponseEntity.badRequest().body("{\"error\": \"Venue with ID " + event.getVenue().getId() + " does not exist.\"}");
        }

        // Assign the fetched venue to the event
        event.setVenue(existingVenue.get());

        // Save the event
        Event savedEvent = eventService.createEvent(event);
        return ResponseEntity.ok(savedEvent);
    }

    @GetMapping
    public ResponseEntity<List<Event>> getAllEvents() {
        return ResponseEntity.ok(eventService.getAllEvents());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteEvent(@PathVariable Long id) {
        if (!eventService.eventExists(id)) {
            return ResponseEntity.badRequest().body("{\"error\": \"Event with ID " + id + " does not exist.\"}");
        }
        eventService.deleteEvent(id);
        return ResponseEntity.ok().body("{\"message\": \"Event deleted successfully.\"}");
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateEvent(@PathVariable Long id, @RequestBody Event updatedEvent) {
        Event updated = eventService.updateEvent(id, updatedEvent);
        return ResponseEntity.ok(updated);
    }
}
