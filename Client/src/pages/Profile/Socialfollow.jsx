import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Socialfollow.css";

export default function SocialFollow() {
  return (
    <div className="social-container">
      <a
        href="https://www.youtube.com"
        className="youtube social"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faYoutube} size="1x" />
      </a>
      <a
        href="https://www.facebook.com"
        className="facebook social"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faFacebook} size="1x" />
      </a>
      <a
        href="https://www.twitter.com"
        className="twitter social"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} size="1x" />
      </a>
      <a
        href="https://www.instagram.com"
        className="instagram social"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} size="1x" />
      </a>
    </div>
  );
}
