import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/scheduleSection.css";

const ScheduleSection = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState("");

  useEffect(() => {
    const storedEvents = localStorage.getItem("events");
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (newEvent.trim() === "") return;

    const newEventItem = {
      id: events.length + 1,
      text: newEvent,
      date: date,
    };

    setEvents([...events, newEventItem]);
    setNewEvent("");
  };

  const handleDeleteEvent = (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      setEvents(events.filter((event) => event.id !== id));
    }
  };

  // Function to render events on the calendar
  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const eventsOnDate = events.filter(
        (event) =>
          event.date.getFullYear() === date.getFullYear() &&
          event.date.getMonth() === date.getMonth() &&
          event.date.getDate() === date.getDate()
      );

      return (
        <div>
          {eventsOnDate.map((event) => (
            <div key={event.id} className="calendar-event">
              {event.text}
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <section className="schedule-section py-5 bg-light">
      <Container>
        <Row>
          {/* Column 1: Events */}
          <Col md={4} sm={12} className="mb-4">
            <h4 className="text-center">Upcoming Events</h4>
            <ul className="list-unstyled">
              {events.map((event) => (
                <li
                  key={event.id}
                  className="d-flex justify-content-between align-items-center"
                >
                  <span>
                    {event.text} - {event.date.toLocaleDateString()}
                  </span>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDeleteEvent(event.id)}
                  >
                    Delete
                  </Button>
                </li>
              ))}
            </ul>
            <Form onSubmit={handleAddEvent}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Add a new event"
                  value={newEvent}
                  onChange={(e) => setNewEvent(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Add Event
              </Button>
            </Form>
          </Col>

          {/* Column 2: Calendar */}
          <Col md={6} sm={12} className="mb-4">
            <h4 className="text-center">Calendar</h4>
            <div className="d-flex justify-content-center">
              <Calendar
                onChange={handleDateChange}
                value={date}
                className="calendar-custom"
                tileContent={tileContent} // Add events to the calendar
              />
            </div>
          </Col>

          {/* Column 3: Notes */}
          <Col md={2} sm={12} className="mb-4">
            <h4 className="text-center">Ads</h4>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ScheduleSection;
