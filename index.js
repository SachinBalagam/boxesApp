const Box = (props) => {
  const { title, styling } = props;
  return (
    <div className={`box ${styling}`}>
      <h1 className="title">{title}</h1>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="cards-container">
      <Box title="Small" styling="small" />
      <Box title="Medium" styling="medium" />
      <Box title="Large" styling="large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
