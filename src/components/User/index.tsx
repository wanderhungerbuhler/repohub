import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import api from '../../services/api';

import { ListRepositories } from '../ListRepositories';

import { Container, Bio, BioName, Avatar, Name, Repo, RepoCount, Repositories } from './styles';
import { CaretDown, CaretLeft, GlobeHemisphereWest, LinkedinLogo, MapPin } from 'phosphor-react';
import Paginations from '../Paginations';

interface UserProps {
  name: string;
  bio: string;
  avatar_url: string;
  public_repos: string;
  location?: string;
  company?: string;
  blog?: string;
}

interface ListRepoProps {
  id: string;
  name: string;
  description: string;
  html_url?: string;
}

export function User() {
  const { name } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState<UserProps | null>(null);
  const [listRepositories, setListRepositories] = useState<ListRepoProps[] | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    async function getRepo() {
      await api.get(`/users/${name}`)
        .then(response => setUser(response.data))
        .catch(error => error?.response?.status === 404 && navigate('/'));
    }

    getRepo();
  }, [name]);

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(3);

  const lastPostIndex = currentPage * perPage;
  const firstPostIndex = lastPostIndex - perPage;
  const currentPosts = listRepositories?.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    async function fetchRepositories() {
      const response = await api.get(`/users/${name}/repos`);
      setListRepositories(response.data);
    }

    fetchRepositories();
  }, [currentPage, perPage])


  return (
    <Container>
      {user ? (
        <>
          <Bio>
            <Avatar src={user?.avatar_url} />
            <Name>{user?.name}</Name>
            <BioName>{user?.bio}</BioName>

            <ul>
              {user?.location &&
                <>
                  <li><MapPin size={20} color="#ccc" />{user?.location}</li>
                  <li>|</li>
                </>
              }

              {user?.company &&
                <>
                  <li><a href={user?.company} target="_blank"><GlobeHemisphereWest size={20} color="#ccc" /></a></li>
                  <li>|</li>
                </>
              }

              {user?.blog &&
                <>
                  <li><a href={user?.blog} target="_blank"><LinkedinLogo size={20} color="#ccc" /></a></li>
                </>
              }
            </ul>
          </Bio>

          <Repo>
            <RepoCount>
              <strong>{user?.public_repos}</strong>
              <p>Totals Repositories</p>
            </RepoCount>

            <Repositories onClick={() => setActive(true)}>
              List repositories
              <CaretDown size={24} color="#323238" />
            </Repositories>
          </Repo>

          {active && (
            <>
              <Paginations
                totalPosts={Number(listRepositories?.length)}
                postsPerPage={perPage}
                setCurrentPage={setCurrentPage as any}
              />

              <ListRepositories
                currentPosts={currentPosts as any}
              />

            </>
          )}

          <a href="/" data-testid="a">
            <CaretLeft size={20} color="#00b5b4" />
            Fazer outra pesquisa
          </a>
        </>
      ) : (
        <Bio>
          <BioName>Loading...</BioName>
        </Bio>
      )}
    </Container>
  )
}
