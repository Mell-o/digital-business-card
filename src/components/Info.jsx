export default function Info() {
    return (
        <section className="info">
            <img src="./src/images/profile-img-business-card.png" alt="Profile image" />
            <h1>Deonte Smoot</h1>
            <p>Frontend Developer</p>
            <a className="personal-website" href="https://github.com/Mell-o" blank="_" rel="noopener noreferrer">deontesmoot.website</a>
            <div className="contact">
                <a className="contact-link mail" href="mailto:deontecls@gmail.com" blank="_" rel="noopener noreferrer">
                    <img src="./src/images/mail.png" alt="mail icon"/>
                    <span>Email</span>
                </a>
                <a className="contact-link linkedin" href="https://www.linkedin.com/in/deonte-smoot-07b923268/" blank="_" rel="noopener noreferrer">
                    <img src="./src/images/linkedin.png" alt="LinkedIn icon"/>
                    <span>LinkedIn</span>
                </a>
            </div>
        </section>
    )
}