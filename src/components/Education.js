import React, { Component } from 'react'

export class Education extends Component {

    render() {
        const education = ['queensborough', 'queenscollege', 'flatiron']
        return (
            <section id="education">
                <h4>Education</h4>
                <ul className='education-list'>
                    <li className='list-item'>
                        <a href="http://www.qcc.cuny.edu/" target='_blank'>
                            <img className="education-img" src="/images/education/queensborough.png" />
                        </a>
                    </li>
                    <li className='list-item' >
                        <a href="https://www.qc.cuny.edu/Pages/home.aspx" target='_blank'>
                            <img className="education-img" src="/images/education/queenscollege.png" />
                        </a>
                    </li>
                    <li className='list-item'>
                        <a href="https://flatironschool.com/" target='_blank'>
                            <img className="education-img" src="/images/education/flatiron.png" />
                        </a>
                    </li>
                </ul>
            </section>
        )
    }
}

export default Education
