import TodoList from 'src/components/TodoList'
import { page } from 'web-init'
import Header from 'src/components/Header'
import {useState} from 'react' 

export default page({
  url: '/todolist2',
  layout: 'blank',
  component: ({}) => {
    const [isRefresh, setIsRefresh] = useState(true)

    const setRefresh = (status) => {
      setIsRefresh(status)
    }
    return  <>
    <div>
        <Header setRefresh={setRefresh} />
        <TodoList setRefresh={setRefresh} isRefresh={isRefresh} />
    </div>    
       </>
  },
})