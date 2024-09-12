import PropTypes from "prop-types";

import "../styles/Media.css";
import { useTranslation } from "react-i18next";

export const Media = ({ data }) => {
  const [t] = useTranslation("global");

  return (
    <div className="nasa-media-container-image">
      <section className="nasa-media-information">
        <h2>{data.title}</h2>
        <p>{data.explanation}</p>
        <p className="nasa-media-information-date">
          <span>{t("media.date")}</span>
          {data.date}
        </p>
      </section>

      <section className="nasa-media-visual">
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
            <div className="nasa-nameImage nasa-type-background">
              <p className="nasa-nameImage-title">{data.title}</p>
            </div>
            <div className="nasa-type-mediaContainer nasa-type-background">
              <p className="nasa-type-media">
                <span>Tipo de medio:</span>
                {` ${data.media_type}`}
              </p>
            </div>
            <div className="nasa-type-service nasa-type-background">
              <p>
                {t("media.serviceVersion")} {data.service_version}
              </p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

Media.propTypes = {
  data: PropTypes.string.isRequired,
};
