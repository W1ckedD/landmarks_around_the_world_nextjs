// Next
import Head from 'next/head';
import { useRouter } from 'next/router';
// Components
import { BiTrash, BiEdit } from 'react-icons/bi';

// Services
import LocationService from '../../services/location.service';

export async function getServerSideProps({ params }) {
  const { locationId } = params;
  const { data } = await LocationService.fetchLocationById(locationId);
  return {
    props: {
      location: data.location,
    },
  };
}

export default function LocationPage({ location }) {
  const router = useRouter();
  const { locationId } = router.query;
  return (
    <>
    <Head>
      <title>{location.title}</title>
    </Head>
      <div className="row">
        <div className="col-lg-6 col-md-4 col-sm-12">
          <img
            src={location.imgUrl}
            alt={location.title}
            className="img-fluid"
          />
          <div className="d-flex mt-3">
            <BiEdit
              size={50}
              color="#7daab0"
              cursor="pointer"
              onClick={() => {
                router.push(`/locations/edit-location/${locationId}`);
              }}
            />
            <BiTrash
              size={50}
              color="#f06060"
              cursor="pointer"
              onClick={() => {
                LocationService.deleteLocation(locationId)
                  .then((res) => {
                    router.push(`/locations/`);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-8 col-sm-12">
          <h1>{location.title}</h1>
          <p className="lead">{location.description}</p>
        </div>
      </div>
    </>
  );
}
