// // src/api/login.ts
// import express from 'express';
// import cors from 'cors';

// const app = express();
// app.use(cors());
// app.use(express.json());

// const dummyAccounts = [
//     { email: 'user@example.com', password: 'password123' },
//     { email: 'admin@example.com', password: 'admin123' },
// ];

// app.post('/api/login', (req, res) => {
//     const { email, password } = req.body;
//     const account = dummyAccounts.find(acc => acc.email === email && acc.password === password);
    
//     if (account) {
//         res.status(200).json({ message: 'Login successful' });
//     } else {
//         res.status(401).json({ message: 'Email atau password salah' });
//     }
// });

// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });