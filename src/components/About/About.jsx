import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const About = () => {
  const {id} = useParams();
  const data = useLoaderData();
  console.log(data)
  return (
    <div>About:{id}</div>
  )
}

export default About

export const fetchApi = async() => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  return response.json();
  
}