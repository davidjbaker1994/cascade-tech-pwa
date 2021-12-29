import React, { Component } from 'react'

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          Email: "",
          MultiLine: "",
          PhoneNumber_countrycode: "",
          SingleLine: "",
          SingleLine1: "",
          SingleLine2: "",
          SelectedSizes: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCustomSelectChange = this.handleCustomSelectChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: target.value
        });
    }

    

    handleCustomSelectChange(event) {
        console.log(event.target);
        console.log(event.target.value);
        const selectedSize = event.target.value;
        const indexOfSelected = this.state.SelectedSizes.indexOf(selectedSize);
        const numPicked = this.state.SelectedSizes.length;
        if (indexOfSelected == -1) {
            this.setState(prevState => ({
                SelectedSizes: prevState.SelectedSizes.concat(selectedSize)
            }));
        } else if (numPicked == 1) {
                this.setState(() => ({
                    SelectedSizes: []
                }));
        } else {
            this.setState((prevState) => ({
                SelectedSizes: prevState.SelectedSizes.filter(size => size !== selectedSize)
            }));
        }
        console.log(this.state.SelectedSizes);
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
                <input type="text" compname="PhoneNumber" name="PhoneNumber_countrycode" maxlength="20" checktype="c7" value="" phoneFormat="1" isCountryCodeEnabled={true} fieldType="11" id="international_PhoneNumber_countrycode" valType="number" phoneFormatType="1" placeholder="Phone number"/>
                <input fieldType="9"  type="text" maxlength="255" name="Email" value={this.state.Email} onChange={this.handleInputChange} checktype="c5" value="" placeholder="Email"/>
                <textarea name="MultiLine" checktype="c1" maxlength="65535" 
                    placeholder="Please describe the nature of your request here"></textarea> 
                <button class="zf-submitColor" >Submit</button>
            </form>
        );
    }
}

export default ContactForm;