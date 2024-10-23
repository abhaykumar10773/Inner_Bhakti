import mongoose from "mongoose";
import { Program } from "../Models/program.model";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";

const getAllPrograms = asyncHandler(async (req , res) => {

    const programs = await Program.find(); 
    if(!programs){
        return new ApiError(404," all Programs are not find ");
    }

    return res
    .status(200)
    .json( new ApiResponse(200,"all the programs find successfully ")
    )
});

// Get program details by ID (including tracks)
const getProgramById = asyncHandler(async(req, res) => {
      const program = await Program.findById(req.params.id).populate('tracks'); 
      if (!program) {
        return res.status(404).json({ message: 'Program not found' });
      }

      return res
      .status(200)
      .json(new ApiResponse(200,"program tracks by the id ")
    )
   
  });

  export {
    getProgramById,
    getAllPrograms
  }