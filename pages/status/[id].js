import Devit from '../../components/Devit';
import { firestore } from '../../firebase/admin';

export default function DevitPage(props) {
  return (
    <>
      <Devit {...props} />
    </>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'PRs1982WqHGeLDKk1sJB' } }],
    fallback: false,
  };
};

export async function getStaticProps(context) {
  const { params } = context;
  const { id } = params;

  return firestore
    .collection('devits')
    .doc(id)
    .get()
    .then((doc) => {
      const data = doc.data();
      const docId = doc.id;
      const { createdAt } = data;

      const props = {
        ...data,
        id: docId,
        createdAt: +createdAt.toDate(),
      };

      return { props };
    })
    .catch(() => {
      return { props: {} };
    });
}
