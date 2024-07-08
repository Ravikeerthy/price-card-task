import React from 'react'
import CardComp from './components/CardComp';

const App = () => {
  const lists = [
    {
      title: "FREE",
      price: "$0/month",
      user: "single user",
      user1: true,
      storage: true,
      publicProjects: true,
      communityAccess: true,
      privateProjects: false,
      phoneSupport: false,
      subDomain: false,
      status: false,
    },
    {
      title: "PLUS",
      price: "$9/month",
      user: "5 user",
      userIcon: "fa-solid fa-check",
      user1: true,
      storage: true,
      publicProjects: true,
      communityAccess: true,
      privateProjects: true,
      phoneSupport: true,
      subDomain: true,
      status: false,
    },
    {
      title: "PRO",
      price: "$49/month",
      user: "unlimited user",
      user1: true,
      storage: true,
      publicProjects: true,
      communityAccess: true,
      privateProjects: true,
      phoneSupport: true,
      subDomain: true,
      status: true,
    },
  ];
  return (
    <div>
      {/* Component CAll */}
      <CardComp lists={lists}/> 
    </div>
  )
}

export default App
