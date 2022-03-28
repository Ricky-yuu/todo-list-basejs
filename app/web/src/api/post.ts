import { api } from 'web-init'

export default api('/api/post', async ({ req, reply, db, ext }) => {
    await db.todo.create({
        data: {
            ...req.body
        }})
  reply.send({message:"berasil post"})
})
