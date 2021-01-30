import React, { Component } from 'react';

class Info extends Component {
    render() {
        const skills = ["Html","Css","Git","Sass","Javascript","React","Node.js","Mysqli","Mongo Db","Python","C++","Blender","Figma","Unity"];
        var skillList = skills.map(skill => <li>{skill}</li>)

        return (
            <div className={'info '+this.props.className}>
                <h1>About</h1>

            <article className="education">
                <h1>Education</h1>
                <div className="flexRow">
                <div className="portfo edu">
                    <h1>Mississppi State University</h1>
                    <p>August 2016 - May 2020</p>
                    <h3>Computer Science</h3>
                </div>
                <div className="portfo edu">
                    <h1>Mongo DB Online University</h1>
                    <p>January 2021 - Febraury 2021</p>
                    <h3>Mongo DB Developers Exam</h3>
                </div>
                </div>
            </article>
            <article className="skillList">
                <h1>Skills</h1>
                <ul>
                    {skillList}
                </ul>
            </article>
            <article className="employment">
                <h1>Employment</h1>
                <div className="flexRow">
                <div className="emp">
                    <h1>Position</h1>
                    <p>When - Then</p>
                    <ul>
                        <li>One responsibility</li>
                        <li>Two responsibility</li>
                        <li>Three responsibility</li>
                    </ul>
                </div>
                <div className="emp">
                    <h1>Position</h1>
                    <p>When - Then</p>
                    <ul>
                        <li>One responsibility</li>
                        <li>Two responsibility</li>
                        <li>Three responsibility</li>
                    </ul>
                </div>
                </div>
            </article>
            </div>
        );
    }
}

export default Info;