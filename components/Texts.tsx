export const H1 = ({txt, themed}:any) =>{
    return <h1 style={{color: themed ? '#364a5a' : '#364a5a'}}>{txt}</h1>
}

export const P = ({txt, themed}:any) =>{
    return <p style={{color: themed ? '#364a5a' : '#364a5a'}}>{txt}</p>
}