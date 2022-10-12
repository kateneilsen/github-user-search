import React from "react";
import { useState } from "react";
import User from "./User";

const Search = () => {
  const [user, setUser] = useState();
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  async function submitHandler(event) {
    event.preventDefault();
    const abortController = new AbortController();
    try {
      const data = await fetch(`https://api.github.com/users/${username}`);
      const userFromApi = await data.json();
      console.log(userFromApi);
      setUser(userFromApi);
    } catch (eror) {
      setError(error);
    }
    return () => abortController.abort();
  }

  const handleSearch = ({ target }) => {
    setUsername(target.value);
  };

  return (
    <div className="m-3">
      <form onSubmit={submitHandler}>
        <div className="p-2 bg-white rounded shadow mb-4">
          <div className="input-group">
            <input
              type="text"
              name="search"
              placeholder="Search by GitHub username..."
              aria-describedby="button-addon1"
              className="form-control border-0 bg-white"
              value={username}
              required={true}
              onChange={handleSearch}
            />
            <div className="input-group-append">
              <button
                id="button-addon1"
                type="submit"
                className="btn btn-sm btn-primary"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </form>
      {user ? <User user={user} /> : "Username not found"}
    </div>
  );
};

export default Search;
