import './index.css'

const ThumbnailItem = props => {
  const {eachImage, changeImage, isActive} = props
  const {thumbnailUrl, thumbnailAltText} = eachImage
  const changeUrl = () => {
    changeImage(eachImage)
  }
  const addClass = isActive ? '' : 'in-active-thumbnail'
  return (
    <li className={`each-thumbnail ${addClass}`}>
      <button type="button" onClick={changeUrl} className="button-ele">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="thumbnail-image"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
