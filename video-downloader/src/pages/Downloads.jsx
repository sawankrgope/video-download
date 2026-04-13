import { useState } from 'react'
import './Downloads.css'

function Downloads() {
  const [downloads] = useState([
    { id: 1, title: 'Sample Video 1', progress: 100, status: 'completed', size: '45.2 MB' },
    { id: 2, title: 'Tutorial Series EP1', progress: 75, status: 'downloading', size: '128.5 MB' },
    { id: 3, title: 'Music Video HD', progress: 30, status: 'downloading', size: '89.3 MB' },
    { id: 4, title: 'Documentary Film', progress: 100, status: 'completed', size: '256.8 MB' },
  ])

  const getStatusColor = (status) => {
    if (status === 'completed') return '#27ae60'
    if (status === 'downloading') return '#3498db'
    return '#95a5a6'
  }

  return (
    <div className="downloads">
      <h2>My Downloads</h2>
      
      <div className="downloads-list">
        {downloads.map((download) => (
          <div key={download.id} className="download-item">
            <div className="download-info">
              <h3>{download.title}</h3>
              <p className="download-size">{download.size}</p>
            </div>
            
            <div className="download-progress">
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ 
                    width: `${download.progress}%`,
                    backgroundColor: getStatusColor(download.status)
                  }}
                />
              </div>
              <span className="progress-text">{download.progress}%</span>
            </div>
            
            <div className="download-status">
              <span 
                className="status-badge"
                style={{ backgroundColor: getStatusColor(download.status) }}
              >
                {download.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {downloads.length === 0 && (
        <div className="empty-state">
          <p>No downloads yet. Start downloading from the Home page!</p>
        </div>
      )}
    </div>
  )
}

export default Downloads
