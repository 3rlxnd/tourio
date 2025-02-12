import dbConnect from "@/lib/connect";
import Place from "@/lib/models/Place";

export default async function handler(request, response) {
  await dbConnect()

  if (request.method === 'GET') {
    const places = await Place.find()
    return response.status(200).json(places)
  }

  if (request.method === 'POST') {
    const place = request.body
    const newPlace = await Place.create(place)
    return response.status(200).json(newPlace)
  }
}

