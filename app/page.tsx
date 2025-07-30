// 'use client';
// import { useState } from 'react';

// export default function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async (e: { preventDefault: () => void; }) => {
//     e.preventDefault();

//     // Dummy login check
//     if (!email || !password) {
//       setError('Email और Password दोनों भरना जरूरी है।');
//       return;
//     }

//     // Call to backend API (POST request)
//     try {
//       const res = await fetch('/api/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         alert('Login successful!');
//         // Redirect to dashboard
//         window.location.href = '/dashboard';
//       } else {
//         setError(data.message || 'Login failed');
//       }
//     } catch (err) {
//       setError('Server error');
//     }
//   };

//   return (
//     <div style={{ maxWidth: '400px', margin: '50px auto' }}>
//       <h2>Login Page</h2>
//       <form onSubmit={handleLogin}>
//         <div>
//           <label>Email:</label><br />
//           <input
//             type="email"
//             value={email}
//             onChange={(e: { target: { value: any; }; }) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div style={{ marginTop: 10 }}>
//           <label>Password:</label><br />
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//         <button type="submit" style={{ marginTop: 15 }}>Login</button>
//       </form>
//     </div>
//   );
// }
'use client';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Email और Password दोनों भरना जरूरी है।');
      return;
    }

    try {
const res = await fetch('http://localhost:5000/api/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, password }),
});

      const data = await res.json();
      if (res.ok) {
        alert('Login successful!');
        window.location.href = '/dashboard';
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Server error');
    }
  };

  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <h2 style={{    textAlign: 'center',marginBottom: '20px',color: '#333',fontSize: '24px', }}>Login</h2>
        <form onSubmit={handleLogin}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              maxLength={25}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              minLength={6}
              maxLength={10}
            />
          </div>
          {error && <p style={styles.error}>{error}</p>}
          <button type="submit" style={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  background: {
    height: '100vh',
    background: 'linear-gradient(to right, #8e9eab, #eef2f3)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '360px',
    padding: '30px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    borderRadius: '10px',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
    fontSize: '24px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#555',
    fontSize: '14px',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4a69bd',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  error: {
    color: 'red',
    fontSize: '13px',
    marginBottom: '10px',
  },
};
