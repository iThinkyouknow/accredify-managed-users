import {z} from 'zod';
/**
 * {
  "data": {
    "id": 1,
    "name": "John Smith",
    "email": "john.smith@example.com",
    "profile_picture_url": "https://placehold.co/600x400.png",
    "email_verified_at": "2022-01-01 15:38:33.0 Asia/Singapore (+08:00)",
    "identification_number": "S9****567A",
    "current_organisation": {
      "id": 2,
      "name": "Sample Bank ABC",
      "logo_url": "https://placehold.co/600x400.png",
      "is_personal": false // true if Personal User
    }
  }
}
 */

export const userResponseValidatorData = z.object({
        id: z.number(),
        name: z.string(),
        email: z.string().email(),
        profile_picture_url: z.string().nullish(),
        email_verified_at: z.string(),
        identification_number: z.string(),
        current_organisation: z.object({
            id: z.number(),
            name: z.string(),
            logo_url: z.string().nullish(),
            is_personal: z.boolean()
        }).nullish()
    })

export const userResponseValidator = z.object({
    data: userResponseValidatorData
});

/**
 * {
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
}
 */

export const careerResponseValidatorData = z.object({
        id: z.number(),
        name: z.string(),
        description: z.string(),
        category: z.string(),
        type: z.string(),
        progress: z.number()
    }).array();

export const careerResponseValidator = z.object({
    data: careerResponseValidatorData
});

export const documentsResponseValidatorData = z.object(
    {
        id: z.number(),
        status: z.string(),
        document_name: z.string(),
        issuer_name: z.string(),
        issuer_logo_url: z.string(),
        recipient_name: z.string(),
        received_on: z.string().nullish(),
        expire_at: z.string().nullish(),
        created_at: z.string(),
        updated_at: z.string(),
        archived_at: z.string().nullish(),
        deleted_at: z.string().nullish()
    }
).array()

export const documentsResponseValidator = z.object({
  data: documentsResponseValidatorData,
  links: z.object({
    first: z.string(),
    last: z.string(),
    prev: z.string().nullish(),
    next: z.string().nullish()
  }),
  meta: z.object({
    current_page: z.number(),
    from: z.number(),
    last_page: z.number(),
    links: z.object({
        url: z.string().nullish(),
        label: z.string(),
        active: z.boolean()
    }).array(),
    path: z.string(),
    per_page: z.number(),
    to: z.number(),
    total: z.number()
  })
})