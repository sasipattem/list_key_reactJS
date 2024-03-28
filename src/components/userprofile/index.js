import './index.css'

const Userprofile = props => {
  const {UserDetials} = props
  const {imageUrl, name, role} = UserDetials
  return (
    <li className="user-card-container">
      <img className="avatar" src={imageUrl} alt="aaaaa" />
      <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <p className="user-designation">{role}</p>
      </div>
    </li>
  )
}

export default Userprofile
