import utilStyles from "../styles/utils.module.css";

const DownloadButton = () => {
  return (
    <a href="/resume.pdf" target="_blank" className={``}>
      <button className={`${utilStyles.btn} ${utilStyles.width100}`}>
        Download Resume
      </button>
    </a>
  );
};

export default DownloadButton;
