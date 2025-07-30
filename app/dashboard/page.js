
'use client';
import { useState } from 'react';
import AddAgent from './AddAgent';
import UploadLeads from './UploadLeads';

export default function Dashboard() {
  const [selected, setSelected] = useState('add');

  const sidebarStyle = {
    width: '220px',
    background: '#1e293b',
    color: '#fff',
    padding: '30px 20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  };

  const buttonStyle = (isActive) => ({
    padding: '12px 16px',
    border: 'none',
    borderRadius: '8px',
    background: isActive ? '#3b82f6' : '#334155',
    color: isActive ? '#fff' : '#e2e8f0',
    cursor: 'pointer',
    textAlign: 'left',
    fontSize: '16px',
    transition: 'background 0.3s',
  });

  const contentWrapperStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    background: '#f8fafc',
  };

  const topBarStyle = {
    background: '#ffffff',
    padding: '16px 24px',
    borderBottom: '1px solid #e2e8f0',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#1e293b',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const logoutButtonStyle = {
    padding: '8px 14px',
    fontSize: '14px',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    background: '#f1f5f9',
    cursor: 'pointer',
    transition: 'background 0.2s',
  };

  const contentStyle = {
    flex: 1,
    padding: '30px',
    overflowY: 'auto',
  };

  const handleLogout = () => {
    alert('Logged out!');
    window.location.href = '/'; // example redirect
  };

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* Sidebar */}
      <div style={sidebarStyle}>
        <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Admin Panel</h2>
        <button
          onClick={() => setSelected('add')}
          style={buttonStyle(selected === 'add')}
        >
          ➕ Add Agent
        </button>
        <button
          onClick={() => setSelected('upload')}
          style={buttonStyle(selected === 'upload')}
        >
          📤 Upload Leads
        </button>
      </div>

      {/* Right Side */}
      <div style={contentWrapperStyle}>
        {/* Top Bar */}
        <div style={topBarStyle}>
          <div>Welcome, Admin 👋</div>
          <button onClick={handleLogout} style={logoutButtonStyle}>
            Logout
          </button>
        </div>

        {/* Main Content */}
        <div style={contentStyle}>
          {selected === 'add' && <AddAgent />}
          {selected === 'upload' && <UploadLeads />}
        </div>
      </div>
    </div>
  );
}


