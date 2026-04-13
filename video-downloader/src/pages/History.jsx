import './History.css'

function History() {
  const historyItems = [
    { id: 1, title: 'Sample Video 1', date: '2024-01-15', size: '45.2 MB', platform: 'YouTube' },
    { id: 2, title: 'Tutorial Series EP1', date: '2024-01-14', size: '128.5 MB', platform: 'Vimeo' },
    { id: 3, title: 'Music Video HD', date: '2024-01-13', size: '89.3 MB', platform: 'YouTube' },
    { id: 4, title: 'Documentary Film', date: '2024-01-12', size: '256.8 MB', platform: 'Dailymotion' },
    { id: 5, title: 'Conference Talk 2024', date: '2024-01-11', size: '178.4 MB', platform: 'YouTube' },
  ]

  return (
    <div className="history">
      <h2>Download History</h2>
      
      <div className="history-table">
        <table>
          <thead>
            <tr>
              <th>Video Title</th>
              <th>Platform</th>
              <th>Date</th>
              <th>Size</th>
            </tr>
          </thead>
          <tbody>
            {historyItems.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>
                  <span className="platform-badge">{item.platform}</span>
                </td>
                <td>{item.date}</td>
                <td>{item.size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="history-actions">
        <button className="clear-btn">Clear History</button>
        <button className="export-btn">Export History</button>
      </div>
    </div>
  )
}

export default History
