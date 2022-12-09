import React, { Fragment } from 'react';
import './App.css';
import Side from './Sidebar.js';
import Navigation from './Navigation.js';

function App() {
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  const resumeOnlyMode = params.get('resumeonly');

  return (
    <div className="container h-100">
      <div className="row">
        {!resumeOnlyMode &&
          <React.Fragment>
            <div className="col-lg-3 px-lg-0 py-lg-3 col-md-3 px-md-0 py-md-3 col-sm-3 px-sm-0 py-sm-3 col-12">
              <Side />
            </div>
            <div className="col-lg-9 py-lg-3 col-md-9 py-md-3 col-sm-9 py-sm-3 col-12">
              <Navigation />
            </div>
          </React.Fragment>
        }
        {resumeOnlyMode &&
          <div className="col-lg-12 py-lg-3 col-md-12 py-md-3 col-sm-12 py-sm-3 col-12">
            <Navigation />
          </div>
        }
      </div>
      {!resumeOnlyMode && <hr />}
      {!resumeOnlyMode &&
        <div className="row text-center">
          <p className="mx-auto" style={{ color: "var(--red-cabin)", fontSize: "10px" }}><i><i className="far fa-copyright"></i> {(new Date()).getFullYear()} Mahsan Nourani. All Rights Reserved. This website was implemented using React.js and Bootstrap4 frameworks. Updated {month[(new Date()).getMonth()]} {(new Date()).getFullYear()}.</i></p>
        </div>
      }
    </div>

  );
}

export default App;
