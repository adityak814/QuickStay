import User from "../models/User.js";
import { Webhook } from "svix";

const clerkWebhooks = async (req, res) => {
  try {
    // Create a Svix instance with clerk webhook secret.
    const webhook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    //Getting Headers
    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    //Verifying Headers
    await webhook.verify(JSON.stringify(req.body), headers);

    //Getting data from request body
    const { data, type } = req.body;

    const userData = {
      _id: data.id,
      email: data.email_addresses[0].email_address,
      username: data.first_name + " " + data.last_name,
      image: data.image_url,
    };

    let user = null;
    //Switch case for different events
    switch (type) {
      case "user.created": {
        user = await User.create(userData);
        console.log("Created user", user);
        break;
      }
      case "user.updated": {
        user = await User.findByIdAndUpdate(data.id, userData);
        console.log("Updated user", user);
        break;
      }
      case "user.deleted": {
        user = await User.findByIdAndDelete(data.id);
        console.log("Deleted user", user);
        break;
      }

      default:
        console.log("Invalid type");
        break;
    }

    if (!user) {
      throw new Error("User is null");
    }

    res.json({ success: true, message: "Webhook Received" });
  } catch (error) {
    console.log(error.message, error);
    res.json({ success: false, message: error.message });
  }
};

export default clerkWebhooks;
