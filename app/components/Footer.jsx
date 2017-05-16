const React = require("react");

/**
 * Footer compoonent
 */
export default class Footer extends React.Component {
  render() {
    return (<footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="copyright text-muted small">
                Copyright © Andela 2017. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
