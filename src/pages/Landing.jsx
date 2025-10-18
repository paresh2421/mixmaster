import { useLoaderData } from "react-router-dom"

export const loader = ()=>{
  return 'something'
}

const Landing = () => {
  const data = useLoaderData()
  console.log(data);  
  return (
    <div>Landing</div>
  )
}

export default Landing;