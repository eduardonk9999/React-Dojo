import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.css'
import { useEffect, useState } from "react";


export function RepositoryList() {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/eduardonk9999/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository">
      <h1>Lista de repositório</h1>
      <ul>
        {repositories.map(repository => {
          return  <RepositoryItem key={repository.name} repository={repository} />
        })}       
      </ul>
    </section>
  )
}