import Link from 'next/link';

const Timeline = () => (
  <>
    <h1>this is the timeline</h1>
    <Link href="/">
      <a>Go home</a>
    </Link>

    <style jsx>
      {`
        h1 {
          font-size: 36px;
        }
      `}
    </style>
  </>
);

export default Timeline;
