import { api } from 'web-init'

export default api('/api/menampilkan', async ({ req, reply, db, ext }) => {
    const get = await db.todo.findMany()
 
  reply.send(get)
})
