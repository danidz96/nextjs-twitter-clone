const timeline = [
  {
    id: '0',
    avatar: 'https://pbs.twimg.com/profile_images/1268663650832744449/-jmtfbqQ_bigger.jpg',
    username: 'dan_abramov',
    message: `Browsers question. Do you know of any cases where merely subscribing to an event causes observably different behavior or deopts for its subtree? I know there were cases like this for document listeners, but interested in the same for regular DOM nodes below.`,
  },
  {
    id: '1',
    avatar:
      'https://pbs.twimg.com/profile_images/1083714591752941568/Q7LnIANs_reasonably_small.jpg',
    username: 'midudev',
    message: `¡Hoy tenemos clase en vivo! Para aprender #NextJS de 
      @vercel, el framework de #React Símbolo del átomo.
      
    ¿Qué es NextJS?
    ¿Por qué aprenderlo?
    Creando nuestra primera app
    Rutas basadas en el sistema de archivos
    ...y mucho más!
      
      A las 8:15PM (hora española)
      https://youtube.com/watch?v=2jxc8DMzt0I`,
    name: 'Miguel Ángel Durán',
  },
  {
    id: '2',
    username: 'd4nidev',
    name: 'Daniel de la Cruz',
    avatar:
      'https://pbs.twimg.com/profile_images/1177987137892958208/egsJgx1b_reasonably_small.jpg',
    message: `Abro paraguas Paraguas
    
    Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.`,
  },
  {
    id: '0',
    avatar: 'https://pbs.twimg.com/profile_images/1268663650832744449/-jmtfbqQ_bigger.jpg',
    username: 'dan_abramov',
    message: `Browsers question. Do you know of any cases where merely subscribing to an event causes observably different behavior or deopts for its subtree? I know there were cases like this for document listeners, but interested in the same for regular DOM nodes below.`,
  },
  {
    id: '1',
    avatar:
      'https://pbs.twimg.com/profile_images/1083714591752941568/Q7LnIANs_reasonably_small.jpg',
    username: 'midudev',
    message: `¡Hoy tenemos clase en vivo! Para aprender #NextJS de 
      @vercel, el framework de #React Símbolo del átomo.
      
    ¿Qué es NextJS?
    ¿Por qué aprenderlo?
    Creando nuestra primera app
    Rutas basadas en el sistema de archivos
    ...y mucho más!
      
      A las 8:15PM (hora española)
      https://youtube.com/watch?v=2jxc8DMzt0I`,
    name: 'Miguel Ángel Durán',
  },
  {
    id: '2',
    username: 'd4nidev',
    name: 'Daniel de la Cruz',
    avatar:
      'https://pbs.twimg.com/profile_images/1177987137892958208/egsJgx1b_reasonably_small.jpg',
    message: `Abro paraguas Paraguas
    
    Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.`,
  },
  {
    id: '0',
    avatar: 'https://pbs.twimg.com/profile_images/1268663650832744449/-jmtfbqQ_bigger.jpg',
    username: 'dan_abramov',
    message: `Browsers question. Do you know of any cases where merely subscribing to an event causes observably different behavior or deopts for its subtree? I know there were cases like this for document listeners, but interested in the same for regular DOM nodes below.`,
  },
  {
    id: '1',
    avatar:
      'https://pbs.twimg.com/profile_images/1083714591752941568/Q7LnIANs_reasonably_small.jpg',
    username: 'midudev',
    message: `¡Hoy tenemos clase en vivo! Para aprender #NextJS de 
      @vercel, el framework de #React Símbolo del átomo.
      
    ¿Qué es NextJS?
    ¿Por qué aprenderlo?
    Creando nuestra primera app
    Rutas basadas en el sistema de archivos
    ...y mucho más!
      
      A las 8:15PM (hora española)
      https://youtube.com/watch?v=2jxc8DMzt0I`,
    name: 'Miguel Ángel Durán',
  },
  {
    id: '2',
    username: 'd4nidev',
    name: 'Daniel de la Cruz',
    avatar:
      'https://pbs.twimg.com/profile_images/1177987137892958208/egsJgx1b_reasonably_small.jpg',
    message: `Abro paraguas Paraguas
    
    Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.`,
  },
  {
    id: '0',
    avatar: 'https://pbs.twimg.com/profile_images/1268663650832744449/-jmtfbqQ_bigger.jpg',
    username: 'dan_abramov',
    message: `Browsers question. Do you know of any cases where merely subscribing to an event causes observably different behavior or deopts for its subtree? I know there were cases like this for document listeners, but interested in the same for regular DOM nodes below.`,
  },
  {
    id: '1',
    avatar:
      'https://pbs.twimg.com/profile_images/1083714591752941568/Q7LnIANs_reasonably_small.jpg',
    username: 'midudev',
    message: `¡Hoy tenemos clase en vivo! Para aprender #NextJS de 
      @vercel, el framework de #React Símbolo del átomo.
      
    ¿Qué es NextJS?
    ¿Por qué aprenderlo?
    Creando nuestra primera app
    Rutas basadas en el sistema de archivos
    ...y mucho más!
      
      A las 8:15PM (hora española)
      https://youtube.com/watch?v=2jxc8DMzt0I`,
    name: 'Miguel Ángel Durán',
  },
  {
    id: '2',
    username: 'd4nidev',
    name: 'Daniel de la Cruz',
    avatar:
      'https://pbs.twimg.com/profile_images/1177987137892958208/egsJgx1b_reasonably_small.jpg',
    message: `Abro paraguas Paraguas
    
    Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.`,
  },
];

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(timeline));
};
