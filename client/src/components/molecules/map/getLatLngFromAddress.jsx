const getLatLngFromAddress = async (address) => {
    const apiKey = 'AIzaSyDwexGWsqU8s6-osfk1MD3eGUWhwVmosz8';
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`);
    const data = await response.json();
  
    if (data.status === 'OK') {
      const location = data.results[0].geometry.location;
      return { lat: location.lat, lng: location.lng };
    } else {
      throw new Error(data.error_message || 'Unable to get location');
    }
  };
  
  // Uso
  getLatLngFromAddress('1600 Amphitheatre Parkway, Mountain View, CA')
    .then(location => console.log(location))
    .catch(error => console.error(error));
  
    