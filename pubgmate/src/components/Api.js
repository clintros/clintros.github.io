export const key = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIzNWNkOGQ5MC1mYjMxLTAxMzctZTc5NC0xMWUwYjE4OWQ5OWUiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTc1NzMxMjQ5LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6ImNsaW50b24tcm9zLWdtIn0.IlsqL8SxM75fSRGJW0hagmvXLQH4tz9POHbM3f0Gm74';
export const auth = 
{
method: 'GET',
            withCredentials: true,
            headers: 
            {
                'Authorization': key,
                'Accept': 'application/vnd.api+json'
            }
}