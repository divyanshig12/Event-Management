package com.eventzen.event_management.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ReactRoutingController {
    @GetMapping("/{path:[^\\.]*}")  // Handle all non-static paths
    public String forward() {
        return "forward:/index.html";
    }
}
