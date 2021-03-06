// Next
import Head from 'next/head';
import { useRouter } from 'next/router';

import { useState } from 'react';

import LocationService from '../../services/location.service';

export default function AddLocationPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    country: '',
    city: '',
    imgUrl: '',
  });

  const handleChange = (event) => {
    setFormData((previeusState) => ({
      ...previeusState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await LocationService.addLocation(formData);
    if (data) {
      router.push('/locations');
    }
  };
  return (
    <>
      <Head>
        <title>Add Landmark</title>
      </Head>
      <div className="row">
        <div className="col-lg-3"></div>
        <form
          onSubmit={handleSubmit}
          className="mt-3 p-4 shadow rounded col-lg-6 col-md-12 col-sm-12"
        >
          <h4 className="text-center">Add a Landmark</h4>
          <div className="form-group mb-4">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              onChange={handleChange}
              value={formData.title}
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="title">Description</label>
            <textarea
              type="text"
              className="form-control"
              rows="6"
              name="description"
              onChange={handleChange}
              value={formData.description}
            ></textarea>
          </div>
          <div className="form-group mb-4">
            <label htmlFor="title">Country</label>
            <input
              type="text"
              className="form-control"
              name="country"
              onChange={handleChange}
              value={formData.country}
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="title">City</label>
            <input
              type="text"
              className="form-control"
              name="city"
              onChange={handleChange}
              value={formData.city}
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="title">Image URL</label>
            <input
              type="text"
              className="form-control"
              name="imgUrl"
              onChange={handleChange}
              value={formData.imgUrl}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Add Location
          </button>
        </form>
        <div className="col-lg-3"></div>
      </div>
    </>
  );
}
