import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()
  return (
    <div className="header">
      <img className="logo" src="/logo.png" alt="logo" onClick={() => navigate('/')} />
      <div className="title">Todo List</div>
    </div>
  )
}
