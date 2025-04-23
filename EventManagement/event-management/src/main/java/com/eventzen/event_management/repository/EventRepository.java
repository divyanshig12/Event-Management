package com.eventzen.event_management.repository;

import com.eventzen.event_management.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event, Long> {
}
