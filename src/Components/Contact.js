import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

        <div className="row section-head">

          <div className="two columns header-col">
            <FontAwesomeIcon icon={["fas","envelope"]} className="icon"/>
            <h1><span>Get In Touch.</span></h1>

          </div>

          <div className="ten columns">

            <p className="lead">{message}</p>

          </div>

        </div>
          <form action="" method="post" id="contactForm" name="contactForm">
            <fieldset>
              <div className="row">
                <div className="six columns">
                  <input name="name" type="text" className="" placeholder="Your Name" novalidate onChange={this.handleChange}/>
                  <input name="email" type="email" className="" placeholder="Your Email" novalidate onChange={this.handleChange}/>
                  <input name="subject" type="text" className="" placeholder="Your Subject" novalidate onChange={this.handleChange}/>
                </div>
                <div className="six columns">
                  <textarea name="message" type="text" className="" placeholder="Your Message" novalidate onChange={this.handleChange}/>
                </div>
              </div>
              <div className="row">
                <div className="twelve columns">
                  <button className="submit">Submit</button>
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>
              </div>
            </fieldset>
			    </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
   </section>
    );
  }
}

export default Contact;
