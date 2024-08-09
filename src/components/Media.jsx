import PropTypes from "prop-types";

import "../styles/Media.css";

export const Media = ({ data }) => {
  return (
    <div className="nasa-media-container-image">
      {data.media_type === "video" ? (
        <iframe
          className="nasa-media-video"
          width="100%"
          height="600px"
          src={data.url}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        >
          <div className="nasa-nameImage">
            <p className="nasa-nameImage-title">{data.title}</p>
          </div>
          <div className="nasa-type-mediaContainer">
            <p className="nasa-type-media">
              <span>Tipo de medio:</span>
              {` ${data.media_type}`}
            </p>
          </div>
        </iframe>
      ) : (
        <div
          className="nasa-media-image"
          style={{ backgroundImage: `url(${data.url})` }}
        >
          <div className="nasa-nameImage">
            <p className="nasa-nameImage-title">{data.title}</p>
          </div>
          <div className="nasa-type-mediaContainer">
            <p className="nasa-type-media">
              <span>Tipo de medio:</span>
              {` ${data.media_type}`}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

Media.propTypes = {
  data: PropTypes.string.isRequired,
};
