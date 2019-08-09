import React, { Component } from 'react'
import createSkill from '../Script'

export class Skill extends Component {

    createSkills = (name, array) => {
        let newArray = [];
        for (const skill of array) {
            let newSkill = new createSkill(`${skill}.png`, skill);
            let html = <span><img className="skill-icon" src={`./images/icons/${newSkill.image}`} alt={`${skill} logo`} /> {skill} </span>;
            newArray.push(html)
        }
        return <li className='list-item'>{`${name}: `}{newArray.map(img => img)}</li>
    }

    render() {
        const skills = {
            frameworks: ['Electron', 'React', 'ExpressJS', 'MongooseJS', 'SASS', 'Bootstrap', 'Materialize', 'Semantic'],
            proficient: ['Javascript', 'NodeJS', 'Ruby', 'HTML5', 'CSS3'],
            exposure: ['Python', 'Java', 'C++', 'Autohotkey', 'VBA'],
            database: ['Postgresql', 'Sqlite', 'MongoDB']
        }
        return (
            <section id='skill'>
                <h4>Skills</h4>
                <ul className="skill-list">
                    {this.createSkills('Frameworks', skills.frameworks)}
                    {this.createSkills('Proficient', skills.proficient)}
                    {this.createSkills('Exposure', skills.exposure)}
                    {this.createSkills('Database', skills.database)}
                    {/* <li>Interpersonal: Detail Oriented, Hard Working, Independent, Flexible, Team-Oriented, Communication, Empathic</li> */}
                </ul>
            </section>
        )
    }
}

export default Skill
