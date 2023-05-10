import './index.css'
// Write your code here.

const MainComponent = props => {
  const {Details} = props
  const {title, description, imgUrl, className} = Details

  return (
    <li className={className}>
      <h1 className="sub-heading">{title}</h1>
      <p className="sub-paragraph">{description}</p>
      <img src={imgUrl} className="image" alt={title} />
    </li>
  )
}

export default MainComponent
