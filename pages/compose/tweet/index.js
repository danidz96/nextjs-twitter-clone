import { useState } from 'react';
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

export default function ComposeTweet() {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN);
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

  const isButtonDisabled = !message.length || status === COMPOSE_STATES.LOADING;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea onChange={handleChange} value={message} placeholder="What's happening?" />
        <Button type="submit" disabled={isButtonDisabled}>
          Devit
        </Button>
      </form>
      <style jsx>
        {`
          textarea {
            border: 0;
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
