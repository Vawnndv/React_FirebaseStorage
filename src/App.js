import "./App.css"
import { Helmet } from 'react-helmet'
import DropzoneAreaExample from "./DropZoneArea"

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Upload Firebase</title>
        <meta 
          name="description"
          content="Upload file to S3 from React js"
        />
      </Helmet>
      <DropzoneAreaExample />
    </div>
  )
}

export default App;