import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Button from '../../../components/Button';
import useUser from '../../../hooks/useUser';
import { addDevit, uploadImage } from '../../../firebase/firebase';
import Avatar from '../../../components/Avatar';

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

  useEffect(() => {
    if (task) {
      const onProgress = () => {};
      const onError = () => {};
      const onComplete = () => {
        task.snapshot.ref.getDownloadURL().then((url) => setImgUrl(url));
      };

      task.on('state_changed', onProgress, onError, onComplete);
    }
  }, [task]);

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
      img: imgUrl,
      userId: user.uid,
      userName: user.username,
    })
      .then(() => router.push('/home'))
      .catch((err) => {
        console.log(err);
        setStatus(COMPOSE_STATES.ERROR);
      });
  };

  const handleDragEnter = (event) => {
    event.preventDefault();
    setDrag(DRAG_IMAGE_STATES.DRAG_OVER);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setDrag(DRAG_IMAGE_STATES.NONE);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDrag(DRAG_IMAGE_STATES.NONE);
    const file = event.dataTransfer.files[0];
    // TODO: not upload image on drop, upload when devit
    const newTask = uploadImage(file);
    setTask(newTask);
  };

  const isButtonDisabled = !message.length || status === COMPOSE_STATES.LOADING;

  return (
    <>
      <Head>
        <title>Create a new Devit / Devter</title>
      </Head>
      <section className="form-container">
        <section className="avatar-container">
          {user && <Avatar alt={user.userName} src={user.avatar} />}
        </section>
        <form onSubmit={handleSubmit}>
          <textarea
            onChange={handleChange}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            value={message}
            placeholder="What's happening?"
          />
          {imgUrl && (
            <section className="remove-img">
              <button onClick={() => setImgUrl(null)}>X</button>
              <img alt={imgUrl} src={imgUrl} />
            </section>
          )}
          <div>
            <Button type="submit" disabled={isButtonDisabled}>
              Devit
            </Button>
          </div>
        </form>
      </section>
      <style jsx>
        {`
          div {
            padding: 1.5rem;
          }

          form {
            padding: 1rem;
            width: 100%;
          }

          .avatar-container {
            padding: 2rem 0 0 1rem;
          }

          .form-container {
            display: flex;
            align-items: flex-start;
          }

          .remove-img {
            position: relative;
          }

          button {
            background: rgba(0, 0, 0, 0.3);
            position: absolute;
            top: 1.5rem;
            right: 1.5rem;
            border: 0;
            border-radius: 50rem;
            width: 3rem;
            height: 3rem;
            color: #fff;
            font-size: 1.8rem;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
          }

          img {
            border-radius: 1rem;
            height: auto;
            width: 100%;
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
