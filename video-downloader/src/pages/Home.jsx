import { useState } from 'react'
import './Home.css'

function Home() {
  const [url, setUrl] = useState('')
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = (e) => {
    e.preventDefault()
    if (!url) return
    
    setIsDownloading(true)
    // Simulate download process
    setTimeout(() => {
      setIsDownloading(false)
      alert('Download started! Check the Downloads page.')
      setUrl('')
    }, 1500)
  }

  return (
    <div className="home">
      <div className="hero">
        <h2>Download Videos Easily</h2>
        <p>Paste any video URL below to start downloading</p>
      </div>
      
      <form className="download-form" onSubmit={handleDownload}>
        <input
          type="text"
          placeholder="Paste video URL here..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          disabled={isDownloading}
        />
        <button type="submit" disabled={isDownloading || !url}>
          {isDownloading ? 'Downloading...' : 'Download'}
        </button>
      </form>

      <div className="features">
        <div className="feature-card">
          <h3>🚀 Fast Downloads</h3>
          <p>High-speed downloading with multiple format support</p>
        </div>
        <div className="feature-card">
          <h3>📱 Multiple Platforms</h3>
          <p>Support for various video platforms</p>
        </div>
        <div className="feature-card">
          <h3>💾 Quality Options</h3>
          <p>Choose from different quality resolutions</p>
        </div>
      </div>
    </div>
  )
}

export default Home
