import { Client, Databases, ID, Storage } from "appwrite";
import { toast } from "react-toastify";
import conf from "../conf/conf";

//Database Services
export class DatabaseServices {
  client = new Client()
  database
  storage
  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)
    this.database = new Databases(this.client)
    this.storage = new Storage(this.client)
  }


  //Create & Add Resturant Product

  async createResturant({ deliveryTime, description, foodName, price, resturantAddress, resturantLocality, resturantName, resturantPhone, resturantPincode, status, featuredImageId, slug, userId }) {
    try {
      return await this.database.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,//slug define appwrite DB and in this method as it is documents id as it is used
        { deliveryTime, description, foodName, price, resturantAddress, resturantLocality, resturantName, resturantPhone, resturantPincode, status, featuredImageId, userId }
      )
    } catch (error) {
      toast.error(error.message)
    }
  }


  //Bucket Storage for uploaded images
  async uploadFoodImg(file) {
    try {
      return await this.storage.createFile(conf.appwriteBucketId, ID.unique(), file)
    } catch (error) {
      toast.error(error.message)
      console.log(error)
      return false

    }
  }


}

const dbServices = new DatabaseServices()
export default dbServices