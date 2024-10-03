import React from 'react'
import { Clock, CalendarX, Users, Moon } from 'lucide-react'

interface Policy {
  title: string
  description: string
  icon: React.ReactNode
}

const Policies: React.FC = () => {
  const policies: Policy[] = [
    {
      title: "Check-in",
      description: "Check-in time is 2:00 PM. Early check-in may be available upon request.",
      icon: <Clock size={24} />
    },
    {
      title: "Check-out",
      description: "Check-out time is 11:00 AM. Late check-out may be arranged for an additional fee.",
      icon: <Clock size={24} />
    },
    {
      title: "Cancellation",
      description: "Free cancellation up to 48 hours before check-in. After that, the first night is non-refundable.",
      icon: <CalendarX size={24} />
    },
    {
      title: "Age Restriction",
      description: "Guests must be 18 years or older to stay in dorm rooms. No age restriction for private rooms.",
      icon: <Users size={24} />
    },
    {
      title: "Quiet Hours",
      description: "Quiet hours are from 11:00 PM to 7:00 AM in all common areas and rooms.",
      icon: <Moon size={24} />
    },
  ]

  const sectionStyle: React.CSSProperties = {
    padding: '80px 20px',
    backgroundColor: '#f8f9fa',
  }

  const containerStyle: React.CSSProperties = {
    maxWidth: '800px',
    margin: '0 auto',
  }

  const headingStyle: React.CSSProperties = {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '40px',
    color: '#333',
  }

  const listStyle: React.CSSProperties = {
    listStyle: 'none',
    padding: 0,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
  }

  const listItemStyle: React.CSSProperties = {
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  }

  const policyTitleStyle: React.CSSProperties = {
    fontSize: '1.2rem',
    marginBottom: '10px',
    color: '#007bff',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  }

  const policyDescriptionStyle: React.CSSProperties = {
    margin: 0,
    color: '#666',
    lineHeight: 1.6,
  }

  return (
    <section id="policies" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Hostel Policies</h2>
        <ul style={listStyle}>
          {policies.map((policy, index) => (
            <li
              key={index}
              style={listItemStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            >
              <h3 style={policyTitleStyle}>
                {policy.icon}
                {policy.title}
              </h3>
              <p style={policyDescriptionStyle}>{policy.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <style >{`
        @media (max-width: 768px) {
          #policies h2 {
            font-size: 2rem;
          }
        }
        @media (max-width: 480px) {
          #policies {
            padding: 60px 15px;
          }
          #policies h2 {
            font-size: 1.75rem;
          }
          #policies ul {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}

export default Policies