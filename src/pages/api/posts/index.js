import clientPromise from '../../../lib/mongodb'

export default async (req, res) => {
  const data = req.body

  const client = await clientPromise
  const db = client.db('postfellow')
  const collection = db.collection('posts')

  try {
    await collection.insertOne(data)
    return res.status(201).json(data)
  } catch (error) {
    // TO DO: Handle errors
  }
}
