import { useState, useEffect } from 'react';
import { Country, State } from 'country-state-city';
import { useCart } from '../context/CartContext'; 


function Checkout() {
    const { cartItems } = useCart();

  const countryData = Country.getAllCountries();
  const [country, setCountry] = useState('');
  const [stateData, setStateData] = useState([]);

  useEffect(() => {
    if (country) {
      const states = State.getAllStates().filter((s) => s.countryCode === country);
      setStateData(states);
    } else {
      setStateData([]);
    }
  }, [country]);

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [apartmentSuite, setApartmentSuite] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [phone, setPhone] = useState('');

  const handleCountryChange = (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);
    setState('');
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!');
    console.log('Email:', email);
    console.log('Selected Country:', country);
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Address:', address);
    console.log('Apartment/Suite:', apartmentSuite);
    console.log('City:', city);
    console.log('State:', state);
    console.log('Zip Code:', zipCode);
    console.log('Phone:', phone);
  };


  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl text-center uppercase mb-4">Rozy trend apparel</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="bg-white shadow-md rounded-md p-4">
            <h2 className="text-lg font-bold mb-2">Contact</h2>
            <div className="mb-2">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
          </div>
          <div className="bg-white shadow-md rounded-md p-4 mt-4">
            <h2 className="text-lg font-bold mb-2">Delivery</h2>
            <div className="mb-2">
              <label htmlFor="country" className="block text-gray-700 text-sm font-bold mb-2">
                Country/Region
              </label>
              <select
                id="country"
                value={country}
                onChange={handleCountryChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select Country</option>
                {countryData.map((country) => (
                  <option key={country.isoCode} value={country.isoCode}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-2">
              <label htmlFor="first-name" className="block text-gray-700 text-sm font-bold mb-2">
                First name
              </label>
              <input
                type="text"
                id="first-name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="last-name" className="block text-gray-700 text-sm font-bold mb-2">
                Last name
              </label>
              <input
                type="text"
                id="last-name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
                Address
              </label>
              <input
                type="text"
                id="address"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="apartment-suite" className="block text-gray-700 text-sm font-bold mb-2">
                Apartment, suite, etc. (optional)
              </label>
              <input
                type="text"
                id="apartment-suite"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={apartmentSuite}
                onChange={(e) => setApartmentSuite(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">
                City
              </label>
              <input
                type="text"
                id="city"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="state" className="block text-gray-700 text-sm font-bold mb-2">
                State
              </label>
              <select
                id="state"
                value={state}
                onChange={handleStateChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                disabled={!country}
              >
                <option value="">Select State</option>
                {stateData.map((state) => (
                  <option key={state.isoCode} value={state.isoCode}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-2">
              <label htmlFor="zip-code" className="block text-gray-700 text-sm font-bold mb-2">
                ZIP code
              </label>
              <input
                type="text"
                id="zip-code"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </div>
            
          </div>
        </div>
        
        <div className="bg-gray-100 shadow-md rounded-md p-4">
  <h2 className="text-lg font-bold mb-2">Your Cart</h2>
  {cartItems.length === 0 ? (
    <p className="text-gray-700">Your cart is empty.</p>
  ) : (
    <div>
      {cartItems.map((item) => (
        <div key={item.id} className="mb-2">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                src={item.image} 
                alt={item.title}
                className="w-[40px] h-[70px] rounded-md"
              />
            </div>
            <div className="ml-3">
              <h3 className="text-gray-900 text-sm font-bold">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                Quantity: {item.quantity}
              </p>
              <p className="text-gray-900 text-sm font-bold">
              ₹{item.price}
              </p>
            </div>
          </div>
        </div>
      ))}
      
      <div className="flex justify-end">
        <div className="text-gray-900 text-sm font-bold">Shipping</div>
        <div className="ml-4 text-gray-900 text-sm font-bold">Free</div>
      </div>
      <hr className="my-4" />
      <div className="flex justify-end">
        <div className="text-gray-900 text-sm font-bold">Total</div>
        <div className="ml-4 text-gray-900 text-sm font-bold">
        ₹{subtotal}
        </div>
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="bg-slate-700 hover:bg-slate-900 w-full text-white mt-3 py-3 px-6 rounded-lg transition duration-200"
      >
        Pay now
      </button>
    </div>
  )}
</div>

      </div>
    </div>
  );
}

export default Checkout;