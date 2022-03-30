const ShowGif = ({ src, title }) => {
  return (
    <>
      <img src={src} alt="gif" />
      <h5>{title}</h5>
    </>
  );
};

export default ShowGif;
