import React from 'react';
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
    const [ state, handleSubmit ] = useForm("mqkvzzwz");

    if ( state.succeeded ) {
        return <p>Thanks!</p>
    }

    return (
        <>  
            <h3>Reach Out!</h3>
            <form onSubmit={ handleSubmit }>
                <label htmlFor="full-name">Full name</label>
                <input type="text" name="name" id="full-name" placeholder="Frank Ocean" required />
                <ValidationError prefix="Name" field="name" errors={state.errors}/>

                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" name="email" placeholder="frank@gmail.com" required/>
                <ValidationError prefix="Email" field="email" errors={state.errors} />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Say something :)" required />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
                
                <button type="submit" disabled={state.submitting}>
                    Submit
                </button>
                <ValidationError errors={state.errors} />   
            </form>
        </>
    )
}

export default ContactForm;