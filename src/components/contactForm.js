import React from 'react'

const ContactForm = () => (
    <form action='https://forms.zohopublic.eu/davidjbaker1994/form/ContactForm/formperma/Kyw9rEb2yTM1IgwtWpDNuuPmwho35ID9f1SEy491VHI/htmlRecords/submit' 
        name='form' method='POST' onSubmit='javascript:document.charset="UTF-8"; return zf_ValidateAndSubmit();' accept-charset='UTF-8' 
        enctype='multipart/form-data' id='form'>  
        <div className="form-header">
            <h2>Contact Us</h2>
        </div> 
        <input type="text" maxlength="255" name="Name_First" fieldType="7" placeholder="First name" />
        <input type="text" maxlength="255" name="Name_Last" fieldType="7" placeholder="Last name" />
        <input type="text" compname="PhoneNumber" name="PhoneNumber_countrycode"
                        maxlength="20" checktype="c7" phoneFormat="1" isCountryCodeEnabled="false" fieldType="11" id="international_PhoneNumber_countrycode" valType="number" phoneFormatType="1" placeholder="Phone number"/>
        <input fieldType="9"  type="text" maxlength="255" name="Email"  checktype="c5" placeholder="Email"/>
        <div className="custom-select-container">
            <select class="zf-form-sBox" name="Dropdown" checktype="c1">
                <option selected="true" value="-Select-">Problem Class</option>
                <option value="Class&#x20;1">Class 1</option>
                <option value="Class&#x20;2">Class 2</option>
                <option value="Class&#x20;3">Class 3</option>
            </select>
        </div>
        <input type="text" name="SingleLine1" checktype="c1" maxlength="255" fieldType="1" placeholder="Subject" />
        <textarea name="MultiLine" checktype="c1" maxlength="65535" 
            placeholder="Please describe the nature of your request here"></textarea> 
        <button class="zf-submitColor" >Submit</button>
    </form>
)
      

export default ContactForm;