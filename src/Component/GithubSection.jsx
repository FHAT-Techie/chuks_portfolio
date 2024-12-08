import { useState, useEffect } from "react";
import axios from "axios";
import { FiLink } from "react-icons/fi";
import { Button, Input, SelectInput } from "./FormElements";

export default function GithubSection() {
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const reposPerPage = 3; // Number of cards per page
  const filterOptions = [
    { value: "", label: "All" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
  ];

  // Fetch public repositories
  useEffect(() => {
    axios
      .get("https://api.github.com/users/Fhat-Techie/repos")
      .then((response) => setRepos(response.data))
      .catch((error) => console.error("Error fetching repos:", error));
  }, []);

  // Filter and search logic
  const filteredRepos = repos.filter((repo) => {
    const matchesLanguage =
      selectedLanguage === "" || repo.language === selectedLanguage;
    const matchesSearch =
      searchTerm === "" ||
      repo.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesLanguage && matchesSearch;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredRepos.length / reposPerPage);
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = filteredRepos.slice(indexOfFirstRepo, indexOfLastRepo);

  const nextPage = () =>
    setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));

  const prevPage = () =>
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));

  useEffect(() => {
    // Reset current page to 1 when filters or search terms change
    setCurrentPage(1);
  }, [searchTerm, selectedLanguage]);

  return (
    <div className="gitSection">
      <div className="gitHeader">
        <h1>Dev.</h1>
        <div className="searchAndFilter">
          <Input
            placeholder="Search Repositories"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SelectInput
            options={filterOptions}
            name="gitFilter"
            id="gitFilter"
            onChange={(e) => setSelectedLanguage(e.target.value)}
          />
        </div>
      </div>

      <div className="repoCards">
        {currentRepos.map((repo) => (
          <GithubCard
            key={repo.id}
            projectName={repo.name}
            projectLanguage={repo.language || "Not Specified"}
            repoUrl={repo.html_url}
          />
        ))}
        {currentRepos.length === 0 && <p>No repositories found.</p>}
      </div>

      <div className="pagination">
        <Button buttonLabel="Previous" onClick={prevPage} />
        <span>
          Page {currentPage} of {totalPages || 1}
        </span>
        <Button buttonLabel="Next" onClick={nextPage} />
      </div>
    </div>
  );
}

function GithubCard({ projectName, projectLanguage, repoUrl }) {
  return (
    <div className="cardsP">
      <a href={repoUrl} target="_blank" rel="noopener noreferrer">
        <div className="projectCard">
          <div className="icon">
            <h1>{projectName}</h1>
            <FiLink style={{ color: "#2F80ED" }} />
          </div>
          <div className="cardInfo">
            <p>{projectLanguage} Project</p>
          </div>
        </div>
      </a>
    </div>
  );
}
