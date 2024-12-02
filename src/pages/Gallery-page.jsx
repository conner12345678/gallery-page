import Gallery from "../components/Gallery"
import { data } from '../data'

const GalleryPage = () => {
  return (
    <Gallery imgs={data.images.map((image)=>{return([image])})} names={data.names.map((name)=>{return([name])})} descriptions={data.descriptions.map((description)=>{return([description])})}/>
  )
}

export default GalleryPage