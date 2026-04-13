import { useState } from 'react'
import './Settings.css'

function Settings() {
  const [settings, setSettings] = useState({
    downloadPath: '/Downloads',
    maxConcurrent: 3,
    autoStart: true,
    notifications: true,
    darkMode: false,
    quality: '1080p',
  })

  const handleChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }))
  }

  return (
    <div className="settings">
      <h2>Settings</h2>
      
      <div className="settings-sections">
        <section className="settings-section">
          <h3>📁 Download Location</h3>
          <div className="setting-item">
            <label>Download Path</label>
            <div className="input-group">
              <input 
                type="text" 
                value={settings.downloadPath}
                onChange={(e) => handleChange('downloadPath', e.target.value)}
              />
              <button className="browse-btn">Browse</button>
            </div>
          </div>
        </section>

        <section className="settings-section">
          <h3>⚡ Download Settings</h3>
          <div className="setting-item">
            <label>Max Concurrent Downloads</label>
            <select 
              value={settings.maxConcurrent}
              onChange={(e) => handleChange('maxConcurrent', parseInt(e.target.value))}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="5">5</option>
            </select>
          </div>
          
          <div className="setting-item">
            <label>Default Quality</label>
            <select 
              value={settings.quality}
              onChange={(e) => handleChange('quality', e.target.value)}
            >
              <option value="720p">720p</option>
              <option value="1080p">1080p</option>
              <option value="1440p">1440p</option>
              <option value="2160p">4K</option>
            </select>
          </div>
        </section>

        <section className="settings-section">
          <h3>🔔 Preferences</h3>
          <div className="setting-item toggle">
            <label>Auto-start Downloads</label>
            <label className="toggle-switch">
              <input 
                type="checkbox"
                checked={settings.autoStart}
                onChange={(e) => handleChange('autoStart', e.target.checked)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
          
          <div className="setting-item toggle">
            <label>Enable Notifications</label>
            <label className="toggle-switch">
              <input 
                type="checkbox"
                checked={settings.notifications}
                onChange={(e) => handleChange('notifications', e.target.checked)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
          
          <div className="setting-item toggle">
            <label>Dark Mode</label>
            <label className="toggle-switch">
              <input 
                type="checkbox"
                checked={settings.darkMode}
                onChange={(e) => handleChange('darkMode', e.target.checked)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </section>

        <section className="settings-section">
          <h3>ℹ️ About</h3>
          <div className="about-info">
            <p><strong>Version:</strong> 1.0.0</p>
            <p><strong>Build:</strong> 2024.01.15</p>
            <p className="copyright">© 2024 Video Downloader App</p>
          </div>
        </section>
      </div>

      <div className="settings-actions">
        <button className="save-btn">Save Changes</button>
        <button className="reset-btn">Reset to Defaults</button>
      </div>
    </div>
  )
}

export default Settings
