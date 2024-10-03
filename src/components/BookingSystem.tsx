import React, { useState } from 'react'
import { Calendar, Users, ArrowRight } from 'lucide-react'

const BookingSystem: React.FC = () => {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(1)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle booking logic here
    console.log('Booking submitted:', { checkIn, checkOut, guests })
  }

  const sectionStyle: React.CSSProperties = {
    padding: '80px 20px',
    backgroundColor: '#f8f9fa',
  }

  const containerStyle: React.CSSProperties = {
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '30px',
  }

  const headingStyle: React.CSSProperties = {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '30px',
    color: '#333',
  }

  const formStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  }

  const inputGroupStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f1f3f5',
    borderRadius: '5px',
    padding: '10px',
  }

  const inputStyle: React.CSSProperties = {
    flex: 1,
    border: 'none',
    backgroundColor: 'transparent',
    fontSize: '16px',
    padding: '5px 10px',
    outline: 'none',
  }

  const buttonStyle: React.CSSProperties = {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '15px',
    fontSize: '18px',
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s ease',
  }

  return (
    <section id="book" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Book Your Stay</h2>
        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={inputGroupStyle}>
            <Calendar size={20} color="#007bff" />
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              placeholder="Check-in Date"
              style={inputStyle}
              required
            />
          </div>
          <div style={inputGroupStyle}>
            <Calendar size={20} color="#007bff" />
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              placeholder="Check-out Date"
              style={inputStyle}
              required
            />
          </div>
          <div style={inputGroupStyle}>
            <Users size={20} color="#007bff" />
            <input
              type="number"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
              min="1"
              placeholder="Number of Guests"
              style={inputStyle}
              required
            />
          </div>
          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
          >
            Book Now
            <ArrowRight size={20} style={{ marginLeft: '10px' }} />
          </button>
        </form>
      </div>
      <style >{`
        @media (max-width: 768px) {
          #book h2 {
            font-size: 2rem;
          }
        }
        @media (max-width: 480px) {
          #book {
            padding: 60px 15px;
          }
          #book h2 {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </section>
  )
}

export default BookingSystem