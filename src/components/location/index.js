import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54112.13369067037!2d14.918189325957346!3d44.53729712822126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x148eec301dc6a14e!2sPapaya%20Club!5e0!3m2!1sen!2shr!4v1567027046191!5m2!1sen!2shr"
        width="100%"
        height="600px"
        frameBorder="0"
        allowFullScreen=""></iframe>

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
