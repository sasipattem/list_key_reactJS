import Userprofile from './components/userprofile'
import './App.css'
const UserDetialsList = [
  {
    uniqueNO: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'sasi',
    role: 'software developer',
  },
  {
    uniqueNO: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'floyd miles',
    role: 'software developer',
  },
  {
    uniqueNO: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'jacob jones',
    role: 'software developer',
  },
  {
    uniqueNO: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'devon lane',
    role: 'software developer',
  },
];

const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {UserDetialsList.map(each => (
        <Userprofile UserDetials={each} key={each.uniqueNO} />
      ))}
    </ul>
  </div>
)

export default App
