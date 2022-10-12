import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faLocationDot,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const User = ({ user }) => {
  return (
    <div className="card p-2">
      <div className="card-content">
        <div className="card-header">
          <div className="media d-flex">
            <div className="align-self-center">
              <img
                src={user.avatar_url}
                alt="github profile avatar"
                width="70px"
                height="70px"
              />
            </div>
            <div className="media-body ml-4">
              <p className="username">{user.name}</p>
              <a href={user.url}>@{user.login}</a>
              <p>Joined {user.created_at}</p>
            </div>
          </div>
        </div>
        <div className="card-body">
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </p>

          <table className="table mt-1">
            <thead>
              <tr className="text-center">
                <th scope="col">Repos</th>
                <th scope="col">Followers</th>
                <th scope="col">Following</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td>{user.public_repos}</td>
                <td>{user.followers}</td>
                <td>{user.following}</td>
              </tr>
            </tbody>
          </table>
          <div className="col">
            <div className="row p-1 mb-2">
              <FontAwesomeIcon icon={faLocationDot} className="mr-3" />
              {user.location ? (
                <p className="card-text">{user.location}</p>
              ) : (
                <p className="card-text text-muted">Not Available</p>
              )}
            </div>
            <div className="row p-1 mb-2">
              <FontAwesomeIcon icon={faLink} className="mr-3" />
              {user.blog ? (
                <p className="card-text">{user.blog}</p>
              ) : (
                <p className="card-text text-muted">Not Available</p>
              )}
            </div>
            <div className="row p-1 mb-2">
              <FontAwesomeIcon icon={faTwitter} className="mr-3" />
              {user.twitter_username ? (
                <p className="card-text">{user.twitter_username}</p>
              ) : (
                <p className="card-text text-muted">Not Available</p>
              )}
            </div>
            <div className="row p-1 mb-2">
              <FontAwesomeIcon icon={faBuilding} className="mr-3" />
              {user.company ? (
                <p className="card-text">{user.company}</p>
              ) : (
                <p className="card-text text-muted">Not Available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
