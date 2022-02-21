// Next
import Head from 'next/head';
import { useRouter } from 'next/router';

// React
import { useState } from 'react';

// Services
import LocationService from '../../../services/location.service';

export async function getServerSideProps({ params }) {
  const { locationId } = params;
  const { data } = await LocationService.fetchLocationById(locationId);
  return {
    props: {
      location: data.location,
    },
  };
}

export default function EditLocationPage({ location }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: location.title,
    description: location.description,
    country: location.country,
    city: location.city,
    imgUrl: location.imgUrl,
  });

  const handleChange = (event) => {
    setFormData((previeusState) => ({
      ...previeusState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await LocationService.updateLocation(location.id, formData);
    if (data) {
      router.push('/locations');
    }
  };
  return (
    <>
      <Head>
        <title>{location.title}</title>
      </Head>
      <div className="row">
        <div className="col-lg-3"></div>
        <form
          onSubmit={handleSubmit}
          className="mt-3 p-4 shadow rounded col-lg-6 col-md-12 col-sm-12"
        >
          <h4 className="text-center">Update {location.title}</h4>
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
            Save
          </button>
        </form>
        <div className="col-lg-3"></div>
      </div>
    </>
  );
}
