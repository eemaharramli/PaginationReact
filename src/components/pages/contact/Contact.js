import './contact.css'

const Contact = () => {
    return(
        <>
            <section id="feedBack">
                <div className="feedBack__container">
                    <div className="feedBack__header">
                        <h2><span>Contact </span>Me</h2>
                        <span>The new common language will be more simple and regular than.</span>
                    </div>
                    <div className="feedBack__form">
                        <form>
                            <div className="form__inputs">
                                <label htmlFor="user">
                                    <i className="fas fa-user user" id='user'></i>
                                </label>
                                <input type="text" placeholder="Name" className="input__name"/>
                                <i className="fas fa-paper-plane sent-mail"></i>
                                <input type="text" placeholder="Surame" className="input__surname"/>
                                <i className="fas fa-envelope mail"></i>
                                <textarea type="textarea" className="input__textarea" rows="6" cols="50" value={'Text message'} readOnly>Message</textarea>
                            </div>
                            <input type="submit" className="input__submit" value="Send Message"/>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;