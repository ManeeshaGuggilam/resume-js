// JavaScript source code
import React from 'react';
import data1 from './data.json';
import profileIcon from './boy.svg';
import profileIcon1 from './girl.svg';
let Resume = (prop) => {
    let info=data1.profiles[prop.location.data.id] //Here data1 is alias name to data.json and data is the object name sent from App.js through Link attribute
    //here "location" is used bcoz we came to this file through an 'url' provided by Link attribute in App.js but not through direct calling of component i.e;<Resume></Resume>
    return (
        <div className="row justify-content-center" style={{ backgroundColor: "aqua" }}>
            {/*Left part*/}
            <div className="col-lg-3 m-2">
                <div className="card shadow">
                    <div className="card-body p-2 text-center " style={{backgroundColor:"lightpink"}}>{/*p-2 means padding:2%*/}
                        {info.basics.gender === "male" ? <img src={profileIcon} alt="Profile icon" style={{ width: "30%" }} /> : <img src={profileIcon1} alt="Profile icon" style={{ width: "30%" }} />}
                        <h2>{info.basics.name}</h2>
                        <h5 className="text-secondary" style={{ fontStyle: "italic" }}> {info.basics.role}</h5> <hr />
                        <a href={"mailto:" + info.basics.email}> {info.basics.email}</a> <br />
                        <a href={"tel:" + info.basics.mobile}> {info.basics.mobile}</a> <br />
                        <p>{info.basics.address}</p>
                    </div>
                </div>
            </div>
            {/*right part*/}
            <div className="col-lg-8 m-2">
                <div className="card shadow">
                    <div className="card-body p-2" style={{ backgroundColor: "lightpink" }}>
                        <h3>Summary</h3><hr />
                        <ul>
                            {info.summary.map((summaryValue, summaryIndex) => (
                                <li key={summaryIndex}>{summaryValue}</li>
                                ))}
                        </ul>
                        <h3>Educational Qualifications</h3><hr />
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>Degree</th>
                                        <th>Institute</th>
                                        <th>Percentage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {info.education.map((educationValue, educationIndex) => (
                                        <tr key={educationIndex}>
                                            <td>{educationValue.degree}</td>
                                            <td>{educationValue.institute}</td>
                                            <td>{educationValue.result}</td>
                                        </tr>))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;


