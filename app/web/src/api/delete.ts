import { api } from 'web-init'

export default api('/api/delete', async ({ req, reply, db, ext }) => {
    const { id }:any = req.query
    await db.todo.delete({ 
        where: { 
          id: Number(id) 
        } })
  reply.send({message:"berasil delete"})
})

//const get (untuk menampung hasil Query)
//untuk data yang ditampilkan perlu mereturn variable