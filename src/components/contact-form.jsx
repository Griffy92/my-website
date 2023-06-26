import React, {useState} from 'react';
import { useForm, ValidationError } from "@formspree/react";
import lighthouse from '../images/moonrise-kingdom.jpg'

const ContactForm = () => {
    const [ state, handleSubmit ] = useForm("mqkvzzwz");

    // state.succeeded
    if ( state.succeeded ) {
        return (
            <div className="fun">
                <img src={ lighthouse } alt="Girl on Lighthouse from Moonrise Kingdom film" />
            </div>
        )            
    }

    return (
        <div className="contact-form">  
            <h2>Reach Out!</h2>
            <form onSubmit={ handleSubmit }>
                <label htmlFor="full-name">Name:</label>
                <input type="text" name="name" id="full-name" placeholder="Frank Ocean" required />
                <ValidationError prefix="Name" field="name" errors={state.errors}/>

                <label htmlFor="email">Email:</label>
                <input id="email" type="email" name="email" placeholder="frank@gmail.com" required/>
                <ValidationError prefix="Email" field="email" errors={state.errors} />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" placeholder="Say hello :)" required />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
                
                <button type="submit" disabled={state.submitting}>
                    Send!
                </button>
                <ValidationError errors={state.errors} />   
            </form>
        </div>
    )
}

export default ContactForm;