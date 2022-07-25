import { postsDAO } from '../../../dao/postsDAO'

export default async function handler(req, res) {
  const post = req.body

  try {
    await postsDAO.addPost(post)
    return res.status(201).json(post)
  } catch (error) {
    // TO DO: Handle errors
  }
}
