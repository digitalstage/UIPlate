import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Hello = styled.div`
  color: aqua;
`;

export default () => {
  const [text, setText] = useState('');

  useEffect(() => {
    fetch('./api', { method: 'GET' })
      .then(res => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((json: { hello: string }) => {
        setText(json.hello);
      })
      .catch(status => {
        setText('API ERROR');
        console.log('status code : ', status);
      });
  }, []);

  return <Hello>{text}</Hello>;
};
