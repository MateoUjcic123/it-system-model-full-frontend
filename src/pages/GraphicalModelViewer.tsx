import { useState } from 'react'
import styles from './graphicalmodelviewer.module.scss'

export default function GraphicalModelViewer() {
  const [showToolbox, setShowToolbox] = useState(false)

  const handleOpenToolbox = () => {
    setShowToolbox(true)
  }

  const handleCloseToolbox = () => {
    setShowToolbox(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.view}>
        <h2>Graphical Model View</h2>
        <div className={styles.buttonGroup}>
          <button>Landscape</button>
          <button>Credentials</button>
          <button>Dataservices</button>
          <button>Firewalls</button>
          {/* kasnije npr: */}
          <button onClick={handleOpenToolbox}>Computers</button>
        </div>
      </div>

      {showToolbox && (
        <div className={styles.toolbox}>
          <h3>ToolBox</h3>
          <div>
            <label>Computer Name:</label>
            <input type="text" defaultValue="web - server" />
          </div>

          <div>
            <label>Connected Network:</label>
            <select defaultValue="Network A">
              <option>Network A</option>
              <option>Network B</option>
            </select>
          </div>

          <div className={styles.section}>
            <h4>Installed Software</h4>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Version</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Apache HTTP Ser</td>
                  <td>2.4</td>
                  <td><button>🗑️</button></td>
                </tr>
                <tr>
                  <td>MySQL</td>
                  <td>8.0</td>
                  <td><button>🗑️</button></td>
                </tr>
              </tbody>
            </table>
            <button>Add row</button>
          </div>

          <div className={styles.section}>
            <h4>Data</h4>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Logs</td>
                  <td>Text</td>
                  <td><button>🗑️</button></td>
                </tr>
              </tbody>
            </table>
            <button>Add row</button>
          </div>

          <button className={styles.save}>Save changes</button>
          <button onClick={handleCloseToolbox}>Back to File list</button>
        </div>
      )}
    </div>
  )
}
