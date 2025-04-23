package com.eventzen.event_management.service;

import com.eventzen.event_management.entity.Event;
import com.eventzen.event_management.entity.Venue;
import com.eventzen.event_management.repository.EventRepository;
import com.eventzen.event_management.repository.VenueRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService {

    private final EventRepository eventRepository;
    private final VenueRepository venueRepository;

    public EventService(EventRepository eventRepository, VenueRepository venueRepository) {
        this.eventRepository = eventRepository;
        this.venueRepository = venueRepository;
    }

    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    public Event createEvent(Event event) {
        Venue venue = venueRepository.findById(event.getVenue().getId())
                .orElseThrow(() -> new RuntimeException("Venue with ID " + event.getVenue().getId() + " does not exist."));

        event.setVenue(venue);
        return eventRepository.save(event);
    }

    public void deleteEvent(Long id) {
        if (!eventRepository.existsById(id)) {
            throw new RuntimeException("Event with ID " + id + " does not exist.");
        }
        eventRepository.deleteById(id);
    }

    public boolean eventExists(Long id) {
        return eventRepository.existsById(id);
    }

    public Event updateEvent(Long id, Event updatedEvent) {
        Event existingEvent = eventRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Event with ID " + id + " does not exist."));

        Venue venue = venueRepository.findById(updatedEvent.getVenue().getId())
                .orElseThrow(() -> new RuntimeException("Venue with ID " + updatedEvent.getVenue().getId() + " does not exist."));

        existingEvent.setName(updatedEvent.getName());
        existingEvent.setDate(updatedEvent.getDate());
        existingEvent.setVenue(venue);

        return eventRepository.save(existingEvent);
    }
}
