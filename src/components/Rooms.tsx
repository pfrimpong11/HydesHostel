import React from 'react'
import { Users, DollarSign } from 'lucide-react'
import Room1 from '../assets/images/room1.png'
import Room2 from '../assets/images/room2.png'
import Room3 from '../assets/images/room3.png'

interface Room {
  id: number
  name: string
  description: string
  price: number
  capacity: number
  image: string
}

const rooms: Room[] = [
  { id: 1, name: "Dorm Room", description: "6-bed mixed dorm", price: 20, capacity: 6, image: Room1 },
  { id: 2, name: "Private Room", description: "Double bed with ensuite", price: 50, capacity: 2, image: Room2 },
  { id: 3, name: "Family Room", description: "4-bed room with shared bathroom", price: 80, capacity: 4, image: Room3 },
]

const Rooms: React.FC = () => {
  const sectionStyle: React.CSSProperties = {
    padding: '80px 20px',
    backgroundColor: '#f8f9fa',
  }

  const headingStyle: React.CSSProperties = {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '40px',
    color: '#333',
  }

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
  }

  const cardStyle: React.CSSProperties = {
    border: '1px solid #e0e0e0',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    backgroundColor: '#ffffff',
  }

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  }

  const contentStyle: React.CSSProperties = {
    padding: '20px',
  }

  const roomNameStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    marginBottom: '10px',
    color: '#333',
  }

  const descriptionStyle: React.CSSProperties = {
    marginBottom: '15px',
    color: '#666',
  }

  const infoStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '15px',
  }

  const priceStyle: React.CSSProperties = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#007bff',
  }

  const iconTextStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    color: '#666',
  }

  return (
    <section id="rooms" style={sectionStyle}>
      <h2 style={headingStyle}>Our Rooms</h2>
      <div style={gridStyle}>
        {rooms.map((room) => (
          <div
            key={room.id}
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)'
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
          >
            <img src={room.image} alt={room.name} style={imageStyle} />
            <div style={contentStyle}>
              <h3 style={roomNameStyle}>{room.name}</h3>
              <p style={descriptionStyle}>{room.description}</p>
              <div style={infoStyle}>
                <span style={iconTextStyle}>
                  <Users size={18} style={{ marginRight: '5px' }} />
                  {room.capacity} guests
                </span>
                <span style={priceStyle}>
                  <DollarSign size={18} style={{ marginRight: '2px' }} />
                  {room.price}/night
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 768px) {
          #rooms h2 {
            font-size: 2rem;
          }
        }
        @media (max-width: 480px) {
          #rooms {
            padding: 60px 15px;
          }
          #rooms h2 {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Rooms