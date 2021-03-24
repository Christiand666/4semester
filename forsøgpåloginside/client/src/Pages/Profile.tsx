
import React, { Profiler, useContext } from 'react'
import {UserInterface } from '../Interfaces/Interfaces';
import { myContext } from './Context';

export default function Profile() {
  const ctx = useContext(myContext) as UserInterface;
 const pi = console.table(ctx);
  return (
    
    <div>
      <h1>Current Logged In User: {ctx.username}</h1>
      <h1>Current Logged In User: {ctx.lastname}</h1>
      <h1>Current Logged In User: {ctx.id}</h1>
      <h1>Current Logged In User: {pi}</h1>
      <div>
            {
                ctx ? (
                    <h1>Welcome back {ctx.username}</h1>
                ) : (
                        <h1>Welcome To MY Website</h1>
                    )
            }
        </div>
    </div>
    
  )
}
