export const H1 = ({txt, themed}:any) =>{
    return <h1 style={{color: themed ? '#005200' : '#404545'}}>{txt}</h1>
}

export const P = ({txt, themed}:any) =>{
    return <p style={{color: themed ? '#005200' : '#404545'}}>{txt}</p>
}