import React, { Component } from 'react';
import fbIcon from '../fb.svg';
import instaIcon from '../insta.svg';
import linkedinIcon from '../linkdin.svg';
import twitterIcon from '../twitter.svg';

class More extends Component {
    render() {
        return (
            <div className={'more '+this.props.className}>
                <h1>Contact</h1>
                <div className="contactGrid">
                    <div className="personal card">
                        <h3>Personal</h3>
                        <p>Phone: 214 - 532 - 9560</p>
                        <p>Email: linusbmartin@gmail.com</p>
                    </div>
                    <div className="social card">
                        <h3>Social</h3>
                        <img src={fbIcon} alt=""/>
                        <img src={instaIcon} alt=""/>
                        <img src={linkedinIcon} alt=""/>
                        <img src={twitterIcon} alt=""/>
                    </div>
                    <form className="card" action="">
                        <h3>How can I get in touch?</h3>
                        <p>Contact Information: (phone number, email, Instagram handle, etc.)</p>
                        <input type="text" placeHolder="How I can get in touch" name="How to get in touch" id=""/>
                        <p>Message for Linus:</p>
                        <textarea name="" placeHolder="What you would like me to know" id="" cols="30" rows="10"></textarea>
                    </form>
                </div>
            </div>
        );
    }
}

export default More;