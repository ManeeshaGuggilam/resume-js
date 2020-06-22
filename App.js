/*className is for our understanding.It is similar to class in css or html.It is used for styling purpose
   In "style tag",styleng attributes like width,e.t.c; must be encloser in double braces*/
import React from 'react';
import data from './data.json';
import profileIcon from './boy.svg';
import profileIcon1 from './girl.svg';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Resume from './Resume';
// import SC from './StatesConcept';

let App = () => {

    return (

        <BrowserRouter>
            <Switch>
                <Route exact path='/sample' component={Example} />
                <Route exact path='/' component={Home} />
                <Route exact path='/Resume' component={Resume}/>
            </Switch>
        </BrowserRouter>

    )
}
let Example = () => {
    return (
        <div>
            <h2> Example component</h2>
        </div>
    )
}
let Home = () => {
    let profiles = data.profiles;
    console.log(profiles);
    return (
        <div className="row justify-content-center">
            {profiles.map((value, index) => (
                <div className="col-lg-4 col-md-6 col-sm-10 mt-1" key={index}>{/*here mt means margin top*/}
                    {/* Card */}
                    <div className="card" style={{ boxShadow: "0px 8px 8px -8px #000"}}>
                        <div className="card-body text-center">
                            {/* <img src={profileIcon} alt="Profile icon" style={{width:"30%"}}/> */}
                            {value.basics.gender === "male" ? <img src={profileIcon} alt="Profile icon" style={{ width: "30%" }} /> : <img src={profileIcon1} alt="Profile icon" style={{ width: "30%" }} />}
                            <h3> {value.basics.name} </h3>
                            <h5 className="text-secondary" style={{ fontStyle: "italic" }}> {value.basics.role}</h5> <hr />
                            <a href={"mailto:" + value.basics.email}> {value.basics.email}</a> <br/>
                            <a href={"tel:" + value.basics.mobile}> {value.basics.mobile}</a> <br />
                            <Link to={{ pathname: '/Resume', data: { id: index } }} className="btn btn-secondary text-white btn-block btn-sm"> View profile</Link>{/*here pathname: '/Resume' is an url*/ }
                        </div>Resume
                    </div>
                </div>
            ))}
        </div>
    )
}

export default App;
