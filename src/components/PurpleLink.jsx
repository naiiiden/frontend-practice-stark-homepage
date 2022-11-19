const PurpleLink = ({ href, className, text }) => {
    return (
        <a href={href} className={`purple-link ${className ? `${className}` : ""}`}>{text}</a>
    )
}

export default PurpleLink;