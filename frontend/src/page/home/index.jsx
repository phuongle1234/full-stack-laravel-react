

import { Link } from "react-router-dom";

function HomePage({ ...props }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={props?.logo} className="App-logo" alt="logo" />
        <p> HOME PAGE </p>
        <div className="row">
          <div className="col-sm-6 text-start"><Link relative="path" to={`/document-category`}>Document Category</Link></div>
          <div className="col-sm-6 text-start"><Link relative="path" to={`/document`}>Document</Link></div>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
