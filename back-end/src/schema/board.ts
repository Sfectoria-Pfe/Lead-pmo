import { z } from "zod";

export const createBoardSchema = z.object({
    name: z.string(),
    projectId: z.string().regex(/^\d+$/), // Accepte les chaînes de caractères contenant uniquement des chiffres
});
