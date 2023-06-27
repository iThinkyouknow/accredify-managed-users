import {z} from 'zod';
import { careerResponseValidator } from '@/types/types';

const careers: Record<number, z.infer<typeof careerResponseValidator>> = {
  1: {
    "data": [
      {
        "id": 1,
        "name": "Account Manager",
        "description": "Manage maintain and grow the sales and relationships with a specific customer or set of accounts. This includes in-depth customer engagement relationship-building and provision of quality solutions and service to address customers' needs efficiently and generate revenue",
        "category": "Sales and Marketing",
        "type": "technical", // or "core"
        "progress": 35 // integer ranging from 0 to 100
      }
    ]
  }, 
  2: {
    "data" : []
  }
}

export default defineEventHandler((event) => {
  const id = parseInt(event.context?.params?.id ?? '');
  if (!careers[id]) throw createError({
      statusCode: 401,
      statusMessage: 'Only id of 1 or 2 is allowed'
    })
  return careers[id];
});
