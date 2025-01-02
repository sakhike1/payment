// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import PersonalPay from "./pages/PersonalPay";
import ProcessPayment from "./components/ProcessPayment";
import RecurringBilling from "./components/RecurringBilling";
import InvoiceManagement from "./pages/InvoiceManagement";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NavBar from "./components/NavBar";
import Footer from "./components/FooterSection";
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import ScrollUpButton from './components/ScrollUpButton';
import CreateInvoice from "./pages/CreateInvoice";
import Chatbot from './components/ChatBot';



const App: React.FC = () => {
    return (
        <Router>
            <div>
                <NavBar />

                <div className="min-h-screen bg-gray-50">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Login" element={<Login />} />
                        <Route path="/SignUp" element={<SignUp />} />
                        <Route path="/About" element={<About />} />
                        <Route path="/PersonalPay" element={<PersonalPay />} />
                        <Route path="/ProcessPayment" element={<ProcessPayment />} />
                        <Route path="/InvoiceManagement" element={<InvoiceManagement />} />
                        <Route path="/RecurringBilling" element={<RecurringBilling />} />
                        <Route path="/CreateInvoice" element={<CreateInvoice/>} />

                        <Route
                            path="/dashboard"
                            element={
                                <ProtectedRoute>
                                    <Dashboard />
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                </div>
               
                <ScrollUpButton />
                <section className="">
                <Chatbot />
                    <Footer />
                </section>
            </div>
        </Router>
    );
};

export default App;