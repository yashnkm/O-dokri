import { useState } from 'react';

const Newsletter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
    alert('Thank you for joining The Dokri Club!');
    setFormData({ name: '', email: '' });
  };

  return (
    <section className="py-20 bg-soft-pink" id="signup">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <h2 className="text-4xl font-bold text-primary-orange mb-4">
          Join The Dokri Club
        </h2>
        <p className="text-lg text-muted-text mb-8">
          Dress in memories. Sign up for first access to new collections, exclusive events, 
          and stories from our community.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center">
          <input 
            className="form-input w-full md:w-auto flex-1 rounded-full border-gray-300 focus:ring-primary-orange focus:border-primary-orange h-14 px-6 text-dark-text placeholder:text-muted-text" 
            placeholder="Your Name" 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input 
            className="form-input w-full md:w-auto flex-1 rounded-full border-gray-300 focus:ring-primary-orange focus:border-primary-orange h-14 px-6 text-dark-text placeholder:text-muted-text" 
            placeholder="Your Email" 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <button 
            className="flex items-center justify-center rounded-full h-14 px-8 bg-primary-orange text-white text-base font-bold shadow-lg hover:bg-orange-600 transition-colors" 
            type="submit"
          >
            <span>Sign Up</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;