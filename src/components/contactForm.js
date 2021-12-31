import React, { Component } from 'react'

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          Email: "",
          MultiLine: "",
          PhoneNumber_countrycode: "",
          SingleLine1: "",
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: target.value
        });
    }
    
    render() {
        return (
            <form action='https://forms.zohopublic.eu/davidjbaker1994/form/ContactForm/formperma/Kyw9rEb2yTM1IgwtWpDNuuPmwho35ID9f1SEy491VHI/htmlRecords/submit' 
                name='form' method='POST' onSubmit='javascript:document.charset="UTF-8"; return zf_ValidateAndSubmit();' accept-charset='UTF-8' 
                enctype='multipart/form-data' id='form'>  
                <div className="form-header">
                    <h2>Contact Us</h2>
                </div> 
                <input type="text" maxlength="255" name="Name_First" fieldType="7" placeholder="First name" />
                <input type="text" maxlength="255" name="Name_Last" fieldType="7" placeholder="Last name" />
                <input type="text" compname="PhoneNumber" name="PhoneNumber_countrycode" value={this.state.PhoneNumber_countrycode} 
                            onChange={this.handleInputChange} maxlength="20" checktype="c7" phoneFormat="1" isCountryCodeEnabled="false" fieldType="11" id="international_PhoneNumber_countrycode" valType="number" phoneFormatType="1" placeholder="Phone number"/>
                <input fieldType="9"  type="text" maxlength="255" name="Email" value={this.state.Email} onChange={this.handleInputChange}  checktype="c5" placeholder="Email"/>
                <div className="custom-select-container">
                    <select class="zf-form-sBox" name="Dropdown" checktype="c1">
                        <option selected="true" value="-Select-">Problem Class</option>
                        <option value="Class&#x20;1">Class 1</option>
                        <option value="Class&#x20;2">Class 2</option>
                        <option value="Class&#x20;3">Class 3</option>
                    </select>
                </div>
                <input type="text" name="SingleLine1" checktype="c1" value={this.state.SingleLine1} onChange={this.handleInputChange} maxlength="255" fieldType="1" placeholder="Subject" />
                <textarea name="MultiLine" checktype="c1" maxlength="65535" 
                    placeholder="Please describe the nature of your request here"></textarea> 
                <button class="zf-submitColor" >Submit</button>
            </form>
        );
    }
}

export default ContactForm;