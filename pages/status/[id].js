import Devit from '../../components/Devit';

export default function DevitPage(props) {
  return (
    <>
      <Devit {...props} />
    </>
  );
}

DevitPage.getInitialProps = (context) => {
  const { query } = context;
  const { id } = query;

  return fetch(`http://localhost:3000/api/devits/${id}`).then((apiResponse) => {
    if (apiResponse.ok) return apiResponse.json();
    if (apiResponse) {
      apiResponse.writeHead(301, { Location: '/home' }).end();
    }
  });
};
