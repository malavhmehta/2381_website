const Container = (props) => (
  <div className="container">
    <div className="row">
      <div className={`col-12 ${props.cls && props.cls}`}>{props.children}</div>
    </div>
  </div>
);

export default Container;
