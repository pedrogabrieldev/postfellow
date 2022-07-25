import { ObjectId } from 'mongodb'
import clientPromise from '../lib/mongodb'

export class postsDAO {
  static async getCollection() {
    const client = await clientPromise
    const db = client.db('postfellow')
    const collection = db.collection('posts')

    return collection
  }

  static async getAllPosts() {
    const collection = await this.getCollection()

    try {
      const posts = await collection.find({}).toArray()

      return posts
    } catch (error) {
      // TO DO: Handle errors
    }
  }

  static async addPost(post) {
    const collection = await this.getCollection()

    try {
      await collection.insertOne(post)
      return post
    } catch (error) {
      // TO DO: Handle errors
    }
  }

  static async deletePostById(postId) {
    const collection = await this.getCollection()

    try {
      await collection.deleteOne({ _id: ObjectId(postId) })
    } catch (error) {
      // TO DO: Handle errors
    }
  }
}
