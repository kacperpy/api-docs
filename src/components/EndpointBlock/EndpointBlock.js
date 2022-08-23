const EndpointBlock = (props) => {
  return (
    <div>
      <h2>{props.endpointName}</h2>
      <div>
        <h3>{props.endpointUrl}</h3>
        <div>{props.endpointDescription}</div>
      </div>
    </div>
  );
};

export default EndpointBlock;
