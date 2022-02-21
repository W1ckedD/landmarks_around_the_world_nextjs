import axios from 'axios';

const API_URL = process.env.API_URL;

class LocationService {
  static async fetchLocations() {
    try {
      return await axios.get(`${API_URL}/api/locations/`);
    } catch (err) {
      console.log(err);
    }
  }

  static async fetchLocationById(id) {
    try {
      return await axios.get(`${API_URL}/api/locations/${id}`);
    } catch (err) {
      console.log(err);
    }
  }

  static async addLocation({ title, description, country, city, imgUrl }) {
    try {
      return await axios.post(`${API_URL}/api/locations/`, {
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

  static async updateLocation(
    id,
    { title, description, country, city, imgUrl }
  ) {
    try {
      return await axios.put(`${API_URL}/api/locations/${id}/`, {
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

  static async deleteLocation(id) {
    try {
      return await axios.delete(`${API_URL}/api/locations/${id}/`);
    } catch (err) {
      console.log(err);
    }
  }
}

export default LocationService;
