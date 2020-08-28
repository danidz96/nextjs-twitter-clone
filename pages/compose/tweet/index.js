import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Button from '../../../components/Button';
import useUser from '../../../hooks/useUser';
import { addDevit } from '../../../firebase/firebase';

const COMPOSE_STATES = {
  USER_NOT_KNOWN: 0,
  LOADING: 1,
  SUCCCESS: 2,
  ERROR: -1,
};

const DRAG_IMAGE_STATES = {
  ERROR: -1,
  NONE: 0,
  DRAG_OVER: 1,
  UPLOADING: 2,
  COMPLETED: 3,
};

export default function ComposeTweet() {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN);

  const [drag, setDrag] = useState(DRAG_IMAGE_STATES.NONE);
  const [task, setTask] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);

  const user = useUser();
  const router = useRouter();

  const handleChange = (event) => {
    const { value } = event.target;

    setMessage(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus(COMPOSE_STATES.LOADING);
    addDevit({
      avatar: user.avatar,
      content: message,
      userId: user.uid,
      userName: user.username,
    })
      .then(() => router.push('/home'))
      .catch((err) => {
        console.log(err);
        setStatus(COMPOSE_STATES.ERROR);
      });
  };

  const handleDragEnter = () => {
    setDrag(DRAG_IMAGE_STATES.DRAG_OVER);
  };

  const handleDragLeave = () => {
    setDrag(DRAG_IMAGE_STATES.NONE);
  };

  const handleDrop = () => {
    setDrag(DRAG_IMAGE_STATES.DRAG_OVER);
  };

  const isButtonDisabled = !message.length || status === COMPOSE_STATES.LOADING;

  return (
    <>
      <Head>
        <title>Create a new Devit / Devter</title>
      </Head>
      <form onSubmit={handleSubmit}>
        <textarea
          onChange={handleChange}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          value={message}
          placeholder="What's happening?"
        />
        <div>
          <Button type="submit" disabled={isButtonDisabled}>
            Devit
          </Button>
        </div>
      </form>
      <style jsx>
        {`
          div {
            padding: 1.5rem;
          }
          textarea {
            border: ${drag === DRAG_IMAGE_STATES.DRAG_OVER
              ? '3px  dashed #09f'
              : '3px solid transparent'};
            border-radius: 1rem;
            font-size: 2.1rem;
            min-height: 15rem;
            padding: 1.5rem;
            outline: none;
            resize: none;
            width: 100%;
          }
        `}
      </style>
    </>
  );
}
