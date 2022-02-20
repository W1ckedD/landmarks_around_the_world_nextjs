import LocationService from "../../services/location.service";

export async function getServerSideProps() {
  const { data } = await LocationService.fetchLocations();
  return {
    props: {
      locations: data.locations,
    },
  };
}

export default function LocationsPage({}) {
  return (
    <>
      <h1>Locations</h1>
    </>
  );
}
