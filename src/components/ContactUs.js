import React, { Component } from "react";
import axios from "axios";
const validate = (name, email, subject) => {
  // we are going to store errors for all fields
  // in a signle array
  const errors = [];

  if (name.length === 0) {
    errors.push("Name can't be empty");
  }
  if (email.split("").filter(x => x === "@").length !== 1) {
    errors.push("Email should contain a @");
  }
  if (subject.length === 0) {
    errors.push("Subject can't be empty");
  }

  return errors;
};
export default class ContactUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",

      errors: []
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    const { name, email, subject, message } = this.state;
    console.log(name, email, subject, message);

    const errors = validate(name, email, subject, message);
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }

    const form = {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message
    };
    const options = {
      headers: { "X-Requested-With": "XMLHttpRequest" }
    };
    axios
      .post(
        "https://portfolio-contact-38216.firebaseio.com/contact.json",
        form,
        options
      )
      .then(response => console.log(response))
      .catch(error => console.log(error));

    this.setState({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };
  render() {
    //let resumeData = this.props.resumeData;
    return (
      <div>
        <section id="contact">
          <div className="row section-head">
            <h1>
              <span>Hiring Me</span>
            </h1>
          </div>
          <div className="row">
            <form action="#" method="post" id="contactForm" name="contactForm">
              <fieldset>
                <div>
                  <label for="contactName">
                    Name <span class="required">*</span>
                  </label>
                  <input
                    type="text"
                    size="35"
                    id="contactName"
                    name="contactName"
                    value={this.state.name}
                    onChange={event =>
                      this.setState({ name: event.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label for="contactEmail">
                    Email <span class="required">*</span>
                  </label>
                  <input
                    type="text"
                    size="35"
                    id="contactEmail"
                    name="contactEmail"
                    value={this.state.email}
                    onChange={event =>
                      this.setState({ email: event.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label for="contactSubject">
                    Subject <span class="required">*</span>
                  </label>
                  <input
                    type="text"
                    size="35"
                    id="contactSubject"
                    name="contactSubject"
                    value={this.state.subject}
                    onChange={event =>
                      this.setState({ subject: event.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label for="contactMessage">Message</label>
                  <textarea
                    cols="50"
                    rows="15"
                    id="contactMessage"
                    name="contactMessage"
                    value={this.state.message}
                    onChange={event =>
                      this.setState({ message: event.target.value })
                    }
                  ></textarea>
                </div>

                <div>
                  <button className="submit" type="submit">
                    Submit
                  </button>
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form>

            <div id="message-warning">Error boy</div>
            <div id="message-success">
              <i class="fa fa-check">Your message was sent, thank you!</i>
              <br></br>
            </div>
          </div>

          {/* <div className="row">
            <div className="contact">
              <div className="form">
                <form action="#" className="form"  >
                  <div className="u-margin-bottom-medium">
                    <h2 className="heading-secondary">Contact me</h2>
                  </div>

                  <div className="form__group">
                    <input
                      type="text"
                      className="form__input"
                      placeholder="Name"
                      id="name"
                      value={this.state.name}
                      onChange={event =>
                        this.setState({ name: event.target.value })
                      }
                      required
                    />
                    <label for="name" className="form__label">
                      Full name
                    </label>
                  </div>

                  <div className="form__group">
                    <input
                      type="email"
                      className="form__input"
                      placeholder="Email"
                      id="email"
                      value={this.state.email}
                      onChange={event =>
                        this.setState({ email: event.target.value })
                      }
                      required
                    />
                    <label for="email" className="form__label">
                      Email
                    </label>
                  </div>

                  <div className="form__group">
                    <input
                      type="text"
                      className="form__input"
                      placeholder="Subject"
                      id="subject"
                      value={this.state.subject}
                      onChange={event =>
                        this.setState({ subject: event.target.value })
                      }
                      required
                    />
                    <label for="subject" className="form__label">
                      Subject
                    </label>
                  </div>

                  <div className="form__group">
                    <textarea
                      name="message"
                      className="form__textarea"
                      placeholder="Message"
                      form="form_id"
                      id="message"
                      value={this.state.message}
                      onChange={event =>
                        this.setState({ message: event.target.value })
                      }
                    ></textarea>
                    <label for="message" className="form__label">
                      Message
                    </label>
                  </div>

                  <div className="form__group">
                    <button className="btn btn--green" type="submit">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div> */}
        </section>
      </div>
    );
  }
}
