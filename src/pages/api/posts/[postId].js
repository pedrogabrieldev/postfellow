import { ObjectId } from 'mongodb'
import clientPromise from '../../../lib/mongodb'

export default async (req, res) => {
  const { postId } = req.query

  const client = await clientPromise
  const db = client.db('postfellow')
  const collection = db.collection('posts')

  if (req.method === 'DELETE') {
    try {
      await collection.deleteOne({ _id: ObjectId(postId) })
      return res.status(200).json({})
    } catch (error) {
      // TO DO: Handle errors
    }
  }
}
