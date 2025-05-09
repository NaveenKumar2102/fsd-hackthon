import React, { useState } from "react";
import { Container, Form, Button, Card, ListGroup } from "react-bootstrap";

const Chatbot = () => {
  const [userMessage, setUserMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  // Extensive list of responses based on keywords
  const responses = {
    greeting: [
      "Hello! How can I assist you today?",
      "Hi there! Welcome to our hotel. How can I help?",
      "Good day! How may I help you today?",
      "Hello! Ready to help with your booking. How can I assist you?"
    ],
    bookingInquiry: [
      "Are you looking to make a booking? I can help with that!",
      "Please provide the date and room type you want to book.",
      "I'd love to help with booking a room. When would you like to stay?"
    ],
    roomTypes: [
      "We offer single, double, and suite rooms. Would you like to know more about any of them?",
      "Our suites are perfect for a luxurious stay. Would you like to know more about them?",
      "We have single rooms for solo travelers and double rooms for couples. Which one are you interested in?"
    ],
    priceInquiry: [
      "Our rooms start at $100 per night. Would you like to know the price for a specific room type?",
      "Prices depend on the dates and room type. Could you please provide more details?",
      "The cost varies, but I can assist you in finding the best rates based on your dates."
    ],
    services: [
      "We offer free breakfast, a swimming pool, and spa services. Would you like more details on any of them?",
      "We provide 24/7 room service and free Wi-Fi. Would you like to add any of these services to your booking?",
      "Our hotel has a fitness center, a restaurant, and a conference room. Would you like to know more?"
    ],
    checkInCheckOut: [
      "Check-in is from 2:00 PM, and check-out is by 11:00 AM.",
      "You can check in any time after 2:00 PM, and check-out is at 11:00 AM.",
      "Please note that check-out is at 11:00 AM. Let me know if you need a late check-out."
    ],
    help: [
      "How can I assist you further? You can ask about bookings, services, and more.",
      "Is there anything else you'd like to know? I'm here to help with booking and other services.",
      "Feel free to ask any questions about our hotel or services. I'm happy to assist!"
    ],
    cancellationPolicy: [
      "You can cancel your booking up to 24 hours before check-in for a full refund.",
      "Our cancellation policy allows free cancellation up to one day before arrival.",
      "If you cancel within 24 hours of your booking, a cancellation fee may apply."
    ],
    payment: [
      "We accept major credit and debit cards, net banking, and UPI.",
      "Payments can be made online or at the hotel during check-in.",
      "You can pay using Visa, MasterCard, or digital wallets like Google Pay and Paytm."
    ],
    location: [
      "We are located at 123 Main Street, Downtown, near Central Mall.",
      "Our hotel is in the heart of the city, just 15 minutes from the airport.",
      "You’ll find us near City Park, at a walkable distance from the train station."
    ],
    breakfast: [
      "Yes, we serve complimentary breakfast from 7:00 AM to 10:30 AM.",
      "Our breakfast includes continental and Indian options, served daily in the restaurant.",
      "You’ll love our buffet breakfast with fresh fruits, cereals, and hot dishes!"
    ],
    parking: [
      "We offer free parking for all our guests.",
      "Yes, we have a secure parking area available 24/7.",
      "Don't worry, your car will be safe in our private parking zone."
    ],
    wifi: [
      "Free Wi-Fi is available in all rooms and public areas.",
      "We offer unlimited high-speed internet during your stay.",
      "You’ll receive the Wi-Fi password at check-in. It’s fast and reliable!"
    ],
    discount: [
      "We currently offer a 10% discount on online bookings.",
      "Early bird and extended stay discounts are available.",
      "Check our website or contact us for ongoing promotional offers."
    ],
    pets: [
      "Yes, we are a pet-friendly hotel. Please inform us during booking.",
      "We welcome pets! A small additional cleaning fee may apply.",
      "Your furry friends are welcome here — we even offer pet beds!"
    ],
    lateCheckout: [
      "Late check-out is available upon request, subject to availability.",
      "You can request a late check-out for a small additional fee.",
      "Let us know in advance if you need extra time for check-out."
    ],
    extraBed: [
      "Extra beds are available for a small fee. Please let us know in advance.",
      "We can accommodate a third guest in the room with an extra bed.",
      "Need an extra bed for your child or companion? We’ve got you covered."
    ],
    attractions: [
      "Nearby attractions include City Museum, Riverwalk, and Adventure Park.",
      "There’s a beautiful botanical garden and a popular shopping mall nearby.",
      "Tourist hotspots are just a 10-minute ride from our hotel!"
    ],
    default: [
      "Sorry, I didn't quite catch that. Could you please rephrase your question?",
      "I'm not sure I understood. Could you clarify your request?",
      "Oops, it seems I missed that. Could you try asking again?"
    ]
  };
  
  // Function to generate a response based on the user's message
  const getChatbotResponse = (message) => {
    message = message.toLowerCase().trim();

    // Match keywords to give specific responses
    if (message.includes("hello") || message.includes("hi") || message.includes("hey"))
        return responses.greeting[Math.floor(Math.random() * responses.greeting.length)];
    
    if (message.includes("book") || message.includes("reservation") || message.includes("reserve") || message.includes("make a booking"))
        return responses.bookingInquiry[Math.floor(Math.random() * responses.bookingInquiry.length)];
    
    if (message.includes("room") || message.includes("suite") || message.includes("available rooms"))
        return responses.roomTypes[Math.floor(Math.random() * responses.roomTypes.length)];
    
    if (message.includes("price") || message.includes("cost") || message.includes("rate") || message.includes("how much"))
        return responses.priceInquiry[Math.floor(Math.random() * responses.priceInquiry.length)];
    
    if (message.includes("service") || message.includes("facility") || message.includes("amenity") || message.includes("gym") || message.includes("pool"))
        return responses.services[Math.floor(Math.random() * responses.services.length)];
    
    if (message.includes("check-in") || message.includes("checkin") || message.includes("check out") || message.includes("checkout") || message.includes("timing"))
        return responses.checkInCheckOut[Math.floor(Math.random() * responses.checkInCheckOut.length)];
    
    if (message.includes("cancel") || message.includes("cancellation") || message.includes("refund") || message.includes("change booking"))
        return responses.cancellationPolicy[Math.floor(Math.random() * responses.cancellationPolicy.length)];
    
    if (message.includes("help") || message.includes("support") || message.includes("assistance"))
        return responses.help[Math.floor(Math.random() * responses.help.length)];
    
    if (message.includes("payment") || message.includes("pay") || message.includes("card") || message.includes("credit"))
        return responses.payment[Math.floor(Math.random() * responses.payment.length)];
    
    if (message.includes("location") || message.includes("where") || message.includes("address"))
        return responses.location[Math.floor(Math.random() * responses.location.length)];
    
    if (message.includes("nearby") || message.includes("attractions") || message.includes("places to visit"))
        return responses.attractions[Math.floor(Math.random() * responses.attractions.length)];
    
    if (message.includes("pet") || message.includes("dog") || message.includes("cat"))
        return responses.pets[Math.floor(Math.random() * responses.pets.length)];
    
    if (message.includes("late") && message.includes("checkout"))
        return responses.lateCheckout[Math.floor(Math.random() * responses.lateCheckout.length)];
    
    if (message.includes("extra bed") || message.includes("additional bed") || message.includes("third person"))
        return responses.extraBed[Math.floor(Math.random() * responses.extraBed.length)];
    
    if (message.includes("wifi") || message.includes("internet"))
        return responses.wifi[Math.floor(Math.random() * responses.wifi.length)];
    
    if (message.includes("discount") || message.includes("offer") || message.includes("deal"))
        return responses.discount[Math.floor(Math.random() * responses.discount.length)];
    
    if (message.includes("breakfast") || message.includes("food") || message.includes("meal"))
        return responses.breakfast[Math.floor(Math.random() * responses.breakfast.length)];
    
    if (message.includes("parking") || message.includes("vehicle") || message.includes("car"))
        return responses.parking[Math.floor(Math.random() * responses.parking.length)];
    
    return responses.default[Math.floor(Math.random() * responses.default.length)];
    
    // Default response for unmatched messages
    return responses.default[Math.floor(Math.random() * responses.default.length)];
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (userMessage.trim()) {
      const botReply = getChatbotResponse(userMessage);
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { sender: "user", message: userMessage },
        { sender: "bot", message: botReply },
      ]);
      setUserMessage(""); // Clear the input field
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center mt-5">
      <Card style={{ width: "100%", maxWidth: "600px" }}>
        <Card.Body>
          <h2 className="text-center mb-4">Hotel Booking Chatbot</h2>

          <ListGroup variant="flush">
            {chatHistory.map((chat, index) => (
              <ListGroup.Item
                key={index}
                className={chat.sender === "user" ? "text-end" : "text-start"}
                style={{
                  backgroundColor: chat.sender === "user" ? "#e0f7fa" : "#f1f1f1",
                  marginBottom: "10px",
                }}
              >
                <strong>{chat.sender === "user" ? "You:" : "Chatbot:"}</strong>{" "}
                {chat.message}
              </ListGroup.Item>
            ))}
          </ListGroup>

          <Form onSubmit={handleSendMessage}>
            <Form.Group controlId="userMessage">
              <Form.Control
                type="text"
                placeholder="Ask me anything about booking!"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Send
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Chatbot;
