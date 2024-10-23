import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler";
import Track from "./Track.controller"

// Get a track by ID (for audio playback)
export const getTrackById = asyncHandler(async (req, res) => {

    const track = await Track.findById(req.params.id);
    if (!track) {
      return new ApiError(404," track is not find ")
    }

    return res
    .status(200)
    .json( new ApiResponse(200,track,"track is succesfully fetch "))
   


});

