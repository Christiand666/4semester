## Create file .env with values

```
USERNAME=
PASSWORD=
HOST=
PORT=
DATABASE=

SECRET=
```

## domain.com/register
```json
{
    user: {
        email: string,
        fullname: string,
        password: string,
        phone: string,
        adress: {
            street: string,
            number: string,
            zip: number,
            city: string
        }
    }
}
```

### returns
```json
{ 
    message: string,
    jwt: string // if success
}
```

## domain.com/login
```json
{
    email: string,
    password: string
}
```

### returns
```json
{
    message: string,
    jwt: string // if success
}
```

## domain.com/auth
### only requires header with jwt
```
jwt: string
```

### returns
```json
{
    authed: Boolean,
    isAdmin: Boolean,
    user: {
        _id: string,
        email: string,
        fullname: string,
        password: string,
        phone: string,
        adress: {
            street: string,
            number: string,
            zip: number,
            city: string
        },
        isAdmin: Boolean
    }
}
```