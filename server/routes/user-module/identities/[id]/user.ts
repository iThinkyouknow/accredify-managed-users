export default defineEventHandler((event) => {
    const id = parseInt(event.context?.params?.id ?? '');
    if (id !== 1) throw createError({
        statusCode: 401,
        statusMessage: 'Only id of 1 is allowed'
    });
    return {
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
})