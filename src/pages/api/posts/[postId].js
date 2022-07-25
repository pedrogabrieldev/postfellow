import { postsDAO } from '../../../dao/postsDAO'

export default async function handler(req, res) {
  const { postId } = req.query

  if (req.method === 'DELETE') {
    try {
      await postsDAO.deletePostById(postId)
      return res.status(200).json({})
    } catch (error) {
      // TO DO: Handle errors
    }
  }
}
