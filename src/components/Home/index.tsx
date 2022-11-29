import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import logoSvg from '../../assets/logo-repohub.svg';

import { Container, Logo, Form, Input } from './styles';

import Button from '../Button';

export function Home() {
  const [user, setUser] = useState('');
  const [textExists, setTextExists] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(data: FormEvent<HTMLFormElement>) {
    data.preventDefault();
    navigate(`/user/${user}`);
  }

  return (
    <Container>
      <Logo src={logoSvg} />

      <Form onSubmit={handleSubmit}>
        <Input
          data-testid="input"
          type="text"
          placeholder="Digite um repositório aqui..."
          onChange={(event) => setUser(event.target.value)}
        />

        <Button children="Pesquisar" disabled={!user} />
      </Form>
    </Container>
  )
}
