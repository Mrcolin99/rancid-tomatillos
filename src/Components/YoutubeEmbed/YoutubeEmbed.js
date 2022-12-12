import PropTypes from "prop-types";
import './YoutubeEmbed.css'

const YoutubeEmbed = ({ embedId }) => (
  <div className="videoResponsive">
    <iframe
      width="400vw"
      height="250vh"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeEmbed;

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};
