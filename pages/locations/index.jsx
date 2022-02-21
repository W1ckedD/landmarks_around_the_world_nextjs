// Next
import Head from 'next/head';
import { useRouter } from 'next/router';

// Components
import Card from '../../components/Card';
import { BiPlus } from 'react-icons/bi';

// Services
import LocationService from '../../services/location.service';

export async function getServerSideProps() {
  const { data } = await LocationService.fetchLocations();
  return {
    props: {
      locations: data.data,
    },
  };
}

export default function LocationsPage({ locations }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Landmarks</title>
      </Head>
      <div className="row">
        {locations.map((loc) => (
          <div
            className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3"
            key={loc.id}
          >
            <Card {...loc} />
          </div>
        ))}
      </div>
      <BiPlus
        size={60}
        onClick={() => router.push('/locations/add-location')}
        className="btn btn-primary text-white rounded-circle position-fixed fixed-bottom m-5"
      />
    </>
  );
}
