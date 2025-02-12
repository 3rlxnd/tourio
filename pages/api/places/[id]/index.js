import dbConnect from "@/lib/connect";
import Place from "@/lib/models/Place";

export default async function handler(request, response) {
  await dbConnect()
  const { id } = request.query;

  if (request.method === 'GET') {
    const place = await Place.findById(id)
    if (!place) {
      response.status(404).json({ status: "Not Found" });
      return
    }
    response.status(200).json(place);
    return
  }

  if (request.method === 'PUT') {
    const place = request.body
    const updatedPlace = await Place.findByIdAndUpdate(id, place)
    return response.status(200).json(updatedPlace)
  }

  if (request.method === 'DELETE') {
    const updatedPlace = await Place.findByIdAndDelete(id)
    return response.status(200).json(updatedPlace)
  }
}
