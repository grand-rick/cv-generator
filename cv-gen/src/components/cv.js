import {useLocation} from 'react-router-dom';
import '../styles/cv.css';

const Cv = () => {
    const location = useLocation();
    const {firstName, lastName, title, email, mobile, address, country, portfolio, twitter, school, schoolStart, schoolEnd, course, grade, skill1, skill2, skill3} = location.state;

    const skills = [skill1, skill2, skill3];
    const skillsFormatted = skills.map(skill => <li key={skill}>{skill}</li>)

    return (
        <main>
            <div className='cv-wrapper'>
                <div className='userDetails'>
                    <div className='name'>{firstName} <span>{lastName}</span></div>
                    <div className='title'>{title}</div>
                </div>
                <div className='contact-details'>
                    <div className='contact'>
                        <p>Contact Me</p>
                        <div className='email'>Email: {email} </div>
                        <div className='mobile'>Cell: {mobile}</div>
                    </div>
                    <div className='address'>
                        <p>Address</p>
                        <div>{address}</div>
                        <div>{country}</div>
                    </div>
                    <div className='portfolio'>
                        <p>My Portfolio</p>
                        <div className='portfolio'>Portfolio: {portfolio} </div>
                        <div className='twitter'>Twitter: {twitter}</div>
                    </div>
                </div>
                <div className='education'>
                    <p>EDUCATION</p>
                    <div className='school'>
                        {schoolStart} - {schoolEnd} <br />
                        {school} <br />
                        Degree: {course} <br />
                        Grade: {grade} <br />
                    </div>
                    <div className='skills'>
                        <p>SKILLS</p>
                        <ul>
                            {skillsFormatted}
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Cv;