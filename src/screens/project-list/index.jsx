import { List } from './list'
import { SearchPanel } from './search-panel';
import React, { useEffect, useState } from "react";
import * as qs from "qs";
import { cleanObject } from '../../utils';

const apiUrl = process.env.REACT_APP_API_URL
export const ProjectList = () => {
  
  const [param, setParam] = useState({
    name: '',
    personId: '',
  })

  const [users, setUsers] = useState([])
  const [list, setList] = useState([])

  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async response => {
      if (response.ok) {
        setList(await response.json())
      }
    })
  }, [param])

  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async response => {
      if (response.ok) {
        setUsers(await response.json())
      }
    })
  }, [])

  return (<div>
    <SearchPanel param={param} users={users} setParam={setParam}/>
    <List list={list} users={users}/>
  </div>)
}