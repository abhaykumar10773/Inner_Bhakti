import { Router } from "express";
import {getAllPrograms,getProgramById} from "../controllers/Program.controllers";
import { getTrackById } from "../controllers/Track.controller";
const router = Router();


router.route("/getAllPrograms").get(getAllPrograms);
router.route("/getProgramById").get(getProgramById);
router.route("/getTrackById").get(getTrackById);

export default router;