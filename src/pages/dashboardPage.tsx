import JsonFileTable from '../components/jsonFileTable'
import './dashboardPage.scss'

  const handleLogout = () => {
    // Clear auth (example: localStorage, cookies, etc.)
    localStorage.removeItem('authToken');
    // Redirect to login page
    window.location.href = '/login';
  };



export default function DashboardPage() {
  return (
    <div>
      {/* <header className="header">
        <h1>Red Team App</h1>
        <button onClick={handleLogout}>Logout</button>
      </header> */}
      
      <JsonFileTable />
    </div>
  )
}


//dodati neki header i footer ?