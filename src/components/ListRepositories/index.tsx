import { CaretRight } from "phosphor-react";

import { ListRepo, Repos } from "./styles";

interface ListRepoProps {
  id: string;
  name: string;
  description: string;
  html_url?: string;
}

interface ListRepositoriesProps {
  currentPosts: ListRepoProps[];
}

export function ListRepositories({ currentPosts }: ListRepositoriesProps) {
  return (
    <ListRepo>
      {currentPosts?.map((repo) => (
        <Repos key={repo.id}>
          <a href={repo?.html_url} target="_blank">
            <div>
              <strong>{repo.name}</strong>
              <p>{repo.description}</p>
            </div>
            <CaretRight size={15} color="#323238" />
          </a>
        </Repos>
      ))}
    </ListRepo>
  )
}
