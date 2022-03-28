import { api } from 'web-init'

export default api('/api/update', async ({ req, reply, db, ext }) => {
    const { id }:any = req.query
    await db.todo.update({
        where:{ 
            id:Number(id)
        },
        data: {
            ...req.body
        }})
         reply.send({message:"berasil update"})
    })
