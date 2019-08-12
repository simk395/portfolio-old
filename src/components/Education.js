import React from 'react'

export const Education = () => {
    return (
        <section id="education">
            <h4>Education</h4>
            <ul className='education-list'>
                <li className='list-item'>
                    <a href="http://www.qcc.cuny.edu/" target='_blank' rel="noopener noreferrer">
                        <img className="education-img" src="/images/education/queensborough.png" alt="queensborough" />
                    </a>
                </li>
                <li className='list-item' >
                    <a href="https://www.qc.cuny.edu/Pages/home.aspx" target='_blank' rel="noopener noreferrer">
                        <img className="education-img" src="/images/education/queenscollege.png" alt="queens college" />
                    </a>
                </li>
                <li className='list-item'>
                    <a href="https://flatironschool.com/" target='_blank' rel="noopener noreferrer">
                        <img className="education-img" src="/images/education/flatiron.png" alt="flatiron" />
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Education
