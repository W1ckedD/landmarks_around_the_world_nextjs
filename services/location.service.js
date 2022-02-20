import axios from 'axios';

class LocationService {
  static async fetchLocations() {
    try {
      return await axios.get('http://localhost:3000/api/locations/');
    } catch (err) {
      console.log(err);
    }
  }

  static async addLocation({ title, description, country, city, imgUrl }) {
    try {
      return await axios.post('/api/locations/', {
        title,
        description,
        country,
        city,
        imgUrl,
      });
    } catch (err) {
      console.log(err);
    }
  }
}

export default LocationService;
