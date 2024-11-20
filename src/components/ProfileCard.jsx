import '../css/profileCard.css'
function Profile({imgSrc, name, inspiration, age, email, socials}) {
    const keys = Object.keys(socials)
    const values = Object.values(socials)
    console.log(values)
    return(
        <div className="container">
            <div className="contents">
                <img className="profileImage" src={imgSrc} alt="Profile image" />
                <h4 className="name">{name}</h4>
                <p className="inspiration">{inspiration}</p>
            </div>
            <div className="contents">
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Email: {email}</p>
                {keys.map((key) => (
                    <a href={socials[key].theLink}>{socials[key].logo} </a>
                ))}
            </div>
        </div>
    )
}

export default Profile;