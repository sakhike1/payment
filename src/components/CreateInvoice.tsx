import React, { useState, useEffect } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Invoice = () => {
  const [invoiceData, setInvoiceData] = useState({
    invoiceNumber: '',
    date: new Date().toISOString().split('T')[0],
    dueDate: '',
    companyFrom: {
      name: '',
      address: '',
      email: '',
      phone: ''
    },
    companyTo: {
      name: '',
      address: '',
      email: '',
      phone: ''
    },
    items: [{ description: '', quantity: 1, price: 0 }]
  });

  const [currency, setCurrency] = useState('USD');
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const createParticle = () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
      opacity: Math.random() * 0.5 + 0.3
    });

    setParticles(Array.from({ length: 50 }, createParticle));

    const animateParticles = () => {
      setParticles(prevParticles =>
        prevParticles.map(particle => ({
          ...particle,
          x: (particle.x + particle.speedX + window.innerWidth) % window.innerWidth,
          y: (particle.y + particle.speedY + window.innerHeight) % window.innerHeight
        }))
      );
    };

    const intervalId = setInterval(animateParticles, 50);
    return () => clearInterval(intervalId);
  }, []);

  const getCurrencySymbol = (currency) => {
    switch (currency) {
      case 'USD':
        return '$';
      case 'EUR':
        return '€';
      case 'GBP':
        return '£';
      case 'ZAR':
        return 'R';
      default:
        return '$';
    }
  };

  const calculateSubtotal = () => {
    return invoiceData.items.reduce((sum, item) => sum + (item.quantity * item.price), 0);
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.1;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...invoiceData.items];
    newItems[index] = { ...newItems[index], [field]: value };
    setInvoiceData({ ...invoiceData, items: newItems });
  };

  const addItem = () => {
    setInvoiceData({
      ...invoiceData,
      items: [...invoiceData.items, { description: '', quantity: 1, price: 0 }]
    });
  };

  const removeItem = (index) => {
    const newItems = invoiceData.items.filter((_, i) => i !== index);
    setInvoiceData({ ...invoiceData, items: newItems });
  };

  const handleCompanyChange = (company, field, value) => {
    setInvoiceData({
      ...invoiceData,
      [company]: { ...invoiceData[company], [field]: value }
    });
  };

  const validateFields = () => {
    const { companyFrom, companyTo, items } = invoiceData;
    if (!companyFrom.name || !companyTo.name || !invoiceData.invoiceNumber || !invoiceData.dueDate) {
      alert("Please fill in all required fields.");
      return false;
    }

    for (const item of items) {
      if (!item.description || item.quantity <= 0 || item.price < 0) {
        alert("Please ensure all item fields are valid.");
        return false;
      }
    }

    return true;
  };

  const downloadInvoice = async () => {
    if (!validateFields()) return;

    const invoiceElement = document.querySelector("#invoice");

    // Add class to hide buttons for PDF
    invoiceElement.classList.add('print-mode');

    const canvas = await html2canvas(invoiceElement, {
      scale: 2,
      backgroundColor: 'white',
      logging: false
    });

    // Remove class after the PDF is generated
    invoiceElement.classList.remove('print-mode');

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save(`invoice-${invoiceData.invoiceNumber || 'draft'}.pdf`);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-black to-purple-900 p-10 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-blue-400 particle-animation"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.size}px rgba(59, 130, 246, 0.5)`,
              transition: 'all 0.05s linear'
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative">
        <div id="invoice" className="w-full max-w-4xl mx-auto p-8 bg-white/10 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 mt-20">
          {/* Header Section */}
          <div className="flex justify-between items-start mb-8 flex-wrap gap-4">
            <div className="hidden-print">
              <input 
                type="text"
                placeholder="Invoice Number"
                value={invoiceData.invoiceNumber}
                onChange={(e) => setInvoiceData({ ...invoiceData, invoiceNumber: e.target.value })}
                className="w-48 px-4 py-2 bg-white/5 rounded-full text-white placeholder-white/50 focus:outline-none"
              />
            </div>
            <div className="hidden-print">
              <input 
                type="date"
                value={invoiceData.date}
                onChange={(e) => setInvoiceData({ ...invoiceData, date: e.target.value })}
                className="px-4 py-2 bg-gradient-to-tr from-purple-800 via-rose-100 to-amber-200 text-sx rounded-full text-gray-700 focus:outline-none"
              />
            </div>
            <div className="hidden-print">
              <input 
                type="date"
                value={invoiceData.dueDate}
                onChange={(e) => setInvoiceData({ ...invoiceData, dueDate: e.target.value })}
                className="px-4 py-2 bg-gradient-to-tr from-purple-800 via-rose-100 to-amber-200 rounded-full text-gray-700 focus:outline-none"
              />
            </div>
            <div className="hidden-print">
              <div className="relative inline-block">
                <select 
                  value={currency} 
                  onChange={(e) => setCurrency(e.target.value)} 
                  className="appearance-none px-6 py-2 bg-gray-800 border border-white/50 rounded-full text-white focus:outline-none transition-colors duration-300 ease-in-out hover:bg-bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-purple-50 to-zinc-300"
                >
                  
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="ZAR">ZAR</option> 
                 
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2  text-white">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5z"/></svg>
                </div>
              </div>
            </div>
          </div>
          <div className="print-mode">
            <div>Invoice Number: {invoiceData.invoiceNumber}</div>
            <div>Date: {invoiceData.date}</div>
            <div>Due Date: {invoiceData.dueDate}</div>
            <div>Currency: {currency}</div>
          </div>

          {/* Company Information */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            {['From', 'To'].map((section) => (
              <div key={section} className="space-y-4">
                <h3 className="text-xl font-semibold text-white">{section}:</h3>
                {['name', 'address', 'email', 'phone'].map((field) => (
                  <div key={field}>
                    <div className="hidden-print">
                      <input 
                        placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                        value={invoiceData[section === 'From' ? 'companyFrom' : 'companyTo'][field]}
                        onChange={(e) => handleCompanyChange(
                          section === 'From' ? 'companyFrom' : 'companyTo',
                          field,
                          e.target.value
                        )}
                        className="w-full px-4 py-2 bg-white/5 rounded-full text-white placeholder-white/50 focus:outline-none"
                      />
                    </div>
                    <div className="print-mode">{field.charAt(0).toUpperCase() + field.slice(1)}: {invoiceData[section === 'From' ? 'companyFrom' : 'companyTo'][field]}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Items Table */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Items</h3>
            <div className="grid grid-cols-12 gap-4 p-4 bg-white/5 rounded-lg mb-4 text-white font-semibold">
              <div className="col-span-6">Description</div>
              <div className="col-span-2">Quantity</div>
              <div className="col-span-2">Price</div>
              <div className="col-span-2">Total</div>
            </div>
            {invoiceData.items.map((item, index) => (
              <div key={index} className="grid grid-cols-12 gap-4 items-center border-b border-white/10 py-4">
                <div className="col-span-6">
                  <div className="hidden-print">
                    <input 
                      placeholder="Item description"
                      value={item.description}
                      onChange={(e) => handleItemChange(index, 'description', e.target.value)}
                      className="w-full px-4 py-2 bg-white/5 rounded-full text-white placeholder-white/50 focus:outline-none"
                    />
                  </div>
                  <div className="print-mode">Description: {item.description}</div>
                </div>
                <div className="col-span-2">
                  <div className="hidden-print">
                    <input 
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => handleItemChange(index, 'quantity', parseInt(e.target.value))}
                      className="w-full px-4 py-2 bg-white/5 rounded-full text-white focus:outline-none"
                    />
                  </div>
                  <div className="print-mode">Quantity: {item.quantity}</div>
                </div>
                <div className="col-span-2">
                  <div className="hidden-print">
                    <input 
                      type="number"
                      min="0"
                      step="0.01"
                      value={item.price}
                      onChange={(e) => handleItemChange(index, 'price', parseFloat(e.target.value))}
                      className="w-full px-4 py-2 bg-white/5 rounded-full text-white focus:outline-none"
                    />
                  </div>
                  <div className="print-mode">Price: {getCurrencySymbol(currency)}{(item.price).toFixed(2)}</div>
                </div>
                <div className="col-span-2 text-right text-white">
                  <div>Total: {getCurrencySymbol(currency)}{(item.quantity * item.price).toFixed(2)}</div>
                </div>
                {/* Hide the delete button from the PDF */}
                <div className="col-span-1 hidden-print">
                  <button 
                    onClick={() => removeItem(index)}
                    className="text-green-700 transition-colors -mr-1 rounded-full focus:none "
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
            {/* Hide add button from the PDF */}
            <div className="hidden-print">
              <button 
                onClick={addItem}
                className="w-full mt-4 py-2 bg-white/10 backdrop-blur-xl  text-white rounded-full transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="h-5 w-5" />
                Add Item
              </button>
            </div>
          </div>

          {/* Totals */}
          <div className="bg-white/10 backdrop-blur-xl  rounded-lg p-6  border border-white/20">
            <div className="flex justify-between text-white mb-2">
              <span>Subtotal:</span>
              <span>{getCurrencySymbol(currency)}{(calculateSubtotal()).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-white mb-2">
              <span>Tax (10%):</span>
              <span>{getCurrencySymbol(currency)}{(calculateTax()).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-white text-xl font-bold pt-4 border-t border-white/20">
              <span>Total:</span>
              <span>{getCurrencySymbol(currency)}{(calculateTotal()).toFixed(2)}</span>
            </div>
          </div>

          {/* Download Button */}
          <button
            onClick={downloadInvoice}
            className="w-full mt-8 py-2 bg-white/10 backdrop-blur-xl hover:from-blue-200 hover:to-purple-500 text-white rounded-full transition-all duration-300 transform hover:scale-105 font-semibold text-lg shadow-lg hidden-print"
          >
            Download Invoice
          </button>
        </div>
      </div>
    </div>
  );
};

export default Invoice;