import LocationService from '../../services/location.service';

// export async function getServerSideProps() {
//   try {
//     const { data } = await LocationService.fetchLocations();
//     console.log(data);

//     return {
//       props: {
//         locations: data.locations,
//       },
//     };
//   } catch (err) {
//     console.log(err);
//     return {
//       props: {
//         error: true,
//         message: 'Something went wrong!',
//       },
//     };
//   }
// }

export default function LocationsPage({  }) {
  return (
    <>
      <h1>Locations</h1>
    </>
  );
}
