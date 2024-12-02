import "../css/Gallery.css"
const Gallery = ({imgs, names, descriptions}) => {
    const collumn = 1
    console.log(imgs)
  return (
    <div className="gallery">
        {imgs.map((img, index) => (
            <div className="info">
                <img src={img} alt='gallery image' className="img"></img>
                <h1 className="picName">{names[index]}</h1>
                <p className="description">{descriptions[index]}</p>
            </div>
        ))}
    </div>
  )
}

export default Gallery