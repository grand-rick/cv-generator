import {Component} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import '../styles/form.css';

class Form extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }
    state = {
        firstName: '',
        lastName: '',
        title: '',
        email: '',
        avatar: null,
        portfolio: '',
        bio: '',
        twitter: '',
        mobile: NaN,
        address: '',
        country: '',
        school: '',
        schoolStart: '',
        schoolEnd: '',
        course: '',
        grade: '',
        skill1: '',
        skill2: '',
        skill3: '',
        errorMessage: ''
    }

    handleSubmit = (e) => {
        const { navigate } = this.props;

        navigate('/cv', {state: this.state});
    }

    handleChange = (e) => {
        const {name, value, type } = e.target;

        if (type === 'file') {
            this.setState({ [name]: e.target.files[0] })
        } else {
        this.setState({ [name]: value })
        }
    }

    render () {
        return (
            <div>
                <Link className="btn btn-success home-title" to="/">Home</Link>
                <Link className="btn btn-primary form-title" to="/form">Form</Link>
                <main className='row'>
                    <div className='login-page col-lg-auto'>
                        <form onSubmit={this.handleSubmit} className='login-form mb-5'>
                                <h1 class="login-form-title mb-5">Welcome to the CV generator</h1>
                                <h2 class="login-form-title mb-3">Personal Details</h2>
                                <div className='login-form-block'>
                                    <div className="login-form-input mb-3">
                                        <input type="text" name="firstName" id="firstName" placeholder="First Name" onChange={this.handleChange} value={this.state.firstName} required />
                                    </div>
                                    <div className="login-form-input mb-3">
                                        <input type="text" name="lastName" id="lastName" placeholder="Last Name" onChange={this.handleChange} value={this.state.lastName} required />
                                    </div>
                                    <div className="login-form-input mb-3">
                                        <input type="email" name="email" id="email" placeholder="Enter email address" value={this.state.email} onChange={this.handleChange} />
                                    </div>
                                    <div className="login-form-input mb-3">
                                        <input type="number" name="mobile" id="mobile" placeholder="Enter your mobile number" value={this.state.mobile} onChange={this.handleChange} />
                                    </div>
                                    <div className="login-form-input mb-3">
                                        <input type="text" name="portfolio" id="portfolio" placeholder="Portfolio Link" value={this.state.portfolio} onChange={this.handleChange} />
                                    </div>
                                    <div className="login-form-input mb-3">
                                        <input type="text" name="twitter" id="twitter" placeholder="Twitter Username" value={this.state.twitter} onChange={this.handleChange} />
                                    </div>
                                    <div className="login-form-input mb-3">
                                        <input type="text" name="title" id="title" placeholder="Title" onChange={this.handleChange} value={this.state.title} required />
                                    </div>
                                    <div className="login-form-input mb-3">
                                        <input type="text" name="address" id="address" placeholder="Address" value={this.state.address} onChange={this.handleChange} />
                                    </div>
                                    <div className="login-form-input mb-3">
                                        <input type="text" name="country" id="country" placeholder="Country" value={this.state.country} onChange={this.handleChange} />
                                    </div>
                                    <div className="login-form-input mb-3 avatar-block">
                                        <label htmlFor='avatar'><span>Avatar</span></label>
                                        <input type="file" name="avatar" id="avatar" placeholder="Avatar" />
                                    </div>
                                </div>
                                <div className="login-form-input mb-3">
                                        <textarea 
                                        id='bio'
                                        name='bio'
                                        rows='5'
                                        cols='30'
                                        minLength='10'
                                        maxLength='100'
                                        placeholder='Write a short Description about yourself'
                                        value={this.state.bio}
                                        onChange={this.handleChange} />
                                    </div>
                                <h2 class="login-form-title mb-3">Education</h2>
                                <div className='login-form-block'>
                                    <div className="login-form-input mb-3">
                                        <input type="text" name="school" id="school" placeholder="Enter College / University" onChange={this.handleChange} value={this.state.school} />
                                    </div>
                                    <div className="login-form-input mb-3">
                                        <input type="text" name="course" id="course" placeholder="Course" onChange={this.handleChange} value={this.state.course} />
                                    </div>
                                    <div className="login-form-input mb-3">
                                        <input type='text' name='schoolStart' id='schoolStart' placeholder='Start Year' onChange={this.handleChange} value={this.state.schoolStart}/>
                                    </div>
                                    <div className="login-form-input mb-3">
                                        <input type='text' name='schoolEnd' id='schoolEnd' placeholder='Graduation Year' onChange={this.handleChange} value={this.state.schoolEnd}/>
                                    </div>
                                    <div className="login-form-input mb-3">
                                            <input type="text" name="grade" id="grade" placeholder="Grade" onChange={this.handleChange} value={this.state.grade} />
                                    </div>     
                                </div>       
                                <h2 class="login-form-title mb-3">Skills</h2>
                                <div className="login-form-input mb-3">
                                        <input type="text" name="skill1" id="skill1" placeholder="Skill One" onChange={this.handleChange} value={this.state.skill1} />
                                </div>
                                <div className="login-form-input mb-3">
                                    <input type="text" name="skill2" id="skill2" placeholder="Skill Two" onChange={this.handleChange} value={this.state.skill2} />
                                </div>
                                <div className="login-form-input mb-3">
                                    <input type="text" name="skill3" id="skill3" placeholder="Skill Three" onChange={this.handleChange} value={this.state.skill3} />
                                </div>
                                <div class="login-form-input mb-5">
                                    <button type='submit' className='btn btn-primary text-lg-center' >GENERATE CV</button>
                                </div>
                        </form>
                    </div>
                </main>
            </div>
        )
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(props) {
    const navigate = useNavigate();
    return <Form {...props} navigate={navigate} />;
}