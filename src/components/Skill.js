import React from 'react'
import createSkill from '../Script'

export const Skill = () => {

    let createSkills = (name, array) => {
        let newArray = [];
        for (const skill of array) {
            let newSkill = new createSkill(`${skill}.png`, skill);
            let html = <span key={skill}><img className="skill-icon" src={`./images/icons/${newSkill.image}`} alt={`${skill} logo`} /> {skill} </span>;
            newArray.push(html)
        }
        return <li className='list-item'>{`${name}: `}{newArray.map(img => img)}</li>
    }


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
                {createSkills('Frameworks', skills.frameworks)}
                {createSkills('Proficient', skills.proficient)}
                {createSkills('Exposure', skills.exposure)}
                {createSkills('Database', skills.database)}
                {/* <li>Interpersonal: Detail Oriented, Hard Working, Independent, Flexible, Team-Oriented, Communication, Empathic</li> */}
            </ul>
        </section>
    )
}

export default Skill
